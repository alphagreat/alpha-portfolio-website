import React from "react";
import "./CoreValueLeft.css";

function CoreValueLeft(props) {
  return (
    <div className="Core-value-Left" style={props.style}>
      <p className="Left-curve"></p>
      <p className="circle">{props.letter}</p>
      <div>
        {/* <h3 className="value">{props.title}</h3> */}
        {/* <p className="brief">{props.brief}</p> */}
      </div>
    </div>
  );
}

export default CoreValueLeft;
