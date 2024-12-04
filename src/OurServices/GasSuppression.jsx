import React, { useEffect, useState } from "react";
import { observeElements } from "../animations.js";

import { useNavigate } from "react-router-dom";
import "../styles/FireExtinguisher.css";

// Icons
import Close from "../assets/Icons/close.svg";
import ArrowRight from "../assets/Icons/arrow-right.svg";
import EffeiciencyIcon from "../assets/Icons/Efficiency.svg";
import CoverageIcon from "../assets/Icons/Coverage.svg";
import SpecialityIcon from "../assets/Icons/Speciality.svg";

// Images
import ElectricalImage from "../assets/ProductImages/ProductsuppressionsysElectrical.png";
import KitchenImage from "../assets/ProductImages/ProductsuppressionsysKitchen.png";
import ServerRoomImage from "../assets/ProductImages/ProductsuppressionsysRoom.png";
import ServerRackImage from "../assets/ProductImages/ProductsuppressionsysRack.png";

// Components
import Footer from "../components/Footer.jsx";

function GasSuppression() {
    useEffect(() => {
        observeElements();
    }, []);

    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("Electrical"); // Default active tab
    const [showMore, setShowMore] = useState(false); // Toggle for "See More"

    const handleTabClick = (tab) => setActiveTab(tab);
    const toggleDetails = () => setShowMore(!showMore);
    const handleEnquire = () => {
        window.open(
            "https://wa.me/919606850350?text=Hello%20I%20have%20an%20enquiry",
            "_blank"
        );
    };

    // Suppression system details
    const suppressionData = {
        Electrical: {
            efficiency: "99% Fire Efficiency",
            area: "Large Coverage",
            reliability: "Immediate Response",
            details: `Electrical suppression systems safeguard electrical rooms and equipment by detecting overheating or sparks and discharging gas agents to extinguish fires. Ideal for substations and electrical control panels.`,
        },
        Kitchen: {
            efficiency: "85% Efficiency",
            area: "Localized Coverage",
            reliability: "Automatic Activation",
            details: `Kitchen suppression systems are designed to protect cooking equipment from grease fires by deploying chemical agents. Widely used in commercial kitchens, they ensure compliance and safety.`,
        },
        ServerRoom: {
            efficiency: "98% Efficiency",
            area: "Room-Wide Coverage",
            reliability: "Non-Conductive Agents",
            details: `Server room protection systems use inert gases or clean agents to prevent downtime and data loss during a fire, ensuring protection for critical IT infrastructure.`,
        },
        ServerRack: {
            efficiency: "96% Efficiency",
            area: "Rack-Specific Coverage",
            reliability: "24/7 Monitoring",
            details: `Server rack suppression systems target individual racks with precision, safeguarding essential data and minimizing damage by isolating fire events effectively.`,
        },
    };

    const suppressionImages = {
        Electrical: ElectricalImage,
        Kitchen: KitchenImage,
        ServerRoom: ServerRoomImage,
        ServerRack: ServerRackImage,
    };

    return (
        <div className="fire-extinguisher blur">
            <div className="extinguisher-row1">
                <div className="extinguisher-r1-col1">
                    <div className="ext-r1-c1-row1">
                        <h1>Gas Suppression System</h1>
                    </div>

                    {/* Tabs Section */}
                    <div className="ext-r1-c1-row2">
                        <h3>TYPES</h3>
                        <div className="ext-r1-c1-r2-tabs">
                            {Object.keys(suppressionData).map((type) => (
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
                                            src={EffeiciencyIcon}
                                            alt="Efficiency"
                                        />
                                    </div>
                                    <div className="high-text">
                                        <p>
                                            {
                                                suppressionData[activeTab]
                                                    .efficiency
                                            }
                                        </p>
                                        <h5>Efficiency</h5>
                                    </div>
                                </div>
                                <div className="highlights-container">
                                    <div className="high-icon">
                                        <img
                                            src={CoverageIcon}
                                            alt="Coverage"
                                        />
                                    </div>
                                    <div className="high-text">
                                        <p>{suppressionData[activeTab].area}</p>
                                        <h5>Coverage</h5>
                                    </div>
                                </div>
                                <div className="highlights-container">
                                    <div className="high-icon">
                                        <img
                                            src={SpecialityIcon}
                                            alt="Reliability"
                                        />
                                    </div>
                                    <div className="high-text">
                                        <p>
                                            {
                                                suppressionData[activeTab]
                                                    .reliability
                                            }
                                        </p>
                                        <h5>Reliability</h5>
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
                                    {suppressionData[activeTab].details}
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
                            src={suppressionImages[activeTab]}
                            alt={`${activeTab} Suppression`}
                        />
                    </div>
                    <div className="extinguisher-r1-c2-row2">
                        <h3>For more details</h3>
                        <button className="enquire-cta" onClick={handleEnquire}>
                            Enquire <img src={ArrowRight} alt="->" />
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default GasSuppression;
