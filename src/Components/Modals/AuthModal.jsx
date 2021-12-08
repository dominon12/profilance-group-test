import React, { useContext } from "react";

import Modal from "../Templates/Modal";
import { AuthModalContext } from "../../Contexts/AuthModalContext";
import LoginForm from "../Organisms/LoginForm";

/**
 * Modal window with a login form.
 *
 * @return {*} {JSX.Element | null}
 */
const AuthModal = () => {
  const { visible, setVisible } = useContext(AuthModalContext);

  return (
    <Modal visible={visible} setVisible={setVisible}>
      <LoginForm />
    </Modal>
  );
};

export default AuthModal;
