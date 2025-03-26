import React, { useState } from "react";

function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  // Start/Restart function
  const handleStart = () => {
    if (isActive) setProgress(0);
    setIsActive(true);
    const id = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(id);
          setIsActive(false);
          return 100;
        }
        return prev + 1;
      });
    }, 100);
    setIntervalId(id);
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

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1e1e2f",
      }}
    >
      <div
        style={{
          width: "400px",
          background: "#2a2a3a",
          padding: "20px",
          borderRadius: "12px",
          textAlign: "center",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
        }}
      >
        {/* Progress bar */}
        <div
          style={{
            width: "100%",
            backgroundColor: "#3a3a4a",
            borderRadius: "10px",
            height: "30px",
            marginBottom: "10px",
            overflow: "hidden",
            boxShadow: "inset 0 0 5px rgba(255,255,255,0.2)",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, #6a11cb, #2575fc)",
              height: "100%",
              borderRadius: "10px",
              transition: "width 0.1s ease-in-out",
            }}
          ></div>
        </div>

        <div style={{ fontSize: "18px", fontWeight: "bold", color: "#fff" }}>
          {progress}%
        </div>

        {/* Controls */}
        <div style={{ marginTop: "15px" }}>
          <button
            onClick={handleStart}
            disabled={isActive}
            style={{
              padding: "10px 20px",
              margin: "5px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: isActive ? "#666" : "#4caf50",
              color: "white",
              cursor: isActive ? "not-allowed" : "pointer",
              fontWeight: "bold",
              transition: "0.3s",
            }}
          >
            Start/Restart
          </button>
          <button
            onClick={handlePause}
            disabled={!isActive}
            style={{
              padding: "10px 20px",
              margin: "5px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: !isActive ? "#666" : "#ff9800",
              color: "white",
              cursor: !isActive ? "not-allowed" : "pointer",
              fontWeight: "bold",
              transition: "0.3s",
            }}
          >
            Pause
          </button>
          <button
            onClick={handleStop}
            disabled={progress === 0}
            style={{
              padding: "10px 20px",
              margin: "5px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: progress === 0 ? "#666" : "#f44336",
              color: "white",
              cursor: progress === 0 ? "not-allowed" : "pointer",
              fontWeight: "bold",
              transition: "0.3s",
            }}
          >
            Stop
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
