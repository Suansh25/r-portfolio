import '../Education/Education.css'
function Education(){
    return(<>
     <div id="scrollProgress"></div>
    <div className="education-container">
  <div className="ed-title">
    <div className="experiences" id="exp">
      <div className="rowContainer">
        <div className="col">
           <div className="h1"><h1>Academic <span>Background</span></h1></div>
           <hr class="dotted-line"/>
          <div className="contents">
            <div className="box">
              <h4>Gokaraju Rangaraju Institute of Engineering and Technology</h4>
              <h3>Bachelor of Technology</h3>
              <p>
                B-Tech in Computer Science Engineering with specialization in Business Systems.(2022-2026) <br />
                CGPA : 8.6/10
              </p>
            </div>
            <div className="box">
              <h4>Excellencia Junior College</h4>
              <h3>Higher Secondary (or) Intermediate</h3>
              <p>
                Oct 2020 to March 2022 <br />
                Grade: 95%
              </p>
            </div>
            <div className="box">
              <h4>Air Force School, Begumpet</h4>
              <h3>Secondary School Certificate</h3>
              <p>
                2020 <br />
                Grade: 90%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    <hr class="dotted-line"/>
    </>)
}
export default Education;