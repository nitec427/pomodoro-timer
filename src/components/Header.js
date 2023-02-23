import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import Button from "./Button";
import char1 from "../assets/char1.png";
import char2 from "../assets/char2.png";
const Header = (props) => {
  return (
    <div className="h-12 grid grid-cols-2 border-b border-gray-800">
      {/* Logo */}
      <div className="text-white border-b-2 border-white flex items-center">
        <span className="text-2xl">
          <AiFillCheckCircle size={24} className="mr-1 ml-10" />
        </span>
        <span className="text-xl">PomoFocus</span>
      </div>
      <div className="flex items-center">
        {/* Report button */}
        <Button icon="AiOutlineBarChart" text="Report" />
        {/* Settings Button */}
        <Button icon="AiFillSetting" text="Settings" />
        <img src={char2} alt="Bakugan Character" width={32} />
      </div>
    </div>
  );
};

export default Header;
