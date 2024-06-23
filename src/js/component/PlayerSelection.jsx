import React, { useState } from 'react';

const PlayerSelection = ({ startGame }) => {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    startGame(player1, player2);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter Player Names and Select Symbol</h2>
      <div className="players-container">
        <div className="player-box">
          <input
            type="text"
            placeholder="Player 1"
            value={player1}
            onChange={(e) => setPlayer1(e.target.value)}
          />
          <div className="symbol">X</div>
        </div>
        <div className="player-box">
          <input
            type="text"
            placeholder="Player 2"
            value={player2}
            onChange={(e) => setPlayer2(e.target.value)}
          />
          <div className="symbol">O</div>
        </div>
      </div>
      <button type="submit">Start Game</button>
    </form>
  );
};

export default PlayerSelection;
