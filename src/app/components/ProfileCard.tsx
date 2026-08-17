import { Card } from './Card';
import { Button } from './Button';
import { Avatar } from './Avatar';
import { MapPin } from 'lucide-react';

interface ProfileCardProps {
  name: string;
  businessType: string;
  distance: string;
  avatar: 'woman1' | 'woman2' | 'woman3' | 'woman4';
  onConnect?: () => void;
  onMessage?: () => void;
}

export function ProfileCard({ name, businessType, distance, avatar, onConnect, onMessage }: ProfileCardProps) {
  return (
    <Card className="min-w-[200px] flex-shrink-0">
      <div className="flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-full overflow-hidden mb-3">
          <Avatar variant={avatar} className="w-full h-full" />
        </div>
        <h3 className="font-semibold text-[#1A1A1A] mb-1 text-[14px]">{name}</h3>
        <p className="text-[13px] text-[#666666] mb-1">{businessType}</p>
        <div className="flex items-center gap-1 text-[#666666] mb-3">
          <MapPin className="w-3 h-3" />
          <span className="text-[13px]">{distance}</span>
        </div>
        <div className="flex gap-2 w-full">
          <Button 
            variant="primary" 
            className="flex-1 py-2 text-[13px]"
            onClick={onConnect}
          >
            Connect
          </Button>
          <Button 
            variant="secondary" 
            className="flex-1 py-2 text-[13px]"
            onClick={onMessage}
          >
            Message
          </Button>
        </div>
      </div>
    </Card>
  );
}