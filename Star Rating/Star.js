import React from "react";

// Star component with proper event handling
const Star = ({ filled, onClick, onMouseEnter, onMouseLeave, index }) => {
  return (
    <span
      role="button"
      aria-label={`Rate ${index} star`}
      tabIndex={0}
      onClick={() => onClick(index)}  // Pass the index, not the event
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={onMouseLeave}
      style={{
        cursor: "pointer",
        fontSize: "40px",
        color: filled ? "gold" : "gray",
        transition: "color 0.3s ease",
        outline: "none",
      }}
    >
      ★
    </span>
  );
};

export default Star