import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';
import SkillCategory from './skills/SkillCategory';
import { skillsData } from '../data/skills';

const Skills: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="skills" className="py-24 lg:py-32 bg-secondary-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <SectionTitle
          title="My"
          highlight="Skills"
          centered
        />
        
        <div className="mt-16 space-y-16">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <SkillCategory
                title={category.title}
                icon={category.icon}
                skills={category.skills}
                variant={category.variant}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;