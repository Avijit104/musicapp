import React, { useState } from "react";
import "./SupportQuestions.css";
function SupportQuestions(props) {
  const [expand, useExpand] = useState(false);
  const displayExpand = (btnId) => {
    useExpand(!expand);
  };
  return (
    <div className="all-questions">
      <div className="questions">
        <div className="question" id={props.qid}>
          <p>{props.question}</p>
          <button
            id={props.qid}
            onClick={() => {
              displayExpand(props.qid);
            }}
          >
            {expand ? (
              <span id="afterExpand">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e3e3e3"
                >
                  <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
                </svg>
              </span>
            ) : (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e3e3e3"
                >
                  <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                </svg>
              </span>
            )}
          </button>
        </div>
        {expand && (
          <>
            <div className="question-border"></div>
            <div className="answer">
              <ul>
                {props.ansList.map((item) => (
                  <li key={item.id}>
                    <p>{item.content}</p>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SupportQuestions;
