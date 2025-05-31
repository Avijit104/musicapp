import React from "react";

function Logo(props) {
  return (
    <h2 className="logo">
      <p
        style={{
          color: `${props.colorOuter}`,
          fontSize: "3rem",
          fontWeight: "bold",
        }}
      >
        Vibe<span style={{ color: `${props.colorInner}` }}>Stream</span>
      </p>
    </h2>
  );
}

export default Logo;
