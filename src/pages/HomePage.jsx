import React from "react";
import { logout } from "../store/authSlice";
import authserv from "../appwrite/authServ";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Header, Hero, HomeContainer, PLayer, SideNav } from "../components";

function HomePage() {
  return (
    <>
      <Header />
      <HomeContainer>
        <SideNav />
        <Hero />
      </HomeContainer>
      <PLayer />
    </>
  );
}

export default HomePage;
