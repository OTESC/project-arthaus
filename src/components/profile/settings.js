import React, { useState } from "react";
import SettingsIcon from "../../assets/profile_images/settings_icon.png"
const Settings = () => {
    const [dropdown, setDropDown] = useState('');
    const toggleSettings = () => {

        setDropDown((dropdown === "") ? [settingsMenu] : "")
    }

    let settingsMenu = <div className="container">
        <div className="sub_settings_wrap" id="subSettings">
            <div class="sub_settings">
                <div className="faq flex py-5">
                    <img src={SettingsIcon} alt="faq_icon"></img>
                    <p>FAQ</p>
                </div>


            </div>
        </div>
    </div>



    return (
        <div>
            <img
                src={SettingsIcon}
                className="img-fluid settings_icon"
                alt="settings_icon" onClick={toggleSettings}

            />{dropdown}
        </div>





    )
}
export default Settings