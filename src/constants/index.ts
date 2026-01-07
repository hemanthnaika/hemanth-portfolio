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
