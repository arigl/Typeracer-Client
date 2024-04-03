import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import history from "./history";
import GameMenu from "./components/GameMenu";
import CreateGame from "./components/CreateGame";
import JoinGame from "./components/JoinGame";
import socket from "./socketConfig";
import TypeRacer from "./components/TypeRacer";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [gameState, setGameState] = useState({
    _id: "",
    isOpen: false,
    players: [],
    words: [],
  });

  useEffect(() => {
    socket.on("updateGame", (game) => {
      console.log(game);
      setGameState(game);
    });
    return () => {
      socket.removeAllListeners();
    };
  }, []);

  // //const navigate = useNavigate();
  // const navigate = useNavigate();
  useEffect(() => {
    console.log(`/game/${gameState._id}`);
  }, [gameState._id]);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<GameMenu />} />
        <Route
          path="/game/create"
          element={<CreateGame gameState={gameState} />}
        />
        <Route path="/game/join" element={<JoinGame gameState={gameState} />} />
        {/* <Route
            path={`/game/${gameState._id}`}
            render={(props) => <TypeRacer {...props} gameState={gameState} />}
          /> */}
        <Route
          path={`/game/${gameState._id}`}
          element={<TypeRacer gameState={gameState} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
