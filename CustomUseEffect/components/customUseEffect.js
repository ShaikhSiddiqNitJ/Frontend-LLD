import { useRef } from "react";

const customUseEffect = (cb, depArr) => {
  const firstRender = useRef(true); // Correct naming and initialization
  const prevDepArr = useRef([]); // Holds the previous dependency array

  // Step 1: Handle the first render
  if (firstRender.current) {
    firstRender.current = false; // Update the flag after first render
    const cleanup = cb(); // Call the callback function
    // Return a cleanup function if provided
    return () => {
      if (cleanup && typeof cleanup === "function") {
        cleanup();
      }
    };
  }

  // Step 2: Check if dependencies have changed
  const hasDepsChanged = depArr
    ? JSON.stringify(depArr) !== JSON.stringify(prevDepArr.current)
    : true;

  // Step 3: If dependencies change, execute the callback
  if (hasDepsChanged) {
    const cleanup = cb(); // Call the callback function
    // Return a cleanup function if provided
    if (cleanup && typeof cleanup === "function") {
      cleanup();
    }
  }

  // Step 4: Update the previous dependency array
  prevDepArr.current = depArr || [];
};

export default customUseEffect;
