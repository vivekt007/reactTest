import React, { useEffect, useState } from "react";
import { observeElements } from "../animations.js";

import { useNavigate } from "react-router-dom";
import "../styles/FireExtinguisher.css";

// Icons
import Close from "../assets/Icons/close.svg";
import ArrowRight from "../assets/Icons/arrow-right.svg";
import WarrantyIcon from "../assets/Icons/Warranty.svg";
import TypeIcon from "../assets/Icons/CameraTypes.svg";
import ResolutionIcon from "../assets/Icons/Resolution.svg";

// Components
import Footer from "../components/Footer.jsx";

// Product Images
import BulletCameraImage from "../assets/ProductImages/ProductCctvBulletType.png";
import DomeCameraImage from "../assets/ProductImages/ProductCctvDomeType.png";

function Cctv() {
    useEffect(() => {
        observeElements();
    }, []);

    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("Bullet");
    const [showMore, setShowMore] = useState(false);

    // handlers
    const handleEnquire = () => {
        window.open(
            "https://wa.me/919606850350?text=Hello%20I%20have%20an%20enquiry",
            "_blank"
        );
    };

    const cameraData = {
        Bullet: {
            image: BulletCameraImage,
            ratings: "65 / 66 / 67",
            highlights: [
                { icon: WarrantyIcon, value: "1 Year", label: "Warranty" },
                {
                    icon: ResolutionIcon,
                    value: "2MP / 3MP / 5MP",
                    label: "Resolution",
                },
                { icon: TypeIcon, value: "180° only", label: "Coverage" },
            ],
            details:
                "Bullet cameras are cylindrical and highly visible, designed for outdoor use. Their shape allows for long-range monitoring, making them ideal for parking lots or large open areas. They typically come with weatherproofing and infrared capabilities for low-light performance.",
        },
        Dome: {
            image: DomeCameraImage,
            ratings: "65 / 66 / 67",
            highlights: [
                { icon: WarrantyIcon, value: "1 Year", label: "Warranty" },
                {
                    icon: ResolutionIcon,
                    value: "2MP / 3MP / 5MP",
                    label: "Resolution",
                },
                { icon: TypeIcon, value: "180° / 360°", label: "Coverage" },
            ],
            details:
                "Dome cameras are named for their dome-shaped design and are ideal for indoor and outdoor surveillance. Their discreet appearance makes them less noticeable, deterring vandalism. With a wide-angle lens, they cover broader areas and are often equipped with night vision and weatherproof features.",
        },
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setShowMore(false);
    };

    return (
        <div className="fire-extinguisher blur">
            <div className="extinguisher-row1">
                <div className="extinguisher-r1-col1">
                    <div className="ext-r1-c1-row1">
                        <h1>CCTV</h1>
                    </div>

                    {/* Tabs Section */}
                    <div className="ext-r1-c1-row2">
                        <h3>TYPES</h3>
                        <div className="ext-r1-c1-r2-tabs">
                            {Object.keys(cameraData).map((type) => (
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
                                    <h2>{cameraData[activeTab].ratings}</h2>
                                    IP rating
                                </span>
                            </div>
                            <div className="ext-cont-row2">
                                {cameraData[activeTab].highlights.map(
                                    (item, index) => (
                                        <div
                                            className="highlights-container"
                                            key={index}
                                        >
                                            <div className="high-icon">
                                                <img
                                                    src={item.icon}
                                                    alt={item.label}
                                                />
                                            </div>
                                            <div className="high-text">
                                                <p>{item.value}</p>
                                                <h5>{item.label}</h5>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                            <div className="ext-cont-row3">
                                <h3>DETAILS</h3>
                                <p
                                    className={`details-text ${
                                        showMore ? "expanded" : "collapsed"
                                    }`}
                                >
                                    {cameraData[activeTab].details}
                                </p>
                                <button
                                    className="see-more-btn"
                                    onClick={() => setShowMore(!showMore)}
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
                            src={cameraData[activeTab].image}
                            alt={`${activeTab} Camera`}
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

export default Cctv;
