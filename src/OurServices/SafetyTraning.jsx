import React, { useEffect, useState } from "react";
import { observeElements } from "../animations.js";
import { useNavigate } from "react-router-dom";
import "../styles/FireExtinguisher.css";

// Icons
import Close from "../assets/Icons/close.svg";
import ArrowRight from "../assets/Icons/arrow-right.svg";
import DurationIcon from "../assets/Icons/Duration.svg";
import CertificationIcon from "../assets/Icons/Certification.svg";

// Components
import Footer from "../components/Footer.jsx";

// Product Image
import SafetyTrainingImage from "../assets/ProductImages/ProductSafetyTraning.png";

function SafetyTraining() {
    useEffect(() => {
        observeElements();
    }, []);

    const navigate = useNavigate();

    const handleEnquire = () => {
        window.open(
            "https://wa.me/919606850350?text=Hello%20I%20have%20an%20enquiry",
            "_blank"
        );
    };

    return (
        <div className="fire-extinguisher blur">
            <div className="extinguisher-row1">
                <div className="extinguisher-r1-col1">
                    <div className="ext-r1-c1-row1">
                        <h1>Fire Safety Training</h1>
                    </div>

                    {/* Highlights Section */}
                    <div className="extinguisher-content">
                        <div className="content">
                            <div className="ext-cont-row2">
                                <div className="highlights-container">
                                    <div className="high-icon">
                                        <img
                                            src={DurationIcon}
                                            alt="Duration"
                                        />
                                    </div>
                                    <div className="high-text">
                                        <p>1-2 Hours</p>
                                        <h5>Duration</h5>
                                    </div>
                                </div>
                                <div className="highlights-container">
                                    <div className="high-icon">
                                        <img
                                            src={CertificationIcon}
                                            alt="Certification"
                                        />
                                    </div>
                                    <div className="high-text">
                                        <p>Certification Included</p>
                                        <h5>Certification</h5>
                                    </div>
                                </div>
                            </div>

                            {/* Details Section */}
                            <div className="ext-cont-row3">
                                <h3>DETAILS</h3>
                                <p className="details-text expanded">
                                    The fire safety training program includes:
                                    <ul>
                                        <li>
                                            CPR (Cardiopulmonary Resuscitation)
                                        </li>
                                        <li>
                                            CERT (Community Emergency Response
                                            Team) formation and actions
                                        </li>
                                        <li>
                                            Emergency Response Team training and
                                            formations
                                        </li>
                                        <li>
                                            Fire brigade operations and
                                            formations
                                        </li>
                                    </ul>
                                    This training is designed to equip
                                    participants with practical skills and
                                    knowledge for handling emergencies
                                    effectively.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Image Section */}
                <div className="extinguisher-r1-col2">
                    <button className="close-btn" onClick={() => navigate(-1)}>
                        <img src={Close} alt="Close" />
                    </button>
                    <div className="extinguisher-r1-c2-row1">
                        <img
                            src={SafetyTrainingImage}
                            alt="Fire Safety Training"
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

export default SafetyTraining;
