import { Button } from './Button';
import { Star, Clock } from 'lucide-react';

interface ContinueLearningCardProps {
  title: string;
  progress: number;
  thumbnailColor?: string;
  onResume?: () => void;
  rating?: number;
  duration?: number; // duration in minutes
}

export function ContinueLearningCard({ 
  title, 
  progress,
  thumbnailColor = '#5A8B6F',
  onResume,
  rating = 4.6,
  duration = 45
}: ContinueLearningCardProps) {
  // Calculate circle properties for the progress ring
  const size = 100;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  // Determine progress label
  const getProgressLabel = () => {
    if (progress < 20) return 'Just Started';
    if (progress > 80) return 'Almost Done';
    return 'Completed';
  };

  return (
    <div className="bg-gradient-to-br from-[#F8FCF9] to-white rounded-2xl p-5 shadow-[0px_2px_12px_rgba(0,0,0,0.06)] border border-[#E8F5EF]">
      <div className="flex gap-5">
        {/* Left: Circular Progress Ring */}
        <div className="flex-shrink-0 flex flex-col items-center">
          <div className="relative">
            <svg width={size} height={size} className="transform -rotate-90">
              {/* Background ring */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="#F0F0F0"
                strokeWidth={strokeWidth}
              />
              {/* Progress ring */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="#5A8B6F"
                strokeWidth={strokeWidth + 1}
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            {/* Percentage text in center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-[26px] font-bold text-[#1A1A1A] leading-none">{progress}%</div>
            </div>
          </div>
          {/* Progress label below circle */}
          <div className="text-[11px] text-[#5A8B6F] font-semibold mt-2">{getProgressLabel()}</div>
        </div>

        {/* Right: Course Details */}
        <div className="flex-1 min-w-0 flex flex-col">
          {/* Course Title */}
          <h3 className="font-semibold text-[#1A1A1A] text-[15px] leading-tight mb-2 line-clamp-2">
            {title}
          </h3>
          
          {/* Rating and Duration */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-[#FFB800] fill-[#FFB800]" />
              <span className="text-[13px] text-[#666666] font-medium">{rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#666666]" />
              <span className="text-[13px] text-[#666666] font-medium">{duration} min</span>
            </div>
          </div>

          {/* Spacer to push button to bottom */}
          <div className="flex-1"></div>

          {/* Primary CTA */}
          <Button 
            variant="primary" 
            className="w-full text-[14px] py-3 font-semibold rounded-xl shadow-sm hover:shadow-md transition-all active:scale-98"
            onClick={onResume}
          >
            Resume
          </Button>
        </div>
      </div>
    </div>
  );
}