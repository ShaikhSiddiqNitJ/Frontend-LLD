import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [clickedItemId, setClickedItemId] = useState(0);
  const [sandwichClicked, setSandwichClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 460);

  const updateIsMobile = () => {
    setIsMobile(window.innerWidth < 460);
  };

  useEffect(() => {
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);
  console.log("isMobile", isMobile);

  const data = [
    { id: "option01", title: "Option 01" },
    { id: "option02", title: "Option 02" },
    { id: "option03", title: "Option 03" },
    { id: "option04", title: "Option 04" },
    { id: "option05", title: "Option 05" },
  ];

  const handleClick = (clickedId) => {
    setClickedItemId(clickedId);
  };

  const handleSandwichClick = (e) => {
    e.stopPropagation();
    setSandwichClicked(!sandwichClicked);
  };

  const handleOptionClick = (e, clickedId) => {
    e.stopPropagation();
    setClickedItemId(clickedId);
    setSandwichClicked(false);
  };

  const getSandwichOptions = () => {
    return data.map((item) => (
      <div
        key={item.id}
        id={item.id}
        style={{
          borderBottom: "2px solid lightblue",
          padding: "10px",
          backgroundColor:
            item.id === clickedItemId ? "lightgrey" : "white",
          cursor: "pointer",
        }}
        onClick={(e) => handleOptionClick(e, item.id)}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "whitesmoke")}
        onMouseLeave={(e) =>
          (e.target.style.backgroundColor =
            item.id === clickedItemId ? "lightgrey" : "white")
        }
      >
        {item.title}
      </div>
    ));
  };

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#fbfbfb",
        borderBottom: "4px solid lightblue",
        padding: "10px",
        display: "flex",
        flexDirection: "flex-start",
        height: "auto",
      }}
    >
      <nav style={{ display: "flex", flexDirection: "row" }}>
        {isMobile ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              cursor: "pointer",
              marginTop: "auto",
              marginBottom: "auto",
            }}
            onClick={(e) => handleSandwichClick(e)}
          >
            <div
              style={{
                height: "4px",
                width: "40px",
                backgroundColor: "lightblue",
                margin: "4px",
                display: "flex",
                flexDirection: "column",
              }}
            ></div>
            <div
              style={{
                height: "4px",
                width: "40px",
                backgroundColor: "lightblue",
                margin: "4px",
                display: "flex",
                flexDirection: "column",
              }}
            ></div>
            <div
              style={{
                height: "4px",
                width: "40px",
                backgroundColor: "lightblue",
                margin: "4px",
                display: "flex",
                flexDirection: "column",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                marginTop: "7vh",
              }}
            >
              {sandwichClicked && getSandwichOptions()}
            </div>
          </div>
        ) : (
          data.map((item) => (
            <div
              key={item.id}
              id={item.id}
              style={{
                padding: "5px",
                cursor: "pointer",
                margin: "auto 5px auto 25px",
                borderBottom:
                  clickedItemId === item.id ? "5px solid black" : "",
              }}
              onClick={() => handleClick(item.id)}
            >
              {item.title}
            </div>
          ))
        )}
      </nav>
    </div>
  );
};

export default Navbar;
