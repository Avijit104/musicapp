import React from "react";

function AuthContainer({ children }) {
  return (
    <div
      style={{
        width: "100%",
        background: "linear-gradient(to bottom, #1f1f1f 10%, transparent)",
        height: "91vh",
        padding: "60px 0px",
        boxSizing: "border-box",
      }}

    >
      {children}
    </div>
  );
}

export default AuthContainer;
