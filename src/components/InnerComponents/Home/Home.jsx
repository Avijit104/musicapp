import React from "react";
import "./Home.css"

function Home() {
  return (
    <div className="home-main" >
      <div className="home-buttons">
        <button id="all">All</button>
        <button id="music">Music</button>
        <button id="podcast">Podcast</button>
      </div>
      <div className="suggestions">
        <div className="suggestion-items"></div>
      </div>
    </div>
  );
}

export default Home;
