import Header from "./Header";
import { useState } from "react";
const Button = (props) => {
  /* 
  * Write a countdown timer function. You must use the useState hook to store the time.
  
  */
  return (
    <div className="h-screen bg-purple-400 flex justify-center">
      <div className="h-screen w-1/2 bg-rose-600 grid grid-rows-custom">
        <Header />
        {/* Card Component */}
        <div className="bg-blue-500 flex justify-center ">
          <div className="items-center w-2/3 h-48 bg-red-500">
            {/* Button Area */}
            <div className="h-10  content-center items-center flex justify-center ">
              <button className="text-white text-2xs font-semibold bg-red-400 mr-3 rounded-sm w-24 h-6 active:translate-y-0.5">
                Pomodoro
              </button>
              <button className="text-white text-2xs font-semibold bg-red-400 mr-3 rounded-sm w-24 h-6 active:translate-y-0.5">
                Short Break
              </button>
              <button className="text-white text-2xs font-semibold bg-red-400 mr-3 rounded-sm w-24 h-6 active:translate-y-0.5">
                Long Break
              </button>
            </div>
            {/* Timer Area */}
            {/* Pause and Next Button */}
          </div>
        </div>
        {/* Tasks Component */}
      </div>
    </div>
  );
};

export default Button;
