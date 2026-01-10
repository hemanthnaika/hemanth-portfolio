import { microDegree, shapeAi } from "@/assets";
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
    link: "/",
    icons: FolderKanban,
  },
  {
    title: "Contact",
    link: "/",
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
