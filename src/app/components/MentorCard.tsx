import { Card } from './Card';
import { Button } from './Button';
import { Avatar } from './Avatar';

interface MentorCardProps {
  name: string;
  experience: string;
  avatar: 'bee';
  onAskAdvice?: () => void;
  onBookChat?: () => void;
}

export function MentorCard({ name, experience, avatar, onAskAdvice, onBookChat }: MentorCardProps) {
  return (
    <Card className="min-w-[220px] flex-shrink-0 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-full overflow-hidden mb-3 shadow-sm">
          <Avatar variant={avatar} className="w-full h-full" />
        </div>
        <h3 className="font-semibold text-[#1A1A1A] mb-1 text-[14px]">{name}</h3>
        <p className="text-[12px] text-[#999999] mb-4">{experience}</p>
        <div className="flex gap-2 w-full">
          <Button 
            variant="primary" 
            className="flex-1 py-2 text-[12px] shadow-sm"
            onClick={onAskAdvice}
          >
            Ask Advice
          </Button>
          <Button 
            variant="secondary" 
            className="flex-1 py-2 text-[12px]"
            onClick={onBookChat}
          >
            Book Chat
          </Button>
        </div>
      </div>
    </Card>
  );
}