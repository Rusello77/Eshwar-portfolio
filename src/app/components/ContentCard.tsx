import { Card } from './Card';
import { Clock, Play, Bookmark } from 'lucide-react';
import { Chip } from './Chip';

interface ContentCardProps {
  type: 'video' | 'story' | 'quick-tip';
  title: string;
  category: string;
  duration: string;
  label?: string;
  thumbnailUrl?: string;
  bookmarked?: boolean;
  onBookmark?: () => void;
  onClick?: () => void;
}

export function ContentCard({
  type,
  title,
  category,
  duration,
  label,
  thumbnailUrl,
  bookmarked = false,
  onBookmark,
  onClick
}: ContentCardProps) {
  return (
    <Card className="cursor-pointer hover:shadow-md transition-all duration-200 active:scale-[0.98]" onClick={onClick}>
      <div className="flex gap-4">
        {/* Thumbnail */}
        <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-[#E8F0EC] shadow-sm">
          {thumbnailUrl && (
            <img
              src={thumbnailUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          )}

          {/* Overlay icon for video type */}
          {type === 'video' && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-11 h-11 bg-white/95 rounded-full flex items-center justify-center shadow-md">
                <Play className="w-5 h-5 text-[#5A8B6F] fill-[#5A8B6F] ml-0.5" />
              </div>
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0 flex flex-col">
          <div className="flex items-start justify-between gap-2 mb-2">
            <Chip variant="secondary" size="small">{category}</Chip>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onBookmark?.();
              }}
              className="flex-shrink-0 transition-transform active:scale-90"
            >
              <Bookmark 
                className={`w-5 h-5 transition-colors ${bookmarked ? 'fill-[#5A8B6F] text-[#5A8B6F]' : 'text-[#999999]'}`} 
              />
            </button>
          </div>
          
          <h3 className="font-semibold text-[#1A1A1A] text-[15px] mb-2 line-clamp-2 leading-snug">{title}</h3>
          
          <div className="flex items-center gap-2 flex-wrap mt-auto">
            <div className="flex items-center gap-1 text-[#666666] text-[13px]">
              <Clock className="w-3.5 h-3.5" />
              <span>{duration}</span>
            </div>
            {label && (
              <span className="px-2 py-0.5 bg-[#E8F0EC] text-[#5A8B6F] text-[11px] font-medium rounded-full">
                {label}
              </span>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}