import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const Domain = () => {
    return (
        <div id="domain" className="about-section-container">

            <div className="about-section-text-container">
                <div className="centered-text">
                    <p className="primary-subheading">Domain</p>
                </div>
                <div className="card-container">
                    {/* Card 1 */}
                    <div className="card">
                        <h3>Literature Review</h3>

                        <p className="pdomain">The current economic crisis in Sri Lanka has exacerbated the complex agricultural marketing process, resulting in significant post-harvest losses of fruits and vegetables. One key issue is the reluctance of farmers to adopt new technologies and the outdated transportation and logistics methods used in the country. To address these challenges, research has focused on leveraging web-based applications and e-commerce systems to streamline the agricultural supply chain. These technologies aim to connect stakeholders, improve crop supply and demand matching, and enhance the efficiency of distribution. Studies have also highlighted the potential of online platforms in empowering farmers, reducing middlemen exploitation, and increasing market access. Furthermore, research in Sri Lanka and other coconut-producing regions has emphasized the need for innovative approaches to tackle supply chain issues, improve coconut yield, and explore new marketing strategies. These findings collectively underscore the importance of modern web and mobile technologies in
                            revolutionizing agricultural supply chain management in terms of quantity, quality, location, and pricing.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="card">
                        <h3>Research Gap </h3>

                        <p className="pdomain">Based on the provided literature review above, the identified research gap is the lack
                            of emphasis on utilizing modern web and mobile-based technologies to enhance the
                            quantity, quality, location, and cost of agricultural supply chain management. Despite
                            the availability of numerous web- and mobile-based e-market solutions, there appears
                            to be a need for research on the potential of e-commerce systems for farmers to enable
                            them to profit from their labor, improve farming techniques in rural areas, and increase
                            farmer’s knowledge of crops and crop markets. In addition, there is a need to
                            investigate the potential of e-commerce as a means of enhancing smallholder farmer’s
                            access to markets and empowering them to have a more promising future. Up to now
                            under the researches conducted in this specific research area the below domains have
                            been identified.
                            <ul>
                                <li>Agriculture supply chain administration</li>
                                <li>Commerce online and digital advertising</li>
                                <li>Coconut-based enterprise and manufacturing</li>
                                <li> Empowerment of farmers and poverty reduction</li>
                                <li>Access to the market and direct selling</li>
                                <li>Performance of businesses and SCM practices</li>
                            </ul>
                            Several of these domains overlap one another.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="card">
                        <h3>Research Problem</h3>

                        <p className="pdomain">Based on the above research gap it is evident that even though there are existing
                            systems that has been developed as an E-market place for coconuts there seems to be
                            an absence of utilization of modern web and mobile technology to optimize supplydemand matching in the agricultural industry, specifically in the coconut trade,
                            resulting in inefficiencies in quantity, quality, location, and price for all stakeholders.
                            The objective of this research is to develop a web application with a distance-based
                            matching algorithm and map-based data visualization to facilitate efficient supplydemand matching in the coconut industry. The proposed system will have to cater to
                            the below needs.
                            <ul>
                                <li>Utilize web and mobile technology to improve the supply chain for coconuts.</li>
                                <li> Enable the efficient matching of supply and demand in terms of quantity,
                                    quality, location, and cost.</li>
                                <li>Create a user-friendly interface that meets the requirements of all coconut
                                    trade industry stakeholders.</li>
                                <li> Utilize a matching algorithm based on distance to optimize supply-demand
                                    matching.</li>
                                <li>Implement map-based data visualization to improve decision-making and
                                    supply chain efficiency.</li>
                                <li>Improve the coconut supply chain's transparency and traceability to ensure fair
                                    trade practices and sustainable production methods.</li>
                            </ul>
                            </p>
                    </div>

                    {/* Card 4 */}
                    <div className="card">
                        <h3>Research Objectives</h3>
                        <p className="pdomain">For creation of this specific purposed system for optimizing supply-demand matching
                            for coconut trade using a web-based application with map-based data visualization the
                            identified specific objectives are below,
                            <ul>
                                <li>To design and develop a web application that permits farmers to register and submit
                                    information about their coconut harvest, including quantity, quality, and location.</li>
                                <li> To develop a user-friendly interface that enables consumers to search for available
                                    coconut products based on their location, desired quality, and budget.</li>
                                <li>To implement a distance-based matching algorithm that matches buyers with the
                                    closest available coconut farmers, considering quantity, quality, and price into
                                    account.</li>
                                <li> To implement a map-based data visualization that enables users to observe the
                                    location of available coconut products and nearby farmers.</li>
                                <li>To evaluate the application's efficacy in facilitating efficient supply-demand
                                    matching in the coconut trade using a sample of farmers and buyers.</li>
                                <li>Identify any limitations and enhancement areas in the proposed system and make
                                    suggestions for future development and research.</li>
                            </ul>
                            </p>
                    </div>

                    {/* Card 5 */}
                    <div className="card">
                        <h3>Methodology</h3>
                        <p>This is the content for Card 5.</p>
                    </div>

                    <div className="card">
                        <h3>Technologies</h3>
                        <p className="pdomain">Then technologies used are below,
                        <ul>
                            <li>Express js</li>
                            <li>React Js</li>
                            <li>LeafletJs</li>
                            <li>OpenStreetMaps</li>
                            <li>TailwindCss</li>
                            <li>Python</li>
                            <li>Flask</li>
                            <li>OpenCV</li>
                            <li>MongoDB</li>
                        </ul>
                        </p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Domain;