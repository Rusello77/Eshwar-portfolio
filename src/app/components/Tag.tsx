interface TagProps {
  children: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
}

export function Tag({ children, selected = false, onClick }: TagProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full transition-all ${
        selected
          ? 'bg-[#5A8B6F] text-white'
          : 'bg-[#D8F3E6] text-[#5A8B6F]'
      }`}
    >
      <span className="text-[13px] font-medium">{children}</span>
    </button>
  );
}
