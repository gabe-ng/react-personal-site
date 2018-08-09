import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home-container">
      <section className="home">
      <p>
        Welcome to my website. Please feel free to explore. You can read more <Link className="home-link" to="/about">
          about me
        </Link>, check out my <Link className="home-link" to="/projects">
          projects
        </Link>, see my <Link className="home-link" to="/skills">
          skills
        </Link>, or <Link className="home-link" to="/contact">
          contact me
        </Link>.
      </p>
      <p>
        Thanks for stopping by! If you're interested in any of the inner
        workings behind this site, check out the code <a
          href="https://github.com/gabe-ng/gabe-ng.github.io"
          target="_blank"
          rel="noopener noreferrer">here</a>.
        </p>
      </section>
    </section>
  );
};

export default Home;
