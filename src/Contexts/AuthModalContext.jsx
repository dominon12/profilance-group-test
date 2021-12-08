import React, { createContext, useState, useEffect } from "react";

const contextDefaultValues = {
  visible: false,
  setVisible: () => {},
};

export const AuthModalContext = createContext(contextDefaultValues);

/**
 * Context for AuthModal
 *
 * @return {*} {JSX.Element}
 */
const AuthModalProvider = ({ children }) => {
  const [visible, setVisible] = useState(contextDefaultValues.visible);

  useEffect(() => {
    document.body.style.overflowY = visible ? "auto" : "hidden";
  }, [visible]);

  return (
    <AuthModalContext.Provider
      value={{
        visible,
        setVisible,
      }}
    >
      {children}
    </AuthModalContext.Provider>
  );
};

export default AuthModalProvider;
