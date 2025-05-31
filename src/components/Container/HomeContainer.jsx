import React from "react";

function HomeContainer({ children }) {
  console.log(children);
  return (
    <div
      style={{
        display: "flex",
        margin: "-7px auto 0px auto",
        padding: "5px",
        gap: "10px",
        width: "99vw",
        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  );
}

export default HomeContainer;
