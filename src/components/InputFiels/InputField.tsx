import React from "react";
import "./InputField.css";

const InputField = () => {
  return (
    <form className="input">
      <input type="text" placeholder="Enter your task" className="input__box" />
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
