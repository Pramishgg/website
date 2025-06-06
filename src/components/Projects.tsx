import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';
import ProjectCard from './projects/ProjectCard';
import { projectsData } from '../data/projects';

const Projects: React.FC = () => {
  const isMobile = window.innerWidth < 768;

  return (
    <section id="projects" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <SectionTitle
          title="My"
          highlight="Projects"
          centered
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 md:mt-16">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: isMobile ? 0.3 : 0.5, 
                delay: isMobile ? index * 0.05 : index * 0.1
              }}
              className="gpu-accelerated"
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