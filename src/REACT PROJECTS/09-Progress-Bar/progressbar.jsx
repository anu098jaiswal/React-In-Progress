import React from "react";
import "./style.css";

//useEffect+state+cssProperties

// //width: progress + "%"
function Bars({ progress }) {
  return (
    <div className="outer">
      <div className="inner" style =
        {{ width: `${progress}%`, color: progress < 5 ? "black" : "white" }}>
          {progress}%
      </div>
    </div>
  );
}
function Progressbar() {
  const bars = [0, 5, 10, 30, 70, 90,100];
  return (
    <div>
      <h1>Progress Bar</h1>
      {bars.map((value) => (
        <Bars key={value} progress={value} />
      ))}
    </div>
  );
}

export default Progressbar;
