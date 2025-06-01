import React from "react";
import Header from "../Header/Header";
import SupportHeader from "./SupportHeader/SupportHeader";
import Footer from "../Footer/Footer";
import "./Support.css";
import { Link, StaticRouter } from "react-router-dom";
import SupportQuestions from "./SupportQuestion/SupportQuestions";

function Support() {
  const supportQuestionsList = [
    {
      qid: 1,
      question: "Payment and Billing",
      ansList: [
        {
          id: 1,
          content: "Recomanded topics",
        },
        {
          id: 2,
          content: "Manage payments",
        },
        {
          id: 3,
          content: "Payment methods",
        },
        {
          id: 4,
          content: "Charge help",
        },
      ],
    },
    {
      qid: 2,
      question: "manage your account",
      ansList: [
        {
          id: 1,
          content: "loggin in",
        },
        {
          id: 2,
          content: "profile help",
        },
        {
          id: 3,
          content: "Account help",
        },
        {
          id: 4,
          content: "security",
        },
      ],
    },
    {
      qid: 3,
      question: "Premium plans",
      ansList: [
        {
          id: 1,
          content: "Available plans",
        },
        {
          id: 2,
          content: "Plan settings",
        },
        {
          id: 3,
          content: "Premium family",
        },
        {
          id: 4,
          content: "Premium duo",
        },
        {
          id: 5,
          content: "Premium student",
        },
      ],
    },
    {
      qid: 4,
      question: "In app features",
      ansList: [
        {
          id: 1,
          content: "Gettins started",
        },
        {
          id: 2,
          content: "App settings",
        },
        {
          id: 3,
          content: "Trubleshooting",
        },
        {
          id: 4,
          content: "Palaylists",
        },
        {
          id: 5,
          content: "Features",
        },
        {
          id: 6,
          content: "Scocial features",
        },
        {
          id: 7,
          content: "Podcasts",
        },
        {
          id: 8,
          content: "Audiobooks",
        },
        {
          id: 9,
          content: "Live events",
        },
        {
          id: 10,
          content: "Lisening privecy",
        },
      ],
    },
    {
      qid: 5,
      question: "Device trubleshooting",
      ansList: [
        {
          id: 1,
          content: "Speakers",
        },
        {
          id: 2,
          content: "Smart watches",
        },
        {
          id: 3,
          content: "TVs",
        },
        {
          id: 4,
          content: "Gamming",
        },
        {
          id: 5,
          content: "Car",
        },
        {
          id: 6,
          content: "Voice assistance",
        },
      ],
    },
    {
      qid: 6,
      question: "Safety and Privecy",
      ansList: [
        {
          id: 1,
          content: "Data rights and privecy choices",
        },
        {
          id: 2,
          content: "Understanding my data",
        },
      ],
    },
  ];
  return (
    <div className="support">
      <div className="header">
        <SupportHeader />
      </div>
      <main>
        <div className="support-content">
          <div className="support-hero">
            <p>ViveStream support</p>
            <h4>How can we help you?</h4>
            <span>
              <Link to="/login">Log in</Link>&nbsp;for faster help
            </span>
          </div>
          <div className="support-search">
            <button>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="28px"
                  viewBox="0 -960 960 960"
                  width="28px"
                  fill="#000000"
                >
                  <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                </svg>
              </span>
            </button>
            <input
              type="text/"
              id="supportSearch"
              name="supportSearch"
              placeholder="Search"
            />
          </div>
          <div className="support-questions">
            {supportQuestionsList.map((item) => (
              <SupportQuestions {...item} />
            ))}
          </div>
        </div>
      </main>
      <div className="support-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Support;
