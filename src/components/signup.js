/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./signIn.css";
import { Link } from "react-router-dom";
import logoLight from "../assets/logoLight.png"
import background from "../assets/background.png"
import googleIcon from "../assets/googleIcon.png"
import $ from 'jquery';

function Signup() {
    const [result, setResult] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === fullName) {
            setFullName(value);
        }
        if (name === email) {
            setEmail(value);
        }
        if (name === password) {
            setPassword(value);
        }
        if (name === confirmPassword) {
            setConfirmPassword(value);
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = $(e.target);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                setResult(data);
            }
        });
        console.log(fullName, email, password)
    };
    return (
        <div>
            <img src={background} className="backg" alt="" />
            <div className="contain">
                <div className="signin-logo ">
                    <img src={logoLight} alt="logo" />
                    <h3>A new perspective through every lens.</h3>
                </div>
                <div className="form-container">
                    <h3 className="title">Sign up</h3>
                    <form className="form" action="http://harthaus.000webhostapp.com/server.php" method="post" onSubmit={(e) => handleSubmit(e)}>
                        <div className="input-group">
                            <label htmlFor="fullName"></label>
                            <input type="text" name="fullName" value={fullName} onChange={(e) => handleChange(e)} id="fullName" placeholder="Full Name" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email"></label>
                            <input type="text" name="email" value={email} onChange={(e) => handleChange(e)} id="email" placeholder="Email" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password"></label>
                            <input type="password" name="password" value={password} onChange={(e) => handleChange(e)} id="password" placeholder="Password" />
                        </div>
                        <div className="input-group">
                            <label htmlFor=" confirm password"></label>
                            <input type="password" name="confirmPassword" value={confirmPassword} onChange={(e) => handleChange(e)} id="confirmPassword" placeholder="Confirm Password" />
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
                            <img src={googleIcon} className="google" alt="signin" /> Continue with Google
                        </button>
                    </div>
                    <p><span className="signup">Already have an account? </span>
                        <Link to="/signIn" className="signing" exact>Sign in</Link> now.
                    </p>
                </div>
            </div>
        </div>
    )

}
export default Signup