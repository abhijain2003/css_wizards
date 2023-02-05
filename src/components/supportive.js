import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import "../styles/supportive.css";
import ScripArea from "./scripArea";
import InputDiv from "./inputDiv";
import InputSlider from "./inputSlider";
import { Rnd } from "react-rnd";
import InputColorPicker from "./inputColorPicker";
import RightDiv from "./rightDiv";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/atom-one-dark.css";
import css from "highlight.js/lib/languages/css";

const Supportive = () => {
  const [width, setWidth] = useState(100);
  const [height, setheight] = useState(100);
  const [borderRadius, setborderRadius] = useState(0);
  const [borderWidth, setborderWidth] = useState(0);
  const [isPickForBorderColor, setisPickForBorderColor] = useState(false);
  const [borderColor, setBorderColor] = useState("#EEA8B2FF");
  const [display, setDisplay] = useState("flex");
  const [justifyContent, setJustifyContent] = useState("center");
  const [alignItems, setAlignItems] = useState("center");

  const handleBorderColorChange = (newColor) => {
    setBorderColor(newColor.hex);
  };

  const [position, setPosition] = useState({
    x: 800,
    y: 39,
  });

  const [isPickForBackgroundColor, setisPickForBackgroundColor] =
    useState(false);
  const [backgroundColor, setbackgroundColor] = useState("#B8E986");

  const handleBackgroundColorChange = (newColor) => {
    setbackgroundColor(newColor.hex);
  };

  const [object, setobject] = useState({});

  useEffect(() => {
    const newObject = {
      ...object,
      display: display,
      "align-items": alignItems,
      "justify-content": justifyContent,
      "border-color": borderColor,
      "background-color": backgroundColor,
      "border-width": borderWidth,
      "border-radius": borderRadius,
      width: width,
      height: height,
    };
    setobject(newObject);
  }, [
    width,
    height,
    borderColor,
    borderWidth,
    backgroundColor,
    borderRadius,
    display,
    justifyContent,
    alignItems,
  ]);

  hljs.registerLanguage("css", css);

  const cssProperties = Object.entries(object)
    .map(([property, value]) => `${property}: ${value};`)
    .join("\n");

  const codeString = `.my-class {\n${cssProperties}\n}`;
  const highlightedCode = hljs.highlight("css", codeString).value;

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(
      function () {
        alert("Copying to clipboard was successful!");
      },
      function (err) {
       alert("Could not copy text: ", err);
      }
    );
  }

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
            <button
              onClick={() => copyToClipboard(codeString)}
              className="show_code"
            >
              Show Code
            </button>
        </div>
        <ScripArea
          width={width}
          height={height}
          backgroundColor={backgroundColor}
          borderWidth={borderWidth}
          borderRadius={borderRadius}
          borderColor={borderColor}
          display={display}
          alignItems={alignItems}
          justifyContent={justifyContent}
        />
        <Rnd
          position={{ x: position.x, y: position.y }}
          onDragStop={(e, d) => {
            setPosition({ ...position, x: d.x, y: d.y });
          }}
        >
          <div className="code_area">
            <pre>
              <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
            </pre>
          </div>
        </Rnd>
        <div className="right_button_box">
          <RightDiv
            display={display}
            alignItems={alignItems}
            justifyContent={justifyContent}
            setDisplay={setDisplay}
            setJustifyContent={setJustifyContent}
            setAlignItems={setAlignItems}
          />
        </div>
      </div>
    </div>
  );
};

export default Supportive;
