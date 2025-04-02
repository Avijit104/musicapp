import React from "react";
import "./browse.css";
import { useSelector } from "react-redux";
import background from "../../../assets/books1.jpg";
import Footer from "../../Footer/Footer";
function Browse() {
  const auth = useSelector((state) => state.auth.loginStatus)
  // const auth = true;
  const arr1 = [
    {
      name: "Music",
      color: "palevioletred",
    },
    {
      name: "Podcast",
      color: "darkslategray",
    },
    {
      name: "Live events",
      color: "blueviolet",
    },
  ];
  const arr2 = [
    {
      name: "made for you",
    },
    {
      name: "hip hop",
    },
    {
      name: "hindi",
    },
    {
      name: "punjabi",
    },
    {
      name: "telegu",
    },
    {
      name: "music",
    },
    {
      name: "podcast",
    },
    {
      name: "live events",
    },
    {
      name: "made for you",
    },
    {
      name: "hip hop",
    },
    {
      name: "hindi",
    },
    {
      name: "punjabi",
    },
    {
      name: "telegu",
    },
    {
      name: "music",
    },
    {
      name: "podcast",
    },
    {
      name: "live events",
    },
    {
      name: "made for you",
    },
    {
      name: "hip hop",
    },
    {
      name: "hindi",
    },
    {
      name: "punjabi",
    },
    {
      name: "telegu",
    },
  ];
  return (
    <div className="browse-main">
      <div className="browse-content">
        {auth ? (
          <div className="login-browse">
            <h3>Start Browseing</h3>
            <div className="start">
              {arr1.map((item) => (
                <div
                  className="items-browse"
                  style={{ backgroundColor: `${item.color}` }}
                >
                  <p> {item.name} </p>
                  <div
                    className="image-browse"
                    style={{ backgroundImage: `url(${background})` }}
                  ></div>
                </div>
              ))}
            </div>
            <h3>Browse All</h3>
            <div className="all">
              {arr2.map((item) => (
                <div className="items-browse">
                  <p> {item.name} </p>
                  <div
                    className="image-browse"
                    style={{ backgroundImage: `url(${background})` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="logout-browse">
            <h3>Browse All</h3>
            {
              <div className="all">
                {arr1.map((item) => (
                  <div className="items-browse" style={{backgroundColor: `${item.color}`}} >
                    <p> {item.name} </p>
                    <div
                      className="image-browse"
                      style={{ backgroundImage: `url(${background})` }}
                    ></div>
                  </div>
                ))}
                {arr2.map((item) => (
                  <div className="items-browse">
                    <p> {item.name} </p>
                    <div
                      className="image-browse"
                      style={{ backgroundImage: `url(${background})` }}
                    ></div>
                  </div>
                ))}
              </div>
            }
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Browse;
