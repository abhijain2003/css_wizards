import React, {useState} from "react";
import "../styles/scriptArea.css";
import { Rnd } from "react-rnd";

const ScripArea = ({
  width,
  height,
  borderRadius,
  borderColor,
  backgroundColor,
  borderWidth,
  display,
  alignItems,
  justifyContent,
}) => {
  const [position, setPosition] = useState({
    x: 300,
    y: 39,
  });
  
  return (
    <Rnd position={{ x: position.x, y: position.y }}
      onDragStop={(e, d) => {
        setPosition({ ...position, x: d.x, y: d.y });
      }}>
        <div style={{ 
      display: display === "none" ? 'block' : display,
      alignItems: alignItems,
      justifyContent: justifyContent,
       }} className="main_parent_play_box">
      <div
        style={{
          display: display,
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
