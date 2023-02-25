import React from "react";
import { useState, useEffect } from "react";
import { AiFillStepForward } from "react-icons/ai";
import TimerButton from "./TimerButton";

function Card() {
  const [time, setTime] = useState(3600);
  const [isPaused, setIsPaused] = useState(false);
  const handleTimer = () => {
    if (isPaused) {
      setIsPaused(false);
    } else {
      setIsPaused(true);
    }
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
  const handlePomodoro = (new_time) => {
    setTime(new_time);
  };
  const padClock = (hour, minute) => {
    return `${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}`;
  };
  return (
    <div className="flex justify-center ">
      <div className="items-center w-2/3 h-96 bg-violet-400 rounded-lg">
        {/* Button Area */}
        <div className="h-10 mt-12 content-center items-center flex justify-center">
          <TimerButton handlePomodoro={handlePomodoro} text="Pomodoro" />
          <TimerButton handlePomodoro={handlePomodoro} text="Short Break" />
          <TimerButton handlePomodoro={handlePomodoro} text="Long Break" />
        </div>
        {/* Timer Area */}
        <div className="h-20 flex justify-center items-center mt-10">
          <div className="text-white text-8xl font-semibold">
            {time === 0
              ? "00:00"
              : ` ${padClock(Math.floor(time / 60), time % 60)}`}
          </div>
        </div>
        {/* Pause and Next Button */}
        <div className="flex justify-center items-center">
          <button
            className="text-white text-2xs font-semibold bg-white mt-16 ml-44 mr-10 rounded-lg w-96 h-16 active:translate-y-0.5"
            onClick={handleTimer}
          >
            <div className="text-violet-700 text-2xl font-bold">
              {isPaused ? "Resume" : "Pause"}
            </div>
          </button>
          <button className="text-white font-semibold rounded-lg w-60 h-16 active:translate-y-0.5">
            <div className="text-violet-700 text-2xl font-bold">
              <AiFillStepForward size={40} color="white" className="mt-10" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
