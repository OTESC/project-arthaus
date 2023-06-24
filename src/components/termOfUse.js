import React from "react";
import Header from './header.js';
import Previous from "./prevButton.js"
import "bootstrap/dist/css/bootstrap.css";
import "../harthaus.css"

function TermOfUse() {
    return (
        <div>
            <Header />
            <div className="m-5">
                <Previous />
                <div className="text-center pb-5 mb-5">
                    <h3 className="title">Terms of Use</h3>
                    <h5>Introduction</h5>
                    <p>Welcome to our website, which is dedicated to showcasing the work of photographers from around the world.
                        By using our website, you agree to these terms of use.
                        If you do not agree to these terms, please do not use our website.
                    </p>
                    <h5>Intellectual Property</h5>
                </div>
            </div>
        </div>
    )
}

export default TermOfUse;