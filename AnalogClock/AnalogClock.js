import React, { useState, useEffect } from "react";

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(timerId);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  // Calculate rotation for the clock hands
  const hourDeg = (hours % 12) * 30 + (minutes / 60) * 30; // 30° per hour, adjust for minutes
  const minDeg = minutes * 6 + (seconds / 60) * 6; // 6° per minute, adjust for seconds
  const secDeg = seconds * 6; // 6° per second

  return (
    <div style={styles.clock}>
      <div
        style={{
          ...styles.hand,
          ...styles.hourHand,
          transform: `rotateZ(${hourDeg}deg)`
        }}
      />
      <div
        style={{
          ...styles.hand,
          ...styles.minHand,
          transform: `rotateZ(${minDeg}deg)`
        }}
      />
      <div
        style={{
          ...styles.hand,
          ...styles.secHand,
          transform: `rotateZ(${secDeg}deg)`
        }}
      />
      <span style={styles.twelve}>12</span>
      <span style={styles.one}>1</span>
      <span style={styles.two}>2</span>
      <span style={styles.three}>3</span>
      <span style={styles.four}>4</span>
      <span style={styles.five}>5</span>
      <span style={styles.six}>6</span>
      <span style={styles.seven}>7</span>
      <span style={styles.eight}>8</span>
      <span style={styles.nine}>9</span>
      <span style={styles.ten}>10</span>
      <span style={styles.eleven}>11</span>
    </div>
  );
};

const styles = {
  clock: {
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: "0 2px 30px rgba(0, 0, 0, 0.2)",
    fontSize: "24px",
    color: "#444",
    textAlign: "center",
    fontFamily: "'Source Sans Pro', sans-serif"
  },
  hand: {
    position: "absolute",
    transformOrigin: "bottom",
  },
  hourHand: {
    width: "6px",
    height: "60px",
    background: "#222",
    top: "30%",
    left: "49%",
  },
  minHand: {
    width: "4px",
    height: "80px",
    background: "#444",
    top: "22.5%",
    left: "49%",
  },
  secHand: {
    width: "2px",
    height: "118px",
    background: "red",
    top: "10.5%",
    left: "50%",
  },
  twelve: {
    position: "absolute",
    top: "10px",
    left: "46%",
    fontWeight: "700"
  },
  one: {
    position: "absolute",
    top: "10%",
    right: "26%",
    fontWeight: "700"
  },
  eleven: {
    position: "absolute",
    top: "10%",
    left: "26%",
    fontWeight: "700"
  },
  two: {
    position: "absolute",
    top: "25%",
    right: "10%",
    fontWeight: "700"
  },
  three: {
    position: "absolute",
    right: "10px",
    top: "46%",
    fontWeight: "700"
  },
  four: {
    position: "absolute",
    right: "30px",
    top: "67%",
    fontWeight: "700"
  },
  five: {
    position: "absolute",
    right: "78px",
    top: "80%",
    fontWeight: "700"
  },
  six: {
    position: "absolute",
    bottom: "10px",
    left: "50%",
    fontWeight: "700"
  },
  seven: {
    position: "absolute",
    left: "80px",
    top: "82%",
    fontWeight: "700"
  },
  eight: {
    position: "absolute",
    left: "30px",
    top: "67%",
    fontWeight: "700"
  },
  nine: {
    position: "absolute",
    left: "10px",
    top: "46%",
    fontWeight: "700"
  },
  ten: {
    position: "absolute",
    top: "25%",
    left: "10%",
    fontWeight: "700"
  }
};

export default AnalogClock;
