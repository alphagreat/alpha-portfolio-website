import React from "react";
import "./CoreValueDown.css";

function CoreValueDown(props) {
  return (
    <div className="Core-value-down">
      <p className="circle">{props.letter}</p>
      <p className="Down-curve"></p>
      <div className="dash"></div>
      <h3 className="value">{props.title}</h3>
      <p className="brief">{props.brief}</p>
    </div>
  );
}

export default CoreValueDown;
