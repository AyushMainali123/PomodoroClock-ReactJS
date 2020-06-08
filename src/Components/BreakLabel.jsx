import React from 'react'
import Increment from './Increment'
import Decrement from './Decrement'

const BreakLabel = ({ breakLength, setBreakLength, isTurnedOn }) => {
  const handleValue = (value) => {
    if (!isTurnedOn) setBreakLength(value);
  };

  return (
    <div id="break-label" className="label">
      <div className="break-string">Break Length</div>
      <div>
        <div id="break-increment">
          <Increment handleValue={handleValue} value={breakLength} />
        </div>
        <div id="break-length">{breakLength}</div>
        <div id="break-decrement">
          <Decrement handleValue={handleValue} value={breakLength} />
        </div>
      </div>
    </div>
  );
};

export default BreakLabel
