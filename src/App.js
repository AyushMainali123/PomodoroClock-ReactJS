import React, { useState, useEffect } from "react";
import "./App.css";
import BreakLabel from "./Components/BreakLabel";
import SessionLabel from "./Components/SessionLabel";
import Clock from "./Components/Clock";
import Beep from "./Components/Beep";

const App = () => {
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [isTurnedOn, setIsTurnedOn] = useState(false);
  const [isSessionStarted, setIsSessionStarted] = useState(true);
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60);

  useEffect(() => {
    isSessionStarted
      ? setTimeLeft(sessionLength * 60)
      : setTimeLeft(breakLength * 60);
  }, [sessionLength, breakLength, isSessionStarted]);

  useEffect(() => {
    if (isTurnedOn) {
      let id = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime) return prevTime - 1;
          setIsSessionStarted((prev) => !prev);
          return breakLength * 60;
        });
      }, 1000);
      return () => clearInterval(id);
    }
  }, [isTurnedOn, breakLength]);

  return (
    <div className="App">
      <h1>Pomodromo Clock</h1>
      <BreakLabel
        breakLength={breakLength}
        setBreakLength={setBreakLength}
        isTurnedOn={isTurnedOn}
      />
      <SessionLabel
        sessionLength={sessionLength}
        setSessionLength={setSessionLength}
        isTurnedOn={isTurnedOn}
      />

      <Clock
        isTurnedOn={isTurnedOn}
        setIsTurnedOn={setIsTurnedOn}
        isSessionStarted={isSessionStarted}
        setIsSessionStarted={setIsSessionStarted}
        sessionLength={sessionLength}
        setSessionLength={setSessionLength}
        breakLength={breakLength}
        setBreakLength={setBreakLength}
        timeLeft={timeLeft}
        setTimeLeft={setTimeLeft}
      />
      <Beep timeLeft={timeLeft} />
    </div>
  );
};
export default App;
