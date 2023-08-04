/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import ".//mobile.css";
import logo from "../assets/logo.png";
import home from "../assets/home.png";
import notifications from "../assets/notification.png";
import profile from "../assets/profile.png"

const Header = function () {

    const openNav = () => {
        document.getElementById("openMenu").style.display = "block";
        }

    const closeNav = () => {
        document.getElementById("openMenu").style.display = "none";
    }

    return (
        <div className="header">
            <div className="nav navbar-expand-md text-dark row">
                <div className="col-sm-3">
                    <div className="m-4 justify-content-center">
                        <ul className="navbar-nav">
                            <li className="navbar-brand">
                                <Link to="/homePage">
                                    <img className="logo" src={logo} alt="logo"></img>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-6 pt-2 searchbar">
                    <form className="form-group row pt-sm-5">
                        <div className="col-10">
                            <input typeof="search" width="80%" placeholder="What are you searching for?" className="form-control" />
                        </div>
                        <div className="col-2">
                            <button className="btn btn-success">Search</button>
                        </div>
                    </form>
                </div>
                <span className="navmenu" onClick={openNav}>&#9776;</span>
                <div className="col-sm-3 icon" id="openMenu">
                    <div className="m-3">
                        <span className="close" onClick={closeNav}>&times;</span>
                        <ul className="navbar-nav justify-content-around">
                            <li className="nav-item">
                                <Link to="/homePage" className="nav-link">
                                    <img src={home} className="imgRes" alt="home"></img>
                                    <span className="imgtxt">Home</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/homePage" className="nav-link">
                                    <img src={notifications} className="imgRes" alt="notification"></img>
                                    <span className="imgtxt">Notifications</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/profile/profile_page" className="nav-link">
                                    <img src={profile} className="imgRes" alt="profile"></img>
                                    <span className="imgtxt">Profile</span>
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav icontext pl-5">
                            <li className="nav-item">
                                <Link to="/homePage" className="nav-link imgtxt0">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/homePage" className="nav-link imgtxt0">
                                    Notifications
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/profile_page" className="nav-link imgtxt0">
                                    Profile
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header