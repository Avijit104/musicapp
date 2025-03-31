import React, { useState } from "react";
import "./SideNav.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import arijit from "../../assets/arijit.jpg";

function SideNav() {
  const arr = [
    {
      name: "Arijit Singh",
      desig: "Artist",
    },
    {
      name: "Lady gaga",
      desig: "Artist",
    },
    {
      name: "Bruno marse",
      desig: "Playlist",
    },
    {
      name: "Encore",
      desig: "Playlist",
    },
    {
      name: "Calm",
      desig: "Artist",
    },
  ];
  const auth = useSelector((state) => state.auth.loginStatus);
  return (
    <div className="sidenav">
      {auth ? (
        <div className="login-side">
          <div className="header">
            <button id="library">
              <span className="library-svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="33px"
                  viewBox="0 -960 960 960"
                  width="33px"
                >
                  <path d="M500-360q42 0 71-29t29-71v-220h120v-80H560v220q-13-10-28-15t-32-5q-42 0-71 29t-29 71q0 42 29 71t71 29ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z" />
                </svg>
              </span>
              <span className="library-text">Your Library</span>
            </button>
            <div className="add-extend">
              <button id="add">
                <span className="add-svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30px"
                    viewBox="0 -960 960 960"
                    width="35px"
                  >
                    <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                  </svg>
                </span>
              </button>
              <button id="extend">
                <span className="extend-svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30px"
                    viewBox="0 -960 960 960"
                    width="35px"
                  >
                    <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div className="toggle">
            <button id="playlist">Playlist</button>
            <button id="artist">Artist</button>
          </div>
          <div className="search-side">
            <button id="searchBtn">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="28px"
                  viewBox="0 -960 960 960"
                  width="28px"
                  fill="#808080"
                >
                  <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                </svg>
              </span>
            </button>
            <button id="creatorBtn">
              <span>Creator</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="28px"
                  viewBox="0 -960 960 860"
                  width="28px"
                  fill="#808080"
                >
                  <path d="M280-600v-80h560v80H280Zm0 160v-80h560v80H280Zm0 160v-80h560v80H280ZM160-600q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640q0 17-11.5 28.5T160-600Zm0 160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440Zm0 160q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320q0 17-11.5 28.5T160-280Z" />
                </svg>
              </span>
            </button>
          </div>
          <div className="all">
            {arr.map((item) => (
              <div className="all-items">
                <div
                  className="all-img"
                  style={{
                    backgroundImage: `url(${arijit})`,
                  }}
                ></div>
                <div className="all-details">
                  <p> {item.name} </p>
                  <p style={{ color: "#808080", fontSize: "14px" }}>
                    {item.desig}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // end of after login sidenav
        // strting of before login sidenav
        <div className="logout-side">
          <div className="header-logout-side">
            <h3>Your Library</h3>
            <button id="addBtn">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#ffffff"
                >
                  <path d="M440-120v-320H120v-80h320v-320h80v320h320v80H520v320h-80Z" />
                </svg>
              </span>
            </button>
          </div>
          <div className="content-container">
            <div className="style-div"></div>
            <div className="content">
              <div className="playlist">
                <h4>Create Your own Playlist</h4>
                <p>it&apos;s easy let us help you</p>
                <button id="create">Create Playlist</button>
              </div>

              <div className="podcast">
                <h4>let&apos;s find some podcasts to follow</h4>
                <p>we&apos;ll keep you updated on new episodes</p>
                <button id="podBrowse">Browse Podcasts</button>
              </div>
            </div>
          </div>

          <div className="links">
            <p>
              <Link>Legal</Link>
              &nbsp; <Link>Safety&amp;Privacy&nbsp;Center</Link>
              &nbsp; <Link>Privacy&nbsp;Policy</Link>
              &nbsp; <Link>Cookies</Link>
              &nbsp; <Link>About&nbsp;Ads</Link>
              &nbsp; <Link>About&nbsp;Ads</Link>
              &nbsp; <Link>accessibility</Link>
            </p>
          </div>

          <div className="cookies">
            <p>
              <Link>Cookies</Link>
            </p>
          </div>
          <div className="lang">
            <button>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#FFFFFF"
                >
                  <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z" />
                </svg>
              </span>
              <span>English</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SideNav;
