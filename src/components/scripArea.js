import React from "react";
import "../styles/scriptArea.css";

const ScripArea = ({
  width,
  height,
  borderRadius,
  borderColor,
  backgroundColor,
  borderWidth,
}) => {
  return (
    <div className="main_parent_play_box">
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          border: `${borderWidth}px solid ${borderColor}`,
          borderRadius: `${borderRadius}px`,
          backgroundColor: backgroundColor,
        }}
      ></div>
    </div>
  );
};

export default ScripArea;
