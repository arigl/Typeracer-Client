import React, { useState, useEffect } from "react";
import socket from "../socketConfig";
import { useNavigate } from "react-router-dom";

const JoinGame = (props) => {
  const [userInput, setUserInput] = useState({ gameID: "", nickName: "" });
  const navigate = useNavigate();

  const onChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(userInput);
    socket.emit("join-game", userInput);
  };

  useEffect(() => {
    if (props.gameState._id !== "") {
      navigate(`/game/${props.gameState._id}`);
    }
  }, [props.gameState._id]);

  return (
    <div className="row">
      <div className="col-sm"></div>
      <div className="col-sm-8">
        <h1 className="text-center"> Join Game </h1>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="gameID">Enter Game ID</label>
            <input
              type="text"
              name="gameID"
              value={userInput.gameID}
              onChange={onChange}
              placeholder="Enter Game ID"
              className="form-control"
            />
            <label htmlFor="nickName">Enter Nick Name</label>
            <input
              type="text"
              name="nickName"
              value={userInput.nickName}
              onChange={onChange}
              placeholder="Enter Nick Name"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <div className="col-sm"></div>
    </div>
  );
};

export default JoinGame;
