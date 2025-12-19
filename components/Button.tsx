import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionLink = motion.create(Link);

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  to, 
  onClick, 
  variant = 'primary', 
  className = '',
  external = false
}) => {
  const baseStyles = "inline-flex items-center justify-center px-4 py-2 rounded-md font-medium text-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    if (external) {
      return (
        <motion.a 
          href={to} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={combinedClasses}
          whileTap={{ scale: 0.95 }}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <MotionLink 
        to={to} 
        className={combinedClasses}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button 
      whileTap={{ scale: 0.95 }}
      onClick={onClick} 
      className={combinedClasses}
    >
      {children}
    </motion.button>
  );
};