import React, { useState } from "react";
import "./App.css";

export const App: React.FC = () => {
  const [radius, setRadius] = useState({
    topLeftRadius: "",
    topRightRadius: "",
    bottomLeftRadius: "",
    bottomRightRadius: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadius({ ...radius, [e.target.name]: e.target.value })
  }

  return (
      <div className="app">
        <div className="top-left">
          <label>Top Left Radius</label>
          <br />
          <input
            className="border-radius-input"
            name="topLeftRadius"
            onChange={handleChange}
          />
        </div>
        <div className="top-right">
          <label>Top Right Radius</label>
          <br />
          <input className="border-radius-input" name="topRightRadius" onChange={handleChange} />
        </div>
        <div
          className="radius-sample"
          style={{
            borderTopLeftRadius: radius.topLeftRadius,
            borderTopRightRadius: radius.topRightRadius,
            borderBottomLeftRadius: radius.bottomLeftRadius,
            borderBottomRightRadius: radius.bottomRightRadius,
          }}
        ></div>
        <div className="bottom-left">
          <label>Bottom Left Radius</label>
          <br />
          <input className="border-radius-input" name="bottomLeftRadius" onChange={handleChange}/>
        </div>
        <div className="bottom-right">
          <label>Bottom Right Radius</label>
          <br />
          <input className="border-radius-input" name="bottomRightRadius" onChange={handleChange}/>
        </div>
      </div>
  );
};
