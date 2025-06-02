import React, { useState } from "react";
import "./Playable.css";
import image from "../../../assets/arijit.jpg";
function Playable() {
  const [displayThree, useDisplayThree] = useState(false);
  const displayThreeClick = () => {
    useDisplayThree(!displayThree);
  };
  return (
    <div className="playable">
      <div className="playable-details">
        <div
          className="playable-image"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="playable-name">
          <h2>name</h2>
          <p>artists</p>
        </div>
      </div>
      <div className="playable-threedot">
        <button id="playableThreedot" onClick={displayThreeClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e3e3e3"
          >
            <path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" />
          </svg>
        </button>
      </div>
      {displayThree && (
        <div className="playable-threedot-options">
          <div className="threedot-playlist">
            <ul>
              <li>
                <button>save to your linked songs</button>
              </li>
              <li>
                <button>save to your linked songs</button>
              </li>
              <li>
                <button>add to queue</button>
              </li>
              <li>
                <button>remove from queue</button>
              </li>
            </ul>
          </div>
          <div className="threedot-go-to">
            <ul>
              <li>
                <button>go to song radio</button>
              </li>
              <li>
                <button>go to artist</button>
              </li>
              <li>
                <button>go to album</button>
              </li>
              <li>
                <button>view credits</button>
              </li>
            </ul>
          </div>
          <div className="threedot-share">
            <ul>
              <li>
                <button>share</button>
              </li>
            </ul>
          </div>
          <div className="threedot-about">
            <ul>
              <li>
                <button>about recomandations</button>
              </li>
            </ul>
          </div>
          <div className="threedot-share">
            <ul>
              <li>
                <button>Open in desktop app</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Playable;
