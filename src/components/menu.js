import React, { useContext } from "react";
import Menuprovider from "react-flexible-sliding-menu"
import { Link } from "react-router-dom";
import home from "../assets/home.png";
import notifications from "../assets/notification.png";
import profile from "../assets/profile.png"
import MenuContext from "react-flexible-sliding-menu"

export default function NavMenu() {
    const {closeMenu} = useContext(MenuContext);
    return (
        <Menuprovider>
            <div className="col-sm-3 icon">
                <div className="m-3">
                    <span onClick={closeMenu}>&times;</span>
                    <ul className="navbar-nav justify-content-around">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                <img src={home} className="imgRes" alt="home"></img>
                                <span className="imgtxt">Home</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                <img src={notifications} className="imgRes" alt="notification"></img>
                                <span className="imgtxt">Notifications</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/personalDetails" className="nav-link">
                                <img src={profile} className="imgRes" alt="profile"></img>
                                <span className="imgtxt">Profile</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </Menuprovider>
    )
}