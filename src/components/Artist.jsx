import React, { useState } from "react";
import background from "../assets/arijit.jpg";

function Artist(props) {
  const artistName = "Avijit";
  const [isHover, setIsHover] = useState(false);
    const handleArtist = () => {
        console.log("artist")
    }
    const handlePlay = (e) => {
        e.stopPropagation()
        console.log("play")
    }
  return (
    <div
    className="artist-main"
      style={{
        width: "20%",
        minWidth: "200px",
        // maxWidth: "236px",s
        minHeight: "42vh",
        borderRadius: "15px",
        marginTop: "0px",
        paddingBottom: "15px",
        backgroundColor: isHover ? "#1f1f1f" : "transparent",
        border: isHover ? "1px solid #1f1f1f" : "1px solid transparent",
        boxSizing: "border-box"
      }}
      onClick={handleArtist}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
      className="artist-button"
        style={{
          width: "90%",
          aspectRatio: "1/1",
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          margin: "5% auto",
          borderRadius: "50%",
        }}
      >
        <button
        id="playBtn"
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
          className="artistname"
          style={{
            width: "85%",
            margin: "3px auto",
            textWrap: "wrap",
            fontSize: "20px",
            color: "white",
          }}
        >
          {props.artistName}
        </div>
        <div
          className="artist"
          style={{
            width: "85%",
            margin: "0px auto",
            textWrap: "wrap",
            color: "gray",
          }}
        >
          <p>Artist</p>
        </div>
      </div>
    </div>
  );
}

export default Artist;
