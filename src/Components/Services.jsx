import React from "react";
import MapIcon from "../Assets/mapbase.png";
import Dashboard from "../Assets/dashboard.png";
import Grading from "../Assets/grading.png";
import Shortest from "../Assets/shortest.png";


const Services = () => {
    const workInfoData = [
        {
            image: MapIcon,
            title: "Map based data vizualization",
            text: "",
        },
        {
            image: Dashboard,
            title: "Price Prediction and Trending Products",
            text: " ",
        },
        {
            image: Grading,
            title: "Grading System for Coconut",
            text: "",
        },
        {
            image: Shortest,
            title: "Finding the most fuel-efficient route",
            text: "",
        }
    ];
    return (
        <div id="services" className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Our Services</p>
                <h1 className="primary-heading">How We Works</h1>
                <p className="primary-text">
                   Given below are the services we offer from our system to our customers.
                </p>
            </div>
            <div className="work-section-bottom">
                {workInfoData.map((data) => (
                    <div className="work-section-info" key={data.title}>
                        <div className="info-boxes-img-container">
                            <img src={data.image} alt="" />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Services;