import React, { useState, useEffect } from "react";

function ProgressBar() {
  const [progress, setProgress] = useState(0); // To track the progress (0 to 100)
  const [isActive, setIsActive] = useState(false); // To track whether the progress is active
  const [intervalId, setIntervalId] = useState(null); // To store the interval ID for clearing

  // Start/Restart function
  const handleStart = () => {
    if (isActive) {
      // If progress is active, reset the progress to 0
      setProgress(0);
    }
    setIsActive(true);
    const id = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(id); // Stop the progress at 100%
          setIsActive(false);
          return 100;
        }
        return prev + 1;
      });
    }, 100); // Update the progress every 100ms
    setIntervalId(id); // Store the interval ID for clearing later
  };

  // Pause function
  const handlePause = () => {
    clearInterval(intervalId);
    setIsActive(false);
  };

  // Stop function
  const handleStop = () => {
    clearInterval(intervalId);
    setProgress(0);
    setIsActive(false);
  };

  // Handle restart functionality
  const handleRestart = () => {
    setProgress(0);
    setIsActive(false);
    handleStart();
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <div>
        {/* Progress bar */}
        <div
          style={{
            width: "100%",
            backgroundColor: "#e0e0df",
            borderRadius: "10px",
            height: "30px",
            marginBottom: "10px",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              backgroundColor: "#4caf50",
              height: "100%",
              borderRadius: "10px",
            }}
          ></div>
        </div>
        <div>{progress}%</div>
      </div>

      {/* Controls */}
      <div>
        <button onClick={handleStart} disabled={isActive}>
          Start/Restart
        </button>
        <button onClick={handlePause} disabled={!isActive}>
          Pause
        </button>
        <button onClick={handleStop} disabled={progress === 0}>
          Stop
        </button>
      </div>
    </div>
  );
}

export default ProgressBar;
