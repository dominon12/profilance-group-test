import React from "react";
import { useSelector } from "react-redux";

import "./Home.scss";
import Title from "../Atoms/Title";

/**
 * Home page
 *
 * @return {*} {JSX.Element}
 */
const Home = () => {
  const user = useSelector((state) => state.user);
  const userName = user ? user.email : "Гость";

  return (
    <section className="home">
      <Title>Привет, {userName}</Title>
    </section>
  );
};

export default Home;
