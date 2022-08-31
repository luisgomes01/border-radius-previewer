import React, { useState } from "react";
import "./App.css";

export const App: React.FC = () => {
  const [radius, setRadius] = useState({
    topLeftRadius: "",
    topRightRadius: "",
    bottomLeftRadius: "",
    bottomRightRadius: "",
  });

  const cssCode = `border-radius: ${radius.topLeftRadius} ${radius.topRightRadius} ${radius.bottomRightRadius} ${radius.bottomLeftRadius}`

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadius({ ...radius, [e.target.name]: e.target.value });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(cssCode);
    alert('Code copied to clipboard')
  };

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
        <input
          className="border-radius-input"
          name="topRightRadius"
          onChange={handleChange}
        />
      </div>
      <div
        className="radius-sample"
        style={{
          borderTopLeftRadius: radius.topLeftRadius,
          borderTopRightRadius: radius.topRightRadius,
          borderBottomLeftRadius: radius.bottomLeftRadius,
          borderBottomRightRadius: radius.bottomRightRadius,
        }}
      ><code>{cssCode}</code></div>
      <div className="bottom-left">
        <label>Bottom Left Radius</label>
        <br />
        <input
          className="border-radius-input"
          name="bottomLeftRadius"
          onChange={handleChange}
        />
      </div>
      <div className="copy-to-clipboard">
        <div className="code-text-area">
          
        </div>
        <button className="copy-to-clipboard-btn" onClick={copyToClipboard}>
          Copy code to clipboard
        </button>
      </div>
      <div className="bottom-right">
        <label>Bottom Right Radius</label>
        <br />
        <input
          className="border-radius-input"
          name="bottomRightRadius"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
