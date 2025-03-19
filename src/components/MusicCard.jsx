import React, { useState } from "react";
import background from "../assets/books1.jpg";
function MusicCard(props) {
  const [isHover, setIsHover] = useState(false);
  const handlePlay = (e) => {
    e.stopPropagation();
    console.log("play");
  };
  const handleMusic = () => {
    console.log("music");
  };
  return (
    <div
      style={{
        width: "20%",
        minHeight: "42vh",
        marginTop: "10px",
        borderRadius: "15px",
        backgroundColor: isHover ? "#1f1f1f" : "#121212",
        border: isHover ? "1px solid #1f1f1f" : "1px solid #121212",
        paddingBottom: "10px",
      }}
      onClick={handleMusic}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "90%",
          aspectRatio: "1/1",
          margin: "5% auto",
          borderRadius: "10px",
        }}
      >
        <button
          style={{
            display: isHover ? "block" : "none",
            width: "25%",
            height: "25%",
            outline: "none",
            borderRadius: "40px",
            backgroundColor: "#1ed760",
            border: "none",
            position: "relative",
            top: "70%",
            left: "70%",
          }}
          onClick={handlePlay}
        >
          <span style={{ display: "block", margin: "auto", padding: "7px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#000000"
            >
              <path d="M320-202v-560l440 280-440 280Zm66.67-280Zm0 158.67L636-482 386.67-640.67v317.34Z" />
            </svg>
          </span>
        </button>
      </div>
      <div className="contants">
        <div
          className="song-name"
          style={{
            width: "85%",
            margin: "3px auto",
            textWrap: "wrap",
            fontSize: "20px",
            color: "white",
          }}
        >
          {props.songName}
        </div>
        <div
          className="artist-name"
          style={{
            width: "85%",
            margin: "0px auto",
            textWrap: "wrap",
            color: "gray",
          }}
        >
          {props.artistName}
        </div>
      </div>
    </div>
  );
}

export default MusicCard;
