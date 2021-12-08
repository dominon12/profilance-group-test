import React from "react";

import "./Title.scss";

/**
 * h1 Title
 *
 * @return {*} {JSX.Element}
 */
const Title = ({ children }) => {
  return <h1 className="title">{children}</h1>;
};

export default Title;
