import React from "react";
import Header from "../Header/Header";
import SupportHeader from "./SupportHeader/SupportHeader";
import Footer from "../Footer/Footer";
import "./Support.css";

function Support() {
  return (
    <div>
      <div className="header">
        <SupportHeader />
      </div>
      <div className="support-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Support;
