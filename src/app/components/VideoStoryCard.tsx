import { Card } from './Card';
import { Avatar } from './Avatar';
import { Play, Clock } from 'lucide-react';

interface VideoStoryCardProps {
  name: string;
  businessType: string;
  thumbnailUrl: string;
  userImageUrl: string;
  duration?: string;
  title?: string;
  onClick?: () => void;
}

export function VideoStoryCard({
  name,
  businessType,
  thumbnailUrl,
  userImageUrl,
  duration = '5:24',
  title,
  onClick
}: VideoStoryCardProps) {
  return (
    <Card className="w-[280px] flex-shrink-0 p-0 overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all hover:scale-[1.02]" onClick={onClick}>
      {/* Video Thumbnail - YouTube style with fixed aspect ratio 16:9 */}
      <div className="relative w-full bg-[#2D2D2D] overflow-hidden" style={{ aspectRatio: '16/9' }}>
        <img
          src={thumbnailUrl}
          alt={title || `${name}'s story`}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.backgroundColor = '#5A8B6F';
            target.style.opacity = '0.3';
          }}
        />

        {/* Overlay gradient for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

        {/* Play Icon Overlay - YouTube style */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-black/70 hover:bg-[#5A8B6F] rounded-full flex items-center justify-center shadow-lg transition-all group">
            <Play className="w-7 h-7 text-white fill-white ml-1" />
          </div>
        </div>

        {/* Duration badge - bottom right like YouTube */}
        <div className="absolute bottom-2 right-2 bg-black/80 px-1.5 py-0.5 rounded text-white text-[11px] font-sem m-[0px]ibold z-10">
          {duration}
        </div>

        {/* Title overlay at bottom */}
        {title && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent pt-8 pb-2 px-3">
            <p className="text-white text-[12px] font-semibold line-clamp-2 leading-snug">
              {title}
            </p>
          </div>
        )}
      </div>

      {/* Channel info - YouTube style */}
      <div className="p-3 bg-[#FAF8F2]">
        <div className="flex items-start gap-2">
          <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-[#5A8B6F]/20">
            <Avatar
              variant="real"
              imageUrl={userImageUrl}
              alt={name}
              className="w-full h-full"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-semibold text-[#1A1A1A] leading-tight mb-0.5">
              {name}
            </p>
            <p className="text-[11px] text-[#6B6B6B] leading-tight">
              {businessType}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}