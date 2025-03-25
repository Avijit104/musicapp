import React from "react";
import "./SideNav.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function SideNav() {
  const auth = useSelector((state) => state.auth.loginStatus);
  return (
    <div className="sidenav">
      {auth ? (
        <div className="login-side">
          <div></div>
        </div>
      ) : (
        <div className="logout-side" style={{ width: "100%", height: "100%" }}>
          <div
            className="header"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              padding: "5px 0px",
            }}
          >
            <h3
              style={{ fontSize: "15px", fontWeight: "bold", padding: "3px" }}
            >
              Your Library
            </h3>
            <button
              id="addBtn"
              style={{
                backgroundColor: "transparent",
                outline: "none",
                border: "none",
                padding: "3px",
                boxSizing: "border-box",
              }}
            >
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
          <div
            className="content-container"
            style={{ width: "100%", height: "50%", overflowX: "scroll", position:"relative", marginTop: "10px" }}
          >
            <div
                className="style-div"
                style={{
                  width: "18%",
                  height: "50px",
                  boxSizing: "border-box",
                  // border: "1px solid white",
                  background: "linear-gradient(to bottom, #121212, transparent)",
                  position:"fixed",
                  zIndex: "1"
                }}
              ></div>
            <div
              className="content"
              style={{
                width: "100%",
                height: "fit-content",
                padding: "20px 0px",
                position:"relative"
              }}
            >
              
              <div
                className="playlist"
                style={{
                  width: "100%",
                  padding: "20px",
                  backgroundColor: "#1f1f1f",
                  boxSizing: "border-box",
                  borderRadius: "20px",
                  marginTop : "20px"
                }}
              >
                <h4>Create Your own Playlist</h4>

                <p style={{ margin: "10px 0px", color: "white", fontSize: "15px" }}>
                  it&apos;s easy let us help you
                </p>

                <button
                  id="create"
                  style={{
                    padding: "10px 20px",
                    fontSize: "15px",
                    borderRadius: "20px",
                    border: "none",
                    outline: "none",
                    backgroundColor: "white",
                    color: "black",
                    fontWeight: "bold",
                    marginTop: "20px",
                  }}
                >
                  Create Playlist
                </button>
              </div>
              <div
                className="podcast"
                style={{
                  margin: "20px 0px ",
                  width: "100%",
                  padding: "20px",
                  boxSizing: "border-box",
                  backgroundColor: "#1f1f1f",
                  borderRadius: "20px",
                }}
              >
                <h4>let&apos;s find some podcasts to follow</h4>
                <p style={{ margin: "10px 0px", color: "white", fontSize :"15px" }}>
                  we&apos;ll keep you updated on new episodes
                </p>
                <button
                  id="podBrowse"
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "white",
                    color: "black",
                    fontSize: "15px",
                    fontWeight: "bold",
                    borderRadius: "20px",
                    marginTop: "15px",
                    outline: "none",
                    border: "none",
                  }}
                >
                  Browse Podcasts
                </button>
              </div>
            </div>
          </div>
          <div className="links">
            <p
              style={{
                width: "100%",
                padding: "20px 10px",
                paddingBottom: "10px",
                boxSizing: "border-box",
                lineHeight: "2",
                fontSize: "13px",
                marginTop: "20px",
              }}
            >
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
              <Link
                style={{
                  color: "white",
                  fontSize: "13px",
                  padding: "0px 10px ",
                }}
              >
                Cookies
              </Link>
            </p>
          </div>
          <div className="lang">
            <button
              style={{
                backgroundColor: "transparent",
                padding: "7px 20px",
                display: "flex",
                outline: "none",
                border: "1px solid white",
                borderRadius: "25px",
                marginTop: "20px",
              }}
            >
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
              <span style={{ padding: "5px ", fontSize: "15px" }}>English</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SideNav;
