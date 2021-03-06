import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import face from "./face.png";

const Logo = () => {
  return (
    <div className="ma2 logo">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 55 }}
        style={{ height: "100%", width: "100%" }}
      >
        <div className="Tilt-inner pa3" style={{ height: "100%" }}>
          <img
            src={face}
            style={{ height: "auto", width: "auto" }}
            alt="app logo"
          />{" "}
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
