import React, { useEffect, useState } from "react";

const Test = () => {
  const [count, setCount] = useState(10);
  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      window.document.body.offsetHeight
    ) {
      console.log("11");
      setCount(count + 10);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [count]);
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {new Array(count).fill(" ").map((item, index) => {
        return (
          <div
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
            {index}
          </div>
        );
      })}
    </div>
  );
};

export default Test;

