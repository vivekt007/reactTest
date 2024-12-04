import React, { useEffect, useState } from "react";
import { observeElements } from "../animations.js";
import { useNavigate } from "react-router-dom";
import "../styles/FireExtinguisher.css";

// Icons
import Close from "../assets/Icons/close.svg";
import ArrowRight from "../assets/Icons/arrow-right.svg";
import SizeIcon from "../assets/Icons/Coverage.svg";
import MaterialIcon from "../assets/Icons/Reflective.svg";
import LightingIcon from "../assets/Icons/Lighting.svg";

// Components
import Footer from "../components/Footer.jsx";

// Product Images
import ExitSignImage from "../assets/ProductImages/ProductSignageExit.png";
import FireSafetySignImage from "../assets/ProductImages/ProductSignageSafety.png";
import HazardWarningSignImage from "../assets/ProductImages/ProductSignageWarning.png";

function Signage() {
    useEffect(() => {
        observeElements();
    }, []);

    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("Exit");
    const [showMore, setShowMore] = useState(false);

    const handleTabClick = (tab) => setActiveTab(tab);
    const toggleDetails = () => setShowMore(!showMore);
    const handleEnquire = () => {
        window.open(
            "https://wa.me/919606850350?text=Hello%20I%20have%20an%20enquiry",
            "_blank"
        );
    };

    // Signage Data
    const signageData = {
        Exit: {
            sizes: "100x300mm, 150x150mm, 300x900mm",
            material: "Reflective, Non-Reflective",
            lighting: "Non-Backlit, Backlit (External Power Backup)",
            details: `Exit signage ensures safe evacuation routes during emergencies. Highly visible and available in reflective or non-reflective materials, with optional backlit lighting for low-light visibility.`,
        },
        FireSafety: {
            sizes: "100x300mm, 200x200mm, 400x600mm",
            material: "Reflective, Non-Reflective",
            lighting: "Non-Backlit, Backlit (External Power Backup)",
            details: `Fire safety signage highlights locations of firefighting equipment and instructions. Durable and visible in all conditions, aiding rapid response during fire incidents.`,
        },
        HazardWarning: {
            sizes: "150x150mm, 300x300mm, 600x600mm",
            material: "Reflective, Non-Reflective",
            lighting: "Non-Backlit, Backlit (External Power Backup)",
            details: `Hazard warning signage alerts individuals to potential risks. Commonly used in industrial areas, available in various sizes with reflective options for enhanced visibility.`,
        },
    };

    const signageImages = {
        Exit: ExitSignImage,
        FireSafety: FireSafetySignImage,
        HazardWarning: HazardWarningSignImage,
    };

    return (
        <div className="fire-extinguisher blur">
            <div className="extinguisher-row1">
                <div className="extinguisher-r1-col1">
                    <div className="ext-r1-c1-row1">
                        <h1>Signage</h1>
                    </div>

                    {/* Tabs Section */}
                    <div className="ext-r1-c1-row2">
                        <h3>TYPES</h3>
                        <div className="ext-r1-c1-r2-tabs">
                            {Object.keys(signageData).map((type) => (
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
                                        <img src={SizeIcon} alt="Size" />
                                    </div>
                                    <div className="high-text">
                                        <p>{signageData[activeTab].sizes}</p>
                                        <h5>Sizes</h5>
                                    </div>
                                </div>
                                <div className="highlights-container">
                                    <div className="high-icon">
                                        <img
                                            src={MaterialIcon}
                                            alt="Material"
                                        />
                                    </div>
                                    <div className="high-text">
                                        <p>{signageData[activeTab].material}</p>
                                        <h5>Material</h5>
                                    </div>
                                </div>
                                <div className="highlights-container">
                                    <div className="high-icon">
                                        <img
                                            src={LightingIcon}
                                            alt="Lighting"
                                        />
                                    </div>
                                    <div className="high-text">
                                        <p>{signageData[activeTab].lighting}</p>
                                        <h5>Lighting</h5>
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
                                    {signageData[activeTab].details}
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
                            src={signageImages[activeTab]}
                            alt={`${activeTab} Sign`}
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

export default Signage;
