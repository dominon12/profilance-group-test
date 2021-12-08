import React, { useContext } from "react";

import Modal from "../Templates/Modal";
import { AuthModalContext } from "../../Contexts/AuthModalContext";

/**
 * Modal window with a login form.
 *
 * @return {*} {JSX.Element | null}
 */
const AuthModal = () => {
  const { visible, setVisible } = useContext(AuthModalContext);

  return (
    <Modal visible={visible} setVisible={setVisible}>
      Hi there
    </Modal>
  );
};

export default AuthModal;
