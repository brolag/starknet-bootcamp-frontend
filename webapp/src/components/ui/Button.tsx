import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
}

export const Button = ({ children, variant = 'primary', ...props }: ButtonProps) => {
  const baseStyles = "px-4 py-2 rounded-md font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantStyles = {
    primary: "bg-yellow-500 text-gray-900 hover:bg-yellow-600 focus:ring-yellow-400",
    secondary: "bg-gray-600 text-gray-800 hover:bg-gray-700 focus:ring-gray-500",
    outline: "bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-50 focus:ring-yellow-400"
  };

  return (
    <button
      {...props}
      className={`${baseStyles} ${variantStyles[variant]} ${props.className || ''}`}
    >
      {children}
    </button>
  );
};
