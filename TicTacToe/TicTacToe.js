import React, { useState } from "react";

// Square Component
const Square = ({ value, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        width: "80px",
        height: "80px",
        fontSize: "24px",
        fontWeight: "bold",
        backgroundColor: "#f0f0f0",
        border: "1px solid #333",
        cursor: value ? "not-allowed" : "pointer",
      }}
    >
      {value}
    </button>
  );
};

// Main Game Component
const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null)); // Board state
  const [isXNext, setIsXNext] = useState(true); // Turn indicator
  const [winner, setWinner] = useState(null); // Winner state

  // Winning combinations
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Check for a winner
  const checkWinner = (currentBoard) => {
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return null;
  };

  // Handle Square Click
  const handleSquareClick = (index) => {
    if (board[index] || winner) return; // Ignore click if square is filled or game is over

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner); // Set the winner
    } else if (!newBoard.includes(null)) {
      setWinner("Draw"); // Game is a draw
    } else {
      setIsXNext(!isXNext); // Switch turns
    }
  };

  // Restart the game
  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  // Render board squares
  const renderSquare = (index) => {
    return (
      <Square
        value={board[index]}
        onClick={() => handleSquareClick(index)}
      />
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>Tic Tac Toe</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 80px)",
          gridGap: "5px",
        }}
      >
        {Array.from({ length: 9 }, (_, index) => renderSquare(index))}
      </div>
      <div style={{ marginTop: "20px", fontSize: "18px" }}>
        {winner
          ? winner === "Draw"
            ? "It's a Draw!"
            : `Winner: ${winner}`
          : `Next Player: ${isXNext ? "X" : "O"}`}
      </div>
      <button
        onClick={restartGame}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Restart Game
      </button>
    </div>
  );
};

export default TicTacToe;
