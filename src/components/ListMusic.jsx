import React from "react";
import MusicCard from "./MusicCard";
import { useNavigate } from "react-router-dom";

function ListMusic(props) {
  const navigate = useNavigate()
  const path = props ?.path || "/"
  return (
    <div
      style={{
        width: "100%",
        height: "fit-content",
        margin: "0px auto",
      }}
    >
      <div
        className="heading"
        style={{
          display: "flex",
          // border: "1px solid white",
          justifyContent: "space-between",
          padding: "5px 25px",
        }}
      >
        <h3 style={{ fontSize: "25px" }}>{props.title}</h3>
        {props.show && (
          <button
            id="show"
            style={{
              marginRight: "50px",
              backgroundColor: "transparent",
              outline: "none",
              border: "none",
              fontWeight: "bold",
              color: "gray",
              fontSize: "15px",
            }}
            onClick={() => (navigate(`${path}`))}
          >
            Show all
          </button>
        )}
      </div>
      <div
        className="items"
        style={{
          width: "98%",
          height: "fit-content",
          margin: "5px auto",
          display: "flex",
          overflowX: "scroll",
          overflowY: "scroll",
        }}
      >
        {props?.songs.map((item) => {
          return (
            <MusicCard songName={item.songName} artistName={item.artistName} />
          );
        })}
      </div>
    </div>
  );
}

export default ListMusic;
