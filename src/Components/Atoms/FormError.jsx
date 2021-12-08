import React from "react";

import "./FormError.scss";

/**
 * Component to display an error.
 *
 * @return {*} {JSX.Element}
 */
const FormError = ({ children }) => {
  return <div className="form-error">{children}</div>;
};

export default FormError;
