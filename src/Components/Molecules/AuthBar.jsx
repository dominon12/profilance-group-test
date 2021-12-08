import React from "react";

import "./AuthBar.scss";
import NavLink from "../Atoms/NavLink";

/**
 * Renders login link if user
 * is not authenticated and logout
 * in the other case.
 *
 * @return {*} {JSX.Element}
 */
const AuthBar = () => {
  const isAuthenticated = false;

  return (
    <NavLink>
      {isAuthenticated ? (
        <div className="auth-bar-link">Выйти</div>
      ) : (
        <div className="auth-bar-link">Войти</div>
      )}
    </NavLink>
  );
};

export default AuthBar;
