import React, { useEffect, useState } from "react";
import { observeElements } from "../animations.js";

import { useNavigate } from "react-router-dom";
import "../styles/FireExtinguisher.css";

// icons
import Close from "../assets/Icons/close.svg";
import ArrowRight from "../assets/Icons/arrow-right.svg";
import CapacityIcon from "../assets/Icons/CapacityIcon.svg";
import PressureIcon from "../assets/Icons/PressureIcon.svg";
import FireSafetyIcon from "../assets/Icons/FireSafetyService.svg";

// components
import Footer from "../components/Footer.jsx";

// product images
import ABCImage from "../assets/ProductImages/ProductFireExtuinguisherABC.png";
import CO2Image from "../assets/ProductImages/ProductFireExtuinguisherCO2.png";
import CleanAgentImage from "../assets/ProductImages/ProductFireExtuinguisherCleanAgent.png";
import WaterImage from "../assets/ProductImages/ProductFireExtuinguisherWater.png";
import FoamImage from "../assets/ProductImages/ProductFireExtuinguisherFoam.png";
import KTypeImage from "../assets/ProductImages/ProductFireExtuinguisherKtype.png";
import LithiumImage from "../assets/ProductImages/ProductFireExtuinguisherKtype.png";

function FireExtinguisher() {
    useEffect(() => {
        observeElements();
    }, []);

    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("ABC");
    const [showMore, setShowMore] = useState(false);
    const toggleDetails = () => setShowMore(!showMore);

    // handlers
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleEnquire = () => {
        window.open(
            "https://wa.me/919606850350?text=Hello%20I%20have%20an%20enquiry",
            "_blank"
        );
    };

    // Mapping extinguisher types to images
    const extinguisherImages = {
        ABC: ABCImage,
        CO2: CO2Image,
        CleanAgent: CleanAgentImage,
        Water: WaterImage,
        Foam: FoamImage,
        KType: KTypeImage,
        Lithium: LithiumImage,
    };

    // Extinguisher details data
    const extinguisherDetails = {
        ABC: {
            ratings: "13A/55B",
            capacity: "2kg / 4kg / 6kg / 9kg",
            pressure: "15 Bars",
            fireClass: "A / B / C / E",
            details: `An ABC-type fire extinguisher is a multi-purpose device that
            combats Class A (ordinary combustibles), Class B (flammable liquids),
            and Class C (electrical) fires. It contains dry chemical powder
            that suppresses flames and provides versatile fire protection.`,
        },
        CO2: {
            ratings: "21A/55B",
            capacity: "2kg / 4.5kg / 6.5kg / 22.5kg",
            pressure: "70 Bars",
            fireClass: "B / C / E",
            details: `CO₂ extinguishers displace oxygen to smother flames, ideal for 
            Class B and electrical fires. They leave no residue, making them
            suitable for offices and sensitive equipment.`,
        },
        CleanAgent: {
            ratings: "2A/55B",
            capacity: "2kg / 4kg / 6kg / 9kg",
            pressure: "15 Bars",
            fireClass: "A / B / C / E",
            details: `Clean agent extinguishers use non-conductive gases to suppress fires
            without residue, ideal for sensitive equipment areas like data centers.`,
        },
        Water: {
            ratings: "1A/3A",
            capacity: "6Ltr / 9Ltr ",
            pressure: "12 Bars",
            fireClass: "A",
            details: `Water extinguishers cool burning materials to combat Class A fires,
            such as wood, paper, or cloth. They are eco-friendly but unsuitable
            for electrical or flammable liquid fires.`,
        },
        Foam: {
            ratings: "1A/3A",
            capacity: "9Ltr",
            pressure: "15 Bars",
            fireClass: "A / B",
            details: `Foam extinguishers are effective for Class A and B fires. They
            smother flammable liquids and cool combustibles, suitable for
            warehouses and garages.`,
        },
        KType: {
            ratings: "25F",
            capacity: "6Ltr / 9Ltr",
            pressure: "15 Bars",
            fireClass: "F / K",
            details: `K-type extinguishers are used in commercial kitchens for Class F fires,
            using a wet chemical solution to combat fires caused by cooking oils
            and fats.`,
        },
        Lithium: {
            ratings: "5A",
            capacity: "2Ltr / 3Ltr / 6Ltr / 9Ltr / 50Ltr",
            pressure: "15 Bars",
            fireClass: "A / Lithium",
            details: `Lithium extinguishers are specialized for metal fires involving lithium
            or lithium-ion batteries. They isolate the fire and prevent re-ignition.`,
        },
    };

    return (
        <div className="fire-extinguisher blur">
            <div className="extinguisher-row1">
                <div className="extinguisher-r1-col1">
                    <div className="ext-r1-c1-row1">
                        <h1>Fire Extinguisher</h1>
                    </div>

                    {/* Tabs Section */}
                    <div className="ext-r1-c1-row2">
                        <h3>TYPES</h3>
                        <div className="ext-r1-c1-r2-tabs">
                            {Object.keys(extinguisherDetails).map((type) => (
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
                            <div className="ext-cont-row1">
                                <h3>RATINGS</h3>
                                <span>
                                    <h2>
                                        {extinguisherDetails[activeTab].ratings}
                                    </h2>
                                    as per IS Norms
                                </span>
                                <div className="rating-bar-container">
                                    <div
                                        className={`rating-bar ${activeTab}-type`}
                                    ></div>
                                </div>
                            </div>
                            <div className="ext-cont-row2">
                                <div className="highlights-container">
                                    <div className="high-icon">
                                        <img
                                            src={CapacityIcon}
                                            alt="Capacity"
                                        />
                                    </div>
                                    <div className="high-text">
                                        <p>
                                            {
                                                extinguisherDetails[activeTab]
                                                    .capacity
                                            }
                                        </p>
                                        <h5>Capacity</h5>
                                    </div>
                                </div>
                                <div className="highlights-container">
                                    <div className="high-icon">
                                        <img
                                            src={PressureIcon}
                                            alt="Pressure"
                                        />
                                    </div>
                                    <div className="high-text">
                                        <p>
                                            {
                                                extinguisherDetails[activeTab]
                                                    .pressure
                                            }
                                        </p>
                                        <h5>Pressure</h5>
                                    </div>
                                </div>
                                <div className="highlights-container">
                                    <div className="high-icon">
                                        <img
                                            src={FireSafetyIcon}
                                            alt="Fire safety"
                                        />
                                    </div>
                                    <div className="high-text">
                                        <p>
                                            {
                                                extinguisherDetails[activeTab]
                                                    .fireClass
                                            }
                                        </p>
                                        <h5>Class of fire</h5>
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
                                    {extinguisherDetails[activeTab].details}
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
                            src={extinguisherImages[activeTab]}
                            alt={`${activeTab} Extinguisher`}
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

export default FireExtinguisher;
