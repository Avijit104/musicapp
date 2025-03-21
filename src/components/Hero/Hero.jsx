import React from "react";

import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
function Hero() {
  return (
    <div
      style={{
        width: "82vw",
        height: "78vh",
        borderRadius: "15px",
        overflowY: "hidden",
        boxSizing: "border-box", 
        // border: "1px solid white"
      }}
    >
      {/* TODO wrap them in a div and add calc for width */}
      <Outlet />
      
    </div>
  );
}

export default Hero;
