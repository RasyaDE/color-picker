import React, { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#FFFFFF");

  const hexToRgb = (hex) => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };


  const handleColor = (event) => {
    setColor(event.target.value);
  };

  const rgb = hexToRgb(color)

  return (
    <div className="color-container">
      <h1>Color Picker</h1>
      <div className="color-display" style={{ backgroundColor: color }}></div>
      <label>
        select a color: {" "}
      </label>
        <input type="color" value={color} onChange={handleColor} />
        <p>Hex : <span >{color}</span></p>
        <p>RGB : {rgb ? `${rgb.r}, ${rgb.g}, ${rgb.b}` : "Invalid Color"}</p>
    </div>
  );
};

export default ColorPicker;
