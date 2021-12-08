import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./AuthBar.scss";
import NavLink from "../Atoms/NavLink";
import { AuthModalContext } from "../../Contexts/AuthModalContext";
import { removeUser } from "../../Redux/User/Actions";

/**
 * Renders login link if user
 * is not authenticated and logout
 * in the other case.
 *
 * @return {*} {JSX.Element}
 */
const AuthBar = () => {
  // auth modal
  const { setVisible } = useContext(AuthModalContext);
  // redux
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  /**
   * Opens auth modal so user
   * can login.
   */
  const openAuthModal = () => setVisible(true);

  /**
   * Removes user's data
   * from redux's store.
   */
  const logOut = () => dispatch(removeUser());

  return (
    <NavLink>
      {user ? (
        <div className="auth-bar-link" onClick={logOut}>
          Выйти
        </div>
      ) : (
        <div className="auth-bar-link" onClick={openAuthModal}>
          Войти
        </div>
      )}
    </NavLink>
  );
};

export default AuthBar;
