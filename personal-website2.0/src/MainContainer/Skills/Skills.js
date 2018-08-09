import React from "react";
import "./Skills.css";

const skills = () => {
  return (
    <section className="skills-container">
      <h1 className="title">Skill Set</h1>
      <section className="skills">
        <article className="front-end">
          <h2>
            <i className="far fa-object-group" /> Front-End
          </h2>
          <ul className="skill-list">
            <li>
              <i className="fas fa-code" />HTML5
            </li>
            <li>
              <i className="fas fa-code" />CSS3
            </li>
            <li>
              <i className="fas fa-code" />Sass
            </li>
            <li>
              <i className="fas fa-code" />Bootstrap
            </li>
            <li>
              <i className="fas fa-code" />JavaScript
            </li>
            <li>
              <i className="fas fa-code" />React
            </li>
            <li>
              <i className="fas fa-code" />Redux
            </li>
          </ul>
        </article>
        <article className="back-end">
          <h2>
            <i className="fas fa-database" />Back-End
          </h2>
          <ul className="skill-list">
            <li>
              <i className="fas fa-angle-right" />Node.js
            </li>
            <li>
              <i className="fas fa-angle-right" />Express
            </li>
            <li>
              <i className="fas fa-angle-right" />MongoDB
            </li>
            <li>
              <i className="fas fa-angle-right" />Mongoose
            </li>
            <li>
              <i className="fas fa-angle-right" />Python
            </li>
            <li>
              <i className="fas fa-angle-right" />Django
            </li>
            <li>
              <i className="fas fa-angle-right" />RESTful API
            </li>
            <li>
              <i className="fas fa-angle-right" />PostgreSQL
            </li>
            <li>
              <i className="fas fa-angle-right" />SQL
            </li>
          </ul>
        </article>
        <article className="development">
          <h2>
            <i className="fas fa-code-branch" />Development
          </h2>
          <ul className="skill-list">
            <li>
              <i className="fas fa-wrench" />Git
            </li>
            <li>
              <i className="fas fa-wrench" />Github
            </li>
            <li>
              <i className="fas fa-wrench" />Command Line
            </li>
            <li>
              <i className="fas fa-wrench" />Postman
            </li>
            <li>
              <i className="fas fa-wrench" />Heroku
            </li>
            <li>
              <i className="fas fa-wrench" />NPM
            </li>
          </ul>
        </article>
      </section>
    </section>
  );
};

export default skills;
