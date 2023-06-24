/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./signIn.css";
import logoLight from "../assets/logoLight.png"
import background from "../assets/background.png"
import googleIcon from "../assets/googleIcon.png"

function Signup() {
return (
<div>
            <img src={background}  className="backg" alt=""/>
            <div className="contain">
                <div className="signin-logo ">
                    <img src={logoLight} alt="logo" />
                    <h3>A new perspective through every lens.</h3>
                </div>
                <div className="form-container">
                    <h3 className="title">Sign up</h3>
                    <form className="form">
                        <div className="input-group">
                            <label htmlFor="fullname"></label>
                            <input type="text" name="username" id="username" placeholder="Full Name" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="Email"></label>
                            <input type="text" name="email" id="username" placeholder="Email" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password"></label>
                            <input type="password" name="password" id="password" placeholder="Password" />
                        </div>
                        <div className="input-group">
                            <label htmlFor=" confirm password"></label>
                            <input type="password" name="password" id="password" placeholder="Confirm Password" />
                        </div>
                        <button className="sign">Sign up</button>
                    </form>
                    <div className="social-message">
                        <div className="line"></div>
                        <h4 className="message">Signup with social accounts</h4>
                        <div className="line"></div>
                    </div>
                    <div className="social-icons">
                        <button aria-label="Log in with Google" className="icon">
                             <img src={googleIcon} className="google" alt="signin"/> Continue with Google
                        </button>
                    </div>
                    <p><span className="signup">Don't have an account yet? </span> 
                        <a rel="noopener noreferrer" href="#" className="signing">Sign up</a> now.
                    </p>
                </div>
            </div>
        </div>
)

}
export default Signup