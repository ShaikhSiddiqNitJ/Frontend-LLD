import React, { useEffect, useState } from 'react';

const MAX = 100;
const MIN = 0;

export const ProgessBar = ({ value = 0, onComplete = () => {} }) => { // Fix destructuring here
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    // Ensure the value stays within bounds and update the percent
    const clampedValue = Math.min(Math.max(value, MIN), MAX);
    setPercent(clampedValue);

    // Trigger onComplete if value reaches MAX
    if (clampedValue >= MAX) {
      onComplete();
    }
  }, [value, onComplete]); // Include onComplete in dependency array

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center', // Centers horizontally
          alignItems: 'center',    // Centers vertically
          height: '100vh',         // Full viewport height
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center', // Centers horizontally
            alignItems: 'center',
            height: '40px',
            width: '600px',
            border: '2px solid black',
            borderRadius: '20px',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* Filled bar */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              height: '100%',
              width: `${percent}%`,
              backgroundColor: 'blue',
              transition: 'width 0.2s ease',
            }}
          ></div>

          {/* Display progress percentage */}
          <div
            style={{
              position: 'absolute',
              zIndex: 1,
              width: '100%',
              textAlign: 'center',
              color: percent<49?'black':'white',
              fontWeight: 'bold',
            }}
          >
            {percent.toFixed()}%
          </div>
        </div>
      </div>
    </div>
  );
};
