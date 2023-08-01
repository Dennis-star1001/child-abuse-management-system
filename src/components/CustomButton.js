import React from "react";
import { color } from "./color";

const CustomButton = ({
  text,
  textColor,
  handleEvent,
  backgroundColor,
  px,
  py,
  width,

}) => {
  return (
    <button
      type="submit"
      name="admin-login-btn"
      className={`bg-[${backgroundColor ? backgroundColor : color.pupple
        }] ${textColor}  rounded-md ${py} w-[${width}%] ${px} font-semibold`}
      onClick={handleEvent}>
      {text}
    </button>
  );
};

export default CustomButton;
