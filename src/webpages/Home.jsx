import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import Swal from "sweetalert2";

// js files
import { observeElements } from "../animations.js";

// Icons
import Arrow from "../assets/Icons/top-arrow-right-up.svg";
import ArrowRight from "../assets/Icons/arrow-right.svg";
import FireSafetyIcon from "../assets/Icons/FireSafetyService.svg";
import SurvellianceIcon from "../assets/Icons/Surveillance.svg";
import SignageIcon from "../assets/Icons/Signages.svg";
import BiometricsIcon from "../assets/Icons/Biometrics.svg";
import SuppressionIcon from "../assets/Icons/Suppression.svg";
import RiskAssesmentIcon from "../assets/Icons/FireRiskAssessment.svg";
import SafetyTraningsIcon from "../assets/Icons/FireSafetyTraining.svg";
import OtherProductsIcon from "../assets/Icons/OtherProducts.svg";

// logos
import Zudio from "../assets/Logo/Zudio.png";
import NammaYatri from "../assets/Logo/NammaYatri.png";
import Aurigene from "../assets/Logo/Aurigene.png";

// background
import Logo3D from "../assets/BackgroundImg/iVariLogo3d.png";
import CareersImg from "../assets/BackgroundImg/CareersImage.png";

// components
import Footer from "../components/Footer.jsx";

