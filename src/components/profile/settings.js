import React, { useState } from "react";
import SettingsIcon from "../../assets/profile_images/settings_icon.png"
import SettingsDropDownIcon from "../../assets/profile_images/settings_dropdown_icon.png"
import PersonalDetailsIcon from "../../assets/profile_images/personal_details_icon.png"
import faqIcon from "../../assets/profile_images/faq-icon.png"
const Settings = () => {
    const [dropdown, setDropDown] = useState('');
    const toggleSettings = () => {

        setDropDown((dropdown === "") ? [settingsMenu] : "")
    }

    let settingsMenu = <div className="container">
        <div className="sub_settings_wrap" id="subSettings">
            <div class="sub_settings">
            <div className="settings_drop_icon flex py-5 text-left">
                <img src={SettingsDropDownIcon} alt="settings_dropdown_icon"></img>
                    <h3>SETTINGS</h3>
                </div>
                <div className="personal_details_icon flex py-5">
                    <img src={PersonalDetailsIcon} alt="personal_details_icon"></img>
                    <p>Personal Details</p>
                </div>
                <div className="faq_icon flex py-5">
                    <img src={faqIcon} alt="faq_icon"></img>
                    <p>Frequently Asked Questions</p>
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