import React from "react";
import "../styles/rightDiv.css";
import DisplayInput from "./displayInput";

const RightDiv = ({
  display,
  alignItems,
  justifyContent,
  setJustifyContent,
  setDisplay,
  setAlignItems,
}) => {
  return (
    <>
      <div className="right_box_wrapper">
        <h4>Display</h4>
        <div className="right_box">
          <DisplayInput
            value={"block"}
            place="display"
            property={display}
            setProperty={setDisplay}
          />
          <DisplayInput
            value={"none"}
            place="display"
            property={display}
            setProperty={setDisplay}
          />
          <DisplayInput
            value={"flex"}
            place="display"
            property={display}
            setProperty={setDisplay}
          />
        </div>
      </div>
      {display === "flex" ? (
        <div className="right_box_wrapper">
          <h4>Justify Content</h4>
          <div style={{ flexDirection: "column" }} className="right_box">
            <>
              <DisplayInput
                value={"spce-between"}
                name="justify_property"
                property={justifyContent}
                setProperty={setJustifyContent}
              />
              <DisplayInput
                value={"center"}
                name="flex_property"
                property={justifyContent}
                setProperty={setJustifyContent}
              />
              <DisplayInput
                value={"space-evenly"}
                name="justify_property"
                property={justifyContent}
                setProperty={setJustifyContent}
              />
              <DisplayInput
                value={"space-around"}
                name="flex_property"
                property={justifyContent}
                setProperty={setJustifyContent}
              />
              <DisplayInput
                value={"start"}
                name="justify_property"
                property={justifyContent}
                setProperty={setJustifyContent}
              />
              <DisplayInput
                value={"end"}
                name="flex_property"
                property={justifyContent}
                setProperty={setJustifyContent}
              />
            </>
          </div>
          <h4>Align Items</h4>
          <div style={{ flexDirection: "column" }} className="right_box">
            <>
              <DisplayInput
                value={"center"}
                name="align_property"
                property={alignItems}
                setProperty={setAlignItems}
              />
              <DisplayInput
                value={"flex-start"}
                name="align_property"
                property={alignItems}
                setProperty={setAlignItems}
              />
              <DisplayInput
                value={"flex-end"}
                name="align_property"
                property={alignItems}
                setProperty={setAlignItems}
              />
            </>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default RightDiv;
