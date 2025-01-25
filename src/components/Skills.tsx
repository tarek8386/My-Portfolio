import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaBootstrap, FaCss3Alt, FaGitAlt, FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";

import img from "../assets/tarek.jpg";
import { SiJavascript, SiRedux, SiTailwindcss } from "react-icons/si";
import { FiFigma } from "react-icons/fi";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      name: "React",
      icon: <FaReact className="text-blue-400" />,
      category: "Frontend Development",
    },
    {
      name: "TypeScript",
      icon: <TbBrandTypescript className="text-blue-600" />,
      category: "Programming Language",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400" />,
      category: "Frontend Development",
    },
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-orange-500" />,
      category: "Markup Language",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="text-blue-500" />,
      category: "Styling Language",
    },
    {
      name: "Sass",
      icon: <FaSass className="text-pink-400" />,
      category: "Styling Preprocessor",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-teal-400" />,
      category: "CSS Framework",
    },
    {
      name: "Redux",
      icon: <SiRedux className="text-purple-500" />,
      category: "State Management",
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="text-purple-600" />,
      category: "CSS Framework",
    },
    {
      name: "Git",
      icon: <FaGitAlt className="text-orange-600" />,
      category: "Version Control",
    },
    {
      name: "Figma",
      icon: <FiFigma className="text-red-500" />,
      category: "UI/UX Design",
    }
  ];
  
  

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800" id="skills">
      <motion.div
        ref={ref}
        className="container mx-auto px-6"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-16">
          <motion.span
            className="text-blue-400 font-semibold tracking-wide uppercase"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            Skills & Expertise
          </motion.span>
          <motion.h2
            className="text-4xl font-bold mt-2 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
          >
            Technical Proficiency
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all group"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.2 * index }}
            >
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-3xl text-blue-500 mb-6">
                  {skill.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {skill.name}
                </h4>
                <p className="text-sm text-gray-400">
                  {skill.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
