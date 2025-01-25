import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Heart, Coffee, Award, Users, Zap } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '30+', label: 'Happy Clients' },
    { number: '99%', label: 'Client Satisfaction' },
  ];

  const qualities = [
    { icon: Code, label: 'Clean Code', color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { icon: Heart, label: 'Passionate', color: 'text-red-500', bg: 'bg-red-500/10' },
    { icon: Coffee, label: 'Dedicated', color: 'text-amber-500', bg: 'bg-amber-500/10' },
    { icon: Award, label: 'Award Winner', color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { icon: Users, label: 'Team Player', color: 'text-green-500', bg: 'bg-green-500/10' },
    { icon: Zap, label: 'Fast Learner', color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
  ];

  return (
    <section className="py-20 bg-gray-900" id="about">
      <motion.div
        ref={ref}
        className="container mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-16">
          <motion.span 
            className="text-blue-400 font-semibold"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            About Me
          </motion.span>
          <motion.h2 
            className="text-4xl font-bold mt-2 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
          >
            Transforming Ideas into Digital Reality
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-20 blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=800&q=80"
              alt="Working on laptop"
              className="relative rounded-2xl shadow-2xl border border-gray-800"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.5 }}
            className="text-gray-300"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Passionate About Creating Impactful Digital Solutions
            </h3>
            <p className="mb-8 leading-relaxed">
              With over 5 years of experience in web development, I've had the privilege of working with diverse clients 
              and technologies. My approach combines technical expertise with creative problem-solving to deliver 
              exceptional results that exceed expectations.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700"
                >
                  <div className="text-3xl font-bold text-blue-400 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {qualities.map((quality, index) => (
                <motion.div
                  key={quality.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className={`p-4 rounded-xl ${quality.bg} text-center`}
                >
                  <quality.icon className={`w-6 h-6 mx-auto mb-2 ${quality.color}`} />
                  <p className="text-sm font-medium text-white">{quality.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;