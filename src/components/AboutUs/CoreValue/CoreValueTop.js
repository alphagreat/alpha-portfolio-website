import React from "react";
import "./CoreValueTop.css";

function CoreValueTop(props) {
  return (
    <div className="Core-value-top">
      <h3 className="value">{props.title}</h3>
      <p className="brief">{props.brief}</p>
      <div className="dash"></div>
      <p className="Up-curve"></p>
      <p className="circle">{props.letter}</p>
    </div>
  );
}

export default CoreValueTop;
