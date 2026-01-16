import {
  aws_dev,
  bookStore,
  clickCart,
  fullStack,
  microDegree,
  omega,
  oneStop,
  PGMonitoring,
  pinnacle,
  pythonCer,
  shapeAi,
  skillConnectLap,
  smartFarming,
  sygma,
} from "@/assets";
import {
  api,
  aws,
  bootstrap,
  css,
  django,
  drizzleOrm,
  express,
  figma,
  firebase,
  flask,
  git,
  gitAction,
  html,
  java,
  js,
  mongoDB,
  mongoose,
  mySql,
  netlify,
  nextJs,
  node,
  php,
  postgreSQL,
  postman,
  prisma,
  python,
  react,
  reactNative,
  redux,
  tailwindcss,
  ts,
  vercel,
  vscode,
  zustand,
} from "@/assets/icons";
import { Code, Contact, FolderKanban, HatGlasses, Home } from "lucide-react";

export const navBar = [
  {
    title: "Home",
    link: "#",
    icons: Home,
  },
  {
    title: "About Me",
    link: "#about",
    icons: HatGlasses,
  },
  {
    title: "Skills",
    link: "#skills",
    icons: Code,
  },
  {
    title: "Projects",
    link: "#projects",
    icons: FolderKanban,
  },
  {
    title: "Contact",
    link: "#contact",
    icons: Contact,
  },
];

export const skills = [
  // Languages
  { title: "JavaScript", icon: js, category: "Languages" },
  {
    title: "TypeScript",
    icon: ts,
    category: "Languages",
  },
  { title: "Python", icon: python, category: "Languages" },
  { title: "Java", icon: java, category: "Languages" },
  { title: "PHP", icon: php, category: "Languages" },

  // Frontend
  { title: "HTML", icon: html, category: "Frontend" },
  { title: "CSS", icon: css, category: "Frontend" },
  { title: "React", icon: react, category: "Frontend" },
  { title: "Next.js", icon: nextJs, category: "Frontend" },
  {
    title: "React Native",
    icon: reactNative,
    category: "Frontend",
  },
  { title: "Tailwind CSS", icon: tailwindcss, category: "Frontend" },
  { title: "Bootstrap", icon: bootstrap, category: "Frontend" },
  { title: "Redux / Redux Toolkit", icon: redux, category: "Frontend" },
  { title: "Zustand", icon: zustand, category: "Frontend" },

  // Backend
  { title: "Node.js", icon: node, category: "Backend" },
  { title: "Express.js", icon: express, category: "Backend" },
  { title: "Django", icon: django, category: "Backend" },
  { title: "Flask", icon: flask, category: "Backend" },
  { title: "REST APIs", icon: api, category: "Backend" },

  // Database
  { title: "MongoDB", icon: mongoDB, category: "Database" },
  { title: "PostgreSQL", icon: postgreSQL, category: "Database" },
  { title: "MySQL", icon: mySql, category: "Database" },
  { title: "Firebase", icon: firebase, category: "Database" },

  // ORM
  { title: "Mongoose", icon: mongoose, category: "ORM" },
  { title: "Prisma ORM", icon: prisma, category: "ORM" },
  { title: "Drizzle ORM", icon: drizzleOrm, category: "ORM" },

  // Hosting
  { title: "Vercel", icon: vercel, category: "Hosting" },
  { title: "Netlify", icon: netlify, category: "Hosting" },
  { title: "AWS", icon: aws, category: "Hosting" },

  // Tools
  { title: "Git", icon: git, category: "Tools" },
  { title: "Postman", icon: postman, category: "Tools" },
  { title: "Figma", icon: figma, category: "Tools" },
  { title: "GitHub Actions", icon: gitAction, category: "Tools" },
  { title: "VS Code", icon: vscode, category: "Tools" },
];
export const experience = [
  {
    role: "Full Stack Developer Trainee",
    company: "Shape AI",
    logo: shapeAi,
    responsibilities:
      "Built full-stack web applications, developed REST APIs and database logic, and implemented CRUD operations and authentication using a component-based architecture.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB"],
    style: "absolute -top-[76px] left-0",
  },
  {
    role: "Python Full Stack Developer Trainee",
    company: "Micro Degree",
    logo: microDegree,
    responsibilities:
      "Developed full-stack web applications using Python and Django with database integration and authentication.",
    techStack: ["Python", "Django", "SQLite"],
    style: "absolute -bottom-16 left-1/2 -translate-x-1/2",
  },
  {
    role: "DevOps & AWS Trainee",
    company: "Micro Degree",
    logo: microDegree,
    responsibilities:
      "Learned AWS and DevOps fundamentals and deployed applications on AWS EC2 with basic CI/CD and security practices.",
    techStack: ["AWS", "EC2", "Load Balancer", "Linux", "CI/CD"],
    style: "absolute -top-[70px] right-0",
  },
];

