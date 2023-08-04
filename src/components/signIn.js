/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from "react";
import "./signIn.css";
import logoLight from "../assets/logoLight.png"
import background from "../assets/background.png"
import googleIcon from "../assets/googleIcon.png"
import { Link } from "react-router-dom";
import $ from 'jquery'

function SignIn() {
    const [result, setResult] = useState("");
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === username) {
            setusername(value);
        }
        if (name === password) {
            setPassword(value);
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
        console.log(username, password)
    };

    return (
        <div>

            <img src={background} className="backg" alt="Harthaus" />
            <div className="contain">
                <div className="signin-logo ">
                    <img src={logoLight} alt="logo" />
                    <h3>A new perspective through every lens.</h3>
                </div>
                <div className="form-container">
                    <h3 className="title">Sign In</h3>
                    <form className="form"  action="http://harthaus.000webhostapp.com/server.php" method="post" onSubmit={(e) => handleSubmit(e)}>
                        <div className="input-group">
                            <input type="text" name="username" id="username" onChange={(e) => handleChange(e)} placeholder="Email Address" />
                        </div>
                        <div className="input-group">
                            <input type="password" name="password" id="password" onChange={(e) => handleChange(e)} placeholder="Password" /> <span>
                                <span>
                                    <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
                                        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
                                    </svg>
                                </span>
                            </span>
                            <div className="forgot">
                                <a rel="noopener noreferrer" href="#">Forgot Password ?</a>
                            </div>
                        </div>

                        <Link to="/homePage" exact className="sign">
                            Sign in
                        </Link>
                    </form>
                    <div className="social-message">
                        <div className="line"></div>
                        <h4 className="message">Or</h4>
                        <div className="line"></div>
                    </div>
                    <div className="social-icons">
                        <button aria-label="Log in with Google" className="icon">
                            <img src={googleIcon} className="google" alt="signin" /> Continue with Google
                        </button>
                    </div>
                    <p><span className="signup">Don't have an account yet? </span>
                        <Link to="/signup" className="signing" exact>Sign up</Link> now.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignIn