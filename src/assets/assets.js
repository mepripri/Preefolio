import education from "./highlights/education.png";
import certification from "./highlights/certification.png";
import research from "./highlights/research.png";

import chevron from "./icons/chevron.png";
import linkedin from "./icons/linkedin.png";
import github from "./icons/github.png";
import home from "./icons/home.png";
import profile_image from "./icons/profile_image.jpg";
import cross from "./icons/cross.png";
import heartRed from "./icons/heart-red.png";
import heart from "./icons/heart.png";
import starGold from "./icons/star-gold.png";
import star from "./icons/star.png";

import tcs from "./experience/tcs.png";
import amul from "./experience/amul.png";
import smartkids from "./experience/smartkids.png";

import foodie from "./projects/foodie.png";
import face from "./projects/face.png";
import hand from "./projects/hand.png";
import voice from "./projects/voice.png";
import quiz from "./projects/quiz.png";
import tindog from "./projects/tindog.png";
import tomato from "./projects/tomato.png";
import katamari from "./projects/katamari.png";
import transit from "./projects/transit.png";
import polyglot from "./projects/polyglot.png";
import networks from "./projects/networks.png";

import html from "./skills/html.png";
import css from "./skills/css.png";
import js from "./skills/js.png";
import react from "./skills/react.png";
import python from "./skills/python.png";
import sql from "./skills/sql.png";
import nodejs from "./skills/nodejs.png";
import snowflake from "./skills/snowflake.png";
import mongodb from "./skills/mongodb.png";
import expressjs from "./skills/expressjs.png";
import postman from "./skills/postman.png";
import illustrator from "./skills/illustrator.png";

import C1 from "./certificates/C1.png";
import C2 from "./certificates/C2.png";
import C3 from "./certificates/C3.png";
import C4 from "./certificates/C4.png";

export const exp_images = [
  {
    img: smartkids,
    name: "Smart Kids Inc.",
    desc: [
      "Created and delivered content that brings interest, creativity, and draws attention to customers, college/university partners, and the general public.",
      "Showcased program services in an organised and visually appealing manner.",
      "Increased traffic to the website and other social media platforms.",
    ],
    link: "",
    date: "JUN 2023 - AUG 2023",
    star: 0,
    nonStar: 0,
  },
  {
    img: tcs,
    name: "Tata Consultancy Services",
    desc: [
      "Collaborated with ETL developers on a Data Lake project to extract data from various sources and load it into Snowflake via AWS.",
      "Developed source-to-target mappings, created workflows, and sessions using Informatica Tool.",
      "Created integrated SQL scripts in DBT for data analysis on each source.",
      "Conducted performance tuning of ETL jobs through DBT to meet business requirements.",
    ],
    link: "",
    date: "JUN 2021 - DEC 2022",
    star: 0,
    nonStar: 0,
  },
  {
    img: amul,
    name: "AMUL (GCMMF)",
    desc: [
      " Developed a dynamic website to create, view, and edit polygons on Google Maps using the Google JavaScript API to me the needs of distributors, retailers, and companies globally.",
      "Coordinated with a MySQL database (Backend) and utilised PHP, HTML. CSS, and JavaScript for the Frontend.",
    ],
    link: "",
    date: "MAY 2020 - JUL 2020",
    star: 0,
    nonStar: 0,
  },
];

