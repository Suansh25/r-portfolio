import './Home.css';
import { useState, useEffect } from 'react';
import './Home.js';

import Contact from '../Contact/Contact.jsx';
import Project from '../Projects/Projects';
function Home() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {

    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div id="scrollProgress"></div>
      <div className="title">
        <h1>Greetings, <span>I'm Suansh!</span></h1>
        <p className='dt'>{currentDate.toDateString()}</p>

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

      <div className="Homecontent">

        <p>
          Hi, and welcome to my corner of the internet!
          <br /><br />

          I'm a passionate software engineer who enjoys transforming problems into simple, intuitive, and meaningful digital experiences.
          <br /><br />

          With a strong interest in both frontend and backend development, I love building products from end to end—whether it's designing user interfaces, developing scalable systems, or connecting everything in between.
          <br /><br />

          This full-stack perspective helps me create thoughtful solutions that are not only functional but also seamless and enjoyable to use.
          <br /><br />

          I'm driven by curiosity and a continuous desire to learn. You'll often find me exploring new technologies, building         projects, refining my skills, and occasionally celebrating those rare moments when everything works perfectly on the first try.
          <br /><br />

          This space is where I share my work
          projects, experiments, and the lessons I pick up along the way. Think of it as a growing collection of things I've
          built, challenges I've solved, and ideas that inspire me.
          <br /><br />

          When I'm away from the keyboard, I enjoy reading, exploring Indian history, working out, and sharing the occasional thought, observation, or meme.
          <br /><br />

          Thanks for stopping by—feel free to explore!
          <br /><br />

          Suansh.
        </p>
      </div>

      <div className="Homecontent-mobile">
        <p>
          Hi, I'm Suansh.
          <br /><br />

          I build software that combines thoughtful design, solid engineering, and great user experiences.
          <br /><br />

          As a full-stack developer, I enjoy working on every part of a product—from designing interfaces and writing code to solving technical challenges behind the scenes.
          <br /><br />

          I'm always learning, experimenting, and creating solutions that make technology more useful, accessible, and enjoyable.
          <br /><br />

          This website is a collection of my projects, ideas, and the lessons I've picked up throughout my journey.
          <br /><br />

          When I'm not coding, you'll probably find me reading, exploring Indian history, working out, or enjoying a good meme.
          <br /><br />

          Welcome to my corner of the internet. Thanks for visiting.
          <br /><br />

          Suansh.
        </p>
      </div>

      <hr class="dotted-line" />

    </>
  );
}

export default Home;
