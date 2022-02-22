import React from "react";
import { time } from "./time";

export function App() {
  const [{ timeLeft, state }, setTime] = React.useState(time());

  const updateTimeLeft = () => {
    const interval = setInterval(() => {
      setTime(time());
    }, 1);
    return () => clearInterval(interval);
  };
  React.useEffect(updateTimeLeft, []);

  return (
    <div>
      <h1>{timeLeft}</h1>
      <h2>{state}</h2>
    </div>
  );
}
