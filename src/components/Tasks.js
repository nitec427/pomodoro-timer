import React from "react";
import { useState, useEffect } from "react";
import { MdArrowDropDownCircle } from "react-icons/md";
function Tasks() {
  // Now add Dropdown Component
  const [pomodoroNumber, setPomodoroNumber] = useState(0);
  const [dropdown, setDropdown] = useState(false);
  const handleDropdown = () => {
    setDropdown((prevState) => !prevState);
  };
  useEffect(() => {}, [dropdown]);
  return (
    <div className="flex flex-col justify-between items-center h-32  text-white ">
      <div>
        <h1>Pomodoro: {pomodoroNumber} </h1>
        <h6>Time to focus! </h6>
      </div>
      <div className="self-center w-2/3 flex justify-around border-b-2 py-4 border-yellow-300">
        <div className="justify-center items-center font-bold">Tasks</div>
        <div className="dropdown inline-block relative">
          <button
            className="bg-yellow-200 brightness-90 font-semibold py-2 px-4 rounded inline-flex items-center"
            onClick={handleDropdown}
          >
            <span className="mr-1 text-violet-600">
              <MdArrowDropDownCircle size={20} />
            </span>
          </button>
          <ul
            className={`dropdown-menu absolute ${
              dropdown ? "block" : "hidden"
            } text-gray-700 pt-1 w-48 bg-gray-200 rounded-lg shadow-lg`}
          >
            <li className="">
              <a
                className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="https://google.com"
              >
                Clear Finished Task
              </a>
            </li>
            <li className="">
              <a
                className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="https://google.com"
              >
                Clear Act Pomodoros
              </a>
            </li>
            <li className="">
              <a
                className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="https://google.com"
              >
                Save as routine
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
