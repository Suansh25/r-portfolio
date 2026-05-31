import './Home.css';
import { useState, useEffect } from 'react';
import './Home.js';
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

      <div className="content">

        <p>Hi, and welcome to my little space on the internet!
          <br /><br />
          I'm a curious, solution-driven software engineer who loves turning complex challenges into elegant, user-friendly experiences. I enjoy working across both frontend and backend — seeing a project through from raw data to the final design is something I find deeply fulfilling.
          <br /><br />
          This full-stack mindset helps me build cohesive and thoughtful <a href="#">Solutions</a> that just feel right.
          <br /><br />
          I’m always learning something new, constantly coding, and yes — occasionally celebrating when everything works on the first try.
          <br /><br />
          This space is where I share what I <a href="#">build</a>, what I <a href="#">learn</a>, and all the small <a href="#">wins</a> along the way. Hopefully, it’ll grow into a collection of moments I’m proud of.
          <br /><br />
          Besides work, you can find me reading
          , talking about Indian History, working out, and occasionally posting thoughts and memes.
          <br /><br />
          Feel free to look around!
          <br /><br />
          Suansh.</p>

      </div>
      <hr class="dotted-line" />

    </>
  );
}

export default Home;
