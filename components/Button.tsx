
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`px-8 py-3 rounded-full bg-cta-gradient text-white font-bold tracking-wide transition-all duration-300 ease-in-out hover:brightness-110 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-aqua-blue/50 motion-reduce:transition-none ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
