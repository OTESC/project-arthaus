import React from "react";
import Header from './header.js';
import Previous from "./prevButton.js"
import logo from "../assets/logo.png"
import "bootstrap/dist/css/bootstrap.css";
import "../harthaus.css";
import { useState } from 'react';
import $ from 'jquery';

function PersonalDetails() {
    const [result, setResult] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [password, setPassword] = useState("");
    const [website, setWebsite] = useState("");

    const handleChange = (e) => {
        const {name , value} = e.target;
        if(name === "fullName"){
            setFullName(value);
        }
        if(name === "bio"){
            setBio(value);
        }
        if(name === "email"){
            setEmail(value);
        }
        if(name === "password"){
            setPassword(value);
        }
        if(name === "website"){
            setWebsite(value);
        }
    };

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
        console.log(fullName, bio, email, website, password)
    };

    return (
        <div className="personalDetails">
            <Header />

            <div className="m-5">
                <Previous />
                <div className="text-center pb-5 mb-5">
                    <h3 className="title">Personal Details</h3>
                    <img id="dpclick" src={logo} className="mx-auto d-block rounded-circle" alt="displayPicture" />
                    <input type="file" className="text-center" />
                </div>
                <div className="mt-5 pt-5 ml-4 subtitle">
                    <form className="formsty mb-5" action="http://harthaus.000webhostapp.com/server.php" method="post" onSubmit={(event) => handleSubmit(event)}>
                        <label htmlFor="fullName" className="form-label">Full name</label>
                        <input type="text" name="fullName" placeholder="The Uprising" value={fullName} onChange={(event) => handleChange(event)} className="form-control mb-3" />
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" name="email" placeholder="theuprising@gmail.com" value={email} onChange={(event) => handleChange(event)} className="form-control mb-3" />
                        <label htmlFor="bio" className="form-label">Bio</label>
                        <textarea name="bio" rows={10} cols={10} placeholder="Hey there, I'm David, a photographer based in Akure.
                     I have a passion for capturing the beauty of modern architecture, from the sleek lines of skyscrapers
                      to the intricate details of modern homes.
                       I'm fascinated by the way that architecture can shape our environment and influence the way
                        we live our lives. My goal is to create images that
                         showcase the beauty and complexity of modern design, 
                         and inspire people to appreciate the world around them in a new way."
                            className="form-control mb-3" value={bio} onChange={(event) => handleChange(event)} />
                        <div className="row">
                            <div className="col-sm-9">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" name="password" placeholder="password" value={password} onChange={(event) => handleChange(event)} className="form-control mb-3" />
                            </div>
                            <div className="col-sm-3 text-end mt-4">
                                <button className="btn btn-success mt-2" required>Change</button>
                            </div>
                        </div>
                        <label htmlFor="website" className="form-label">Website</label>
                        <input type="text" name="website" placeholder="behance.com/theuprising" value={website} onChange={(event) => handleChange(event)} className="form-control" />
                    </form>
                </div>
            </div>
            <h4>{result}</h4>

        </div>
    )
}

export default PersonalDetails