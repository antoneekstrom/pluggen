import { useEffect, useState } from "react";
import { getModel } from "../model";

export function useModel(updateInterval: number) {
  const [model, setModel] = useState(getModel());

  const updateModel = () => {
    const interval = setInterval(() => {
      setModel(getModel());
    }, updateInterval);
    return () => clearInterval(interval);
  };
  useEffect(updateModel, []);

  return model;
}