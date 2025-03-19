import React from "react";
import "./Home.css";
import MusicCard from "../../MusicCard";
import Artist from "../../Artist";
import Footer from "../../Footer/Footer";

function Home() {
  const arr = [1, 2, 3, 4, 5];
  const songName = "Die With a Smile"
  const artistName = "Arijit"
  return (
    <div className="home-main">
      <div className="sugg-title">
        <h3>Tranding Songs</h3>
        <div className="suggestions">
          {arr.map((item) => (
            <MusicCard songName = {songName} artistName = {artistName}   />
          ))}
        </div>
      </div>
      <div className="artist-title">
        <h3>Popular artists</h3>
        <div className="artists">
          {
            arr.map((item) => (
              <Artist artistName = {artistName}/>
            ))
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
