import React, { useState } from "react";
import Star  from "./Star";
// StarRating component with fixed event handling
const StarRating = ({ maxRating = 5, initialRating = 0, onRate }) => {
  const [rating, setRating] = useState(initialRating);
  const [hoveredRating, setHoveredRating] = useState(null);

  // Handle the rating on click
  const handleRatingClick = (newRating) => {
    setRating(newRating);
    if (onRate) onRate(newRating); // Pass the rating to the parent component
  };

  // Handle hover effect
  const handleMouseEnter = (index) => {
    setHoveredRating(index);
  };

  const handleMouseLeave = () => {
    setHoveredRating(null);
  };

  // Render stars
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
      const isFilled = i <= (hoveredRating || rating);
      stars.push(
        <Star
          key={i}
          index={i}
          filled={isFilled}
          onClick={handleRatingClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      );
    }
    return stars;
  };

  return (
    <div style={{display:'flex',
        alignItems:" center",
        flexDirection:" column",
        justifyContent:" center",
        border:" 2px solid black",
        padding:" 40px",
        width:" 400px",
        position:" absolute",
        left:" 30%",
        top:" 40%",
        pt:" 60px",
        boxShadow:'0px 4px 8px rgba(0, 0, 0, 0.2)',
    }}>
      <div style={{ display: "flex" }}>{renderStars()}</div>
      <p style={{ fontSize: "18px" }}>Your Rating: {rating} / {maxRating} stars</p>
    </div>
  );
};

export default StarRating;
