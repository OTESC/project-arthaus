/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import chat from "../assets/chat.png";
import logo from "../assets/logo.png";
import home from "../assets/home.png";
import notifications from "../assets/notification.png";
import profile from "../assets/profile.png"

const Header = function () {
    return (
        <div className="header">
            <div className="nav navbar-expand-md text-dark row">
                <div className="col-sm-3">
                    <div className="m-4 justify-content-center">
                        <ul className="navbar-nav">
                            <li className="navbar-brand">
                                <img className="logo" src={logo} alt="logo"></img>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-6 pt-2">
                    <form className="form-group row pt-5">
                        <div className="col-10">
                            <input typeof="search" width="80%" placeholder="What are you searching for?" className="form-control" />
                        </div>
                        <div className="col-2">
                            <button className="btn btn-success">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-sm-3 icon">
                    <div className="m-3">
                        <ul className="navbar-nav justify-content-around">
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <img src={home} alt="home"></img>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <img src={notifications} alt="notification"></img>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <img src={profile} alt="profile"></img>
                                </a>
                            </li>
                        </ul>
                        <ul className="navbar-nav icontext pl-5">
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Notifications
                                </a>
                            </li>
                            <li className="nav-item">
                            <a href="#" className="nav-link">
                                People
                            </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header