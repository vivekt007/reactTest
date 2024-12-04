import React, { useEffect, useState } from "react";
import { observeElements } from "../animations.js";
import { useNavigate } from "react-router-dom";
import "../styles/FireExtinguisher.css"; // Reusing existing styles

// Icons
import ArrowRight from "../assets/Icons/arrow-right.svg";
import Close from "../assets/Icons/close.svg";

// Product Images
import RoadSafetyImage from "../assets/ProductImages/OtherProducts.png";

// Components
import Footer from "../components/Footer.jsx";

function OtherProduct() {
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

    // Product details
    const products = [
        {
            name: "Road Safety Products",
            // image: RoadSafetyImage,
            details: `High-quality road safety products including barricades, reflectors, and dividers to ensure pedestrian and vehicular safety.`,
        },
        {
            name: "Poles",
            details: `Durable and weather-resistant poles for lighting, signage, and surveillance, designed for long-lasting performance.`,
        },
        {
            name: "Rubber Speed Breakers",
            details: `Highly durable speed breakers made of rubber to reduce vehicle speed effectively while minimizing damage to vehicles.`,
        },
        {
            name: "PVC Cones",
            details: `Lightweight and reflective PVC cones for traffic management and construction sites, ensuring visibility and safety.`,
        },
        {
            name: "Package Safety",
            details: `Protective materials and equipment to safeguard packages during transit and storage, reducing damage risks.`,
        },
        {
            name: "Mirrors",
            details: `Convex and traffic mirrors for enhanced visibility in parking lots, driveways, and blind spots, improving safety.`,
        },
        {
            name: "Rubber Pillar Guards",
            details: `Impact-resistant rubber guards for pillars to prevent damage to vehicles and structures in parking spaces.`,
        },
    ];

    return (
        <div className="fire-extinguisher blur">
            <div className="extinguisher-row1">
                <div className="extinguisher-r1-col1">
                    <div className="ext-r1-c1-row1">
                        <h1>Other Products</h1>
                    </div>
                    <div className="extinguisher-content">
                        {products.map((product, index) => (
                            <div className="Other-content" key={index}>
                                <div className="ext-cont-row1">
                                    <h3>{product.name}</h3>
                                </div>
                                <div className="ext-cont-row2">
                                    <p>{product.details}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="extinguisher-r1-col2">
                    <button className="close-btn" onClick={() => navigate(-1)}>
                        <img src={Close} alt="Close" />
                    </button>
                    <div className="extinguisher-r1-c2-row1">
                        {/* {products.map((product, index) => (
                            <img
                                key={index}
                                src={product.image}
                                alt={product.name}
                                className="product-image"
                            />
                        ))} */}
                        <img src={RoadSafetyImage} alt="Other Product Image" />
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

export default OtherProduct;
