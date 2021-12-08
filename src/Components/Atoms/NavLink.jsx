import React from "react";

import "./NavLink.scss";

/**
 * Wrapper component with
 * styles for a nav link.
 *
 * @return {*} {JSX.Element}
 */
const NavLink = ({ children }) => {
  return <div className="nav-link">{children}</div>;
};

export default NavLink;
