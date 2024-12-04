import React, { useEffect, useState } from "react";
import { observeElements } from "../animations.js";

import { useNavigate } from "react-router-dom";
import "../styles/FireExtinguisher.css";

// Icons
import Close from "../assets/Icons/close.svg";
import ArrowRight from "../assets/Icons/arrow-right.svg";
import SurveyIcon from "../assets/Icons/Survey.svg";
import ReportIcon from "../assets/Icons/Certification.svg";

// Components
import Footer from "../components/Footer.jsx";

// Product Image
import RiskAssessmentImage from "../assets/ProductImages/ProductFireRiskAssessment.png";

function RiskAssessment() {
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
                        <h1>Fire Risk Assessment</h1>
                    </div>

                    {/* Highlights Section */}
                    <div className="extinguisher-content">
                        <div className="content">
                            <div className="ext-cont-row2">
                                <div className="highlights-container">
                                    <div className="high-icon">
                                        <img src={SurveyIcon} alt="Survey" />
                                    </div>
                                    <div className="high-text">
                                        <p>Comprehensive Survey</p>
                                        <h5>Premises & Building Audit</h5>
                                    </div>
                                </div>
                                <div className="highlights-container">
                                    <div className="high-icon">
                                        <img src={ReportIcon} alt="Report" />
                                    </div>
                                    <div className="high-text">
                                        <p>Detailed Report</p>
                                        <h5>As Per Survey Findings</h5>
                                    </div>
                                </div>
                            </div>

                            {/* Details Section */}
                            <div className="ext-cont-row3">
                                <h3>DETAILS</h3>
                                <p className="details-text expanded risk-assessment-detail">
                                    The Fire Risk Assessment service involves
                                    the following steps:
                                    <ol>
                                        <li>
                                            <strong>Fire Audit Survey :</strong>{" "}
                                            A thorough survey of the premises or
                                            building to identify potential fire
                                            hazards and vulnerabilities.
                                        </li>
                                        <li>
                                            <strong>Detailed Report :</strong> A
                                            comprehensive report based on the
                                            survey, highlighting findings and
                                            areas of concern.
                                        </li>
                                        <li>
                                            <strong>
                                                Equipment Suggestions :
                                            </strong>{" "}
                                            Tailored recommendations for
                                            firefighting equipment to address
                                            the identified risks effectively.
                                        </li>
                                    </ol>
                                    This service ensures fire safety compliance
                                    and minimizes fire risks through targeted
                                    solutions.
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
                            src={RiskAssessmentImage}
                            alt="Fire Risk Assessment"
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

export default RiskAssessment;
