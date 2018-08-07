import React from "react";
import "./Footer.css";

const footer = () => {
  return (
    <footer>
      <p>
        <a href="#top">
          <i class="fas fa-arrow-up fa-3x" />
        </a>
      </p>
      <p>
        Made by
        <span class="orange">Gabriel Ng</span> &copy; 2018 All rights reserved.
      </p>
    </footer>
  );
};

export default footer;
