import { Card } from './Card';
import { BookOpen } from 'lucide-react';

interface LearningPathCardProps {
  title: string;
  description: string;
  lessons: number;
  color?: string;
  thumbnailUrl?: string;
  onClick?: () => void;
}

export function LearningPathCard({
  title,
  description,
  lessons,
  color = '#5A8B6F',
  thumbnailUrl,
  onClick
}: LearningPathCardProps) {
  return (
    <Card
      className="min-w-[280px] flex-shrink-0 cursor-pointer hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
      onClick={onClick}
    >
      {/* Thumbnail Area */}
      <div className="relative h-32 rounded-xl mb-4 overflow-hidden shadow-sm bg-[#E8F0EC]">
        {thumbnailUrl ? (
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            className="h-full flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${color} 0%, #E8F0EC 100%)` }}
          >
            <div className="w-16 h-16 bg-white/95 rounded-full flex items-center justify-center shadow-md">
              <BookOpen className="w-8 h-8 text-[#5A8B6F]" />
            </div>
          </div>
        )}
      </div>
      
      {/* Content */}
      <h3 className="font-semibold text-[#1A1A1A] mb-2 text-[16px] leading-snug">{title}</h3>
      <p className="text-[#666666] text-[13px] mb-4 leading-relaxed line-clamp-2">{description}</p>
      <div className="flex items-center gap-1 text-[#5A8B6F] text-[13px] font-medium">
        <BookOpen className="w-4 h-4" />
        <span>{lessons} lessons</span>
      </div>
    </Card>
  );
}