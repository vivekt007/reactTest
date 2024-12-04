import React, { useEffect, useState } from "react";
import { observeElements } from "../animations.js";
import { useNavigate } from "react-router-dom";
import "../styles/FireExtinguisher.css";

// icons
import Close from "../assets/Icons/close.svg";
import ArrowRight from "../assets/Icons/arrow-right.svg";
import AccuracyIcon from "../assets/Icons/Accuracy.svg";
import SpeedIcon from "../assets/Icons/Speed.svg";
import SecurityIcon from "../assets/Icons/Security.svg";

// components
import Footer from "../components/Footer.jsx";

// product images
import FingerprintImage from "../assets/ProductImages/ProductBiometricsFingerPrint.png";
import CardImage from "../assets/ProductImages/ProductBiometricsCard.png";
import FaceImage from "../assets/ProductImages/ProductBiometricsFace.png";
import PasscodeImage from "../assets/ProductImages/ProductBiometricsPasscode.png";

function Biometrics() {
    useEffect(() => {
        observeElements();
    }, []);

    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("Fingerprint"); // Default active tab
    const [showMore, setShowMore] = useState(false); // For "See More" toggle

    // handlers
    const handleTabClick = (tab) => setActiveTab(tab);
    const toggleDetails = () => setShowMore(!showMore);
    const handleEnquire = () => {
        window.open(
            "https://wa.me/919606850350?text=Hello%20I%20have%20an%20enquiry",
            "_blank"
        );
    };

    // Biometrics data
    const biometricsData = {
        Fingerprint: {
            accuracy: "High Precision",
            speed: "1-2 Seconds",
            security: "Unique Identification",
            details: `Fingerprint biometrics offer fast, reliable, and unique identification, widely used for secure access control in offices and high-security areas. The technology scans and matches fingerprint patterns for authentication.`,
        },
        Card: {
            accuracy: "Moderate Precision",
            speed: "2-3 Seconds",
            security: "Card-Based",
            details: `Card-based biometrics utilize RFID or smart cards for identification and access control. They are commonly used in workplaces, gyms, and schools, providing cost-effective and customizable solutions.`,
        },
        Face: {
            accuracy: "AI-Powered Precision",
            speed: "1-2 Seconds",
            security: "Hands-Free",
            details: `Face recognition biometrics use advanced AI to identify individuals based on facial features. Ideal for high-traffic areas, they provide seamless, hands-free access control with excellent accuracy.`,
        },
        Passcode: {
            accuracy: "Moderate Precision",
            speed: "1 Second",
            security: "Custom PIN-Based",
            details: `Passcode systems rely on user-created PINs for secure access control. They are easy to implement and widely used in residences and offices. Passcodes provide basic security and are ideal for low-risk areas.`,
        },
    };

    // Images for each type
    const biometricsImages = {
        Fingerprint: FingerprintImage,
        Card: CardImage,
        Face: FaceImage,
        Passcode: PasscodeImage,
    };

    return (
        <div className="fire-extinguisher blur">
            <div className="extinguisher-row1">
                <div className="extinguisher-r1-col1">
                    <div className="ext-r1-c1-row1">
                        <h1>Biometrics</h1>
                    </div>

                    {/* Tabs Section */}
                    <div className="ext-r1-c1-row2">
                        <h3>TYPES</h3>
                        <div className="ext-r1-c1-r2-tabs">
                            {Object.keys(biometricsData).map((type) => (
                                <div
                                    key={type}
                                    className={`tab ${
                                        activeTab === type
                                            ? "active"
                                            : "inactive"
                                    }`}
                                    onClick={() => handleTabClick(type)}
                                >
                                    {type}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="extinguisher-content">
                        <div className="content">
                            <div className="ext-cont-row2">
                                <div className="highlights-container">
                                    <div className="high-icon">
                                        <img
                                            src={AccuracyIcon}
                                            alt="Accuracy"
                                        />
                                    </div>
                                    <div className="high-text">
                                        <p>
                                            {biometricsData[activeTab].accuracy}
                                        </p>
                                        <h5>Accuracy</h5>
                                    </div>
                                </div>
                                <div className="highlights-container">
                                    <div className="high-icon">
                                        <img src={SpeedIcon} alt="Speed" />
                                    </div>
                                    <div className="high-text">
                                        <p>{biometricsData[activeTab].speed}</p>
                                        <h5>Speed</h5>
                                    </div>
                                </div>
                                <div className="highlights-container">
                                    <div className="high-icon">
                                        <img
                                            src={SecurityIcon}
                                            alt="Security"
                                        />
                                    </div>
                                    <div className="high-text">
                                        <p>
                                            {biometricsData[activeTab].security}
                                        </p>
                                        <h5>Security</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="ext-cont-row3">
                                <h3>DETAILS</h3>
                                <p
                                    className={`details-text ${
                                        showMore ? "expanded" : "collapsed"
                                    }`}
                                >
                                    {biometricsData[activeTab].details}
                                </p>
                                <button
                                    className="see-more-btn"
                                    onClick={toggleDetails}
                                >
                                    {showMore ? "See Less" : "See More"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Image */}
                <div className="extinguisher-r1-col2">
                    <button className="close-btn" onClick={() => navigate(-1)}>
                        <img src={Close} alt="Close" />
                    </button>
                    <div className="extinguisher-r1-c2-row1">
                        <img
                            src={biometricsImages[activeTab]}
                            alt={`${activeTab} Biometrics`}
                        />
                    </div>
                    <div className="extinguisher-r1-c2-row2">
                        <h3>For more details</h3>
                        <button className="enquire-cta" onClick={handleEnquire}>
                            Enquire
                            <img src={ArrowRight} alt="->" />
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Biometrics;
