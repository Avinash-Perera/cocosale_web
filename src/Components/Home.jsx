import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/homebackgroundreal.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
    return (
        <div id="home" className="home-container">
            <Navbar />
            <div className="home-banner-container">
                <div className="home-bannerImage-container">
                    <img src={BannerBackground} alt="" />
                </div>
                <div className="home-text-section">
                    <h1 className="primary-heading">
                        Optimizing The Coconut Supply Chain In Sri Lanka.
                    </h1>
                    <p className="primary-text">
                        Optimizing Coconut supply chain through Data Vizualization, Price and trending product prediction,
                        Coconut grading and Effecient delivary.
                    </p>
                    <button className="secondary-button">
                        Get Started <FiArrowRight />{" "}
                    </button>
                </div>
                <div className="home-image-section">
                    <img src={BannerImage} alt="" className="bigger-image" />
                </div>
            </div>
        </div>
    );
};

export default Home;