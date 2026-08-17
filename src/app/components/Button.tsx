import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'px-6 py-3 transition-all duration-200 disabled:opacity-50 font-semibold';

  const variants = {
    primary: 'bg-[#5A8B6F] text-[#FAF8F2] hover:bg-[#4A7360] rounded-[12px] shadow-sm hover:shadow-md',
    secondary: 'bg-[#FAF8F2] text-[#5A8B6F] border-2 border-[#5A8B6F] hover:bg-[#E8F0EC] rounded-[12px]',
    ghost: 'text-[#5A8B6F] hover:bg-[#E8F0EC] rounded-[12px]'
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
