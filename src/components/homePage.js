import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import Header from './header.js';
import Slider from "./slider.js";
import Homebody from "./homebody.js";

function Homepage() {
    
    return(
        <div>
            <Header/>
            <Slider/>
            <Homebody/>
        </div>
    )
}

export default Homepage
