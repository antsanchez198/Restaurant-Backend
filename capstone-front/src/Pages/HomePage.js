
import React from "react";
import { useState, useEffect } from "react";
import Home from "./Home.css";
import fajitas from "../images/fajitas.JPG";
import burrito from "../images/burrito.JPG";
import chile from "../images/chile.JPG";
import pasta from "../images/pasta.JPG";
import interior1 from "../images/interior1.jpg";
import interior2 from "../images/interior2.jpg";
import tacos from "../images/tacos.jpg";
import tacos2 from "../images/tacos2.jpg";
import tinga from "../images/tinga.JPG";
import exterior from "../images/exterior.JPG";
import mariachis_playing from "../images/mariachis_playing.jpg";
import instagram from "../images/instagram.png";
import location from "../images/location_icon.png";
import restaurant from "../images/restaurant.png";

import { Link } from "react-router-dom"

export default function HomePage() {

  return (
    <>
      <header>
        <div className="left">
          <h1><strong>Los Mariachis Mexican Restaurant</strong></h1>
          <div className="button-container">
            <Link to="/menu"><button className="btn-lg transition">Order Online</button></Link>
            <Link to="/order"><button className="btn-lg transition">See the Menu</button></Link>
          </div>
        </div>
        <div className="right">
          <img class="d-block w-100" src={exterior} alt="Restarant Picture" />
        </div>
      </header>

      <body>
        <section className="preview">
          <div className="blur"><h3>Serving Authentic Mexican Food <span>for over <strong>20 Years</strong></span></h3></div>
        </section>

        <section className="bio-section">
          <div className="bio-section-container">
            <div className="bio-paragraph">
              <h5 className="paragraph"><strong>Live Mariachis</strong> every Friday from 8pm to 11pm</h5>
              <Link to="/menu"><button className="btn-lg transition">
                Visit Us
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" stroke-width="0" fill="currentColor"></path>
                </svg>
              </button></Link>
            </div>
            <img src={mariachis_playing}></img>
          </div>
          <div className="bio-section-container">
            <img src={fajitas} alt="fajitas"></img>
            <div className="bio-paragraph">
              <h5 className="paragraph"><strong>Comforting Food</strong>inspired from Puebla, Mexico</h5>
              <Link to="/menu"><button className="btn-lg transition">See Menu
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tools-kitchen-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M19 3v12h-5c-.023 -3.681 .184 -7.406 5 -12zm0 12v6h-1v-3m-10 -14v17m-3 -17v3a3 3 0 1 0 6 0v-3"></path>
                </svg></button></Link>
            </div>
          </div>
        </section>

        <section className="images-section">
          <h2><strong>Gallery</strong></h2>
          <div className="image-container">
            <img src={tacos} className="rectangle"></img>
            <img src={interior2} className="rectangle" ></img>
            <img src={tinga} className="rectangle"></img>
            <img src={burrito} className="rectangle"></img>
            <img src={chile} className="box"></img>
            <img src={tacos2} className="rectangle"></img>
          </div>
        </section>
      </body>

      <footer>
        <section className="contact-section">
          <div className="blur">
            <div className="contact-container">
              <div className="cc-inner-left">
                <h1>Contact Us</h1>
                <div className="cc-inner-info">
                  <h3>Hours</h3>
                  <p>Monday: 11am - 10pm</p>
                  <p>Tuesday: 11am - 10pm</p>
                  <p>Wednesday: 11am - 10pm</p>
                  <p>Thursday: 11am - 10pm</p>
                  <p>Friday: 11am - 10pm</p>
                  <p>Saturday: 11am - 10pm</p>
                  <p>Sunday: 11am - 10pm</p>
                  <div className="line"></div>
                  <h3>Address</h3>
                  <p>805 Coney Island Ave, Brooklyn, NY</p>
                  <div className="line"></div>
                  <h3>Phone</h3>
                  <p>718-826-3388</p>
                  <div className="line"></div>
                  <h3>Social Media</h3>
                  <a href="https://instagram.com/losmariachisrestaurant_?igshid=YmMyMTA2M2Y=" title="@losmariachisrestaurant_"><img src={instagram}></img></a>
                </div>
              </div>
              <div className="cc-inner-right">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12110.578729019113!2d-73.9681236!3d40.6377173!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b33b370af79%3A0x8081cf4a6211dcb!2sLos%20Mariachis!5e0!3m2!1sen!2sus!4v1678050870583!5m2!1sen!2sus" width="500" height="400" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
