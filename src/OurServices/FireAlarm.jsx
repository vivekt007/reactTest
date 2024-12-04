import React, { useEffect, useState } from "react";
import { observeElements } from "../animations.js";

import { useNavigate } from "react-router-dom";
import "../styles/FireExtinguisher.css";

// icons
import Close from "../assets/Icons/close.svg";
import ArrowRight from "../assets/Icons/arrow-right.svg";
import CoverageIcon from "../assets/Icons/Coverage.svg";
import DetectionIcon from "../assets/Icons/Detection.svg";
import SpecialityIcon from "../assets/Icons/Speciality.svg";

// components
import Footer from "../components/Footer.jsx";

// product images
import AddressableImage from "../assets/ProductImages/ProductFireAlarm.png";
import ConventionalImage from "../assets/ProductImages/ProductFireAlarmConventional.png";

function FireAlarm() {
    useEffect(() => {
        observeElements();
    }, []);

    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("Addressable"); // Default active tab
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

    // Alarm system data
    const alarmData = {
        Addressable: {
            coverage: "Large Buildings & Complexes",
            detection: "High Precision",
            speciality: "Wire less",
            details: `Addressable fire alarm systems are highly advanced and designed for large, complex buildings. Each device has its own unique address, allowing for pinpoint detection of fire or faults. These systems offer rapid response times, high precision, and are ideal for facilities that require detailed monitoring, like offices, hotels, and hospitals.`,
        },
        Conventional: {
            coverage: "Small to Medium Areas",
            detection: "Zone-based",
            speciality: "Cost-Effective",
            details: `Conventional fire alarm systems divide areas into zones, providing basic detection for smaller spaces. While less precise compared to addressable systems, they are cost-effective and widely used in residential and small commercial spaces. Maintenance and troubleshooting are simpler due to their straightforward design.`,
        },
    };

    // Images for each type
    const alarmImages = {
        Addressable: AddressableImage,
        Conventional: ConventionalImage,
    };

    return (
        <div className="fire-extinguisher blur">
            <div className="extinguisher-row1">
                <div className="extinguisher-r1-col1">
                    <div className="ext-r1-c1-row1">
                        <h1>Fire Alarm System</h1>
                    </div>

                    {/* Tabs Section */}
                    <div className="ext-r1-c1-row2">
                        <h3>TYPES</h3>
                        <div className="ext-r1-c1-r2-tabs">
                            {Object.keys(alarmData).map((type) => (
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
                                            src={CoverageIcon}
                                            alt="Coverage"
                                        />
                                    </div>
                                    <div className="high-text">
                                        <p>{alarmData[activeTab].coverage}</p>
                                        <h5>Coverage</h5>
                                    </div>
                                </div>
                                <div className="highlights-container">
                                    <div className="high-icon">
                                        <img
                                            src={DetectionIcon}
                                            alt="Detection"
                                        />
                                    </div>
                                    <div className="high-text">
                                        <p>{alarmData[activeTab].detection}</p>
                                        <h5>Detection</h5>
                                    </div>
                                </div>
                                <div className="highlights-container">
                                    <div className="high-icon">
                                        <img
                                            src={SpecialityIcon}
                                            alt="speciality"
                                        />
                                    </div>
                                    <div className="high-text">
                                        <p>{alarmData[activeTab].speciality}</p>
                                        <h5>Speciality</h5>
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
                                    {alarmData[activeTab].details}
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
                            src={alarmImages[activeTab]}
                            alt={`${activeTab} Fire Alarm`}
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

export default FireAlarm;
