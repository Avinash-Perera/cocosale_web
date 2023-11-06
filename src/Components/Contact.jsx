import React from "react";

const Contact = () => {
    return (
        <div id="contact" className="contact-page-wrapper">
            <h1 className="primary-heading">Have Any Questions In Mind?</h1>
            <h1 className="primary-heading">Let Us Help You</h1>
            <div className="contact-form-container">
                <input type="text" placeholder="Ask Your Question" />
                <button className="secondary-button">Submit</button>
            </div>
        </div>
    );
};

export default Contact;