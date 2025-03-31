import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../Logo.jsx";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import authserv from "../../appwrite/authServ.js";
import { logout } from "../../store/authSlice.js";

function Header() {
  const auth = useSelector((state) => state.auth.loginStatus);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [display, setDisplay] = useState("none");
  const [profileName, setProfileName] = useState("Profile");

  useEffect(() => {
    // setDisplay("none");
    const profile = document.getElementById("profileMenu");
    profile.style.display = display;
  }, []);

  const navigateElement = (item) => {
    const profile = document.getElementById("profileMenu");
    if (item.id === "profile") {
      if (display === "block") {
        profile.style.display = display;
        setDisplay("none");
      } else {
        profile.style.display = display;
        setDisplay("block");
      }
    } else {
      navigate(item.path);
    }
  };

  const handleProfile = (item) => {
    if (item.id === "logoutBtn") {
      authserv.authLogout().then(() => {
        dispatch(logout());
        const profile = document.getElementById("profileMenu");
        setDisplay("none");
        profile.style.display = display;
      });
    }
    navigate(item.path);
  };
  const handleBrowse = (e) => {
    e.preventDefault();
    navigate('/browse')
  }

  const nav = [
    {
      label: "Explore Premium",
      path: "/premium",
      visibility: auth,
      id: "premium",
    },
    {
      label: "Install App",
      path: "/install",
      visibility: true,
      id: "install",
    },
    {
      label: "Signup",
      path: "/signup",
      visibility: !auth,
      id: "signup",
    },
    {
      label: "login",
      path: "/login",
      visibility: !auth,
      id: "login",
    },
    {
      label: profileName,
      path: "/",
      visibility: auth,
      id: "profile",
    },
  ];

  const profile = [
    {
      label: "Account",
      id: "accountBtn",
      path: "/account",
    },
    {
      label: "Profile",
      id: "profileBtn",
      path: "/profile",
    },
    {
      label: "Upgrade to Premium",
      id: "premiumBtn",
      path: "/premium",
    },
    {
      label: "Support",
      id: "supportBtn",
      path: "/support",
    },
    {
      label: "Download",
      id: "downloadBtn",
      path: "/download",
    },
    {
      label: "Settings",
      id: "settingsBtn",
      path: "/settings",
    },
    {
      label: "Logout",
      id: "logoutBtn",
      path: "/",
    },
  ];
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/">
          <Logo />
        </Link>
        <div className="home-search">
          <div className="home">
            <button
              id="homeButton"
              name="homeButton"
              onClick={() => navigate("/")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="33px"
                viewBox="0 -960 960 960"
                width="35px"
                fill="#FFFFFF"
              >
                <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
              </svg>
            </button>
          </div>
          <div className="search-container">
            <form action="">
              <div className="search-svg-container">
                <button>
                  <span className="search">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="33px"
                      viewBox="0 -960 960 960"
                      width="33px"
                      fill="#FFFFFF"
                    >
                      <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                    </svg>
                  </span>
                </button>
              </div>
              <div className="inputcontainer">
                <span>
                  <input
                    type="text"
                    placeholder="Search"
                    id="searchInput"
                    name="searchInput"
                  />
                </span>
              </div>
              <div className="browse-svg-conatainer">
                <button onClick={handleBrowse}>
                  <span className="browse">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="33px"
                      viewBox="0 -960 960 960"
                      width="33px"
                      fill="#FFFFFF"
                    >
                      <path d="M402.12-251.39q48.38 0 82.13-33.83Q518-319.06 518-367.39v-266.22h115v-75H462v242.22q-14-8.5-29-12.75t-31-4.25q-48.33 0-82.17 33.87Q286-415.66 286-367.27q0 48.38 33.87 82.13 33.87 33.75 82.25 33.75ZM480-70.78q-85.43 0-159.97-32.23-74.54-32.22-129.69-87.46-55.14-55.24-87.35-129.71Q70.78-394.65 70.78-480q0-85.43 32.23-159.97 32.22-74.54 87.46-129.69 55.24-55.14 129.71-87.35 74.47-32.21 159.82-32.21 85.43 0 159.97 32.23 74.54 32.22 129.69 87.46 55.14 55.24 87.35 129.71 32.21 74.47 32.21 159.82 0 85.43-32.23 159.97-32.22 74.54-87.46 129.69-55.24 55.14-129.71 87.35Q565.35-70.78 480-70.78Zm0-101q129.24 0 218.73-89.49 89.49-89.49 89.49-218.73t-89.49-218.73Q609.24-788.22 480-788.22t-218.73 89.49Q171.78-609.24 171.78-480t89.49 218.73q89.49 89.49 218.73 89.49ZM480-480Z" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="navelements">
          <div className="navremoved">
            {!auth && (
              <ul className="navelements-all">
                <li>
                  <button
                    id="premiumRem"
                    onClick={() => console.log("premium")}
                  >
                    Premiun
                  </button>
                </li>
                <li>
                  <button id="support" onClick={() => console.log("support")}>
                    Support
                  </button>
                </li>
                <li>
                  <button id="download" onClick={() => console.log("download")}>
                    Download
                  </button>
                </li>
              </ul>
            )}
          </div>
          <ul className="navelements-perm">
            {nav.map((item) =>
              item.visibility ? (
                <li key={item.label}>
                  <button
                    id={item.id}
                    onClick={() => {
                      navigateElement(item);
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              ) : null
            )}
          </ul>
          <div id="profileMenu">
            <ul>
              {profile.map((profileItem) => (
                <li key={profileItem.id}>
                  <button
                    id={profileItem.id}
                    onClick={() => {
                      handleProfile(profileItem);
                    }}
                  >
                    {profileItem.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
