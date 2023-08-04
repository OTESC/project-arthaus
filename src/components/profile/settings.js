import React, { useState } from "react";
import {Outlet, Link} from "react-router-dom"
import SettingsIcon from "../../assets/profile_images/settings_icon.png"
import SettingsDropDownIcon from "../../assets/profile_images/settings_dropdown_icon.png"
import PersonalDetailsIcon from "../../assets/profile_images/personal_details_icon.png"
import FaqIcon from "../../assets/profile_images/faq-icon.png"
import PrivacyIcon from "../../assets/profile_images/privacy_icon.png"
import TermsIcon from "../../assets/profile_images/terms_icon.png"
import LogoutIcon from "../../assets/profile_images/logout_icon.png"
const Settings = () => {
    const [dropdown, setDropDown] = useState('');
    const toggleSettings = () => {

        setDropDown((dropdown === "") ? [settingsMenu] : "")
    }

    let settingsMenu = <><div className="container">
        <div className="sub_settings_wrap" id="subSettings">
            <div class="sub_settings">
            <div className="settings_drop_icon flex py-5 text-left">
                <img src={SettingsDropDownIcon} alt="settings_dropdown_icon"></img>
                    <h3>SETTINGS</h3>
                </div>
                <div className="personal_details_icon flex py-5">
                <Link to="/personalDetails">
                    <img src={PersonalDetailsIcon} alt="personal_details_icon"></img>
                    <p>Personal Details</p>
                    </Link>
                </div>
                <div className="faq_icon flex py-5">
                <Link to="/frequentQuestions">
                    <img src={FaqIcon} alt="faq_icon"></img>
                    <p>Frequently Asked Questions</p>
                    </Link>
                </div>

                <div className="privacy_icon flex py-5">
                <Link to="/privacyPolicy">
                    <img src={PrivacyIcon} alt="privacy_policy_icon"></img>
                    <p>Privacy Policy</p>
                    </Link>
                </div>

                <div className="terms_icon flex py-5">
                <Link to="/termOfUse">
                    <img src={TermsIcon} alt="terms_of_use_icon"></img>
                    <p>Terms Of Use</p>
                    </Link>
                </div>

                <div className="logout_icon flex py-5">
                <Link to="/signIn">
                    <img src={LogoutIcon} alt="logout_icon"></img>
                    <p>Log Out</p>
                    </Link>
                </div>
        
            </div>
        </div>
    </div>
    <Outlet/>
    </>



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