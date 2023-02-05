import React, { useState } from "react";
import Navbar from "./navbar";
import "../styles/supportive.css";
import ScripArea from "./scripArea";
import InputDiv from "./inputDiv";
import InputSlider from "./inputSlider";
import InputColorPicker from "./inputColorPicker";

const Supportive = () => {
  const [width, setWidth] = useState(100);
  const [height, setheight] = useState(100);
  const [borderRadius, setborderRadius] = useState(0);
  const [borderWidth, setborderWidth] = useState(0);
  const [isPickForBorderColor, setisPickForBorderColor] = useState(false);
  const [borderColor, setBorderColor] = useState("#EEA8B2FF");

  const handleBorderColorChange = (newColor) => {
    setBorderColor(newColor.hex);
  };

  const [isPickForBackgroundColor, setisPickForBackgroundColor] =
    useState(false);
  const [backgroundColor, setbackgroundColor] = useState("#B8E986");

  const handleBackgroundColorChange = (newColor) => {
    setbackgroundColor(newColor.hex);
  };

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
          <InputColorPicker
            color={borderColor}
            isPickForColor={isPickForBorderColor}
            type="Border"
            handleColorChange={handleBorderColorChange}
            setisPickForColor={setisPickForBorderColor}
          />
          <InputColorPicker
            color={backgroundColor}
            isPickForColor={isPickForBackgroundColor}
            type="Background"
            handleColorChange={handleBackgroundColorChange}
            setisPickForColor={setisPickForBackgroundColor}
          />
        </div>
        <ScripArea
          width={width}
          height={height}
          backgroundColor={backgroundColor}
          borderWidth={borderWidth}
          borderRadius={borderRadius}
          borderColor={borderColor}
        />
        <div className="right_button_box">vfadvsd</div>
      </div>
    </div>
  );
};

export default Supportive;
