import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  secondary?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  primary,
  secondary,
  className = '',
  onClick,
  type = 'button',
}) => {
  const baseClasses = 'px-6 py-3 rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50';

  const getVariantClasses = () => {
    if (primary) {
      return 'bg-primary-500 hover:bg-primary-600 text-white focus:ring-primary-300';
    }
    if (secondary) {
      return 'bg-white hover:bg-gray-50 text-primary-500 border border-primary-200 hover:border-primary-300 focus:ring-primary-200';
    }
    return 'bg-gray-100 hover:bg-gray-200 text-gray-800 focus:ring-gray-200';
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${getVariantClasses()} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;