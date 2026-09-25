import { useState, useEffect } from 'react';
function Poem(){
const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {

    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);
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
}
export default Poem;