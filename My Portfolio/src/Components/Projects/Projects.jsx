import './Projects.css';

function Projects() {
    return (<>
        <div id="scrollProgress"></div>
        <div className="card">
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
                <img src="https://picsum.photos/200/300" alt="Project 1" />
                <img src="https://picsum.photos/200/300" alt="Project 1" /><img src="https://picsum.photos/200/300" alt="Project 1" /><img src="https://picsum.photos/200/300" alt="Project 1" />

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
            <a href="#" className='skills'>Github Link</a>
        </div>
        <div className="card">
            <h1>This is demo project</h1>
            <a href="#" className='skills'>HTML</a>
            <a href="#" className='skills'>HTML</a>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum facere cumque voluptatibus facilis numquam error vitae molestias fugiat totam omnis nam officia quam quibusdam temporibus, magnam doloremque, exercitationem sit.
                
            </p>
            <div className="Images-scroll">
                <img src="https://picsum.photos/200/300" alt="Project 1" />
                <img src="https://picsum.photos/200/300" alt="Project 1" />
                <img src="https://picsum.photos/200/300" alt="Project 1" />

            </div>
        </div>
        <div className="card">
            <h1>This is demo project</h1>
            <a href="#" className='skills'>HTML</a>
            <a href="#" className='skills'>HTML</a>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum facere cumque voluptatibus facilis numquam error vitae molestias fugiat totam omnis nam officia quam quibusdam temporibus, magnam doloremque, exercitationem sit.</p>
            <div className="Images-scroll">
                <img src="https://picsum.photos/200/300" alt="Project 1" />
                <img src="https://picsum.photos/200/300" alt="Project 1" />
                <img src="https://picsum.photos/200/300" alt="Project 1" />
            </div>
        </div>
        <hr class="dotted-line" />
    </>)
}
export default Projects;