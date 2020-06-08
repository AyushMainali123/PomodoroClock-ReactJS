import React from "react";
import TimeLeft from "./TimeLeft";

const Clock = ({
  setIsTurnedOn,
  isSessionStarted,
  setIsSessionStarted,
  setBreakLength,
  sessionLength,
  setSessionLength,
  timeLeft,
  setTimeLeft,
}) => {
  let minute = Math.floor(timeLeft / 60);
  let second = timeLeft % 60;



  const handleReset = () => {
    setIsTurnedOn(false);
    setSessionLength(25);
    setIsSessionStarted(true);
    setBreakLength(5);
    setTimeLeft(sessionLength * 60);
  };

  const handlestartStop = () => {
    setIsTurnedOn((prev) => !prev);
  };

  return (
    <div className="Clock" id="clock">
      <div id="timer-label">{isSessionStarted ? "Session" : "Break"}</div>
      <TimeLeft minute={minute} second={second} />
      <div>
        <div id="start_stop" onClick={handlestartStop}>
          <i className="fas fa-play"></i>
          <i className="fas fa-pause"></i>
        </div>
        <div id="reset" onClick={handleReset}>
          <i className="fas fa-sync"></i>
        </div>
      </div>
    </div>
  );
};

export default Clock;
