import React from "react";
import Header from './header.js';
import Previous from "./prevButton.js"

function PrivacyPolicy() {
    return (
        <div>
            <Header />
            <div className="m-5">
                <Previous />
                <h3 className="text-center mb-2 title">Privacy Policy</h3>
                <div className="subtitle">
                    <div className="mb-5">
                        <h5>Introduction</h5>
                        <p>Our website is dedicated to showcasing the work of photographers from around the world.
                            We are committed to protecting the privacy of our users and visitors.
                            This privacy policy explains how we collect, use, and share information about our users and visitors.</p>
                    </div>
                    <div className="mb-5">
                        <h5>Information we collect</h5>
                        <p>We collect information that you provide to us when you create an account on our website, upload photos, or contact us for support.
                            This information may include your name, email address, and other contact information.
                            We may also collect information about your use of our website, including the pages you visit and the photos you view.</p>
                    </div>
                    <div className="mb-5">
                        <p>We use cookies and other tracking technologies to collect information about your use of our website.
                            Cookies are small data files that are placed on your device when you visit our website.
                            We use cookies to improve your experience on our website, to understand how our website is used, and to personalize content and advertising.</p>
                    </div>
                    <div className="mb-5">
                        <h5>How we use your information</h5>
                        <p>We use the information we collect to provide and improve our website, to communicate with you, and to personalize content and advertising.
                            We may use your information to respond to your inquiries and to provide customer support.
                            We may also use your information to send you promotional emails and other communications that we think may be of interest to you.</p>
                    </div>
                    <div className="mb-5">
                        <h5>How we share your information</h5>
                        <p>We may share your information with third-party service providers that help us operate our website, process payments, or provide customer support.
                            We may also share your information with our partners and advertisers to provide you with personalized content and advertising.</p>
                    </div>
                    <div className="mb-5">
                        <p>We may disclose your information if required by law or if we believe that such disclosure is necessary to protect our rights or the rights of others,
                            to prevent fraud, or to respond to a government request.</p>
                    </div>
                    <div className="mb-5">
                        <h5>Your Choices</h5>
                        <p>You can choose not to provide us with certain information, but this may limit your ability to use certain features of our website.</p>
                    </div>
                    <div className="mb-5">
                        <p>You can opt-out of receiving promotional emails from us by following the instructions in the email.
                            Please note that even if you opt-out of receiving promotional emails,
                            we may still send you non-promotional communications, such as those related to your account or customer support inquiries.</p>
                    </div>
                    <div className="mb-5">
                        <h5>Your Rights</h5>
                        <p>You have the right to access, correct, or delete your personal information.
                            You can do this by logging into your account on our website or by contacting us.</p>
                    </div>
                    <div className="mb-5">
                        <h5>Data Security</h5>
                        <p>We take reasonable measures to protect your information from unauthorized access, use, or disclosure.
                            However, no method of transmission over the internet or method of electronic storage is 100% secure.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PrivacyPolicy