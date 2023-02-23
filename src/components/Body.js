import React from "react";
import Header from "./Header";

const Button = (props) => {
  return (
    <div className="h-screen bg-purple-400 flex justify-center">
      <div className="h-screen w-1/2 bg-rose-600 grid grid-rows-custom">
        <Header />
        {/* Card Component */}
        <div className="bg-blue-500 flex justify-center ">
          <div className="items-center w-2/3 h-24 bg-red-500"></div>
        </div>
        {/* Tasks Component */}
      </div>
    </div>
  );
};

export default Button;
