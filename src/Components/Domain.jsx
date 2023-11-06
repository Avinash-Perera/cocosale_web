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

                        <p className="pdomain">The research identifies several gaps in the field of coconut production and trade in Sri Lanka.
                            <ul>
                                <li>Firstly, there is a lack of a standardized grading system for coconuts, which impacts both producers and consumers in terms of quality and pricing. The proposed solution involves using image processing techniques to create an objective and consistent grading system based on size and color.</li>
                                <li>Secondly, there is a need for research on utilizing modern web and mobile-based technologies to improve agricultural supply chain management. This includes e-commerce systems for farmers to enhance their profitability and knowledge of crop markets. The proposed system aims to connect buyers with nearest sellers using distance matching algorithms and data visualization techniques.</li>
                                <li>Thirdly, there is a gap in research on optimizing transportation in the agricultural sector in Sri Lanka. Specifically, there is a need for a hybrid algorithm that considers both the shortest and fuel-efficient paths for multiple destinations. This would be beneficial for improving the efficiency of agricultural transportation.</li>
                                <li>Lastly, there is a lack of research integrating climate and market data to provide accurate price predictions and trend analysis for the coconut industry. The proposed solution involves developing a machine learning-based dashboard to address this gap, which would contribute to the sustainability and resilience of the coconut industry in Sri Lanka.</li>
                            </ul>
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="card">
                        <h3>Research Problem</h3>

                        <p className="pdomain">The research addresses four key problems in the coconut industry
                            <ol>
                                <li>Grading System for Coconut Quality Analysis using Image Processing Techniques:
                                    The absence of a standardized grading system for coconuts in Sri Lanka poses a challenge. The research aims to develop an image processing-based grading system to detect coconut color and size. It seeks to overcome technical challenges, improve accuracy, integrate with the market supply chain, and evaluate potential impacts.</li>
                                <li>Optimizing the Coconut Supply Chain:
                                    Existing systems lack modern technology for efficient supply-demand matching in the coconut trade. The research focuses on developing a web application with distance-based matching and map-based visualization to enhance the supply chain. It aims to improve quantity, quality, location, and cost matching, ensuring transparency and traceability.</li>
                                <li>Development of a Hybrid Algorithm for Vehicle Routing:
                                    Agriculture transportation in Sri Lanka faces challenges such as high costs and inadequate infrastructure. The research targets the development of a routing algorithm considering both shortest and fuel-efficient paths for single and multiple destinations. It aims to optimize transportation in the agricultural sector.</li>
                                <li>Optimizing Coconut Trade in the Face of Climate Change:
                                    Despite existing systems predicting coconut prices, there is a need to incorporate climate data for more accurate forecasts. The research proposes a machine learning-powered dashboard to integrate weather and market data, providing precise price forecasts and trend analysis for the coconut industry. It aims to empower stakeholders with informed decision-making.</li>
                            </ol>
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="card">
                        <h3>Research Objectives</h3>
                        <p className="pdomain">The main objective is to establish a PWD-enabled coconut e-marketplace in Sri Lanka, revolutionizing the industry. The platform employs advanced image processing for accurate coconut quality analysis, simplifying transactions for all stakeholders. Through user-friendly interfaces and innovative algorithms, it facilitates seamless transactions between buyers, farmers, collectors, and sellers. The system also integrates a hybrid algorithm for optimizing transportation routes, enhancing productivity. Additionally, a machine learning-based dashboard offers precise pricing estimates and trend analysis, empowering coconut industry stakeholders.
                            <br />
                            <br />
                            Specific objectives include:
                            <ul>
                                <li>Develop a grading system using image processing for coconut quality analysis.</li>
                                <li> Register and integrate coconut farmers, collectors, and sellers, and implement an algorithm to connect them with buyers, visualizing their locations on a map of Sri Lanka, with order functionality.
                                </li>
                                <li>Create a hybrid algorithm for vehicle routing, considering both shortest and fuel-efficient paths for single and multiple destinations.</li>
                                <li> Develop a machine learning-based dashboard for the coconut industry in Sri Lanka, providing accurate pricing estimates and trend analysis for popular products.</li>

                            </ul>
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="card">
                        <h3>Methodology</h3>
                        <p className="pdomain"> The methodology comprises four distinct research initiatives aimed at revolutionizing the coconut
                            industry through cutting-edge technologies and data analysis. In the first project, coconut
                            quality analysis is enhanced using image processing, with two modules—color detection and size
                            detection—combining to grade coconuts more accurately. Modern tools like TensorFlow enable machine
                            learning models to identify husk colors and sizes, streamlining the grading process. The second endeavor
                            focuses on optimizing the coconut supply chain, tackling factors such as price fluctuations, proximity
                            between buyers and sellers, and effective communication. Advanced algorithms and data visualization
                            techniques are employed to enhance efficiency and decision-making, with a particular focus on
                            improving the balance and effectiveness of the coconut market.
                            The third project introduces a hybrid algorithm for vehicle routing, which calculates the
                            shortest and most fuel-efficient delivery routes, significantly improving transportation efficiency.
                            The final research initiative utilizes machine learning for coconut price prediction and trend analysis,
                            providing valuable insights to market participants. Overall, these projects collectively seek to leverage
                            modern technologies to boost the quality, efficiency, and sustainability of the coconut industry.</p>
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