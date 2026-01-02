import {
  Code,
  User,
  Briefcase,
  Server,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Twitch,
} from "lucide-react";
import { DiVisualstudio } from "react-icons/di";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedux,
  SiReactquery,
  SiGithub,
  SiGit,
  SiFigma,
} from "react-icons/si";

export const AboutSkills = [
  {
    icon: Code,
    title: "Web Development",
    valuetext:
      "Creating responsive websites and web applications with modern frameworks.",
  },
  {
    icon: User,
    title: "UI/UX Design",
    valuetext:
      "Designing intuitive user interfaces and seamless user experiences.",
  },
  {
    icon: Briefcase,
    title: "Project Management",
    valuetext:
      "Leading projects from conception to completion using agile methodologies.",
  },
  {
    icon: Server,
    title: "Back-End Development",
    valuetext:
      "Building secure, scalable APIs and databases that power reliable, high-performance applications.",
  },
];

export const clientReviews = [
  {
    clientName: "Sibalaba Francis",
    title: "CEO, Bawologoma Electro Centre",
    clientText:
      "Francis is a highly talented developer with the ability to work across a wide range of technologies. He collaborates well with teams and confidently takes on leadership roles when needed.",
    rating: 4,
  },

  {
    clientName: "Mwase Afiizu",
    title: "Manager, Namu Restaurant",
    clientText:
      "Working with Francis was a great experience. He understood our requirements clearly and delivered a reliable and user-friendly solution.",
    rating: 5,
  },

  {
    clientName: "Namu Whitney",
    title: "CEO, Namu Pizza Hub",
    clientText:
      "I was impressed by his attention to detail and professionalism. The project was delivered on time and met all our expectations.",
    rating: 4,
  },

  {
    clientName: "Isaac Kato",
    title: "Business Owner",
    clientText:
      "Francis provided excellent technical support and built a solution that greatly improved our business operations. I highly recommend his work.",
    rating: 5,
  },
];

export const skills = [
  { name: "React.js", icon: SiReact, level: 90, category: "frontend" },
  { name: "JavaScript", icon: SiJavascript, level: 90, category: "frontend" },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    level: 90,
    category: "frontend",
  },
  { name: "Next.js", icon: SiNextdotjs, level: 80, category: "frontend" },

  // backend
  { name: "Node.js", icon: SiNodedotjs, level: 80, category: "backend" },
  { name: "Express.js", icon: SiExpress, level: 75, category: "backend" },
  { name: "Django", icon: SiDjango, level: 65, category: "backend" },

  { name: "MongoDB", icon: SiMongodb, level: 75, category: "backend" },
  { name: "PostgreSQL", icon: SiPostgresql, level: 70, category: "backend" },
  { name: "MySQL", icon: SiMysql, level: 65, category: "backend" },

  { name: "Redux Toolkit", icon: SiRedux, level: 85, category: "tools" },
  { name: "React Query", icon: SiReactquery, level: 85, category: "tools" },

  { name: "Git", icon: SiGit, level: 90, category: "tools" },
  { name: "GitHub", icon: SiGithub, level: 90, category: "tools" },
  { name: "Figma", icon: SiFigma, level: 80, category: "tools" },
  { name: "VS Code", icon: DiVisualstudio, level: 95, category: "tools" },
];

export const projects = [
  {
    id: 1,
    title: "Bawologoma Electro Centre",
    description:
      "A modern and responsive portfolio website designed to showcase products, services, and brand identity with a clean and professional user experience.",
    image: "/projects/bawologoma.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://www.bawologomaelectrocentre.com",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Orbit Analytics Dashboard",
    description:
      "An interactive analytics dashboard featuring dynamic data visualization, real-time filtering, and insightful performance metrics for informed decision-making.",
    image: "/projects/project2.png",
    tags: ["JavaScript", "Tailwlind", "React.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Namu PIzza E-commerce Platform",
    description:
      "A full-featured e-commerce platform with secure user authentication, product management, and integrated payment processing for seamless online transactions.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Express"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const Address = [
  {
    title: "Email",
    detail: "juukojuniorfrancis@gmail.com",
    icon: Mail,
  },
  {
    title: "Phone",
    detail: "+256-756-974-222  ",
    icon: Phone,
  },
  {
    title: "Location",
    detail: "Kampala, Uganda",
    icon: MapPin,
  },
];

export const contactIcons = [
  { icon: Linkedin },
  { icon: Twitter },
  { icon: Instagram },
  { icon: Twitch },
];
// export const skills = [
//   // Frontend
//   { name: "HTML/CSS", level: 95, category: "frontend" },
//   { name: "JavaScript", level: 90, category: "frontend" },
//   { name: "React", level: 90, category: "frontend" },
//   { name: "React Native", level: 85, category: "frontend" },
//   { name: "Tailwind CSS", level: 90, category: "frontend" },
//   { name: "Next.js", level: 80, category: "frontend" },

//   // Backend
//   { name: "Node.js", level: 80, category: "backend" },
//   { name: "Express", level: 75, category: "backend" },
//   { name: "MongoDB", level: 70, category: "backend" },
//   { name: "PostgreSQL", level: 65, category: "backend" },
//   { name: "MySQL", level: 60, category: "backend" },
//   { name: "Django", level: 60, category: "backend" },

//   // Tools
//   { name: "Git/GitHub", level: 90, category: "tools" },
//   { name: "Figma", level: 85, category: "tools" },
//   { name: "React Query", level: 95, category: "tools" },
//   { name: "Redux / Redux toolkit", level: 95, category: "tools" },
//   { name: "VS Code", level: 95, category: "tools" },
// ];

// export const skills = [
//   // Frontend
//   { name: "HTML & CSS", level: 90, category: "frontend" },
//   { name: "JavaScript (ES6+)", level: 90, category: "frontend" },
//   { name: "React.js", level: 90, category: "frontend" },
//   { name: "React Native", level: 85, category: "frontend" },
//   { name: "Tailwind CSS", level: 90, category: "frontend" },
//   { name: "Next.js", level: 80, category: "frontend" },

//   // Backend
//   { name: "Node.js", level: 80, category: "backend" },
//   { name: "Express.js", level: 75, category: "backend" },
//   { name: "Django", level: 65, category: "backend" },

//   // Databases
//   { name: "MongoDB", level: 75, category: "database" },
//   { name: "PostgreSQL", level: 70, category: "database" },
//   { name: "MySQL", level: 65, category: "database" },

//   // State & Data Management
//   { name: "React Query", level: 85, category: "state" },
//   { name: "Redux / Redux Toolkit", level: 85, category: "state" },

//   // Tools
//   { name: "Git & GitHub", level: 90, category: "tools" },
//   { name: "Figma", level: 80, category: "tools" },
//   { name: "VS Code", level: 95, category: "tools" },
// ];
