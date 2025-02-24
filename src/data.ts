import { Project, Experience } from './types';

import softvencelogo from '../src/assets/softvence.png'
import taxdax from '../src/assets/taxdax.png';
import onestop from '../src/assets/onestop.png';
import feso from '../src/assets/feso.png';
import magfadglobal from '../src/assets/magfadglobal.png';
import artist from '../src/assets/artist.png';
import arete from '../src/assets/arete.png';

export const projects: Project[] = [
  {
    id: 1,
    title: "Service provider website",
    description: "24/7 Service at User doorstep where the find perfect service for their needs ",
    technologies: ["HTML", "CSS", "JS", "Bootstrap"],
    imageUrl: taxdax,
    demoUrl: "https://onestop-services.netlify.app/",
    githubUrl: "https://github.com/tarek8386/",
    category: "HTML/CSS/JS"
  },
  {
    id: 2,
    title: "Tax Solution Website",
    description: "Solution For Tax related service where User can Find Trusted Tax Professionals Near them",
    technologies: ["HTML", "CSS", "JS", "Bootstrap"],
    imageUrl:onestop,
    demoUrl: "https://tax-dax.netlify.app/",
     githubUrl: "https://github.com/tarek8386/",
    category: "HTML/CSS/JS"
  },
  {
    id: 3,
    title: "Investment Website",
    description: "FeSo Invest is a family investment office based in Berlin that seeks investment opportunities across multiple asset classes",
    technologies: ["React", "Vite", "JS", "Tailwind CSS"],
    imageUrl: feso,
    demoUrl: "https://feso-ten.vercel.app/",
    githubUrl: "https://github.com/tarek8386/",
    category: "React"
  },
  {
    id: 4,
    title: "Marketing Website",
    description: "Product marketing solution in one place",
    technologies: ["HTML", "CSS", "JS", "Bootstrap"],
    imageUrl: magfadglobal,
    demoUrl: "https://magfadglobal.netlify.app/",
    githubUrl: "https://github.com/tarek8386/",
    category: "HTML/CSS/JS"
  },
  {
    id: 5,
    title: "Artist Website",
    description: "Artist portfolio and his content selling website",
    technologies: ["HTML", "CSS", "JS", "Bootstrap"],
    imageUrl: artist,
    demoUrl: "https://www.jeanrenardmusic.com/",
    githubUrl: "https://github.com/tarek8386/",
    category: "HTML/CSS/JS"
  },
  {
    id: 6,
    title: "Investment Website",
    description: "FeSo Invest is a family investment office based in Berlin that seeks investment opportunities across multiple asset classes",
    technologies: ["React", "Vite", "JS", "Tailwind CSS"],
    imageUrl: arete,
    demoUrl: "https://arete-solution.netlify.app/",
    githubUrl: "https://github.com/tarek8386/",
    category: "React"
  },
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
    company: "Beauty Shine",
    position: "Frontend Designer",
    period: "2022 - 2023",
    description: "Developed and maintain the business website",
    logo: "https://images.unsplash.com/photo-1549421263-6064833b071b?auto=format&fit=crop&w=100&q=80"
  },
  // Add more experiences
];

