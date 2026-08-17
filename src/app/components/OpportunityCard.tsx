import { Card } from './Card';
import { Button } from './Button';
import { MapPin, Calendar, DollarSign } from 'lucide-react';

interface OpportunityCardProps {
  title: string;
  location: string;
  date: string;
  fee: string;
  category?: string;
  onApply?: () => void;
}

export function OpportunityCard({ title, location, date, fee, category, onApply }: OpportunityCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      {category && (
        <div className="mb-3">
          <span className="px-3 py-1 bg-[#E8F0EC] text-[#5A8B6F] text-[12px] rounded-full font-medium">
            {category}
          </span>
        </div>
      )}
      
      <h3 className="font-semibold text-[#1A1A1A] mb-3 text-[15px]">{title}</h3>
      
      <div className="flex items-center gap-3 text-[#666666] text-[13px] mb-4">
        <div className="flex items-center gap-1.5">
          <MapPin className="w-4 h-4 text-[#999999]" />
          <span>{location}</span>
        </div>
        <span className="text-[#E0E0E0]">•</span>
        <div className="flex items-center gap-1.5">
          <Calendar className="w-4 h-4 text-[#999999]" />
          <span>{date}</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between pt-3 border-t border-[#D8D3C8]">
        <div className="flex items-center gap-1 text-[#1A1A1A] font-semibold text-[14px]">
          <span>Booth fee: {fee}</span>
        </div>
        <Button variant="primary" className="text-[13px] py-2 px-4 shadow-sm" onClick={onApply}>
          Apply
        </Button>
      </div>
    </Card>
  );
}