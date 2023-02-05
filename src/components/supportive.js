import React from "react";
import Navbar from "./navbar";
import "../styles/supportive.css";
import ScripArea from "./scripArea";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import DropDrown from "./DropDrown";

const Supportive = () => {
  const [color, setColor] = useColor("hex", "#121212");
  return (
    <div classNameName="main_body">
      <Navbar />
      <div classNameName="main_box">
        <div>fvad</div>
        <ScripArea />
        <div>
          <div className="card" style={{ width: " 18rem" }}>
            <div className="card-body">
              <DropDrown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supportive;
