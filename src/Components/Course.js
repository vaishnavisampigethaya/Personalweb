import React from "react";
import "../CSS/Course.css";
import java from "../image/java.jpg";
import java1 from "../image/java.png";
import html from "../image/html.png";
import html1 from "../image/html.jpg";
import CSS from "../image/css.jpg";
import css from "../image/css1.jpg";
import c from "../image/c.jpg";
import c1 from "../image/c.png";
import cp from "../image/c++.jpg";
import python from "../image/python.jpg";
import python1 from "../image/python1.jpg";
import python2 from "../image/python3.jpg";
import javas from "../image/javascript.png";
export default function Course(props) {
  return (
    <div>
      <div className="course">
        <h3>Java</h3>
        <br></br>
        <div className="sub">
          <a href="https://www.geeksforgeeks.org/java/" target="_blank">
            <img src={java} alt="Java" height="50%" width="62%" />
            <p>Java Course from geeks for geeks</p>
          </a>
        </div>
        <div className="sub">
          <a href="https://www.w3schools.com/java/" target="_blank">
            <img src={java1} alt="Java" height="50%" width="62%" />
            <p>Java Course from W3 school</p>
          </a>
        </div>
        <h3>HTML</h3>
        <div className="sub">
          <a href="https://www.w3schools.com/html/" target="_blank">
            <img src={html} alt="HTML" height="50%" width="62%" />
            <p>HTML Course from W3 school</p>
          </a>
        </div>
        <div className="sub">
          <a href="https://www.javatpoint.com/html-tutorial" target="_blank">
            <img src={html1} alt="HTML" height="50%" width="62%" />
            <p>HTML Course from Javatpoint</p>
          </a>
        </div>
        <h3>CSS</h3>
        <div className="sub">
          <a href="https://www.w3schools.com/w3css/defaulT.asp" target="_blank">
            <img src={CSS} alt="CSS" height="50%" width="62%" />
            <p>CSS Course from W3 school</p>
          </a>
        </div>
        <div className="sub">
          <a
            href="https://www.tutorialspoint.com/css/index.htm"
            target="_blank"
          >
            <img src={css} alt="CSS" height="50%" width="62%" />
            <p>CSS Course from Tutorialspoint</p>
          </a>
        </div>
        <h3>C</h3>
        <div className="sub">
          <a
            href="https://www.geeksforgeeks.org/c-programming-language/"
            target="_blank"
          >
            <img src={c} alt="C" height="50%" width="62%" />
            <p>C Course from Geeks for Geeks</p>
          </a>
        </div>
        <div className="sub">
          <a href="https://www.programiz.com/c-programming" target="_blank">
            <img src={c1} alt="C" height="50%" width="62%" />
            <p>C Course from Programiz</p>
          </a>
        </div>
        <h3>C++</h3>
        <div className="sub">
          <a href="https://www.geeksforgeeks.org/cpp-tutorial/" target="_blank">
            <img src={cp} alt="C++" height="50%" width="62%" />
            <p>C++ Course from Geeks for Geeks</p>
          </a>
        </div>
        <h3>Python</h3>
        <div className="sub">
          <a href="https://www.w3schools.com/python/" target="_blank">
            <img src={python} alt="python" height="50%" width="62%" />
            <p>Python Course from W3Schools</p>
          </a>
        </div>
        <div className="sub">
          <a
            href="https://www.geeksforgeeks.org/python-programming-language/learn-python-tutorial/"
            target="_blank"
          >
            <img src={python1} alt="python" height="50%" width="62%" />
            <p>Python Course from Geeks for Geeks</p>
          </a>
        </div>
        <div className="sub">
          <a
            href="https://www.tutorialspoint.com/python/index.htm"
            target="_blank"
          >
            <img src={python2} alt="python" height="50%" width="62%" />
            <p>Python Course from Tutorialspoint</p>
          </a>
        </div>
        <h3>JavaScript</h3>
        <div className="sub">
          <a href="https://www.w3schools.com/js/" target="_blank">
            <img src={javas} alt="javascript" height="50%" width="62%" />
            <p>JavaScript Course from W3Schools</p>
          </a>
        </div>
      </div>
    </div>
  );
}
