import React from "react";
import "./AboutMe.css";
import PicOfMe from "./me.jpg";

const aboutMe = () => {
  return (
    <section className="about-me-container">
      <section className="about-me">
        <h4 className="title">About Me</h4>
        <div className="info">
          <img src={PicOfMe} alt="Gabriel" />
          <div className="p-wrap">
            <p>
              Hi! I'm a newly graduated college student with a background in
              Economics and Environmental Policy. However, towards the end of my
              senior year I discovered a passion for web development. Since then
              I've happily spent my time becoming a full stack web developer.
            </p>
            <p>
              When I'm taking a break from my code, you can probably find me on
                          a jog around San Francisco or at the gym. I love to explore new
                          food recipes just as much as I enjoy taking a new framework or
                          library head on. Sushi is my absolute favorite food, and if you
                          asked me to recommend my go-to place, I would be
              <a href="http://www.sushidelightsf.com/" target="_blank" rel="noopener noreferrer"> delighted</a> too.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default aboutMe;