function Home() {
    // Animations effect
    useEffect(() => {
        observeElements();
    }, []);

    const navigate = useNavigate();

    // handlers

    const handleCareerNav = () => {
        window.location.href =
            "https://www.linkedin.com/company/ivari-security-systems-pvt-ltd/";
    };

    const handleServicesNav = () => {
        navigate("/services");
    };

    const handleAboutNav = () => {
        navigate("/about");
    };

    // services handler
    const handleFireExtiunguisher = () => {
        navigate("/fireExtinguisher");
    };

    const handleCctv = () => {
        navigate("/Cctv");
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

    const handleOtherProducts = () => {
        navigate("/otherProducts");
    };

    // contact handler

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "3a3a44b7-7f8b-4de1-8495-5f579285dbb2");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            Swal.fire({
                title: "Thank You",
                text: "Message sent",
                icon: "success",
                timer: 1500,
            });
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className="home blur">
            <section className="hero-section">
                <div className="hero-col1">
                    <h1>SAFEGUARDING WHAT MATTERS</h1>
                    <p>
                        Protecting lives, assets, and peace of mind with
                        customized solutions in fire safety, surveillance, and
                        security management. iVari delivers industry-leading
                        expertise and service, ensuring comprehensive protection
                        for homes and businesses alike.
                    </p>
                    <button className="hero-cta" onClick={handleServicesNav}>
                        Explore Our Services <img src={ArrowRight} alt="->" />
                    </button>
                </div>
                <div className="hero-col2">
                    <img src={Logo3D} alt="3d logo" />
                </div>
            </section>

            <section className="services-section">
                <div className="services-row1">
                    <h1>Our Services</h1>
                </div>
                <div className="services-row2">
                    <div
                        className="services-cta fire-safety "
                        onClick={handleFireExtiunguisher}
                    >
                        <div className="ser-cta-row1">
                            <div className="ser-cta-icon">
                                <img src={FireSafetyIcon} alt="fire safety" />
                            </div>
                            <h3>FIRE SAFETY</h3>
                        </div>
                        <div className="ser-cta-row2">
                            <p>
                                Equip your space with top-notch fire protection,
                                from extinguishers to alarm systems, ensuring
                                rapid response and safety compliance.
                            </p>
                        </div>
                        <button
                            className="ser-cta-row3 ser-cta-btn"
                            onClick={handleFireExtiunguisher}
                        >
                            Check Out <img src={ArrowRight} alt="->" />
                        </button>
                    </div>

                    <div
                        className="services-cta survelliance"
                        onClick={handleCctv}
                    >
                        <div className="ser-cta-row1">
                            <div className="ser-cta-icon">
                                <img
                                    src={SurvellianceIcon}
                                    alt="Survelliance"
                                />
                            </div>
                            <h3>SURVELLIANCE</h3>
                        </div>
                        <div className="ser-cta-row2">
                            <p>
                                Keep an eye on what matters with high-definition
                                CCTV solutions, featuring remote access and
                                advanced monitoring for complete security.
                            </p>
                        </div>
                        <button
                            className="ser-cta-row3 ser-cta-btn"
                            onClick={handleCctv}
                        >
                            Check Out <img src={ArrowRight} alt="->" />
                        </button>
                    </div>

                    <div
                        className="services-cta signage"
                        onClick={handleSignage}
                    >
                        <div className="ser-cta-row1">
                            <div className="ser-cta-icon">
                                <img src={SignageIcon} alt="Signage" />
                            </div>
                            <h3>SIGNAGE</h3>
                        </div>
                        <div className="ser-cta-row2">
                            <p>
                                Guide, inform, and protect with custom signage
                                solutions, including emergency exit signs and
                                compliance-ready safety boards.
                            </p>
                        </div>
                        <button
                            className="ser-cta-row3 ser-cta-btn"
                            onClick={handleSignage}
                        >
                            Check Out <img src={ArrowRight} alt="->" />
                        </button>
                    </div>

                    <div
                        className="services-cta biometrics"
                        onClick={handleBiometrics}
                    >
                        <div className="ser-cta-row1">
                            <div className="ser-cta-icon">
                                <img src={BiometricsIcon} alt="Biometrics" />
                            </div>
                            <h3>BIOMETRICS</h3>
                        </div>
                        <div className="ser-cta-row2">
                            <p>
                                Enhance security access with cutting-edge
                                biometric solutions, from fingerprint to facial
                                recognition for seamless control.
                            </p>
                        </div>
                        <button
                            className="ser-cta-row3 ser-cta-btn"
                            onClick={handleBiometrics}
                        >
                            Check Out <img src={ArrowRight} alt="->" />
                        </button>
                    </div>

                    <div
                        className="services-cta fire-safety-audit"
                        onClick={handleGasSuppression}
                    >
                        <div className="ser-cta-row1">
                            <div className="ser-cta-icon">
                                <img
                                    src={SuppressionIcon}
                                    alt="Suppression system"
                                />
                            </div>
                            <h3>SUPPRESSION SYSTEM</h3>
                        </div>
                        <div className="ser-cta-row2">
                            <p>
                                Ensure safety with advanced suppression systems
                                designed for electrical panels, etc. Protect
                                critical areas with efficient fire suppression
                                and risk mitigation solutions.
                            </p>
                        </div>
                        <button
                            className="ser-cta-row3 ser-cta-btn"
                            onClick={handleGasSuppression}
                        >
                            Check Out <img src={ArrowRight} alt="->" />
                        </button>
                    </div>

                    <div
                        className="services-cta risk-assessment"
                        onClick={handleRiskAssessment}
                    >
                        <div className="ser-cta-row1">
                            <div className="ser-cta-icon">
                                <img
                                    src={RiskAssesmentIcon}
                                    alt="Fire assessment"
                                />
                            </div>
                            <h3>FIRE RISK ASSESSMENT</h3>
                        </div>
                        <div className="ser-cta-row2">
                            <p>
                                Identify vulnerabilities with detailed fire risk
                                assessments that mitigate hazards, reinforce
                                safety, and bolster compliance standards.
                            </p>
                        </div>
                        <button
                            className="ser-cta-row3 ser-cta-btn"
                            onClick={handleRiskAssessment}
                        >
                            Check Out <img src={ArrowRight} alt="->" />
                        </button>
                    </div>

                    <div
                        className="services-cta fire-safety-tranings"
                        onClick={handleSafetyTraning}
                    >
                        <div className="ser-cta-row1">
                            <div className="ser-cta-icon">
                                <img
                                    src={SafetyTraningsIcon}
                                    alt="Fire safety tranings"
                                />
                            </div>
                            <h3>FIRE SAFETY TRANINGS</h3>
                        </div>
                        <div className="ser-cta-row2">
                            <p>
                                Empower your team with essential fire safety
                                skills through expert-led training sessions
                                designed for effective, real-world response.
                            </p>
                        </div>
                        <button
                            className="ser-cta-row3 ser-cta-btn"
                            onClick={handleSafetyTraning}
                        >
                            Check Out <img src={ArrowRight} alt="->" />
                        </button>
                    </div>

                    <div
                        className="services-cta other-products"
                        onClick={handleOtherProducts}
                    >
                        <div className="ser-cta-row1">
                            <div className="ser-cta-icon">
                                <img
                                    src={OtherProductsIcon}
                                    alt="Other products"
                                />
                            </div>
                            <h3>OTHER PRODUCTS</h3>
                        </div>
                        <div className="ser-cta-row2">
                            <p>
                                Explore a range of safety solutions including
                                road safety products, rubber speed breakers, PVC
                                cones, mirrors, and more, designed for
                                protection and durability.
                            </p>
                        </div>
                        <button
                            className="ser-cta-row3 ser-cta-btn"
                            onClick={handleOtherProducts}
                        >
                            Check Out <img src={ArrowRight} alt="->" />
                        </button>
                    </div>
                </div>
            </section>

            <section className="about-section ">
                <div className="about-sec-col1 ">
                    <div className="about-c1-container">
                        <span>
                            <h1>WHO WE ARE -</h1>
                            <h1>YOUR PARTNERS IN SAFETY</h1>
                        </span>
                        <p>
                            At iVari, we believe safety is more than just a
                            service—it’s a promise. From fire protection to
                            advanced surveillance, our solutions are crafted to
                            protect and empower. Driven by innovation and
                            integrity, we’re here to make safety accessible,
                            reliable, and tailored to your world.
                        </p>
                    </div>
                </div>
                <div className="about-sec-col2 ">
                    <div className="graphic-element9 graphic-element">
                        <div className="graphic-element8 graphic-element">
                            <div className="graphic-element7 graphic-element">
                                <div className="graphic-element6 graphic-element">
                                    <div className="graphic-element5 graphic-element">
                                        <div className="graphic-element4 graphic-element">
                                            <div className="graphic-element3 graphic-element">
                                                <div className="graphic-element2 graphic-element">
                                                    <div className="graphic-element1 graphic-element">
                                                        <button
                                                            className="about-cta"
                                                            onClick={
                                                                handleAboutNav
                                                            }
                                                        >
                                                            More About Us
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

            <section className="our-clients-section ">
                <div className="clients-col1 ">
                    <div className="clients-c1-container">
                        <span>
                            <h1>OUR CLIENTS</h1>
                        </span>
                        <p>
                            Our clients rely on iVari for safety and security
                            solutions they can count on. From residential to
                            commercial sectors, we’re proud to protect those who
                            value quality, innovation, and peace of mind.
                        </p>
                    </div>
                </div>
                <div className="clients-col2 ">
                    <div className="clients-c2-row1">
                        <div className="clients-c2-card">
                            <div className="clients-card-row1">
                                <img src={Zudio} alt="Client1" />
                                <h2>Zudio</h2>
                            </div>
                            <div className="clients-card-row2">
                                <p>
                                    Delivered essential fire safety services,
                                    including new fire extinguishers and
                                    refills.
                                </p>
                            </div>
                        </div>
                        <div className="clients-c2-card">
                            <div className="clients-card-row1">
                                <img src={NammaYatri} alt="Client1" />
                                <h2>Namma Yatri</h2>
                            </div>
                            <div className="clients-card-row2">
                                <p>
                                    Enhanced safety through new fire
                                    extinguishers, refills, and comprehensive
                                    training in fire safety, CPR, and CERT.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="clients-c2-row2">
                        <div className="clients-c2-card">
                            <div className="clients-card-row1">
                                <img src={Aurigene} alt="Client1" />
                                <h2>Aurigene</h2>
                            </div>
                            <div className="clients-card-row2">
                                <p>
                                    Provided end-to-end solutions with AMC
                                    services, fire extinguisher refills,
                                    electrical suppression systems, server room
                                    protection, and smoke detection systems.
                                </p>
                            </div>
                        </div>
                        <div className="clients-c2-card other-clients">
                            <h2>59 Others</h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="career-section ">
                <div className="careers-section-col1 ">
                    <div className="careers-c1-container">
                        <span>
                            <h1>CAREERS</h1>
                        </span>
                        <p>
                            Every day at iVari brings new challenges and
                            opportunities to learn. As a young, ambitious team,
                            we’re driven by the shared goal of creating safer
                            spaces for all. If you’re ready to grow, adapt, and
                            make an impact, join us on this exciting journey.
                        </p>
                        <button
                            className="career-cta"
                            onClick={handleCareerNav}
                        >
                            Start Your Journey with iVari
                            <img src={ArrowRight} alt="->" />
                        </button>
                    </div>
                </div>
                <div className="careers-section-col2 ">
                    <img src={CareersImg} alt="Careers image" />
                </div>
            </section>

            <section className="contact-section ">
                <div className="contact-row1 ">
                    <h1>LET'S WORK TOGETHER</h1>
                    <p>
                        “Whether you’re curious about our services, need
                        assistance, or want to discuss safety solutions, we’d
                        love to hear from you. Let’s start the conversation!”
                    </p>
                </div>
                <form className="contact-row2 " onSubmit={onSubmit}>
                    <div className="contact-form-row1">
                        <input
                            type="text"
                            placeholder="NAME"
                            required
                            name="name"
                        />
                        <input
                            type="email"
                            placeholder="EMAIL"
                            required
                            name="email"
                        />
                    </div>
                    <div className="contact-form-row2">
                        <textarea
                            placeholder="MESSAGE"
                            required
                            name="message"
                        ></textarea>
                    </div>
                    <div className="contact-form-row3 ">
                        <div className="contact-graphic-element9 contact-graphic-element">
                            <div className="contact-graphic-element8 contact-graphic-element">
                                <div className="contact-graphic-element7 contact-graphic-element">
                                    <div className="contact-graphic-element6 contact-graphic-element">
                                        <div className="contact-graphic-element5 contact-graphic-element">
                                            <div className="contact-graphic-element4 contact-graphic-element">
                                                <div className="contact-graphic-element3 contact-graphic-element">
                                                    <div className="contact-graphic-element2 contact-graphic-element">
                                                        <div className="contact-graphic-element1 contact-graphic-element">
                                                            <button
                                                                type="submit"
                                                                className="contact-cta"
                                                            >
                                                                SEND MESSAGE
                                                                <img
                                                                    src={
                                                                        ArrowRight
                                                                    }
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

                        <div className="follow-us-links">
                            <h4>FOLLOW US</h4>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.linkedin.com/company/ivari-security-systems-pvt-ltd/"
                            >
                                <p>LinkedIn</p>
                                <img src={Arrow} alt="->" />
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.instagram.com/ivari.in/"
                            >
                                <p>Instagram</p>
                                <img src={Arrow} alt="->" />
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://x.com/ivari_in"
                            >
                                <p>Twitter</p>
                                <img src={Arrow} alt="->" />
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.facebook.com/ivari.in/"
                            >
                                <p>Facebook</p>
                                <img src={Arrow} alt="->" />
                            </a>
                        </div>
                    </div>
                </form>
            </section>
            <Footer />
        </div>
    );
}

export default Home;
