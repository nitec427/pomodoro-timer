import React from "react";
import { useState, useEffect } from "react";
import { AiFillStepForward } from "react-icons/ai";
import { AiOutlineMore } from "react-icons/ai";
function Tasks() {
  const [pomodoroNumber, setPomodoroNumber] = useState(0);
  return (
    <div className="flex justify-center h-40 bg-orange-500">
      <h1>Pomodoro: {pomodoroNumber} </h1>
      <div>
        <div className="flex justify-center items-center">Tasks</div>
        <div className="flex justify-center bg-red-500 w-6 h-6">
          <AiOutlineMore size={36} color="white" fontWeight="bold" />
        </div>
      </div>
    </div>
  );
}

export default Tasks;
