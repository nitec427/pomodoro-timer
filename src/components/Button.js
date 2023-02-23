import React from "react";
import { AiOutlineBarChart, AiFillSetting } from "react-icons/ai";

const Button = (props) => {
  const { icon, text } = props;
  return (
    <button className="bg-violet-500 text-white w-20 h-6 rounded-sm flex justify-center items-center hover:text-gray-100 hover:brightness-105 mr-5">
      <span className="text-2xl">
        {icon === "AiOutlineBarChart" ? (
          <AiOutlineBarChart size={12} className="mr-1" />
        ) : icon === "AiFillSetting" ? (
          <AiFillSetting size={12} className="mr-1" />
        ) : null}
      </span>
      <span className="text-2xs">{text}</span>
    </button>
  );
};

export default Button;
