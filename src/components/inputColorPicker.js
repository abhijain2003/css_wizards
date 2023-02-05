import React from "react";
import { SketchPicker } from "react-color";

const InputColorPicker = ({
  color,
  type,
  handleColorChange,
  setisPickForColor,
  isPickForColor,
}) => {
  return (
    <>
      <button
        style={{ backgroundColor: color }}
        className="colorButton"
        onClick={() => setisPickForColor(!isPickForColor)}
      >
        Set {type} Color
      </button>
      {isPickForColor && (
        <SketchPicker
          color={color}
          onChange={handleColorChange}
          onClose={() => setisPickForColor(false)}
        />
      )}
    </>
  );
};

export default InputColorPicker;
