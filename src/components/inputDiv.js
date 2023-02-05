import React from "react";

const InputDiv = ({ width, height, onWidthChange, onHeightChange }) => {
  return (
    <div className="width_height_box">
      <div>
        <label>Width (px)</label>
        <input value={width} onChange={onWidthChange} type={"number"} />
      </div>
      <div>
        <label>height (px)</label>
        <input value={height} onChange={onHeightChange} type={"number"} />
      </div>
    </div>
  );
};

export default InputDiv;
