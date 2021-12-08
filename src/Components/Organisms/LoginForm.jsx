import React, { useState, useEffect, useRef, useContext } from "react";
import { useDispatch } from "react-redux";

import Form from "../Templates/Form";
import Input from "../Molecules/Input";
import Button from "../Atoms/Button";
import FormError from "../Atoms/FormError";
import { emailPattern, checkFormValid } from "../../Services/FormService";
import { performLogin } from "../../Services/BackendService";
import { AuthModalContext } from "../../Contexts/AuthModalContext";
import { addUser } from "../../Redux/User/Actions";

/**
 * Login form with validation
 * and login logic.
 *
 * @return {*} {JSX.Element}
 */
const LoginForm = () => {
  // redux
  const dispatch = useDispatch();
  // modal context
  const { setVisible } = useContext(AuthModalContext);
  // refs
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  // form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // form props
  const [formValid, setFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState("");

  /**
   * Checks whether the form is valid
   * after form field values changes.
   */
  useEffect(() => {
    const isFormValid = checkFormValid(emailRef, passwordRef);
    setFormValid(isFormValid);
  }, [email, password]);

  /**
   * Handles login process logic
   *
   * @param {React.FormEvent<HTMLFormElement>} e - form submit event
   */
  const handleLogin = async (e) => {
    // prevent page from reloading
    e.preventDefault();
    // clear errors
    setFormError("");
    // indicate that the login process has started
    setIsLoading(true);
    // create request payload
    const user = { email, password };
    // make request
    const response = await performLogin(user);
    // indicate that request has finished
    setIsLoading(false);
    // check backend's response
    if (response.success) {
      // add user to the store
      dispatch(addUser(response.data.email));
      // close auth modal
      setVisible(false);
    } else {
      // show error
      setFormError(response.error);
    }
  };

  return (
    <Form title="Логин" onSubmit={handleLogin}>
      <Input
        ref={emailRef}
        value={email}
        setValue={setEmail}
        id="login-email"
        placeholder="Email"
        labelText="Email"
        name="email"
        type="email"
        validationOptions={{
          regexp: emailPattern,
        }}
        disabled={isLoading}
        required
      />
      <Input
        ref={passwordRef}
        value={password}
        setValue={setPassword}
        id="login-password"
        placeholder="Пароль"
        labelText="Пароль"
        name="password"
        type="password"
        validationOptions={{
          minLength: 4,
          maxLength: 10,
        }}
        disabled={isLoading}
        required
      />
      {formError && <FormError>{formError}</FormError>}
      <Button isLoading={isLoading}>Войти</Button>
    </Form>
  );
};

export default LoginForm;
