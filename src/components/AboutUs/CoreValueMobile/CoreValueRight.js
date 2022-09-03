import React from "react";
import "./CoreValueRight.css";

function CoreValueRight(props) {
  return (
    <div className="Core-value-Right" style={props.style}>
      <p className="Right-curve"></p>
      <p className="circle">{props.letter}</p>
      <div>
        {/* <h3 className="value">{props.title}</h3> */}
        {/* <p className="brief">{props.brief}</p> */}
      </div>
    </div>
  );
}

export default CoreValueRight;
