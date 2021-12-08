import React from "react";

import "./FormFieldContainer.scss";

/**
 * Wrapper component around a form field.
 * Encapsulates form field's styles in order
 * to use it not only with input.
 *
 * @return {*}  {JSX.Element}
 */
const FormFieldContainer = ({ children }) => {
  return <div className="form-field-container">{children}</div>;
};

export default FormFieldContainer;
