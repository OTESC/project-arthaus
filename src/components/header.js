/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Navbar, Nav, NavbarBrand, NavItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import chat from "../assets/chat.png";
import logo from "../assets/logo.png";
import home from "../assets/home.png";
import notifications from "../assets/notification.png";
import profile from "../assets/profile.png"

const Header = function () {
    return (
        <div className="bg-dark">
            <div className="nav navbar-expand-md bg-light text-dark justify-content-around">
                <div>
                    <ul className="navbar-nav">
                        <li className="navbar-brand">
                            <img src={logo} alt="logo"></img>
                        </li>
                    </ul>
                </div>
                <div>
                    <form className="form-group row pt-3">
                        <div className="col-10">
                            <input typeof="search" className="form-control" />
                        </div>
                        <div className="col-2">
                            <button width="60px" height="60px" className="btn btn-success">Submit</button>
                        </div>
                    </form>
                </div>
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <img src={home} alt="home"></img>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <img src={chat} alt="message"></img>
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
                </div>
            </div>
        </div >
    )
}

export default Header