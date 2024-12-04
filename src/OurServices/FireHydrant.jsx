import React, { useEffect, useState } from "react";
import { observeElements } from "../animations.js";

import { useNavigate } from "react-router-dom";
import "../styles/FireExtinguisher.css";

// Icons
import Close from "../assets/Icons/close.svg";
import ArrowRight from "../assets/Icons/arrow-right.svg";
import PressureIcon from "../assets/Icons/PressureIcon.svg";
import FireSafetyIcon from "../assets/Icons/FireSafetyService.svg";

// Components
import Footer from "../components/Footer.jsx";

// Product Images
import UpriserImage from "../assets/ProductImages/ProductUpriser.png";
import DownComerImage from "../assets/ProductImages/ProductDownComer.png";

function FireHydrant() {
    useEffect(() => {
        observeElements();
    }, []);

    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("UpRiser"); // Default tab
    const [showMore, setShowMore] = useState(false);

    // Handlers
    const handleTabClick = (tab) => setActiveTab(tab);
    const toggleDetails = () => setShowMore(!showMore);
    const handleEnquire = () => {
        window.open(
            "https://wa.me/919606850350?text=Hello%20I%20have%20an%20enquiry",
            "_blank"
        );
    };

    // Hydrant data
    const hydrantData = {
        UpRiser: {
            image: UpriserImage,
            pressure: "Upto 10 Bars",
            fireClass: "A / B",
            details: `The up riser system is a fire hydrant mechanism designed for high-rise buildings. It pumps water vertically from ground-level sources, such as fire pumps, to hydrants on upper floors. This ensures sufficient water pressure and flow for firefighting operations in elevated areas.`,
        },
        DownComer: {
            image: DownComerImage,
            pressure: "Upto 10 Bars",
            fireClass: "A / B",
            details: `The down comer system relies on gravity to distribute water from an overhead tank to hydrants on lower floors. It is commonly used in multi-storey buildings where an overhead reservoir ensures efficient and consistent water supply for firefighting requirements.`,
        },
    };

    return (
        <div className="fire-extinguisher blur">
            <div className="extinguisher-row1">
                <div className="extinguisher-r1-col1">
                    <div className="ext-r1-c1-row1">
                        <h1>Fire Hydrant</h1>
                    </div>

                    {/* Tabs Section */}
                    <div className="ext-r1-c1-row2">
                        <h3>TYPES</h3>
                        <div className="ext-r1-c1-r2-tabs">
                            {Object.keys(hydrantData).map((type) => (
                                <div
                                    key={type}
                                    className={`tab ${
                                        activeTab === type
                                            ? "active"
                                            : "inactive"
                                    }`}
                                    onClick={() => handleTabClick(type)}
                                >
                                    {type === "UpRiser"
                                        ? "Upriser"
                                        : "Down Comer"}
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
                                            src={PressureIcon}
                                            alt="Pressure"
                                        />
                                    </div>
                                    <div className="high-text">
                                        <p>{hydrantData[activeTab].pressure}</p>
                                        <h5>Pressure</h5>
                                    </div>
                                </div>
                                <div className="highlights-container">
                                    <div className="high-icon">
                                        <img
                                            src={FireSafetyIcon}
                                            alt="Fire Class"
                                        />
                                    </div>
                                    <div className="high-text">
                                        <p>
                                            {hydrantData[activeTab].fireClass}
                                        </p>
                                        <h5>Class of Fire</h5>
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
                                    {hydrantData[activeTab].details}
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
                            src={hydrantData[activeTab].image}
                            alt={activeTab}
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

export default FireHydrant;
