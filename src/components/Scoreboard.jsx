import React from "react";

const getScoreBoard = (players) => {
  const scoreBoard = players.filter((player) => player.WPM !== -1);
  return scoreBoard.sort((a, b) =>
    a.WPM > b.WPM ? -1 : b.WPM > a.WPM ? 1 : 0
  );
};

const Scoreboard = ({ players }) => {
  const scoreBoard = getScoreBoard(players);
  if (scoreBoard.length === 0) {
    return null;
  }
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">User</th>
          <th scope="col">WPM</th>
        </tr>
      </thead>
      <tbody>
        {scoreBoard.map((player, index) => {
          return (
            <tr>
              <th scope="row">{index + 1}</th>
              <tb>{player.nickName}</tb>
              <tb>{player.WPM}</tb>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Scoreboard;
