import React from "react";
import Increment from "./Increment";
import Decrement from "./Decrement";

const SessionLabel = ({ sessionLength, setSessionLength, isTurnedOn }) => {
  const handleValue = (value) => {
    if (!isTurnedOn) setSessionLength(value);
  };

  return (
    <div id="session-label" className="label">
      <div className="session-string">Session Length</div>
      <div>
        <div id="session-increment">
          <Increment handleValue={handleValue} value={sessionLength} />
        </div>
        <div id="session-length">{sessionLength}</div>
        <div id="session-decrement">
          <Decrement handleValue={handleValue} value={sessionLength} />
        </div>
      </div>
    </div>
  );
};

export default SessionLabel;
