import React, { useState } from "react";

const Accordion = ({ items, allowMultiple = false }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleToggle = (index) => {
    if (allowMultiple) {
      if (openIndexes.includes(index)) {
        setOpenIndexes(openIndexes.filter((i) => i !== index));
      } else {
        setOpenIndexes([...openIndexes, index]);
      }
    } else {
      setOpenIndexes(openIndexes.includes(index) ? [] : [index]);
    }
  };

  return (
    <div style={{ width: "400px", margin: "20px auto", fontFamily: "Arial, sans-serif" }}>
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            marginBottom: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            overflow: "hidden",
            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div
            onClick={() => handleToggle(index)}
            style={{
              padding: "15px",
              backgroundColor: "#f7f7f7",
              cursor: "pointer",
              fontWeight: "bold",
              borderBottom: openIndexes.includes(index) ? "1px solid #ddd" : "none",
            }}
          >
            {item.title}
          </div>
          <div
            style={{
              height: openIndexes.includes(index) ? "auto" : "0",
              padding: openIndexes.includes(index) ? "15px" : "0 15px",
              backgroundColor: "#fff",
              overflow: "hidden",
              transition: "all 0.3s ease",
            }}
          >
            {openIndexes.includes(index) && <p>{item.content}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion