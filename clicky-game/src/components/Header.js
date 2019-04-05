import React from "react";
import "./Header.css"

const Header = props => (
  <div className="header">
    <div className="title">Clicky Game</div>
    <div className="score">
      Score: {props.score} Highscore: {props.highs}
    </div>
  </div>
)


export default Header;