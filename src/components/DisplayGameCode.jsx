import React, { useRef, useState } from "react";

const DisplayGameCode = ({ gameID }) => {
  const [copySuccess, setCopySuccess] = useState(false);
  const textInputRef = useRef(null);

  const copyToClipboard = (e) => {
    if (!textInputRef.current) return;

    navigator.clipboard
      .writeText(textInputRef.current.value)
      .then(() => {
        setCopySuccess(true);
      })
      .catch((error) => {
        console.error("Error copying text to clipboard:", error);
        setCopySuccess(false);
      });
  };

  return (
    <div className="row my-3 text-center">
      <div className="col-sm"></div>
      <div className="col-sm-8">
        <h4>Send this Code to your friends for them to join</h4>
        <div className="input-group mb-3">
          <input
            type="text"
            ref={textInputRef}
            value={gameID}
            readOnly
            className="form-control"
          ></input>
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              onClick={copyToClipboard}
              type="button"
            >
              Copy Game Code
            </button>
          </div>
          {copySuccess ? (
            <div className="alert alert-success" role="alert">
              Successfully Copied Game Code{" "}
            </div>
          ) : null}
        </div>
      </div>
      <div className="col-sm"></div>
    </div>
  );
};

export default DisplayGameCode;
