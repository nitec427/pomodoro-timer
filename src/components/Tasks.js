import React from "react";
import { useState, useEffect } from "react";
import { AiFillStepForward } from "react-icons/ai";

function Tasks() {
  const [time, setTime] = useState(3600);
  const [isPaused, setIsPaused] = useState(false);
  const pomodoroTime = 60 * 60;
  const shortBreakTime = 60 * 5;
  const longBreakTime = 60 * 15;
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
  const padClock = (time) => {
    return time < 10 ? `0${time}` : time;
  };
  return (
    <div className="flex justify-center ">
      <div className="items-center w-2/3 h-96 bg-violet-400 rounded-lg">
        {/* Button Area */}
        <div className="h-10 mt-12  content-center items-center flex justify-center ">
          <button
            className="text-white text-2xs font-semibold bg-violet-700 mr-3 rounded-sm w-24 h-6 active:translate-y-0.5"
            onClick={handlePomodoro.bind(null, pomodoroTime)}
          >
            Pomodoro
          </button>
          <button
            className="text-white text-2xs font-semibold bg-violet-700 mr-3 rounded-sm w-24 h-6 active:translate-y-0.5"
            onClick={handlePomodoro.bind(null, shortBreakTime)}
          >
            Short Break
          </button>
          <button
            className="text-white text-2xs font-semibold bg-violet-700 mr-3 rounded-sm w-24 h-6 active:translate-y-0.5"
            onClick={handlePomodoro.bind(null, longBreakTime)}
          >
            Long Break
          </button>
        </div>
        {/* Timer Area */}
        <div className="h-20 flex justify-center items-center mt-10">
          <div className="text-white text-8xl font-semibold">
            {time === 0
              ? "00:00"
              : ` ${padClock(Math.floor(time / 60).toString())}:${time % 60}${
                  time % 60 < 10 ? "0" : ""
                }`}
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

export default Tasks;
