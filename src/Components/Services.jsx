import React from "react";
import MapIcon from "../Assets/mapcover.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Services = () => {
    const workInfoData = [
        {
            image: MapIcon,
            title: "Map based data vizualization",
            text: "",
        },
        {
            image: ChooseMeals,
            title: "Price Prediction and Trending Products",
            text: " ",
        },
        {
            image: DeliveryMeals,
            title: "Grading System using Image Processing",
            text: "",
        },
        {
            image: DeliveryMeals,
            title: "Finding the most economical Route",
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