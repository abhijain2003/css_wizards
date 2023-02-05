import React from "react";

const InputSlider = ({ border, type, onBorder }) => {
  return (
    <div>
      <label>
        Border {type} {border}
      </label>
      <input
        type="range"
        min="0"
        max="100"
        value={border}
        onChange={onBorder}
      />
    </div>
  );
};

export default InputSlider;
