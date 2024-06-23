import React, { useState, useEffect } from 'react';
import Square from './Square';

const Board = ({ players, resetGame }) => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    setWinner(calculateWinner(squares));
  }, [squares]);

  const handleClick = (index) => {
    if (winner || squares[index]) return;

    const newSquares = [...squares];
    newSquares[index] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (index) => (
    <Square value={squares[index]} onClick={() => handleClick(index)} />
  );

  let status;
  if (winner) {
    const winningPlayer = winner === 'X' ? players.player1 : players.player2;
    const statusClass = winner === 'X' ? 'status player1' : 'status player2';
    status = <span className={statusClass}>{winningPlayer} Wins!</span>;
  } else {
    const currentPlayer = xIsNext ? players.player1 : players.player2;
    const statusClass = xIsNext ? 'status player1' : 'status player2';
    status = <span className={statusClass}>It is {currentPlayer}'s turn</span>;
  }

  return (
    <div>
      <div className="status-container">{status}</div>
      <div className="board">
        {squares.map((square, index) => renderSquare(index))}
      </div>
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

export default Board;
