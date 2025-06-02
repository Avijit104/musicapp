import React from "react";
import "./SidePlayer.css";
import image from "../../assets/arijit.jpg";
import Playable from "../InnerComponents/Playable/Playable";
function SidePlayer(props) {
  //   const playablePath = `../../assets/${props.playableName}`; // todo image come form backend
  return (
    <div className="side-player">
      <div
        className="side-player-display"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="side-player-details">
          <div className="blur">
            <div className="display-playable-details">
              <div className="current-playable-header">
                <div className="playable-header-details">
                  <button>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="30px"
                        viewBox="0 -960 960 960"
                        width="30px"
                        fill="#e3e3e3"
                      >
                        <path d="M500-640v320l160-160-160-160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm120-80v-560H200v560h120Zm80 0h360v-560H400v560Zm-80 0H200h120Z" />
                      </svg>
                    </span>
                  </button>
                  <p>song name(artist)</p>
                </div>
                <div className="playable-header-buttons">
                  <button>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="30px"
                        viewBox="0 -960 960 960"
                        width="30px"
                        fill="#e3e3e3"
                      >
                        <path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" />
                      </svg>
                    </span>
                  </button>
                  <button>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="30px"
                        viewBox="0 -960 960 960"
                        width="30px"
                        fill="#e3e3e3"
                      >
                        <path d="M120-120v-240h80v104l124-124 56 56-124 124h104v80H120Zm516-460-56-56 124-124H600v-80h240v240h-80v-104L636-580Z" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
              <div className="current-playable">
                <div className="current-playable-details">
                  <h2>Song name</h2>
                  <p>artists</p>
                </div>
                <div className="current-playable-buttons">
                  <button>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="30px"
                        viewBox="0 -960 960 960"
                        width="30px"
                        fill="#e3e3e3"
                      >
                        <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" />
                      </svg>
                    </span>
                  </button>
                  <button>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="30px"
                        viewBox="0 -960 960 960"
                        width="30px"
                        fill="#e3e3e3"
                      >
                        <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="credits">
        <div className="credits-header">
          <h2>Credits</h2>
          <button>show all</button>
        </div>
        <div className="credits-details">
          <div className="artists-details">
            <h2>name</h2>
            <p>artists details</p>
          </div>
          <button>follow</button>
        </div>
        <div className="credits-details">
          <div className="artists-details">
            <h2>name</h2>
            <p>artists details</p>
          </div>
          <button>follow</button>
        </div>
        <div className="credits-details">
          <div className="artists-details">
            <h2>name</h2>
            <p>artists details</p>
          </div>
          <button>follow</button>
        </div>
      </div>
      <div className="queue">
        <div className="queue-header">
          <h2>Next in queue</h2>
          <button>show queue</button>
        </div>
        <Playable />
      </div>
    </div>
  );
}

export default SidePlayer;
