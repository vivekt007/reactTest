import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import "../styles/About.css";

// Icons
import Arrow from "../assets/Icons/top-arrow-right-up.svg";
import ArrowRight from "../assets/Icons/arrow-right.svg";
import MissionIcon from "../assets/Icons/MissionIcon.svg";
import VisionIcon from "../assets/Icons/VisionIcon.svg";

// components
import Footer from "../components/Footer.jsx";

import { observeElements } from "../animations.js";

function About() {
    useEffect(() => {
        observeElements();
    }, []);

    const navigate = useNavigate();

    const handleServicesNav = () => {
        navigate("/services");
    };

    return (
        <div className="about blur">
            <section className="about-hero-section">
                <div className="hero-heading">
                    <h1>ABOUT</h1>
                    <span>OUR MISSION, YOUR SAFETY</span>
                </div>
                <p>
                    Dedicated to making safety accessible through cutting-edge
                    solutions that protect what matters most.
                </p>
            </section>

            <section className="why-ivari">
                <div className="why-row1">
                    <h1>WHY IVARI?</h1>
                </div>
                <div className="why-row2">
                    <div className="why-r2-row1">
                        <div className="why-ivari-card">
                            <h3>TRUST</h3>
                            <p>
                                We build trust through open communication and
                                unwavering integrity, creating a reliable and
                                transparent experience.
                            </p>
                        </div>
                        <div className="why-ivari-card">
                            <h3>RESPONSIVENESS</h3>
                            <p>
                                We proactively address challenges, understanding
                                and adapting to our clients' evolving needs with
                                agility.
                            </p>
                        </div>
                    </div>
                    <div className="why-r2-row2">
                        <div className="why-ivari-card">
                            <h3>UNIQUENESS</h3>
                            <p>
                                Our approach combines innovative solutions with
                                personalized client relationships, positioning
                                us as industry pioneers.
                            </p>
                        </div>
                        <div className="why-ivari-card">
                            <h3>SAFE & DEFENDABLE</h3>
                            <p>
                                Safety isn’t just a checkbox—it’s embedded in
                                every decision, process, and interaction.
                            </p>
                        </div>
                    </div>
                    <div className="why-r2-row3">
                        <div className="why-ivari-card">
                            <h3>TIMELESS DEDICATION</h3>
                            <p>
                                We consistently deliver on promises, exceeding
                                deadlines to ensure our clients can count on us
                                confidently.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="apart-section">
                <div className="apart-col1">
                    <div className="apart-heading">
                        <h1>WHAT SETS</h1>
                        <h1>US APART</h1>
                    </div>
                    <div className="apart-points">
                        <div className="apart-points-col1">
                            <div className="apart-point-card">
                                <h3>RELIABILITY</h3>
                                <p>Dependable systems ensure peace of mind.</p>
                            </div>
                            <div className="apart-point-card">
                                <h3>CUSTOMIZATION</h3>
                                <p>
                                    Every solution is tailored to meet unique
                                    client needs..
                                </p>
                            </div>
                            <div className="apart-point-card">
                                <h3>ADVANCED TECHNOLOGY</h3>
                                <p>
                                    Access to the latest tools keeps us at the
                                    forefront.
                                </p>
                            </div>
                        </div>
                        <div className="apart-points-col2">
                            <div className="apart-point-card">
                                <h3>INTEGRATED SOLUTIONS</h3>
                                <p>
                                    We blend safety and security seamlessly for
                                    maximum efficiency..
                                </p>
                            </div>
                            <div className="apart-point-card">
                                <h3>SUSTAINABILITY</h3>
                                <p>
                                    Environmentally responsible practices are at
                                    our core.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="apart-col2">
                    <div className="about-graphic-element9 about-graphic-element">
                        <div className="about-graphic-element8 about-graphic-element">
                            <div className="about-graphic-element7 about-graphic-element">
                                <div className="about-graphic-element6 about-graphic-element">
                                    <div className="about-graphic-element5 about-graphic-element">
                                        <div className="about-graphic-element4 about-graphic-element">
                                            <div className="about-graphic-element3 about-graphic-element">
                                                <div className="about-graphic-element2 about-graphic-element">
                                                    <div className="about-graphic-element1 about-graphic-element">
                                                        <button
                                                            className="about-services-cta"
                                                            onClick={
                                                                handleServicesNav
                                                            }
                                                        >
                                                            Explore services
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
            <section className="mis-vis-section">
                <div className="mission">
                    <div className="m-s-card-row1">
                        <div className="m-s-card-icon">
                            <img src={MissionIcon} alt="Mission" />
                        </div>
                        <h1>MISSION</h1>
                    </div>
                    <div className="m-s-card-row2">
                        <p>
                            We empower individuals, businesses, and communities
                            by delivering integrated safety systems that protect
                            lives and property while enhancing building
                            functionality and sustainability. Through innovative
                            solutions, we are committed to creating secure and
                            resilient environments that contribute to a safer,
                            greener future.
                        </p>
                    </div>
                </div>
                <div className="vision">
                    <div className="m-s-card-row1">
                        <div className="m-s-card-icon">
                            <img src={VisionIcon} alt="Vision" />
                        </div>
                        <h1>VISION</h1>
                    </div>
                    <div className="m-s-card-row2">
                        <p>
                            Securing Tomorrow, Today: Our vision is to lead in
                            safety and security by safeguarding lives, assets,
                            and peace of mind. With innovation at our core, we
                            aim to set new protection standards, delivering
                            solutions that adapt to our clients' evolving needs
                            and contribute to a safer world.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default About;
