import React, { useState } from "react";
import "../styles/scriptArea.css";
import { Rnd } from "react-rnd";

const ScripArea = ({
  width,
  height,
  borderRadius,
  borderColor,
  backgroundColor,
  borderWidth,
}) => {
  const [position, setPosition] = useState({
    x: 309,
    y: 39,
  });
  return (
    <Rnd
      position={{ x: position.x, y: position.y }}
      onDragStop={(e, d) => {
        setPosition({ ...position, x: d.x, y: d.y });
      }}
    >
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
    </Rnd>
  );
};

export default ScripArea;
