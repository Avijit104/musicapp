import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function PLayer() {
  const auth = useSelector((state) => state.auth.loginStatus);
  // const auth = false ;
  const navigate = useNavigate();
  return (
    <>
      {auth ? (
        <div
          className="player"
          style={{
            width: "99vw",
            border: "1px solid white",
            height: "10vh",
            margin: "5px auto",
            backgroundColor: "#121212",
            boxSizing: "border-box",
            padding: "5px 20px"
          }}
        >
          PLayer
        </div>
      ) : (
        <div
          className="signin"
          style={{
            // border: "1px solid white",
            width: "99vw",
            padding: "15px 25px ",
            boxSizing: "border-box",
            margin: "5px auto",
            background:
              "linear-gradient(to right,#ae2997 1%,rgb(0, 119, 255) )",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            className="sign-text"
            style={{ color: "white", fontWeight: "bold" }}
          >
            <p>ViveSteram</p>
            <p>Sign Up for free and enjoy unlimited music content</p>
          </div>
          <button
            id="signin"
            style={{
              backgroundColor: "white",
              color: "black",
              padding: "10px 30px ",
              outline: "none",
              border: "none",
              borderRadius: "25px",
              fontSize: "15px",
              fontWeight: "bold",
            }}
            onClick={() => navigate("/signup")}
          >
            Sign up free
          </button>
        </div>
      )}
    </>
  );
}

export default PLayer;
