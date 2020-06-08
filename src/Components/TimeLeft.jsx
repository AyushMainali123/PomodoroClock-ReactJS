import React from "react";

const TimeLeft = ({ minute, second }) => {
  const minuteToDisplay = minute < 10 ? `0${minute}` : `${minute}`;
  const secondToDisplay = second < 10 ? `0${second}` : `${second}`;
  const className = minute < 1 ? 'danger' : ''
  return (
    <div id="time-left" className={className}>
      <span className="mm">{minuteToDisplay}</span>:
      <span className="ss">{secondToDisplay}</span>
    </div>
  );
};

export default TimeLeft;
