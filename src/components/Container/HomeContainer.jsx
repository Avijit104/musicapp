import React from "react";

function HomeContainer({ children }) {
  console.log(children)
  return (
    <div
    style={{
      display: "flex",
      marginTop: "20px",
      padding: "5px",
      gap: "10px",
      width: "100%",
      boxSizing: "border-box",
      overflow: "hidden",
    }}
    >
      {children}
    </div>
  );
}

export default HomeContainer;
