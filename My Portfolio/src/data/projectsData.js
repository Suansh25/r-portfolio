const projectsData = [
  {
    id: "project1",
    number: "01",
    title: "NutriVision",

    subtitle:
      "Personalized Dish Recommendations based on Diabetic Retinopathy levels",

    skills: [
      "Machine Learning",
      "NLP",
      "ReactJS",
      "XGBoost",
      "SMOTE"
    ],

    description:
      "Nutrivision is a ReactJS based website which utilizes machine learning and image processing to analyze and detect the stage of Diabetic Retinopathy from eye fundus images.",

    mobileDescription:
      "A ReactJS web application that detects Diabetic Retinopathy using machine learning and recommends suitable dishes.",

    objectives: [
      "To detect the stage of Diabetic Retinopathy.",
      "To extract key visual features and severity levels.",
      "Recommend options with nutrition breakdowns."
    ],

    images: [
      {
        src: "/Images/NutriVision/home.png",
        alt: "Home page of Nutrivision"
      },
      {
        src: "/Images/NutriVision/Diagnosis.png",
        alt: "Diagnosis Results"
      },
      {
        src: "/Images/NutriVision/factors.png",
        alt: "Key Factors"
      },
      {
        src: "/Images/NutriVision/Architecture diagram.png",
        alt: "Architecture Diagram"
      }
    ],

    results: [
      "Enhanced image quality through preprocessing.",
      "Improved accuracy with XGBoost.",
      "Practical adaptability.",
      "Integrated nutrition analysis."
    ],

    github: "https://github.com/Suansh25/Nutrivision"
  },

  {
    id: "project2",
    number: "02",
    title: "NagaraVihari",

    subtitle: "Explore Your City Like a Game!",

    skills: [
      "ReactJS",
      "UI/UX",
      "Travel",
      "Tourism",
      "Heritage",
      "Firebase"
    ],

    description:
      "NagaraVihari is an interactive and gamified tour-planning website designed to encourage people to explore historical, cultural, and modern landmarks.",

    mobileDescription:
      "An interactive and gamified tour-planning website for exploring landmarks.",

    objectives: [
      "Assigns users missions to visit tourist spots.",
      "Rewards users with points and badges.",
      "Offers personalized suggestions based on budget."
    ],

    images: [
      {
        src: "/Images/NagaraVihari/NV home.png",
        alt: "Home page"
      },
      {
        src: "/Images/NagaraVihari/NV Osm.png",
        alt: "OSM Maps"
      },
      {
        src: "/Images/NagaraVihari/NV Destinations.png",
        alt: "Destinations"
      },
      {
        src: "/Images/NagaraVihari/NV Badges.png",
        alt: "Badges"
      },
      {
        src: "/Images/NagaraVihari/NV details.png",
        alt: "Location Details"
      }
    ],

    results: [
      "Gamified experience for users.",
      "Competition-based challenges.",
      "Budget-aware recommendations.",
      "Local food and experiences."
    ],

    github: "https://github.com/Suansh25/Nagara-vihari"
  },

  {
    id: "project3",
    number: "03",
    title: "FitTrack",

    subtitle:
      "Predictive Modelling of Daily Calorie Requirements using User Physiological Data",

    skills: [
      "Machine Learning",
      "Python",
      "Fitness",
      "Tracking"
    ],

    description:
      "FitTrack is a machine learning-powered health analytics web application that predicts exercise calorie burn and daily calorie requirements.",

    mobileDescription:
      "A machine learning-powered health analytics application for calorie prediction and nutrition tracking.",

    objectives: [
      "Predict calorie burn and daily calorie requirements.",
      "Use ensemble machine learning models.",
      "Integrate nutrition tracking and dashboards."
    ],

    images: [
      {
        src: "/Images/FitTrack/Main.png",
        alt: "Home page"
      },
      {
        src: "/Images/FitTrack/Insights.png",
        alt: "Insights"
      },
      {
        src: "/Images/FitTrack/progress.png",
        alt: "Progress"
      },
      {
        src: "/Images/FitTrack/food.png",
        alt: "Food"
      }
    ],

    results: [
      "Calorie estimation and tracking.",
      "Uses physiological data.",
      "Indian food nutrition dataset.",
      "India-specific food recommendations."
    ],

    github: "https://github.com/Suansh25/FitTrack"
  }
];

export default projectsData;