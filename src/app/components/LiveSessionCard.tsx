import { Card } from './Card';
import { Button } from './Button';
import { Calendar, Clock } from 'lucide-react';

interface LiveSessionCardProps {
  title: string;
  mentorName: string;
  date: string;
  time: string;
  onJoin?: () => void;
  onRemind?: () => void;
}

export function LiveSessionCard({ 
  title, 
  mentorName, 
  date, 
  time,
  onJoin,
  onRemind 
}: LiveSessionCardProps) {
  return (
    <Card className="hover:shadow-md transition-all duration-200">
      <h3 className="font-semibold text-[#1A1A1A] text-[16px] mb-2 leading-snug">{title}</h3>
      <p className="text-[#666666] text-[14px] mb-4">with {mentorName}</p>
      
      <div className="flex items-center gap-4 mb-5 text-[#666666] text-[13px]">
        <div className="flex items-center gap-1.5">
          <Calendar className="w-4 h-4" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="w-4 h-4" />
          <span>{time}</span>
        </div>
      </div>
      
      <div className="flex gap-2">
        <Button 
          variant="primary" 
          className="flex-1 text-[14px] font-semibold shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
          onClick={onJoin}
        >
          Join
        </Button>
        <Button 
          variant="secondary" 
          className="flex-1 text-[14px] font-semibold transition-all active:scale-[0.98]"
          onClick={onRemind}
        >
          Remind Me
        </Button>
      </div>
    </Card>
  );
}