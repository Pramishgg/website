import React from 'react';
import { Link } from 'react-scroll';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white py-8 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-4xl font-bold text-primary-500" style={{ fontFamily: "'Dancing Script', cursive" }}>Pramish</span>
          </div>
          
          <div className="flex flex-wrap justify-center space-x-6 mb-4 md:mb-0">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-600 hover:text-primary-500 transition-colors cursor-pointer"
              >
                {item}
              </Link>
            ))}
          </div>
          
          <div className="text-gray-600 text-sm flex items-center">
            <span>Built with</span>
            <Heart className="text-red-500 mx-1" size={14} />
            <span>by Pramish © {currentYear} Portfolio</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer