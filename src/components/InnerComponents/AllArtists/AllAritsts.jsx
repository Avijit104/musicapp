import React from "react";
import Artist from "../../Artist";
import Footer from "../../Footer/Footer";

function AllAritsts() {
  const arr = [
    {
      name: "Arijit Singh",
    },
    {
      name: "Lady Gaga",
    },
    {
      name: "Bruno Marse",
    },
    {
      name: "Atif Aslam",
    },
    {
      name: "Anupam Roy",
    },
    {
        name: "Rupam Islam",
      },
      {
        name: "Arijit Singh",
      },
      {
        name: "Lady Gaga",
      },
      {
        name: "Bruno Marse",
      },
      {
        name: "Atif Aslam",
      },
      {
        name: "Anupam Roy",
      },
      {
        name: "Rupam Islam",
      },
      {
        name: "Arijit Singh",
      },
      {
        name: "Lady Gaga",
      },
      {
        name: "Bruno Marse",
      },
      {
        name: "Atif Aslam",
      },
      {
        name: "Anupam Roy",
      },
      {
        name: "Rupam Islam",
      },
      {
        name: "Arijit Singh",
      },
      {
        name: "Lady Gaga",
      },
      {
        name: "Bruno Marse",
      },
      {
        name: "Atif Aslam",
      },
      {
        name: "Anupam Roy",
      },
      {
        name: "Rupam Islam",
      },
    
  ];
  return (
    <div
      className="all-artist"
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        padding: "10px 0px",
        overflowX: "hidden",
        margin: "0px auto",
        backgroundColor: "#121212"
      }}
    >
        <div className="title" style={{width: "98%", margin: "0px auto", marginTop: "50px", padding: "10px 40px"}} >
            <h3 style={{fontSize:"30px"}} >Popular Artists</h3>
        </div>
      <div
        className="aritst"
        style={{
          width: "98%",
          height: "fit-content",
          display: "flex",
          margin: "15px auto",
          flexWrap: "wrap",
          marginTop: "20px"

        }}
      >
        {arr.map((item) => (
          <Artist artistName={item.name} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
;
export default AllAritsts;
