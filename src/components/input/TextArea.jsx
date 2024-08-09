import React from "react";
import "../../styles/input/_input.scss";
const TextArea = ({ label, ...rest }) => {
  return (
    <div className="input-container">
      <textarea
        id={label}
        className="sci-fi-textarea"
        {...rest}
        required
      ></textarea>
      <label htmlFor={label} className="floating-label">
        {label}
      </label>
    </div>
  );
};

export default TextArea;
