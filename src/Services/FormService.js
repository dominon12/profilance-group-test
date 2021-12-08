export const emailPattern =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/**
 * Validates whether passed value is empty
 * if 'required' param is truthy.
 *
 * @param {string} value - value to validate
 * @param {boolean} [required] - is value required
 * @return {*}  {(string | undefined)} - error message or undefined
 */
function emptyStringValidator(value, required) {
  if (required && value.length === 0) {
    return "This field can't be empty";
  }
}

/**
 * Validates whether passed value
 * corresponds to passed regular expression.
 *
 * @param {string} value - value to validate
 * @param {RegExp} [regexp] - regular expression
 * @return {*}  {(string | undefined)} - error message or undefined
 */
function regexpValidator(value, regexp) {
  if (regexp && !regexp.test(value)) {
    return "Field's value doesn't match with specified pattern";
  }
}

/**
 * Validates whether passed value has
 * length bigger than 'minLength' param.
 *
 * @param {string} value - value to validate
 * @param {number} [minLength]
 * @return {*}  {(string | undefined)} - error message or undefined
 */
function minLengthValidator(value, minLength) {
  if (minLength && value.length < minLength) {
    return `Field's value must be at least ${minLength} characters long`;
  }
}

/**
 * Validates whether passed value
 * has length smaller than 'maxLength'
 * param.
 *
 * @param {string} value - value to validate
 * @param {number} [maxLength]
 * @return {*}  {(string | undefined)} - error message or undefined
 */
function maxLengthValidator(value, maxLength) {
  if (maxLength && value.length > maxLength) {
    return `Field's value can't be longer than ${maxLength} characters`;
  }
}

/**
 * Validates passed 'value' param
 * using different validators depending
 * on 'validationOptions' param.
 *
 * @export
 * @param {string} value - value to validate
 * @param {object} [validationOptions] - validation options
 * @param {boolean} [required] - is value required
 * @return {*}  {{
 *   isValid: boolean; - indicated whether value successfully passed validation
 *   errors: string[]; - array of error messages
 * }}
 */
export function validateFormField(value, validationOptions, required) {
  let error;
  let errors = [];

  // test empty string
  error = emptyStringValidator(value, required);
  if (error) errors.push(error);

  // test regexp
  error = regexpValidator(value, validationOptions?.regexp);
  if (error) errors.push(error);

  // min length validation
  error = minLengthValidator(value, validationOptions?.minLength);
  if (error) errors.push(error);

  // max length validation
  error = maxLengthValidator(value, validationOptions?.maxLength);
  if (error) errors.push(error);

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Checks whether every form field is valid
 * (e.g. is not required and has 'valid' class)
 *
 * @export
 * @param {React.RefObject<HTMLInputElement>[]} refs - array of refs to check
 * @return {*}  {boolean} - result
 */
export function checkFormValid(...refs) {
  let formValid = true;

  refs.forEach((ref) => {
    if (!ref.current || !ref.current.classList.contains("valid")) {
      formValid = false;
    }
  });

  return formValid;
}
