import React from "react";
import "./Nav.css";

function Nav(props){
  return(
  <div>
  <nav>
    <ul>

      <li class="brand">
      <a href="/">Clicky Game</a>
      </li>


      <li class="result">{props.result}</li>

      <li id="score">Current Score: {props.score} | Top Score: {props.topScore}</li>

    </ul>
  </nav>
  </div>
);
}

export default Nav;
