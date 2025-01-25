import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaReact } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";

import img from "../assets/tarek.jpg";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      name: "React",
      icon: <FaReact />,
      category: "Frontend",
      proficiency: 90,
    },
    {
      name: "TypeScript",
      icon: <TbBrandTypescript />,
      category: "Frontend",
      proficiency: 85,
    },
    // Add more skills
  ];

  return (
    <section className="py-20 bg-gray-800" id="skills">
      <motion.div
        ref={ref}
        className="container mx-auto px-6"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-16">
          <motion.span
            className="text-blue-400 font-semibold"
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

        <div className="grid gap-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="relative p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-700 overflow-hidden group hover:border-blue-500/50 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative">
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center mr-4`}
                    >
                      {skill?.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-white">
                      {skill.name}
                    </h4>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Proficiency</span>
                      <span className="text-blue-400">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                        initial={{ width: 0 }}
                        animate={
                          inView
                            ? { width: `${skill.proficiency}%` }
                            : { width: 0 }
                        }
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
