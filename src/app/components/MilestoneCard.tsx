import { Card } from './Card';
import { Avatar } from './Avatar';

interface MilestoneCardProps {
  emoji: string;
  text: string;
  name?: string;
  avatar?: 'bee';
  horizontal?: boolean;
}

export function MilestoneCard({ emoji, text, name, avatar, horizontal = false }: MilestoneCardProps) {
  if (horizontal) {
    return (
      <Card className="bg-gradient-to-r from-[#E8F0EC] to-[#FAF8F2] min-w-[260px] flex-shrink-0 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{emoji}</span>
          <div className="flex-1">
            <p className="text-[#1A1A1A] text-[14px] font-medium leading-relaxed">{text}</p>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-to-r from-[#E8F0EC] to-[#FAF8F2] shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        <span className="text-2xl">{emoji}</span>
        <div className="flex-1">
          {name && avatar && (
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 rounded-full overflow-hidden">
                <Avatar variant={avatar} className="w-full h-full" />
              </div>
              <p className="font-semibold text-[#1A1A1A] text-[13px]">{name}</p>
            </div>
          )}
          <p className="text-[#1A1A1A] text-[14px] font-medium">{text}</p>
        </div>
      </div>
    </Card>
  );
}