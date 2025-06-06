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
  const isMobile = window.innerWidth < 768;

  return (
    <motion.div
      className="rounded-xl overflow-hidden shadow-md bg-white transition-all duration-300 hover:shadow-lg h-full gpu-accelerated touch-optimized"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      whileHover={!isMobile ? { y: -2 } : {}}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        {!isMobile && (
          <motion.div
            className="absolute inset-0 bg-primary-500 bg-opacity-0 flex items-center justify-center"
            animate={{ 
              backgroundColor: isHovered ? 'rgba(66, 133, 244, 0.7)' : 'rgba(66, 133, 244, 0)', 
            }}
            transition={{ duration: 0.3 }}
          >
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex space-x-4"
              >
                <motion.a 
                  href={link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-primary-500 p-3 rounded-full hover:bg-primary-50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Eye size={18} />
                </motion.a>
                <motion.button
                  className="bg-white text-primary-500 p-3 rounded-full hover:bg-primary-50 transition-colors"
                  onClick={() => navigator.clipboard.writeText(link)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Share size={18} />
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base line-clamp-3">{description}</p>
        <div className="flex space-x-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer" 
            className="text-sm text-primary-500 hover:text-primary-600 font-medium"
          >
            View Live →
          </a>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary-500 hover:text-primary-600 font-medium"
          >
            Source →
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;