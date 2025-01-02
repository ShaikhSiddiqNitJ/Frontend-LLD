import React, { useState, useEffect } from "react";

const gridSize = 15;

const SnakeGame = () => {
  const [snake, setSnake] = useState([
    { x: 7, y: 7 },
    { x: 6, y: 7 },
    { x: 5, y: 7 },
  ]);
  const [direction, setDirection] = useState({ x: 1, y: 0 }); // Moving right initially
  const [apple, setApple] = useState(generateRandomPosition(snake));
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Generate a random position for the apple
  function generateRandomPosition(snake) {
    let isValidPosition = false;
    let position = null;

    while (!isValidPosition) {
      position = {
        x: Math.floor(Math.random() * gridSize),
        y: Math.floor(Math.random() * gridSize),
      };

      // Check if the position collides with the snake
      isValidPosition = !snake.some(
        (segment) => segment.x === position.x && segment.y === position.y
      );
    }

    return position;
  }

  // Move the snake on each tick
  const moveSnake = () => {
    if (gameOver) return;

    const newSnake = [...snake];
    const head = {
      x: newSnake[0].x + direction.x,
      y: newSnake[0].y + direction.y,
    };

    // Check for collisions with walls
    if (head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize) {
      setGameOver(true);
      return;
    }

    // Check for collisions with itself
    if (newSnake.some((segment) => segment.x === head.x && segment.y === head.y)) {
      setGameOver(true);
      return;
    }

    // Add the new head to the snake
    newSnake.unshift(head);

    // Check if the snake eats the apple
    if (head.x === apple.x && head.y === apple.y) {
      setScore(score + 1);
      setApple(generateRandomPosition(newSnake));
    } else {
      // Remove the tail if the snake hasn't grown
      newSnake.pop();
    }

    setSnake(newSnake);
  };

  // Handle keyboard input for direction
  const handleKeyDown = (event) => {
    switch (event.key) {
      case "ArrowUp":
        if (direction.y === 0) setDirection({ x: 0, y: -1 });
        break;
      case "ArrowDown":
        if (direction.y === 0) setDirection({ x: 0, y: 1 });
        break;
      case "ArrowLeft":
        if (direction.x === 0) setDirection({ x: -1, y: 0 });
        break;
      case "ArrowRight":
        if (direction.x === 0) setDirection({ x: 1, y: 0 });
        break;
      default:
        break;
    }
  };

  // Listen for keyboard input
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction]);

  // Game loop
  useEffect(() => {
    const interval = setInterval(moveSnake, 200); // Move the snake every 200ms
    return () => clearInterval(interval);
  }, [snake, direction]);

  return (
    <div>
      <h1>Snake Game</h1>
      <div
        style={{
          display: "grid",
          gridTemplateRows: `repeat(${gridSize}, 20px)`,
          gridTemplateColumns: `repeat(${gridSize}, 20px)`,
          gap: "1px",
          backgroundColor: "#ddd",
          width: "max-content",
          margin: "auto",
        }}
      >
        {Array.from({ length: gridSize * gridSize }).map((_, index) => {
          const x = index % gridSize;
          const y = Math.floor(index / gridSize);

          const isSnakeSegment = snake.some(
            (segment) => segment.x === x && segment.y === y
          );
          const isApple = apple.x === x && apple.y === y;

          return (
            <div
              key={index}
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: isSnakeSegment
                  ? "green"
                  : isApple
                  ? "red"
                  : "white",
              }}
            />
          );
        })}
      </div>
      <h2>Score: {score}</h2>
      {gameOver && <h2>Game Over! Refresh to restart.</h2>}
    </div>
  );
};

export default SnakeGame;
