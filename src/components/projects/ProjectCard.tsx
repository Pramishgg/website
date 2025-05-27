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
    <motion.div
      className="rounded-xl overflow-hidden shadow-md bg-white transition-all duration-300 hover:shadow-xl h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.4 }}
        />
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
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Eye size={20} />
              </motion.a>
              <motion.button
                className="bg-white text-primary-500 p-3 rounded-full hover:bg-primary-50 transition-colors"
                onClick={() => navigator.clipboard.writeText(link)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Share size={20} />
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <div className="flex space-x-4">
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer" 
            className="text-sm text-primary-500 hover:text-primary-600 font-medium flex items-center"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            View Live →
          </motion.a>
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary-500 hover:text-primary-600 font-medium flex items-center"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            Source →
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;