"use client";
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  defaultValue?: string;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({
  children,
  onChange,
  defaultValue,
  className,
}) => {
  const [localValue, setLocalValue] = useState<string>(
    Array.isArray(children) ? children[0].props?.children : ''
  );

  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    if (typeof onChange === 'function') {
      onChange(e);
    } else {
      setLocalValue(e.target.value);
    }
  }

  return (
    <select
      className={twMerge(`
        text-sm
        block  
        rounded-md 
        border-0 
        py-1.5 
        pl-3 pr-10
        text-gray-900 
        ring-1 
        ring-inset 
        ring-gray-300 focus:ring-2 
        focus:ring-indigo-600 
        sm:leading-6
      `, className)}
      defaultValue={defaultValue || localValue}
      onChange={handleSelectChange}
    >
      {children}
    </select>
  )
}
