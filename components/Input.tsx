"use client";
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  type?: string;
  name?: string;
  id?: string;
  className?: string;
}

export const Input: React.FC<InputProps> = ({ onChange, value, className, ...rest }) => {
  const [localValue, setLocalValue] = useState<string>('');

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (typeof onChange === 'function') {
      onChange(e);
    } else {
      setLocalValue(e.target.value)
    }
  }

  return (
    <input
      value={value || localValue}
      className={twMerge(`
      min-w-8 f
      lex-auto 
      rounded-md 
      border-0 
      bg-white/5 
      px-3.5 
      py-2 
      text-white 
      shadow-sm 
      ring-1 
      ring-inset 
      ring-white/10 
      focus:ring-2 
      focus:ring-inset 
      focus:ring-white 
      sm:text-sm 
      sm:leading-6`, className)}
      onChange={handleInputChange}
      {...rest}
    />
  )
}