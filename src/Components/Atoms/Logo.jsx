import React from "react";
import { Link } from "react-router-dom";

import "./Logo.scss";
import logo from "../../Assets/logo.svg";

/**
 * Company's logo wrapped
 * in a link to home page.
 *
 * @return {*} {JSX.Element}
 */
const Logo = () => {
  return (
    <Link to="/" className="logo">
      <img
        className="logo__image"
        src={logo}
        alt="Profilance group company logo"
        width="257"
        height="48"
      />
    </Link>
  );
};

export default Logo;
