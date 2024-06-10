import { useState, useEffect } from "react";
import { TOAST_TIMEOUT } from "@constants";

export const useProgress = () => {
  const [progress, setProgress] = useState<number>(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => Math.max(prev - 100 / (TOAST_TIMEOUT / 100), 0));
    }, 100);

    const timeout = setTimeout(() => {
      setProgress(0);
    }, TOAST_TIMEOUT);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return { progress } as const;
};
