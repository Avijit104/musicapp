import React from "react";

function Logo(props) {
  return (
    <h2 className="logo">
      <p
        style={{
          color: props.colorOuter ? `${props.colorOuter}` : "#ffffff",
          fontSize: props.fontSize ? `${props.fontSize}` : "2rem",
          fontWeight: "bold",
        }}
      >
        Vibe
        <span
          style={{
            color: props.colorInner ? `${props.colorInner}` : "#1ed760",
          }}
        >
          Stream
        </span>
      </p>
    </h2>
  );
}

export default Logo;
