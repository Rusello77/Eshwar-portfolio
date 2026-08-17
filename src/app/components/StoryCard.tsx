import { Card } from './Card';
import { Button } from './Button';
import { Avatar } from './Avatar';

interface StoryCardProps {
  name: string;
  businessType: string;
  avatar: 'woman1' | 'woman2' | 'woman3' | 'woman4';
  quote: string;
  onReadMore?: () => void;
}

export function StoryCard({ name, businessType, avatar, quote, onReadMore }: StoryCardProps) {
  return (
    <Card className="min-w-[280px] flex-shrink-0">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <Avatar variant={avatar} className="w-full h-full" />
        </div>
        <div>
          <p className="font-semibold text-[#1A1A1A] text-[14px]">{name}</p>
          <p className="text-[13px] text-[#666666]">{businessType}</p>
        </div>
      </div>
      
      <p className="text-[#1A1A1A] text-[14px] leading-relaxed mb-4 italic">
        "{quote}"
      </p>
      
      <Button 
        variant="secondary" 
        className="w-full text-[14px] py-2"
        onClick={onReadMore}
      >
        Read Journey
      </Button>
    </Card>
  );
}
