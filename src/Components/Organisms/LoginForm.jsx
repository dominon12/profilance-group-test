import React, { useState, useEffect, useRef } from "react";

import Form from "../Templates/Form";
import Input from "../Molecules/Input";
import Button from "../Atoms/Button";
import FormError from "../Atoms/FormError";
import { emailPattern, checkFormValid } from "../../Services/FormService";

/**
 * Login form with validation
 * and login logic.
 *
 * @return {*} {JSX.Element}
 */
const LoginForm = () => {
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

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // setIsLoading(false);
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
