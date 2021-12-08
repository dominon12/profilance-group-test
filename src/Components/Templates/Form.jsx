import React from "react";

import "./Form.scss";
import Title from "../Atoms/Title";

/**
 * Wrapper component with a title
 * for forms with fixed width.
 *
 * @return {*}  {JSX.Element}
 */
const Form = ({ title, onSubmit, children }) => {
  return (
    <div className="form-template">
      <Title className="form-template__title">{title}</Title>
      <form onSubmit={onSubmit} className="form-template__form">
        {children}
      </form>
    </div>
  );
};

export default Form;
