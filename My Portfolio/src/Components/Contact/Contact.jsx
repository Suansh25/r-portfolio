import './Contact.css'
import { useState, useEffect } from 'react';
function Contact() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {

    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);
  return (<>
    <div id="scrollProgress"></div>
    <section class="contact-section">
      
      <div className="titleforcontact">
        <h1>Suansh K </h1>
        <h2 className='t2'><span>Let's connect and build something amazing together.</span></h2>
        <div className="title">
        <p>{currentDate.toDateString()}</p>

        {(() => {
          const poeticLines = [
            "I build with code, but I dream in possibilities—each project a bridge between logic and wonder.",
            "In every pixel and pattern, I search for meaning—turning data into stories and insight into impact.",
            "My craft lies where curiosity meets engineering, shaping ideas into experiences worth remembering.",
            "From maps to machines that see, I chase the art inside the algorithm and the soul inside the system.",
            "I write code the way one writes poetry—each line meant to connect, solve, and illuminate.",
            "To me, technology is both toolkit and canvas—a place where imagination learns to speak in logic.",
            "Every challenge is a new horizon; every solution, a step closer to who I aim to become.",
            "Across models, interfaces, and moving pieces of data, I design not just products—but possibilities.",
            "Between the known and the unknown, I choose the unknown—because that’s where invention begins.",
            "I’m building a future made of curiosity, compassion, and code—one thoughtful project at a time."
          ];

          const indexForToday = new Date().getDate() % poeticLines.length;
          const todaysLine = poeticLines[indexForToday];

          return <p><i>{todaysLine}</i></p>;
        })()}
        </div>

        <div className="contentforcontact">
          <p className='contentforcontact-p'><h2>Intro</h2>
            Hi, I'm Suansh 👋. I am a graduate with a B.Tech degree in Computer Science and Business Systems, I'm passionate about building technology that solves real-world problems. I enjoy creating user-friendly, responsive web applications that provide seamless experiences while balancing both technical excellence and business needs.
          </p>

          <p className='contentforcontact-p'><h2>Experience</h2>
            My academic background has given me a strong foundation in software development, data analysis, databases, and problem-solving. I am comfortable working with technologies such as Python, Java, JavaScript, SQL, C, and C++, and I continuously explore new tools and frameworks to expand my skill set.
          </p>

          <p className='contentforcontact-p'>
            <h2>Engaged in</h2>
            Currently, I'm deepening my knowledge of the MERN Stack (MongoDB, Expressjs, React, and Nodejs) to build modern full-stack applications. At the same time, I'm learning Kotlin and Android development to create mobile applications and better understand the mobile ecosystem.
          </p>

          <p className='contentforcontact-p'><h2>Propensity</h2>
            Beyond coding, I enjoy learning about emerging technologies, exploring innovative project ideas, and improving my development practices. I believe in continuous learning, collaboration, and building solutions that make a meaningful impact on users and businesses alike.
          </p>

          <p className='contentforcontact-p'><h2>Aspiration</h2>
            As a recent graduate, I am actively seeking opportunities where I can contribute, grow as a software developer, and work alongside talented teams. I'm excited about turning ideas into products and continuously evolving as a technology professional.
          </p>
          <p>
            <h2>My Socials:</h2>
            <ul className="social-links">
              <li>
                <a className="arrow-link" href="#home" target="_blank"
                  rel="noopener noreferrer">Twitter</a>
              </li>
              <li>
                <a className="arrow-link" href="https://github.com/Suansh25" target="_blank"
                  rel="noopener noreferrer">GitHub</a>
              </li>
              <li>
                <a className="arrow-link" href="#exp" target="_blank"
                  rel="noopener noreferrer">LinkedIn</a>
              </li>
              <li>
                <a className="arrow-link" href="#mail" target="_blank"
                  rel="noopener noreferrer">Mail</a>
              </li>
            </ul>
          </p>
        </div>
      </div>

    </section>
    <hr class="dotted-line" />

  </>)
}
export default Contact;