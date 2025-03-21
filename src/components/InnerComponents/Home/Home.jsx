import React from "react";
import "./Home.css";
import MusicCard from "../../MusicCard";
import Artist from "../../Artist";
import Footer from "../../Footer/Footer";
import ListMusic from "../../ListMusic";

function Home() {

  const arr = [1,2,3,4,5]
  const songs = [
    {
      songName: "die With a smile",
      artistName: "lady gaga"
    },
    {
      songName: "har kisi ko",
      artistName: "arijit Singh"
    },
    {
      songName: "die With a smile",
      artistName: "lady gaga"
    },
    {
      songName: "har kisi ko",
      artistName: "arijit Singh"
    },
    {
      songName: "die With a smile",
      artistName: "lady gaga"
    },

  ]
  const songName = "Die With a Smile"
  const artistName = "Arijit"
  return (
    <div className="home-main">

      <ListMusic title = "Tranding Songs" songs = {songs} show = {true} />


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

      <ListMusic title = "Popular albums and singles" songs = {songs} show = {true} />
      <ListMusic title = "Popular radio" songs = {songs} show = {true} />
      <ListMusic title = "Featured charts" songs = {songs} />
      <ListMusic title = "India's best" songs = {songs} show = {true} />

      <Footer />
    </div>
  );
}

export default Home;
