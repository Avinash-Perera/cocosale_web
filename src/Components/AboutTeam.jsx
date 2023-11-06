import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";
import t1 from "../Assets/t1.jpeg";
import t2 from "../Assets/t2.jpeg";
import t3 from "../Assets/t3.jpeg";
import t4 from "../Assets/t4.jpeg";


const AboutTeam = () => {
    return (
        <div id="aboutteam" className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Team</p>
                <h1 className="primary-heading">Meet Our Team</h1>
                <p className="primary-text">
                    Team Members and key contribution they have done below.
                </p>
            </div>
            <div className="testimonial-section-bottom">
                <img src={t1} alt="" style={{ width: '100px', borderRadius: '50%' }} />
                <br/>

                <div className="testimonials-stars-container">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <h2>Perera S.A.A</h2><p>it20246914@my.sliit.lk</p>
            </div>
            <div className="testimonial-section-bottom">
                <img src={t2} alt="" style={{ width: '100px', borderRadius: '50%'}} />
                <br/>

                <div className="testimonials-stars-container">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <h2>De Silva U.D.K</h2><p>it20217440@my.sliit.lk</p>
            </div>
            <div className="testimonial-section-bottom">
                <img src={t3} alt="" style={{ width: '100px', borderRadius: '50%' }} />
                <br/>

                <div className="testimonials-stars-container">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <h2>Jeewakaratne S.S.U.D.S</h2><p>it20217136@my.sliit.lk</p>
            </div>
            <div className="testimonial-section-bottom">
                <img src={t4} alt="" style={{ width: '100px', borderRadius: '50%' }} />
                <br/>

                <div className="testimonials-stars-container">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <h2>Perera A.A.R.T</h2><p>it202229018@my.sliit.lk</p>
            </div>
        </div>
    );
};

export default AboutTeam;