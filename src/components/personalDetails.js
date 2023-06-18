import React from "react";
import Header from './header.js';
import Previous from "./prevButton.js"
import logo from "../assets/logo.png"
import "bootstrap/dist/css/bootstrap.css";
import "../harthaus.css"


function PersonalDetails() {
    return (
        <div>
            <Header />
            <div className="m-5">
               <Previous/>
                <div className="text-center pb-5 mb-5">
                    <img src={logo} className="mx-auto d-block rounded-circle" alt="displayPicture" />
                    <input type="file" className="text-center" />
                </div>
                <div className="mt-5 pt-5 ml-4">
                    <form className="formsty mb-5" action="#" method="post" noValidate>
                        <label htmlFor="fullName" className="form-label">Full name</label>
                        <input type="text" name="fullName" placeholder="The Uprising" className="form-control mb-3" />
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" name="email" placeholder="theuprising@gmail.com" className="form-control mb-3" />
                        <label htmlFor="bio" className="form-label">Bio</label>
                        <textarea name="bio" rows={10} cols={10} placeholder="Hey there, I'm David, a photographer based in Akure.
                     I have a passion for capturing the beauty of modern architecture, from the sleek lines of skyscrapers
                      to the intricate details of modern homes.
                       I'm fascinated by the way that architecture can shape our environment and influence the way
                        we live our lives. My goal is to create images that
                         showcase the beauty and complexity of modern design, 
                         and inspire people to appreciate the world around them in a new way."
                            className="form-control mb-3" />
                        <div className="row">
                            <div className="col-sm-9">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" name="password" placeholder="password" className="form-control mb-3" />
                            </div>
                            <div className="col-sm-3 text-end mt-4">
                                <button className="btn btn-success mt-2" required>Change</button>
                            </div>
                        </div>
                        <label htmlFor="website" className="form-label">Website</label>
                        <input type="text" name="website" placeholder="behance.com/theuprising" className="form-control" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PersonalDetails