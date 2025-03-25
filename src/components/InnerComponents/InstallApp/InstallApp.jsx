import React from "react";
import "./InstallApp.css";
import Footer from "../../Footer/Footer";
import Logo from "../../Logo";
function InstallApp() {
  return (
    <div className="install-app">
      <div className="outer">
        <div className="inner">
          <div className="content">
            <Logo />
            <h3>Downlad ViveStream for Windows</h3>
            <p>
              Enjoy high-quality audio and offline playback, plus Windows Game
              Bar integration and a Friend Activity feed that lets you see what
              your friends are listening to in real time.
            </p>
            <button id="download" >
              Download
            </button>
            <p id="last" >download directly from ViveStream</p>
          </div>
          <div className="image"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default InstallApp;
