import React from "react";
import "../CSS/About.css";
import learn from "./learning.jpg";
export default function About() {
  return (
    <div className="abt">
      <div className="about">
        <h1>About Us...</h1>
        <img src={learn} alt="About" width="600px" height="400px" />
        <p>
          Create essential skills pathways with verifiable and stackable
          credentials to upskill and train every learner with the highest
          quality E-learning experiences, in today's most job-relevant subject
          areas. Just focus on your learning.... careeer...
        </p>
      </div>
    </div>
  );
}
