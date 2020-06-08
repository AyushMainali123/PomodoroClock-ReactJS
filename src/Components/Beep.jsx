import React, { useRef, useEffect } from "react";

const Beep = ({ timeLeft }) => {
  const beepRef = useRef(null);
  useEffect(() => {
    if (timeLeft === 0) {
      beepRef.current.play();
    }
  }, [timeLeft]);
  return (
    <audio id="beep" preload="auto" src="https://goo.gl/65cBl1" ref={beepRef} />
  );
};

export default Beep;
