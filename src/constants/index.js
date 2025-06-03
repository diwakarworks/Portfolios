
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  cinemate,
  project2,
  project3,
  mysql,
  express,
  aws,
  storybook,
  t3,
  firebase,
  nextjs,
  fastapi,
  daisyui,
  framer,
  bootstrap,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
} from '../assets'


// Import Tekisky separately
import Mylapay from "../assets/company/Mylapay.png";

import NeuroRideicon from "../assets/NeuroRide.webp";
import Leetcodeicon from "../assets/Leetcode.jpg";
import Realworldicon from "../assets/Realworld.webp";



export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Tech",
  },
  {
    id: "projects",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },

];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "framer",
    icon: framer,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  { name: "Storybook UI", 
    icon: storybook 
  },
  { name: "T3-App", 
    icon: t3 
  },
  { name: "Firebase", 
    icon: firebase 
  },
  { name: "Next.js", 
    icon: nextjs 
  },
  { name: "FastAPI", 
    icon: fastapi 
  },
  { name: "DaisyUI", 
    icon: daisyui 
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Backend Developer",
    company_name: "Mylapay",
    icon: Mylapay,
    iconBg: "#383E56",
    date: "APRIL 2025 - JUNE 2025",
    points: [
      "Engineered scalable backend services using Node.js and Express.js tailored for the fintech domain.",
      "Integrated payment gateways, transaction processing, and reconciliation modules to ensure secure financial operations.",
      "Optimized APIs and microservices for high throughput and low latency, enabling seamless real-time transaction handling.",
      "Collaborated with cross-functional teams to maintain regulatory compliance, data integrity, and system reliability.",
    ],
  },
];

const whyMeAchievements = [
  {
    title: "Built NeuroRide",
    description: "An AI-powered ride-sharing platform with real-time location handling, and scalable system design.",
    icon: NeuroRideicon,
  },
  {
    title: "300+ Leetcode Problems",
    description: "Solved 300+ DSA problems, emphasizing depth over volume, with mastery in problem-solving strategies..",
    icon: Leetcodeicon, 
  },
  {
    title: "10+ Real Projects",
    description: "Delivered scalable, UI-rich apps using MERN, Next.js, FastAPI, and AWS all architected with solid system design principles..",
    icon:  Realworldicon,
  },
];


const projects = [
  {
    name: "NeuroRide AI-Powered Ride Sharing Platform",
    description:
      "NeuroRide connects riders with drivers instantly using AI-driven matching and route optimization, ensuring faster, safer, and cost-efficient travel.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "fastapi",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "orange-text-gradient",
      },
      {
        name: "redis",
        color: "pink-text-gradient",
      },
 
    ],
    image: project2,
    source_code_link: "https://github.com/diwakarworks/NeuroRide",
  },
  {
    name: "Cinemate",
    description:
      "CineMate helps movie enthusiasts discover, review, and track their favorite films with a sleek and user-friendly interface. Stay updated with the latest releases, explore in-depth reviews, and manage your personal watchlist effortlessly",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient"

      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: cinemate,
    source_code_link: "https://github.com/diwakarworks/LetterBoxd-Clone",
  },
  {
    name: "GameHaven",
    description:
      "Game Haven is a feature-rich gaming platform that lets users discover, explore, and track their favorite video games. With an immersive UI and advanced filtering, users can find games by genre, platform, and popularity while watching integrated trailers for a complete experience",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/diwakarworks/GameHaven",
  },
];

export { services, technologies, experiences, whyMeAchievements, projects };
