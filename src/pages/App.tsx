import React from "react";
import { useModel } from "../hooks/useModel";
import moment from "moment";
import "moment/locale/sv";

export function App() {
  const { timeLeft, state } = useModel(1000000);

  console.log(moment.locales());

  return (
    <div>
      <h1 className="text-8xl">{timeLeft.humanize()}</h1>
      <h2>{state}</h2>
    </div>
  );
}
