import { use, useEffect, useState } from "react";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";
import authserv from "./appwrite/authServ";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
import { HomePage } from "./pages";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    authserv.getUserDetails().then((userdata) => {
      if (userdata) {
        dispatch(login(userdata));
      } else {
        dispatch(logout());
      }
    });
  },[]);
  return (
    <>
      <Outlet/>
    </>
  );
}

export default App;
