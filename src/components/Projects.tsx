import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';
import ProjectCard from './projects/ProjectCard';
import { projectsData } from '../data/projects';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <SectionTitle
          title="My"
          highlight="Projects"
          centered
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mt-12 sm:mt-16">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                damping: 20
              }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;