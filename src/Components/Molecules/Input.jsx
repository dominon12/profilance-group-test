import React, { forwardRef, useState } from "react";

import FormFieldContainer from "../Atoms/FormFieldContainer";
import FormFieldError from "../Atoms/FormFieldError";
import FormFieldLabel from "../Atoms/FormFieldLabel";
import { validateFormField } from "../../Services/FormService";

/**
 * Input form field with validation,
 * error messages and a label.
 *
 * @return {*}  {JSX.Element}
 */
const Input = forwardRef(
  (
    {
      value,
      setValue,
      id,
      placeholder,
      labelText,
      name,
      type,
      required,
      disabled,
      disableValidation,
      validationOptions,
    },
    ref
  ) => {
    const [isValid, setIsValid] = useState(true);
    const [errorMessages, setErrorMessages] = useState([]);
    const [wasTouched, setWasTouched] = useState(false);

    /**
     * Validates form field value
     * based on passed props.
     *
     * @param {string} value - value to validate
     */
    const validateFieldValue = (value) => {
      const { valid, errors } = validateFormField(
        value,
        validationOptions,
        required
      );

      setIsValid(valid);
      setErrorMessages(errors);
    };

    /**
     * Handles process of changing input value.
     * Validates value if it was touched.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} e - input field event
     */
    const handleChangeInputValue = (e) => {
      // set touched
      let instantTouched = wasTouched;
      if (!wasTouched) {
        setWasTouched(true);
        instantTouched = true;
      }
      // set value
      const nextValue = e.target.value;
      setValue(nextValue);
      // validate if necessary
      instantTouched && !disableValidation && validateFieldValue(nextValue);
    };

    return (
      <FormFieldContainer>
        {labelText && (
          <FormFieldLabel fieldId={id} required={required}>
            {labelText}
          </FormFieldLabel>
        )}

        <input
          ref={ref}
          className={`form-field ${
            isValid
              ? wasTouched && !disableValidation
                ? "valid"
                : ""
              : "invalid"
          }`}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChangeInputValue}
          required={required}
          type={type}
          disabled={disabled}
        />

        {!isValid &&
          errorMessages.map((errMessage, index) => (
            <FormFieldError key={index}>{errMessage}</FormFieldError>
          ))}
      </FormFieldContainer>
    );
  }
);

export default Input;
