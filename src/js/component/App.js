import React, { useState } from 'react';
import Board from './Board';
import PlayerSelection from './PlayerSelection';

const App = () => {
  const [players, setPlayers] = useState({ player1: "", player2: "" });
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = (player1, player2) => {
    setPlayers({ player1, player2 });
    setGameStarted(true);
  };

  const resetGame = () => {
    setPlayers({ player1: "", player2: "" });
    setGameStarted(false);
  };

  return (
    <div className="app">
      <h1>Tic-Tac-Takedown</h1>
      {gameStarted ? (
        <>
          <Board players={players} resetGame={resetGame} />
          <button onClick={resetGame}>Start Over</button>
        </>
      ) : (
        <PlayerSelection startGame={startGame} />
      )}
    </div>
  );
};

export default App;
