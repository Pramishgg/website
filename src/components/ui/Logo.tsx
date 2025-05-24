import React from 'react';
import { Link } from 'react-scroll';

const Logo: React.FC = () => {
  return (
    <Link
      to="hero"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="flex items-center space-x-2 cursor-pointer"
    >
      <span className="text-4xl font-bold text-primary-500" style={{ fontFamily: "'Dancing Script', cursive" }}>Pramish</span>
    </Link>
  );
};

export default Logo;