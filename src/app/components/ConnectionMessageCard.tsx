import { MapPin, UserPlus, Eye } from 'lucide-react';
import { Avatar } from './Avatar';
import { Button } from './Button';

interface ConnectionMessageCardProps {
  name: string;
  businessType: string;
  distance: number;
  area: string;
  avatar: 'woman1' | 'woman2' | 'woman3' | 'woman4';
  sharedBy?: string;
  onConnect?: () => void;
  onViewProfile?: () => void;
}

export function ConnectionMessageCard({ 
  name, 
  businessType, 
  distance, 
  area, 
  avatar,
  sharedBy,
  onConnect,
  onViewProfile 
}: ConnectionMessageCardProps) {
  return (
    <div className="bg-white border border-[#E0E0E0] rounded-2xl p-4 shadow-sm max-w-[280px]">
      {/* Shared by label */}
      {sharedBy && (
        <p className="text-[11px] text-[#999999] mb-3">
          Shared by {sharedBy}
        </p>
      )}

      {/* Profile Section */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 flex-shrink-0">
          <Avatar 
            variant={avatar}
            className="w-full h-full"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-[15px] font-semibold text-[#1A1A1A] mb-0.5">{name}</h3>
          <p className="text-[13px] text-[#666666] truncate">{businessType}</p>
        </div>
      </div>

      {/* Distance and Location */}
      <div className="flex items-center gap-1.5 mb-4">
        <MapPin className="w-3.5 h-3.5 text-[#666666] flex-shrink-0" />
        <span className="text-[13px] text-[#666666]">
          {distance} km away · {area}
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <Button 
          variant="primary" 
          className="flex-1 text-[13px] py-2 font-semibold"
          onClick={onConnect}
        >
          <UserPlus className="w-4 h-4 mr-1" />
          Connect
        </Button>
        <Button 
          variant="secondary" 
          className="flex-1 text-[13px] py-2 font-semibold"
          onClick={onViewProfile}
        >
          <Eye className="w-4 h-4 mr-1" />
          View
        </Button>
      </div>
    </div>
  );
}