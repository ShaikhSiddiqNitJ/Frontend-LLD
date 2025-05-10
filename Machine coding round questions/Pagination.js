import React, { useState } from "react";

const Test = () => {
  const [count] = useState(Array.from({ length: 50 }, (_, i) => i + 1));
  const [currentPage, setCurrentPage] = useState(0);

  const pageSize = 10;
  const totalButton = Math.ceil(count.length / pageSize);

  const handleClickButton = (index) => {
    setCurrentPage(index);
  };

  const startIndex = currentPage * pageSize;
  const endIndex = startIndex + pageSize;

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {count.slice(startIndex, endIndex).map((item) => (
          <div
            key={item}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "200px",
              width: "200px",
              background: "lightgrey",
              fontSize: "40px",
            }}
          >
            {item}
          </div>
        ))}
      </div>

      <div
        style={{
          position: "fixed",
          bottom: "20px",
          left: "60px",
          display: "flex",
          gap: "20px",
        }}
      >
        {Array.from({ length: totalButton }).map((_, index) => (
          <button
            key={index}
            style={{
              height: "40px",
              width: "40px",
              background: currentPage === index ? "#222" : "grey",
              color: "white",
              cursor: "pointer",
              opacity: currentPage === index ? 0.6 : 1,
            }}
            disabled={index === currentPage && index === totalButton - 1}
            onClick={() => handleClickButton(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default Test;
