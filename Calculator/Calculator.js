import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState(""); // Stores current input
  const [result, setResult] = useState(""); // Stores result of calculation

  // Handles button clicks to append to input
  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  // Handles clearing the input
  const handleClear = () => {
    setInput("");
    setResult("");
  };

  // Evaluates the expression and sets the result
  const handleEvaluate = () => {
    try {
      setResult(eval(input)); // Using eval to evaluate the input expression
      setInput(""); // Clear input after evaluating
    } catch (error) {
      setResult("Error");
    }
  };

  // Inline styles for the calculator
  const styles = {
    calculator: {
      width: "260px",
      margin: "50px auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "10px",
      backgroundColor: "#f9f9f9",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
    display: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      marginBottom: "20px",
    },
    input: {
      fontSize: "2rem",
      margin: "5px",
      minHeight: "40px",
    },
    result: {
      fontSize: "2rem",
      margin: "5px",
      minHeight: "40px",
    },
    buttons: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gridGap: "10px",
    },
    button: {
      padding: "20px",
      fontSize: "1.5rem",
      cursor: "pointer",
      border: "none",
      borderRadius: "5px",
      backgroundColor: "#ddd",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#ccc",
    },
    buttonActive: {
      backgroundColor: "#bbb",
    },
    buttonFocus: {
      outline: "none",
    },
  };

  return (
    <div style={styles.calculator}>
      <div style={styles.display}>
        <div style={styles.input}>{input}</div>
        <div style={styles.result}>{result}</div>
      </div>
      <div style={styles.buttons}>
        <button
          style={styles.button}
          onClick={() => handleClick("1")}
        >
          1
        </button>
        <button
          style={styles.button}
          onClick={() => handleClick("2")}
        >
          2
        </button>
        <button
          style={styles.button}
          onClick={() => handleClick("3")}
        >
          3
        </button>
        <button
          style={styles.button}
          onClick={() => handleClick("+")}
        >
          +
        </button>

        <button
          style={styles.button}
          onClick={() => handleClick("4")}
        >
          4
        </button>
        <button
          style={styles.button}
          onClick={() => handleClick("5")}
        >
          5
        </button>
        <button
          style={styles.button}
          onClick={() => handleClick("6")}
        >
          6
        </button>
        <button
          style={styles.button}
          onClick={() => handleClick("-")}
        >
          -
        </button>

        <button
          style={styles.button}
          onClick={() => handleClick("7")}
        >
          7
        </button>
        <button
          style={styles.button}
          onClick={() => handleClick("8")}
        >
          8
        </button>
        <button
          style={styles.button}
          onClick={() => handleClick("9")}
        >
          9
        </button>
        <button
          style={styles.button}
          onClick={() => handleClick("*")}
        >
          *
        </button>

        <button
          style={styles.button}
          onClick={() => handleClick("0")}
        >
          0
        </button>
        <button
          style={styles.button}
          onClick={() => handleClick(".")}
        >
          .
        </button>
        <button
          style={styles.button}
          onClick={handleEvaluate}
        >
          =
        </button>
        <button
          style={styles.button}
          onClick={() => handleClick("/")}
        >
          /
        </button>

        <button
          style={styles.button}
          onClick={handleClear}
        >
          C
        </button>
      </div>
    </div>
  );
}

export default Calculator;
