import React from "react";
import { useNavigate } from "react-router-dom";
//import { useHistory } from "react-router";
import history from "../history";

const GameMenu = (props) => {
  let navigate = useNavigate();
  //let history = useHistory();
  return (
    <div className="text-center">
      <h1>Welcome to Type Racer Clone</h1>
      <button
        type="button"
        onClick={() => navigate("/game/create")}
        //onClick={() => history.push("/game/create")}
        className="btn btn-primary btn-lg mr-3"
      >
        Create Game
      </button>
      <button
        type="button"
        onClick={() => navigate("/game/join")}
        className="btn btn-primary btn-lg"
      >
        Join Game
      </button>
    </div>
  );
};

export default GameMenu;
