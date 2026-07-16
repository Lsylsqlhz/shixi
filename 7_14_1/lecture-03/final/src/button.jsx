// Button.jsx
import React from "react";

const Button = ({ children, ...restProps }) => {
  return (
    <button type="submit" className="btn" {...restProps}>
      {children}
    </button>
  );
};

export default Button;
