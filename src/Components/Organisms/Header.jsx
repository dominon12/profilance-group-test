import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";
import Logo from "../Atoms/Logo";
import NavLink from "../Atoms/NavLink";
import AuthBar from "../Molecules/AuthBar";

/**
 * Header with logo and
 * links for navigation
 * between pages and authorization.
 *
 * @return {*} {JSX.Element}
 */
const Header = () => {
  return (
    <header className="header">
      <div className="header__part">
        <Logo />
      </div>
      <div className="header__part">
        <NavLink>
          <Link to="/feed">Новости</Link>
        </NavLink>
        <AuthBar />
      </div>
    </header>
  );
};

export default Header;
