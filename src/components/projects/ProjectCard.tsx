import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Share } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  link,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="rounded-lg overflow-hidden shadow-md bg-white transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />
        <motion.div
          className="absolute inset-0 bg-primary-500 bg-opacity-0 transition-all duration-300 flex items-center justify-center"
          animate={{ 
            backgroundColor: isHovered ? 'rgba(66, 133, 244, 0.7)' : 'rgba(66, 133, 244, 0)', 
          }}
        >
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex space-x-4"
            >
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-primary-500 p-2 rounded-full hover:bg-primary-50 transition-colors"
              >
                <Eye size={20} />
              </a>
              <button
                className="bg-white text-primary-500 p-2 rounded-full hover:bg-primary-50 transition-colors"
                onClick={() => navigator.clipboard.writeText(link)}
              >
                <Share size={20} />
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex space-x-3">
          <button className="text-sm text-primary-500 hover:text-primary-600 font-medium flex items-center">
            View Live
          </button>
          <button className="text-sm text-primary-500 hover:text-primary-600 font-medium flex items-center">
            Source
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;