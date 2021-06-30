import React from "react";
import "../CSS/Home.css";
import light from "./tenor.gif";
export default function Home() {
  return (
    <div>
      <div className="home">
        <h1>Think Website</h1>
        <h4>Make Your learning Easy</h4>
        <div className="container">
          <img src={light} alt="Light" width="300px" height="300px" />
          <p>
            This is a website, which will list a courses for your technical
            learning. The courses will be best as per our experience and others
            too. Just blow your brain.... Today is your day start learning..
          </p>
        </div>
      </div>
    </div>
  );
}
