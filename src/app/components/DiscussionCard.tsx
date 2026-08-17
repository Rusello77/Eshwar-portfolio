import { Card } from './Card';
import { Avatar } from './Avatar';
import { MessageCircle, ThumbsUp } from 'lucide-react';

interface DiscussionCardProps {
  author: string;
  avatar: 'bee';
  time: string;
  question: string;
  tags: string[];
  replies: number;
  helpful: number;
  onClick?: () => void;
}

export function DiscussionCard({ 
  author, 
  avatar, 
  time, 
  question, 
  tags, 
  replies, 
  helpful,
  onClick 
}: DiscussionCardProps) {
  return (
    <Card onClick={onClick} className="cursor-pointer hover:shadow-md transition-shadow">
      <div className="flex gap-3 mb-3">
        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
          <Avatar variant={avatar} className="w-full h-full" />
        </div>
        <div>
          <p className="font-semibold text-[#1A1A1A] text-[14px]">{author}</p>
          <p className="text-[12px] text-[#999999]">{time}</p>
        </div>
      </div>
      
      <p className="text-[#1A1A1A] mb-3 text-[15px] leading-relaxed font-medium">{question}</p>
      
      <div className="flex gap-2 mb-3 flex-wrap">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-[#E8F0EC] text-[#5A8B6F] text-[12px] rounded-full font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4 text-[#999999] text-[13px]">
        <div className="flex items-center gap-1.5">
          <MessageCircle className="w-4 h-4" />
          <span>{replies} replies</span>
        </div>
        <div className="flex items-center gap-1.5">
          <ThumbsUp className="w-4 h-4" />
          <span>{helpful} helpful</span>
        </div>
      </div>
    </Card>
  );
}