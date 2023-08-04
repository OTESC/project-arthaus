import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./homePage";
import PrivacyPolicy from "./privacyPolicy";
import FrequentlyAskedQuestions from "./frequentQuestions";
import SignIn from "./signIn";
import Signup from "./signup";
import PersonalDetails from "./personalDetails";
import ProfilePage from "./profile/profile_page";

const Routing = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Homepage />} />

            <Route exact path="/signIn" element={<SignIn />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route path="/profile/profile_page" element={<ProfilePage/>}/>

            <Route path="/frequentQuestions" element={<FrequentlyAskedQuestions/>}/>
            <Route path="/privacyPolicy" element={<PrivacyPolicy/>}/>
            <Route path="/personalDetails" element={<PersonalDetails />} />
        </Routes>
    )
}

export default Routing;