export const certificates = [
  { id: 1, img: pythonCer },
  { id: 2, img: fullStack },
  { id: 3, img: sygma },
  { id: 4, img: pinnacle },
  { id: 5, img: omega },
  { id: 6, img: aws_dev },
];

export const projects = [
  {
    id: 1,
    img: skillConnectLap,
    title: "Skill Connect",
    github: "https://github.com/hemanthnaika/skill-connect",
    demo: "https://skill-connect-web.vercel.app/",
    description:
      "SkillConnect is a modern platform that connects learners and instructors. Users can share their skills, join live workshops, and participate in real-time video sessions. The platform includes a fully-featured Admin Panel for managing users, workshops, and content seamlessly.",
    bg: "rgba(15,43,76,0.5)",
    tech: [
      { icon: nextJs, title: "Next.js" },
      { icon: postgreSQL, title: "PostgreSQL" },
      { icon: drizzleOrm, title: "Drizzle ORM" },
      { icon: tailwindcss, title: "Tailwind CSS" },
    ],
  },
  {
    id: 2,
    img: clickCart,
    title: "Click Cart E-commerce",
    github: "https://github.com/hemanthnaika/ClickCart",
    demo: "https://click-cart-shop.vercel.app/",
    description:
      "Click Cart is an intuitive e-commerce platform where users can browse products, manage carts, and place orders efficiently. Includes a secure admin dashboard to manage products, categories, orders, and invoices. Designed with performance and usability in mind for both customers and administrators.",
    bg: "rgba(54,44,157,0.5)",
    tech: [
      { icon: react, title: "React.js" },
      { icon: node, title: "Node.js" },
      { icon: mongoDB, title: "MongoDB" },
    ],
  },
  {
    id: 3,
    img: oneStop,
    title: "One Stop Banking",
    github: "https://github.com/hemanthnaika/OneStopBank",
    demo: "https://onestopbank.onrender.com",
    description:
      "One Stop is a complete banking solution that allows users to manage accounts, transfer funds, and pay bills securely. The platform emphasizes a user-friendly interface with fast and reliable performance. Includes an Admin Panel to monitor transactions, manage users, and ensure smooth banking operations.",
    bg: "rgba(37,99,235,0.5)",
    tech: [
      { icon: django, title: "Django" },
      { icon: python, title: "Python" },
      { icon: postgreSQL, title: "PostgreSQL" },
    ],
  },

  {
    id: 4,
    img: bookStore,
    title: "Bookstore",
    github:
      "https://github.com/hemanthnaika/online-bookstore-inventory-management",
    demo: "https://online-bookstore-client.vercel.app/",
    demoAdmin:
      "https://online-bookstore-inventory-manageme-admin.vercel.app/login",
    description:
      "Bookstore is an online platform where users can browse, view details, and purchase books easily.It includes an admin panel to add and delete books, manage users, and view sales analytics.",

    tech: [
      { icon: react, title: "React" },
      { icon: tailwindcss, title: "Tailwind CSS" },
      { icon: postgreSQL, title: "PostgreSQL" },
      { icon: prisma, title: "Prisma " },
    ],
  },
  {
    id: 5,
    img: smartFarming,
    title: "Smart Farming",
    github: "https://github.com/hemanthnaika/Smart-Farming",
    description:
      "Smart Farming is a modern agriculture platform that empowers farmers with smart technology.Farmers can sell crops directly, connect with buyers.It also features AI-powered crop disease detection for quick and reliable plant health insights.",

    tech: [
      { icon: react, title: "React" },
      { icon: tailwindcss, title: "Tailwind CSS" },
      { icon: flask, title: "Flask" },
      { icon: python, title: "Python" },
      { icon: mongoDB, title: "MongoDB" },
    ],
  },
  {
    id: 6,
    img: PGMonitoring,
    title: "PG Monitoring",
    github: "https://github.com/hemanthnaika/PG-Student-Monitoring-",
    description:
      "PG-Student-Monitoring is a system to track college students staying in paying guest (PG) accommodations.It manages records of students and PGs registered under colleges and allows students to raise complaints.The platform also supports PG inspections conducted by authorized committee members.",

    tech: [
      { icon: php, title: "PHP" },
      { icon: css, title: "CSS" },
      { icon: mySql, title: "MYSQL" },
    ],
  },
];