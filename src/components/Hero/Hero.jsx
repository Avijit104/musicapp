import React from "react";

import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
function Hero() {
  return (
    <div
      style={{
        width: "80vw",
        height: "70vh",
        padding: "20px",
        borderRadius: "15px",
        overflowY: "scroll",
        background:"linear-gradient(to bottom,  rgb(100, 100, 100) , #121212 30%)"
      }}
    >
      {/* TODO wrap them in a div and add calc for width */}
      <Outlet />
      
    </div>
  );
}

export default Hero;
