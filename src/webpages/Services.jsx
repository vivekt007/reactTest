import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Services.css";

import ArrowRight from "../assets/Icons/arrow-right.svg";

// components
import Footer from "../components/Footer.jsx";

import { observeElements } from "../animations.js";

function Services() {
    useEffect(() => {
        observeElements();
    }, []);

    const navigate = useNavigate();

    const handleFireExtiunguisher = () => {
        navigate("/fireExtinguisher");
    };

    const handleFireHydrant = () => {
        navigate("/fireHydrant");
    };

    const handleCctv = () => {
        navigate("/Cctv");
    };

    const handleFireAlarm = () => {
        navigate("/fireAlarm");
    };

    const handleBiometrics = () => {
        navigate("/biometrics");
    };

    const handleGasSuppression = () => {
        navigate("/gasSuppression");
    };

    const handleSignage = () => {
        navigate("/signage");
    };

    const handleSafetyTraning = () => {
        navigate("/safetyTraning");
    };

    const handleRiskAssessment = () => {
        navigate("/riskAssessment");
    };

    const handleFreeConsultation = () => {
        window.open(
            "https://wa.me/919606850350?text=Hello%20I%20want%20free%20consultation",
            "_blank"
        );
    };

    return (
        <div className="services blur">
            <section className="our-services">
                <div className="our-services-row1">
                    {/* <h1>Tailored Protection, Trusted Results</h1> */}
                    <p>
                        Explore our full range of services designed to protect
                        and empower your environment, from fire safety to
                        advanced surveillance.
                    </p>
                </div>
                <div className="our-services-row2">
                    <button
                        className="service-card services-fire-extiunguisher"
                        onClick={handleFireExtiunguisher}
                    >
                        <p>FIRE EXTIUNGUISHER</p>
                    </button>
                    <button
                        className="service-card services-fire-hydrant"
                        onClick={handleFireHydrant}
                    >
                        <p>FIRE HYDRANT</p>
                    </button>
                    <button
                        className="service-card services-cctv"
                        onClick={handleCctv}
                    >
                        <p>SURVEILLANCE</p>
                    </button>
                    <button
                        className="service-card services-fire-alarm"
                        onClick={handleFireAlarm}
                    >
                        <p>FIRE ALARM SYSTEM</p>
                    </button>
                    <button
                        className="service-card services-biometrics"
                        onClick={handleBiometrics}
                    >
                        <p>BIOMETRICS</p>
                    </button>
                    <button
                        className="service-card services-gas-suppression"
                        onClick={handleGasSuppression}
                    >
                        <p>SUPRESSION SYSTEM</p>
                    </button>
                    <button
                        className="service-card services-signage"
                        onClick={handleSignage}
                    >
                        <p>SIGNAGE</p>
                    </button>
                    <button
                        className="service-card services-safety-tranings"
                        onClick={handleSafetyTraning}
                    >
                        <p>SAFETY TRANINGS</p>
                    </button>
                    <button
                        className="service-card services-risk-assesment"
                        onClick={handleRiskAssessment}
                    >
                        <p>RISK ASSESMENT</p>
                    </button>
                </div>
            </section>
            <section className="free-consultaion">
                <div className="consultation-row1">
                    <h1>WHY CHOOSE IVARI?</h1>
                    <p>
                        Quick explanation of iVari’s unique approach:
                        personalized service, innovation, and a commitment to
                        safety.
                    </p>
                </div>
                <div className="consultation-row2">
                    <div className="service-graphic-element9 service-graphic-element">
                        <div className="service-graphic-element8 service-graphic-element">
                            <div className="service-graphic-element7 service-graphic-element">
                                <div className="service-graphic-element6 service-graphic-element">
                                    <div className="service-graphic-element5 service-graphic-element">
                                        <div className="service-graphic-element4 service-graphic-element">
                                            <div className="service-graphic-element3 service-graphic-element">
                                                <div className="service-graphic-element2 service-graphic-element">
                                                    <div className="service-graphic-element1 service-graphic-element">
                                                        <button
                                                            type="submit"
                                                            className="service-cta"
                                                            onClick={
                                                                handleFreeConsultation
                                                            }
                                                        >
                                                            Free Consultation
                                                            <img
                                                                src={ArrowRight}
                                                                alt="->"
                                                            />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Services;
