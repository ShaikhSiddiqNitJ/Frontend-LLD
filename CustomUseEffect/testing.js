import { useState } from "react";
import customUseEffect from "./components/CustomUseEffect";

const Test = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  customUseEffect(() => {
    console.log("Effect triggered:", count);
    return () => {
      console.log("cleanup");
    };
  }, []);

  console.log("rerendered");

  return (
    <>
      <h1>testing component</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increase
      </button>
    </>
  );
};

export default Test;
