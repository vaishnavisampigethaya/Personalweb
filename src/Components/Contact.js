import React from "react";
import vaishu from "./vaishu.JPG";
import "font-awesome/css/font-awesome.min.css";
import "../CSS/Contact.css";
import logo from "./download.jpg";
export default function Contact() {
  return (
    <div className="con">
      <div className="contact">
        <h1>Contact Us</h1>

        <img src={vaishu} alt="vaishnavi" width="20%" height="20%" />

        <iframe
          title="Ballamanja"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5139.119705119316!2d75.20864404147852!3d12.935460110500099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x388e8b6b60aa646e!2sMahathoabhara%20Shri%20Anantheshwara%20Swami%20Temple%2C%20Ballamanja!5e0!3m2!1sen!2sin!4v1625069964959!5m2!1sen!2sin"
          width="40%"
          height="65%"
          loading="lazy"
          className="map"
        ></iframe>
        <ul>
          <a href="#">
            <li>
              <i className="fa fa-map">
                Near Shree Ananteshwara Swamy Temple,Ballamanja,Machina post and
                village,Belthangady Tq,D.K-574224
              </i>
            </li>
          </a>
          <a href="#">
            <li>
              <i className="fa fa-instagram">vaishnavisampigethya</i>
            </li>
          </a>
          <a href="#">
            <li>
              <i className="fa fa-mobile">9560560959</i>
            </li>
          </a>
          <a href="#">
            <li>
              <i class="fa fa-envelope">vaishnavisampigethya@gmail.com</i>
            </li>
          </a>
          <a href="#">
            <li>
              <i class="fa fa-linkedin-square">vaishnavi sampigethaya</i>
            </li>
          </a>
          <a href="https://github.com/vaishnavisampigethaya">
            <li>
              <i className="fa fa-github">Vaishnavi sampigethaya</i>
            </li>
          </a>
        </ul>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src={logo} alt="Avatar" width="70%" height="70%" />
            </div>
            <div class="flip-card-back">
              <h2>Vaishnavi</h2>
              <h3>Founder/CEO</h3>
              <p>Think Web</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
