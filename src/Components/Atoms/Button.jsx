import React from "react";

import "./Button.scss";
import Loading from "./Loading";

/**
 * Button component.
 *
 * @return {*}  {JSX.Element}
 */
const Button = ({ onClick, disabled, isLoading, children }) => {
  return (
    <button
      className="button"
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {isLoading ? <Loading /> : children}
    </button>
  );
};

export default Button;
