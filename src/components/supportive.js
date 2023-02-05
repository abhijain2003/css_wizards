import React, { useState } from "react";
import Navbar from "./navbar";
import "../styles/supportive.css";
import ScripArea from "./scripArea";
import InputDiv from "./inputDiv";
import InputSlider from "./inputSlider";

const Supportive = () => {
  const [width, setWidth] = useState(100);
  const [height, setheight] = useState(100);
  const [borderRadius, setborderRadius] = useState(0);
  const [borderWidth, setborderWidth] = useState(0);

  return (
    <div className="main_body">
      <Navbar />
      <div className="main_box">
        <div className="left_button_box">
          <InputDiv
            width={width}
            height={height}
            onHeightChange={(e) => setheight(e.target.value)}
            onWidthChange={(e) => setWidth(e.target.value)}
          />
          <InputSlider
            border={borderRadius}
            type="Radius"
            onBorder={(e) => setborderRadius(e.target.value)}
          />
          <InputSlider
            border={borderWidth}
            type="Width"
            onBorder={(e) => setborderWidth(e.target.value)}
          />
        </div>
        <ScripArea />
        <div className="right_button_box">vfadvsd</div>
      </div>
    </div>
  );
};

export default Supportive;
