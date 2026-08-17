interface ChipProps {
  children: React.ReactNode;
  active?: boolean;
  variant?: 'default' | 'primary' | 'secondary';
  size?: 'default' | 'small';
  onClick?: () => void;
  className?: string;
}

export function Chip({ children, active = false, variant = 'default', size = 'default', onClick, className = '' }: ChipProps) {
  const getVariantStyles = () => {
    if (variant === 'primary' || active) {
      return 'bg-[#5A8B6F] text-white shadow-sm';
    }
    if (variant === 'secondary') {
      return 'bg-[#E8F0EC] text-[#5A8B6F]';
    }
    return 'bg-white text-[#666666] border border-[#E0E0E0]';
  };

  const sizeStyles = size === 'small' ? 'px-2.5 py-1 text-[11px]' : 'px-5 py-2.5 text-[13px]';

  return (
    <button
      onClick={onClick}
      className={`
        ${sizeStyles} rounded-full font-medium whitespace-nowrap transition-all duration-200
        ${getVariantStyles()}
        ${onClick ? 'hover:opacity-90 active:scale-95 cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </button>
  );
}