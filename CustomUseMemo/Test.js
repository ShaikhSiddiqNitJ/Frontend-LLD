import { useState } from "react";
import useCustomMemo from "./components/useCustomMemo";
const Test = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const timetakingFunc = () => {
    console.log("it taking 4hr");
    return count * count;
  };

  const customfunc = useCustomMemo(timetakingFunc, [count]);
  return (
    <>
      <h1>testing customMemo:{count}</h1>
      <h1>testing customMemo:{count2}</h1>

      <h1> square of current:{customfunc}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {" "}
        increase1{" "}
      </button>
      <button
        onClick={() => {
          setCount2(count2 + 1);
        }}
      >
        {" "}
        increase2{" "}
      </button>
    </>
  );
};
export default Test;
