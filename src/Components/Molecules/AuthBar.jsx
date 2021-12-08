import React, { useContext } from "react";

import "./AuthBar.scss";
import NavLink from "../Atoms/NavLink";
import { AuthModalContext } from "../../Contexts/AuthModalContext";

/**
 * Renders login link if user
 * is not authenticated and logout
 * in the other case.
 *
 * @return {*} {JSX.Element}
 */
const AuthBar = () => {
  const { setVisible } = useContext(AuthModalContext);

  const isAuthenticated = false;

  return (
    <NavLink>
      {isAuthenticated ? (
        <div className="auth-bar-link">Выйти</div>
      ) : (
        <div className="auth-bar-link" onClick={() => setVisible(true)}>
          Войти
        </div>
      )}
    </NavLink>
  );
};

export default AuthBar;
