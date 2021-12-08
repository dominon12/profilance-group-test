import React from "react";

import "./FormFieldError.scss";

/**
 * Renders a red sign indicating
 * an error.
 *
 * @return {*}  {JSX.Element}
 */
const FormFieldError = ({ children }) => {
  return <div className="form-field-error">{children}</div>;
};

export default FormFieldError;
