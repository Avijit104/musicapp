import React from "react";
import Header from "../../Header/Header";
import Logo from "../../Logo";
import { Link } from "react-router-dom";
import "./Download.css";
import Footer from "../../Footer/Footer";
function Download() {
  return (
    <>
      {" "}
      <div className="download">
        <div className="header">
          <Header download={true} />
        </div>
        <main>
          <div className="blur">
            <div className="main-content">
              <div className="heading">
                <h1>
                  Download{" "}
                  <Logo
                    colorOuter="#ffffff"
                    colorInner="#ffffff"
                    fontSize="3rem"
                  />
                </h1>
              </div>
              <p>Play millions of songs and poscasts on your device</p>
              <Link to="/install">download app directly form soptify</Link>
            </div>
          </div>
        </main>
        <div className="mobile-section">
          <div className="mobile-content">
            <h2>Listen on mobile and laptop, too</h2>
            <p>
              Using ViveStream on your phone or tablet is free, easy, and fun.
            </p>
            <div className="mobile-buttons">
              <button>App Store</button>
              <button>Google Play</button>
              <button>Microsoft</button>
            </div>
          </div>
        </div>
        <div className="download-all">
          <div className="download-all-content">
            <h2>One account, listen everywhere</h2>
            <div className="download-all-buttons">
              <button>Mobile</button>
              <button>Computer</button>
              <button>Tablet</button>
              <button>Car</button>
              <button>Playstation</button>
              <button>Xbox</button>
              <button>TV</button>
              <button>Speaker</button>
              <button>Web Player</button>
            </div>
          </div>
        </div>
        <div className="download-footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Download;
