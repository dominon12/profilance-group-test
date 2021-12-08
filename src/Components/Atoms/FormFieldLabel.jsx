import React from "react";

import "./FormFieldLabel.scss";

/**
 * Label for a form field.
 * Shows red start symbol if
 * 'required' prop was set to true.
 *
 * @return {*}  {JSX.Element}
 */
const FormFieldLabel = ({ fieldId, required, children }) => {
  return (
    <label
      className={`form-field-label ${required ? "required" : ""}`}
      htmlFor={fieldId}
    >
      {children}
    </label>
  );
};

export default FormFieldLabel;
