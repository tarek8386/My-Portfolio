import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experiences } from '../data';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white" id="experience">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Work Experience
        </h2>

        <div 
          ref={ref}
          className="max-w-3xl mx-auto"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              className="relative pl-8 pb-12 last:pb-0"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.2 }}
            >
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-0 h-full w-0.5 bg-gray-200" />
              )}
              <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-blue-500 border-4 border-white" />
              
              <div className="bg-gray-50 rounded-lg p-6 ml-6">
                <div className="flex items-center mb-4">
                  <img
                    src={experience.logo}
                    alt={experience.company}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{experience.position}</h3>
                    <p className="text-gray-600">{experience.company}</p>
                  </div>
                  <span className="ml-auto text-gray-500">{experience.period}</span>
                </div>
                <p className="text-gray-600">{experience.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;