
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
import tinga from "../images/tinga.JPG";

export default function HomePage() {

  return (
    <>
      <header>
        <div className="left">
          <h1><strong>Los Mariachis Mexican Restaurant</strong></h1>
          <div className="button-container">
            <button className="btn-lg">Order Online</button>
            <button className="btn-lg">See the Menu</button>
          </div>
        </div>
        <div className="right">
          <img class="d-block w-100" src="https://lh3.googleusercontent.com/p/AF1QipPoMifNUL5pV1VSF0W1ov-kEKWDvATQFHxhMvz4=s1360-w1360-h1020" />
        </div>
      </header>

      <body>
        <section className="preview">
          <div className="blur"><h2>Serving Authentic Mexican Food in Brooklyn for over 20 Years</h2></div>
        </section>

        <section className="bio">
          <div className="bio-para-container">
            <h4 className="para-first">Live Mariachis Every Friday from 8pm to 11pm</h4>
            <img src="https://lh3.googleusercontent.com/p/AF1QipPrNSzc1rMms-6vBs5W3CIS10RGxwaNJ2vP7Fkf=s1360-w1360-h1020"></img>
          </div>
          <div className="bio-para-container">
            <img src={fajitas} alt="fajitas"></img>
            <h4 className="para-last">Live Mariachis Every Friday from 8pm to 11pm</h4>
          </div>
        </section>

        <section className="images-section">
          <h2>Gallery</h2>
          <div className="image-container">
            <img src={tacos}></img>
            <img src={interior1}></img>
            <img src={tinga}></img>
            <img src={interior2}></img>
            <img src={chile}></img>
            <img src={burrito}></img>
          </div>
        </section>
      </body>

      <footer>
        <div className="contact-container">
          contact us
        </div>
      </footer>
    </>
  );
}
