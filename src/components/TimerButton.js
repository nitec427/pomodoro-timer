import React from "react";

const TimerButton = (props) => {
  const SECONDS_IN_MINUTE = 60;
  const { handlePomodoro, text } = props;
  const times = {
    pomodoro: SECONDS_IN_MINUTE * 60,
    shortbreak: 63,
    longbreak: SECONDS_IN_MINUTE * 15,
  };
  const processText = (text) => {
    return text.toLowerCase().replace(/ /g, "");
  };
  return (
    <button
      className="text-white text-2xs font-semibold bg-violet-700 mr-3 rounded-sm w-24 h-6 active:translate-y-0.5"
      onClick={handlePomodoro.bind(null, times[processText(text)])}
    >
      {text}
    </button>
  );
};

export default TimerButton;
