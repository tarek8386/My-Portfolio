import { Project, Experience } from './types';

import softvencelogo from '../src/assets/softvence.png'

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management",
    technologies: ["React", "Node.js", "MongoDB", "Redux"],
    imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1600&q=80",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",
    category: "React"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management with real-time updates",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    imageUrl: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=1600&q=80",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",
    category: "HTML/CSS"
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management",
    technologies: ["React", "Node.js", "MongoDB", "Redux"],
    imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1600&q=80",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",
    category: "React"
  },
  {
    id: 4,
    title: "Task Management App",
    description: "Collaborative task management with real-time updates",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    imageUrl: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=1600&q=80",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",
    category: "HTML/CSS"
  },
  // Add more projects as needed
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Softvence Agency",
    position: "Senior Frontend Developer",
    period: "2024 - Present",
    description: "Led frontend development team, implemented modern React architectures",
    logo: softvencelogo
  },
  {
    id: 2,
    company: "Techworld",
    position: "Frontend Developer",
    period: "2022 - 2023",
    description: "Led frontend development team, implemented modern React architectures",
    logo: "https://images.unsplash.com/photo-1549421263-6064833b071b?auto=format&fit=crop&w=100&q=80"
  },
  // Add more experiences
];

