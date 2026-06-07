import './Projects.css';

function Projects() {
    return (<>
        <div id="scrollProgress"></div>
        <div className="project-index">
            <details>
                <summary>Index</summary>

                <div className="project-links">
                    <a href="#project1">01. NutriVision</a>
                    <a href="#project2">02. NagaraVihari</a>
                    <a href="#project3">03. Arduino Health Monitor</a>
                </div>
            </details>
        </div>
        <div className="card" id="project1">
            <h1>1. NutriVision</h1>
            <h3>Personalized Dish Recommendations based on Diabetic Retinopathy levels</h3>
            <a href="#" className='skills'>Machine Learning</a>
            <a href="#" className='skills'>NLP</a>
            <a href="#" className='skills'>ReactJS</a>
            <a href="#" className='skills'>XGBoost</a>
            <a href="#" className='skills'>SMOTE</a>
            <div className="desktop-text">Nutrivision is a ReactJS based website which utilizes machine learning and image processing to analyze and detect the stage of Diabetic Retinopathy from the Eye fundus images of the user. Based on severity of the condition, it analyzes restaurant menu through online web-scraping and recommends the most diabetes friendly dishes suitable for the user. By combining medical diagnosis with personalized nutrition guidance, Nutrivision empowers diabetic users to make informed, healthy dining choices that support better management of their overall well-being.
            </div>
            <div className='mobile-text'>
                A ReactJS web application that detects Diabetic Retinopathy using machine learning and recommends suitable dishes based on the user's condition.
            </div>
            <h3>Objectives :</h3>
            <div className='desktop-text'> <ul>
                <li>To detect the stage of Diabetic Retinopathy from user-submitted retinal images using deep learning techniques (using preprocessing), Feature detection and analysis</li>
                <li>To extract key visual features and severity levels from the detected DR stage and use this clinical insight to influence personalized nutritional recommendations tailored to diabetic User’s health needs.
                </li>
                <li>To scrape the restaurant’s menu, analyzes each dish, and recommends the best options with full nutrition breakdowns and health tags.
                </li>
            </ul></div>
            <div className='mobile-text'>
                <ul>
                    <li>To detect the stage of Diabetic Retinopathy.</li>
                    <li>To extract key visual features and severity levels.</li>
                    <li>Recommends the best options with full nutrition breakdowns and health tags.
                    </li>
                </ul>
            </div>

            <div className="Images-scroll">
                <img src="/Images/NutriVision/home.png" alt="Home page of Nutrivision" />
                <img src="/Images/NutriVision/Diagnosis.png" alt="Diagnosis Results" />
                <img src="/Images/NutriVision/factors.png" alt="Key Factors" />

                <img src="/Images/NutriVision/Architecture diagram.png" alt="Architecture Diagram" />
            </div>
            <h3>Results :</h3>
            <div className='desktop-text'>
                <ul>
                    <li>The comparative analysis reveals that the proposed SMOTE-XGBoost-LBP model achieves the highest performance among all evaluated approaches, with an overall accuracy of 94%.
                    </li>
                    <li>Incorporating SMOTE effectively balanced the imbalanced dataset, improving the model’s recall and sensitivity toward minority DR stages.
                    </li>
                    <li>The Random Forest baseline provided robust results, but XGBoost outperformed it due to its superior feature weighting and boosting capabilities.
                    </li>
                    <li>The final SMOTE-tuned XGBoost further enhanced precision and F1-score, validating its reliability for real-world DR screening and nutrition-linked decision-making.
                    </li>
                </ul>
            </div>
            <div className='mobile-text'>
                <ul><li>Achieved 94% classification accuracy.</li>

                    <li>SMOTE improved minority class detection.</li>

                    <li>XGBoost outperformed Random Forest.</li>

                    <li>Enabled reliable DR screening.</li></ul>
            </div>
            <a href="https://github.com/Suansh25/Nutrivision" className='skills'>Github Link</a>
        </div>

        <hr class="dotted-line" />


        <div className="card" id="project2">
            <h1>2. NagaraVihari</h1>
            <h3>Explore Your City Like a Game!</h3>
            <a href="#" className='skills'>ReactJs</a>
            <a href="#" className='skills'>UI/UX</a>
            <a href="#" className='skills'>Travel</a>
            <a href="#" className='skills'>Tourism</a>
            <a href="#" className='skills'>Heritage</a>
            <a href="#" className='skills'>Firebase</a>

            <div className="desktop-text">NagaraVihari is an interactive and gamified tour-planning website designed to encourage people—especially teenagers and middle-aged individuals—to explore historical, cultural, and modern landmarks in cities like Hyderabad.
            </div>
            <div className='mobile-text'>
                NagaraVihari is an interactive and gamified tour-planning website designed to encourage people—especially teenagers and middle-aged individuals—to explore historical, cultural, and modern landmarks in cities like Hyderabad.
            </div>
            <h3>Objectives :</h3>
            <div className='desktop-text'> <ul>
                <li>Assigns users missions to visit tourist/historic spots.</li>
                <li>Rewards users with points and badges for uploading images from their visits.
                </li>
                <li>Offers personalized suggestions for activities and food based on the user’s budget at a particular location.

                </li>
            </ul></div>
            <div className='mobile-text'>
                <ul>
                    <li>Assigns users missions to visit tourist/historic spots.</li>
                    <li>Rewards users with points and badges for uploading images from their visits.
                    </li>
                    <li>Offers personalized suggestions for activities and food based on the user’s budget at a particular location.

                    </li>
                </ul>
            </div>

            <div className="Images-scroll">
                <img src="/Images/NagaraVihari/NV home.png" alt="Home page of NagaraVihari" />
                <img src="/Images/NagaraVihari/NV Osm.png" alt="OSM Maps" />
                <img src="/Images/NagaraVihari/NV Destinations.png" alt="Destinations" />
                <img src="/Images/NagaraVihari/NV Badges.png" alt="Badges" />
                <img src="/Images/NagaraVihari/NV details.png" alt="Locations Details" />


            </div>
            <h3>Results :</h3>
            <div className='desktop-text'>
                <ul>
                    <li>Users receive tasks or challenges to visit specific locations in the city.After visiting, users upload pictures as proof and earn score points.
                    </li>
                    <li>Users with the highest scores rank on the leaderboard. Friendly competition encourages regular exploration.
                    </li>
                    <li>When visiting a place, users can input a budget. The app will suggest:Nearby famous foods,Fun activities or shops,Experiences that fit within their budget
                    </li>

                </ul>
            </div>
            <div className='mobile-text'>
                <ul><li>Users receive tasks or challenges to visit specific locations in the city.After visiting, users upload pictures as proof and earn score points.
                </li>
                    <li>Users with the highest scores rank on the leaderboard. Friendly competition encourages regular exploration.
                    </li>
                    <li>When visiting a place, users can input a budget. The app will suggest:Nearby famous foods,Fun activities or shops,Experiences that fit within their budget
                    </li>
                </ul>
            </div>
            <a href="https://github.com/Suansh25/Nagara-vihari" className='skills'>Github Link</a>
            <a href="https://tour-planner-9f7c7.web.app" className='skills'>Live Link</a>
        </div>

        <hr class="dotted-line" />

        <div className="card" id="project3">
            <h1>3. FitTrack</h1>
            <h3>Predictive Modelling of Daily Calorie Requirements using User Physiological Data</h3>
            <a href="#" className='skills'>Machine Learning</a>
            <a href="#" className='skills'>Python</a>
            <a href="#" className='skills'>Fitness</a>
            <a href="#" className='skills'>Tracking</a>


            <div className="desktop-text">FitTrack is a machine learning powered health analytics web application that predicts exercise calorie burn and daily calorie requirements using physiological data such as age, weight, height, heart rate, exercise duration, and body temperature.

                The application is built using Python and Streamlit and utilizes an ensemble machine learning model combining XGBoost, LightGBM, and CatBoost to generate accurate calorie burn predictions.

                For model transparency and interpretability, the application integrates SHAP (SHapley Additive Explanations), allowing users to visualize and understand which physiological factors most influence calorie burn predictions.

                Additionally, FitTrack includes a nutrition logging system based on an Indian food nutrition dataset, enabling users to track daily intake of calories, protein, carbohydrates, and fat.

                Interactive dashboards display daily calorie progress, remaining calorie targets, and macro nutrient distribution, helping users effectively monitor their diet and exercise impact.

                Overall, FitTrack provides a comprehensive and interactive platform for users to track physical activity, manage nutrition intake, and gain insights into the physiological factors influencing their calorie expenditure.
            </div>
            <div className='mobile-text'>
                FitTrack provides a comprehensive and interactive platform for users to track physical activity, manage nutrition intake, and gain insights into the physiological factors influencing their calorie expenditure
            </div>
            <h3>Objectives :</h3>
            <div className='desktop-text'> <ul>
                <li>Assigns users missions to visit tourist/historic spots.</li>
                <li>Rewards users with points and badges for uploading images from their visits.
                </li>
                <li>Offers personalized suggestions for activities and food based on the user’s budget at a particular location.

                </li>
            </ul></div>
            <div className='mobile-text'>
                <ul>
                    <li>Assigns users missions to visit tourist/historic spots.</li>
                    <li>Rewards users with points and badges for uploading images from their visits.
                    </li>
                    <li>Offers personalized suggestions for activities and food based on the user’s budget at a particular location.

                    </li>
                </ul>
            </div>

            <div className="Images-scroll">
                <img src="/Images/NagaraVihari/NV home.png" alt="Home page of NagaraVihari" />
                <img src="/Images/NagaraVihari/NV Osm.png" alt="OSM Maps" />
                <img src="/Images/NagaraVihari/NV Destinations.png" alt="Destinations" />
                <img src="/Images/NagaraVihari/NV Badges.png" alt="Badges" />
                <img src="/Images/NagaraVihari/NV details.png" alt="Locations Details" />


            </div>
            <h3>Results :</h3>
            <div className='desktop-text'>
                <ul>
                    <li>Users receive tasks or challenges to visit specific locations in the city.After visiting, users upload pictures as proof and earn score points.
                    </li>
                    <li>Users with the highest scores rank on the leaderboard. Friendly competition encourages regular exploration.
                    </li>
                    <li>When visiting a place, users can input a budget. The app will suggest:Nearby famous foods,Fun activities or shops,Experiences that fit within their budget
                    </li>

                </ul>
            </div>
            <div className='mobile-text'>
                <ul><li>Users receive tasks or challenges to visit specific locations in the city.After visiting, users upload pictures as proof and earn score points.
                </li>
                    <li>Users with the highest scores rank on the leaderboard. Friendly competition encourages regular exploration.
                    </li>
                    <li>When visiting a place, users can input a budget. The app will suggest:Nearby famous foods,Fun activities or shops,Experiences that fit within their budget
                    </li>
                </ul>
            </div>
            <a href="https://github.com/Suansh25/Nagara-vihari" className='skills'>Github Link</a>
            <a href="https://tour-planner-9f7c7.web.app" className='skills'>Live Link</a>
        </div>
        <hr class="dotted-line" />
    </>)
}
export default Projects;