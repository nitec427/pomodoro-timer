import React from "react";
import { useState, useEffect } from "react";
const Timer = (props) => {
  const [time, setTime] = useState(3600);
  const [isPaused, setIsPaused] = useState(false);
  const handleTimer = () => {
    if (isPaused) {
      setIsPaused(false);
    } else {
      setIsPaused(true);
    }
  };
  const handlePomodoro = (new_time) => {
    setTime(new_time);
  };
  const padClock = (hour, minute) => {
    return `${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}`;
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    if (time === 0) {
      clearInterval(timer);
    }
    if (isPaused) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [time, isPaused]);
  return (
    <div className="h-20 flex justify-center items-center mt-10">
      <div className="text-white text-8xl font-semibold">
        {time === 0
          ? "00:00"
          : ` ${padClock(Math.floor(time / 60, time % 60))})}`}
      </div>
    </div>
  );
};

export default Timer;
