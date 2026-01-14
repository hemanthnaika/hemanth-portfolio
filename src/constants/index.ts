import {
  aws_dev,
  clickCart,
  fullStack,
  microDegree,
  omega,
  oneStop,
  pinnacle,
  pythonCer,
  shapeAi,
  skillConnectLap,
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
    github: "https://github.com/PrashantChaudhari/SkillConnect",
    demo: "https://skill-connect.vercel.app/",
    description:
      "SkillConnect is a modern platform that connects learners and instructors. Users can share their skills, join live workshops, and participate in real-time video sessions. The platform includes a fully-featured Admin Panel for managing users, workshops, and content seamlessly.",
    bg: "rgba(15,43,76,0.2)",
    tech: [
      { icon: nextJs, title: "Next.js" },
      { icon: postgreSQL, title: "PostgreSQL" },
      { icon: drizzleOrm, title: "Drizzle ORM" },
      { icon: tailwindcss, title: "Tailwind CSS" },
    ],
    admin: {
      username: "admin@skillconnect.com",
      password: "Admin123!",
      description: "Full admin access to manage workshops, users, and content.",
    },
  },
  {
    id: 2,
    img: clickCart,
    title: "Click Cart E-commerce",
    github: "https://github.com/PrashantChaudhari/ClickCart",
    demo: "https://click-cart.vercel.app/",
    description:
      "Click Cart is an intuitive e-commerce platform where users can browse products, manage carts, and place orders efficiently. Includes a secure admin dashboard to manage products, categories, orders, and invoices. Designed with performance and usability in mind for both customers and administrators.",
    bg: "rgba(54,44,157,0.2)",
    tech: [
      { icon: react, title: "React.js" },
      { icon: node, title: "Node.js" },
      { icon: mongoDB, title: "MongoDB" },
    ],
    admin: {
      username: "admin@clickcart.com",
      password: "Admin@123",
      description: "Admin panel for managing products, orders, and users.",
    },
  },
  {
    id: 3,
    img: oneStop,
    title: "One Stop Banking",
    github: "https://github.com/PrashantChaudhari/OneStop",
    demo: "https://one-stop-banking.vercel.app/",
    description:
      "One Stop is a complete banking solution that allows users to manage accounts, transfer funds, and pay bills securely. The platform emphasizes a user-friendly interface with fast and reliable performance. Includes an Admin Panel to monitor transactions, manage users, and ensure smooth banking operations.",
    bg: "rgba(37,99,235,0.2)",
    tech: [
      { icon: django, title: "Django" },
      { icon: python, title: "Python" },
      { icon: postgreSQL, title: "PostgreSQL" },
    ],
    admin: {
      username: "admin@onestop.com",
      password: "BankAdmin2026",
      description:
        "Admin dashboard to oversee all banking operations and user accounts.",
    },
  },
];