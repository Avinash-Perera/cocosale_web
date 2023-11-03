import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const Domain = () => {
    return (
        <div id="about" className="about-section-container">

            <div className="about-section-text-container">
                <div className="centered-text">
                    <p className="primary-subheading">Domain</p>
                </div>
                <div className="card-container">
                    {/* Card 1 */}
                    <div className="card">
                        <h3>Literature Review</h3>
                        <p>This is the content for Card 1.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="card">
                        <h3>Research Gap </h3>
                        <p>This is the content for Card 2.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="card">
                        <h3>Research Problem</h3>
                        <p>This is the content for Card 3.</p>
                    </div>

                    {/* Card 4 */}
                    <div className="card">
                        <h3>Research Objectives</h3>
                        <p>This is the content for Card 4.</p>
                    </div>

                    {/* Card 5 */}
                    <div className="card">
                        <h3>Methodology</h3>
                        <p>This is the content for Card 5.</p>
                    </div>

                    <div className="card">
                        <h3>Technologies</h3>
                        <p>This is the content for Card 6.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Domain;