import React, { useState, useEffect } from "react";
import socket from "../socketConfig";
import { useNavigate } from "react-router-dom";

const CreateGame = (props) => {
  const [nickName, setNickName] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    setNickName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    socket.emit("create-game", nickName);
    console.log(props.gameState);
    //navigate(`/game/${props.gameState._id}`);
  };

  useEffect(() => {
    if (props.gameState._id !== "") {
      console.log("use effect");
      navigate(`/game/${props.gameState._id}`);
    }
  }, [props.gameState._id]);

  return (
    <div className="row">
      <div className="col-sm"></div>
      <div className="col-sm-8">
        <h1 className="text-center"> Create Game </h1>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="nickName">Enter Nick Name</label>
            <input
              type="text"
              name="nickName"
              value={nickName}
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

export default CreateGame;