export const proj_images = [
  {
    img: tomato,
    name: "TOMATO WEBSITE",
    desc: [
      "I developed a full stack food ordering website and app using React JS, MongoDB, Express, Node.js, and the Stripe payment gateway. The project includes the creation of a frontend website, an admin panel, and a backend server. I implemented a secure user authentication system for account creation and login, developed a shopping cart feature for adding and ordering food items, integrated Stripe for secure online payments, and created features to update and track order status in real-time. This project showcases my skills in full stack development, user authentication, e-commerce functionalities, and payment gateway integration.",
    ],
    link: "https://github.com/mepripri/Tomato",
    date: "JUL 2024",
    star: 0,
    nonStar: 0,
  },
  {
    img: katamari,
    name: "KATAMARI DAMACY",
    desc: [
      "Developed an engaging and visually dynamic computer graphics game inspired by the iconic game Katamari Damacy. The project aimed to recreate the core gameplay mechanics and unique visual style of the original game, emphasising the rolling and collecting mechanics, real-time rendering, and physics-based interactions within a web environment. Designed and implemented the core gameplay mechanics of the Katamari ball, including object collection and dynamic scaling. Utilised Three.js for real-time rendering of 3D models and environments directly in the browser.",
    ],
    link: "https://github.com/mepripri/katamari",
    date: "MAY 2024",
    star: 0,
    nonStar: 0,
  },
  {
    img: networks,
    name: "SCALABLE MACHINE LEARNING THROUGH COLLABORATIVE PROCESSING NETWORK",
    desc: [
      "This project aims to establish a network environment where multiple hosts can collaborate seamlessly with each other to execute machine learning tasks. By distributing the computational workload across interconnected hosts, we want to optimise the efficiency of machine learning processes.",
    ],
    link: "https://github.com/Harvey1314/SCALABLE-MACHINE-LEARNINGTHROUGH-COLLABORATIVE-PROCESSING-NETWORK",
    date: "JAN 2024",
    star: 0,
    nonStar: 0,
  },
  {
    img: transit,
    name: "TRANSIT SITE & DATABASE",
    desc: [""],
    link: "https://github.com/mepripri/Transit_Project",
    date: "DEC 2023",
    star: 0,
    nonStar: 0,
  },
  {
    img: polyglot,
    name: "POLYGLOT WEBSITE",
    desc: [""],
    link: "https://github.com/fulvius31/Polyglot",
    date: "MAY 2023",
    star: 0,
    nonStar: 0,
  },
  {
    img: foodie,
    name: "FOODIE WEBSITE",
    desc: [
      "An interactive and dynamic website on Quizzes. The tools used were PHP and JS for Backend coding and HTML and CSS for Frontend Visuals.",
    ],
    link: "https://priyaldpatel.github.io/Foodie",
    date: "APR 2021",
    star: 0,
    nonStar: 0,
  },
  {
    img: tindog,
    name: "TINDOG WEBSITE",
    desc: [
      "An interactive and dynamic website on Quizzes. The tools used were PHP and JS for Backend coding and HTML and CSS for Frontend Visuals.",
    ],
    link: "https://priyaldpatel.github.io/tindog",
    date: "APR 2021",
    star: 0,
    nonStar: 0,
  },
  {
    img: voice,
    name: "PERSON IDENTIFICATION USING VOICE",
    desc: [
      "A Mobile App which will unlock the app using voice of person. Model was build using Deep learning and deployed on local server using Flask.",
    ],
    link: "https://github.com/mepripri/voicesample",
    date: "FEB 2021",
    star: 0,
    nonStar: 0,
  },
  {
    img: hand,
    name: "HANDWRITING RECOGNITION USING DEEP LEARNING",
    desc: [
      "A Software which recognizes the handwritten text from the image using Deep Learning techniques. It will help digitalize text from the image. It was built using Tkinter, Numpy and many other libraries of python.",
    ],
    link: "",
    date: "",
    star: 0,
    nonStar: 0,
  },
  {
    img: face,
    name: "ATTENDANCE MANAGER USING FACE RECOGNITION",
    desc: [
      "A Machine-Learning based Project majorly created to solve the real time problem of hand written attendance. Through this software automatic attendance is taken through a webcam. Tools used are Python, OpenCV, Sqlite and Python libraries like Tkinter, Numpy.",
    ],
    link: "https://github.com/mepripri/AttendanceUsingFaceRecognition",
    date: "JUL 2020",
    star: 0,
    nonStar: 0,
  },
  {
    img: quiz,
    name: "QUIZZLET WEBSITE",
    desc: [
      "An interactive and dynamic website on Quizzes. The tools used were PHP and JS for Backend coding and HTML and CSS for Frontend Visuals.",
    ],
    date: "MAY 2020",
    link: "https://mepripri.github.io/Quizzz/",
    star: 0,
    nonStar: 0,
  },
];

export const skill_images = [
  {
    img: html,
    name: "HTML",
    desc: [],
    link: "",
    date: "",
    star: 5,
    nonStar: 0,
  },
  { img: css, name: "CSS", desc: [], link: "", date: "", star: 5, nonStar: 0 },
  {
    img: js,
    name: "JavaScript",
    desc: [],
    link: "",
    date: "",
    star: 4,
    nonStar: 1,
  },
  {
    img: react,
    name: "ReactJS",
    desc: [],
    link: "",
    date: "",
    star: 4,
    nonStar: 1,
  },
  {
    img: python,
    name: "Python",
    desc: [],
    link: "",
    date: "",
    star: 3,
    nonStar: 2,
  },
  { img: sql, name: "SQL", desc: [], link: "", date: "", star: 4, nonStar: 1 },
  {
    img: nodejs,
    name: "NodeJS",
    desc: [],
    link: "",
    date: "",
    star: 4,
    nonStar: 1,
  },
  {
    img: snowflake,
    name: "Snowflake",
    desc: [],
    link: "",
    date: "",
    star: 4,
    nonStar: 1,
  },
  {
    img: mongodb,
    name: "MongoDB",
    desc: [],
    link: "",
    date: "",
    star: 4,
    nonStar: 1,
  },
  {
    img: expressjs,
    name: "ExpressJS",
    desc: [],
    link: "",
    date: "",
    star: 3,
    nonStar: 2,
  },
  {
    img: postman,
    name: "Postman",
    desc: [],
    link: "",
    date: "",
    star: 5,
    nonStar: 0,
  },
  {
    img: illustrator,
    name: "Illustrator",
    desc: [],
    link: "",
    date: "",
    star: 4,
    nonStar: 1,
  },
];

export const assets = {
  chevron,
  linkedin,
  github,
  home,
  profile_image,
  cross,
  heartRed,
  heart,
  starGold,
  star,
};

export const highlight_list = [
  {
    highlight_name: "🎓",
    highlight_image: education,
  },
  {
    highlight_name: "🏅",
    highlight_image: certification,
  },
  {
    highlight_name: "📜",
    highlight_image: research,
  },
];

export const certificate_list = [C1, C2, C3, C4];
