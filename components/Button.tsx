"use client";

import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  onClick?: () => {};
  type?: "button" | "submit" | "reset";
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  onClick = () => console.log('click'),
  type,
  className,
  children
}) => {

  return (
    <button
      onClick={onClick}
      type={type || 'button'}
      className={twMerge(`
        flex-none 
        rounded-md
        bg-white
        px-3.5 
        py-2.5 
        text-sm 
        font-semibold
        text-gray-900 
        shadow-sm 
        hover:bg-gray-100 
        focus-visible:outline 
        focus-visible:outline-2 
        focus-visible:outline-offset-2 
        focus-visible:outline-white
      `, className)}
    >
      {children}
    </button>
  )
}