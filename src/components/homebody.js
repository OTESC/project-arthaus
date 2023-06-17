import React, { useEffect, useState } from "react";
import "../harthaus.css"
import AI from "../assets/art/AI.png";
import butternat from "../assets/art/butternat.png"
import egypt from "../assets/art/egypt.png"
import ferris from "../assets/art/ferris.png"
import futureroad from "../assets/art/futureroad.png"
import gadgets from "../assets/art/gadgets.png"
import hitech from "../assets/art/hitech.png"
import jiraffe from "../assets/art/jiraffe.png"
import moose from "../assets/art/moose.png"
import paris from "../assets/art/paris.png"
import roscrapper from "../assets/art/roscrapper.png"
import scenery from "../assets/art/scenery.png"
import scrapper from "../assets/art/scrapper.png"
import scrappers from "../assets/art/scrappers.png"
import smiley from "../assets/art/smiley.png"
import techpark from "../assets/art/techpark.png"
import tscenery from "../assets/art/tscenery.png"
import vr from "../assets/art/vr.png"

function Homebody() {
  const images = [
    AI, butternat, egypt, ferris, futureroad, gadgets, hitech, jiraffe, moose,
    paris, roscrapper, scenery, scrapper, scrappers, smiley, techpark, tscenery, vr
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(Math.floor(Math.random() * images.length))
  const changeImage = () => {
    const randomNumber = Number;
    setCurrentImageIndex(randomNumber);
  }

  useEffect(() => changeImage(), [])


  return (
    <div data-masonry='{"percentPosition": true}' className="imagg">
      <div className="col">
        <img src={images[0]} className="img-thumbnail" alt="1" />
        <img src={images[1]} className="img-thumbnail" alt="2" />
        <img src={images[2]} className="img-thumbnail" alt="3" />
        <img src={images[3]} className="img-thumbnail" alt="4" />
        <img src={images[4]} className="img-thumbnail" alt="5" />
        <img src={images[5]} className="img-thumbnail" alt="6" />
      </div>
      <div className="col">
        <img src={images[6]} className="img-thumbnail" alt="7" />
        <img src={images[7]} className="img-thumbnail" alt="8" />
        <img src={images[8]} className="img-thumbnail" alt="9" />
        <img src={images[9]} className="img-thumbnail" alt="10" />
        <img src={images[10]} className="img-thumbnail" alt="11" />
        <img src={images[11]} className="img-thumbnail" alt="12" />
      </div>
      <div className="col">
        <img src={images[12]} className="img-thumbnail" alt="13" />
        <img src={images[13]} className="img-thumbnail" alt="14" />
        <img src={images[14]} className="img-thumbnail" alt="15" />
        <img src={images[15]} className="img-thumbnail" alt="16" />
        <img src={images[16]} className="img-thumbnail" alt="17" />
        <img src={images[17]} className="img-thumbnail" alt="18" />
      </div>
    </div>
  )
}

export default Homebody;