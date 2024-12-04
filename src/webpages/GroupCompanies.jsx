import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/GroupComp.css";

import ArrowRight from "../assets/Icons/arrow-right.svg";
import GetmyjobIcon from "../assets/Logo/GetmyjobsIcon.png";
import StonepaperIcon from "../assets/Logo/StonePaperIcon.png";
import iVariKaiziningIcon from "../assets/Logo/iVariKaiziningIcon.png";
import Logo3D from "../assets/BackgroundImg/iVariLogo3d.png";
import Footer from "../components/Footer.jsx";

import { observeElements } from "../animations.js";

function GroupCompanies() {
    useEffect(() => {
        observeElements();
    }, []);

    const navigate = useNavigate();

    return (
        <div className="group-companies blur">
            <section className="grp-comp-section">
                <div className="grp-col1">
                    <img src={Logo3D} alt="Group Companies Background" />
                    <h1>
                        The iVari Group: Empowering Growth Across Industries
                    </h1>
                </div>
                <div className="grp-col2">
                    <div className="grp-comp-card">
                        <div className="grp-comp-card-row1">
                            <div className="comp-img">
                                <img src={GetmyjobIcon} alt="Company icon" />
                            </div>
                            <h2>Getmyjobs.in</h2>
                            <p>
                                A dynamic job portal simplifying the recruitment
                                process for job seekers and employers, ensuring
                                the perfect match for every role.
                            </p>
                        </div>
                        <a href="/">
                            Visit <img src={ArrowRight} alt="->" />
                        </a>
                    </div>
                    <div className="grp-comp-card">
                        <div className="grp-comp-card-row1">
                            <div className="comp-img">
                                <img src={StonepaperIcon} alt="Company icon" />
                            </div>
                            <h2>Stone paper</h2>
                            <p>
                                A premium clothing brand offering minimalist,
                                eco-friendly designs that redefine sustainable
                                fashion.
                            </p>
                        </div>
                        <a href="/">
                            Visit <img src={ArrowRight} alt="->" />
                        </a>
                    </div>
                    <div className="grp-comp-card">
                        <div className="grp-comp-card-row1">
                            <div className="comp-img">
                                <img
                                    src={iVariKaiziningIcon}
                                    alt="Company icon"
                                />
                            </div>
                            <h2>iVari Kaizining</h2>
                            <p>
                                An IT services provider specializing in digital
                                transformation, software solutions, and
                                technology consulting.
                            </p>
                        </div>
                        <a href="/">
                            Visit{" "}
                            <img src={ArrowRight} alt="->" loading="lazy" />
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default GroupCompanies;
