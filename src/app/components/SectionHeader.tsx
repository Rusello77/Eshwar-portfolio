import { ChevronRight } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  onViewAll?: () => void;
  showViewAll?: boolean;
}

export function SectionHeader({ title, onViewAll, showViewAll = false }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-[18px] font-semibold text-[#1A1A1A]">{title}</h2>
      {showViewAll && onViewAll && (
        <button 
          onClick={onViewAll}
          className="flex items-center gap-1 text-[#5A8B6F] text-[13px] font-medium hover:text-[#2E9370] transition-colors"
        >
          View All
          <ChevronRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}