import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, className = '', onClick }: CardProps) {
  return (
    <div
      className={`bg-[#FAF8F2] rounded-[16px] p-4 ${className}`}
      style={{ boxShadow: '0 4px 16px rgba(90, 139, 111, 0.08)' }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
