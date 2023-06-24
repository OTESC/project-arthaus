import React from "react";
import "../harthaus.css"

const DisplayMode = function () {
    return (
        <div>
            <input id="switch" type="checkbox" />
            <div class="app">
                <div class="body"></div>
                <div class="phone">

                    <div class="content">
                        <label for="switch">
                            <div class="toggle"></div>
                            <div class="names">
                                <p class="light">Light</p>
                                <p class="dark">Dark</p>
                            </div>
                        </label>


                    </div>

                </div>
            </div>
        </div>

    )
}

export default DisplayMode