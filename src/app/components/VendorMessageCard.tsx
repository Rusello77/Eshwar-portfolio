import { MapPin, Phone, MessageCircle, Store } from 'lucide-react';
import { Button } from './Button';

interface VendorMessageCardProps {
  name: string;
  category: string;
  address: string;
  phone: string;
  notes?: string;
  sharedBy?: string;
  onCall?: () => void;
  onMessage?: () => void;
}

export function VendorMessageCard({ 
  name, 
  category, 
  address, 
  phone,
  notes,
  sharedBy,
  onCall,
  onMessage 
}: VendorMessageCardProps) {
  return (
    <div className="bg-white border border-[#E0E0E0] rounded-2xl p-4 shadow-sm max-w-[280px]">
      {/* Shared by label */}
      {sharedBy && (
        <p className="text-[11px] text-[#999999] mb-3">
          Shared by {sharedBy}
        </p>
      )}

      {/* Vendor Header */}
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 bg-[#E8F0EC] rounded-xl flex items-center justify-center flex-shrink-0">
          <Store className="w-5 h-5 text-[#5A8B6F]" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-[15px] font-semibold text-[#1A1A1A] mb-1">{name}</h3>
          <div className="inline-block px-2 py-0.5 bg-[#E8F0EC] text-[#5A8B6F] text-[11px] rounded-full">
            {category}
          </div>
        </div>
      </div>

      {/* Address */}
      <div className="flex items-start gap-2 mb-2">
        <MapPin className="w-3.5 h-3.5 text-[#666666] mt-0.5 flex-shrink-0" />
        <span className="text-[13px] text-[#666666]">{address}</span>
      </div>

      {/* Phone */}
      <div className="flex items-center gap-2 mb-3">
        <Phone className="w-3.5 h-3.5 text-[#666666] flex-shrink-0" />
        <span className="text-[13px] text-[#666666]">{phone}</span>
      </div>

      {/* Notes */}
      {notes && (
        <p className="text-[12px] text-[#999999] mb-3 italic border-l-2 border-[#E0E0E0] pl-3">
          "{notes}"
        </p>
      )}

      {/* Action Buttons */}
      <div className="flex gap-2">
        <Button 
          variant="primary" 
          className="flex-1 text-[13px] py-2 font-semibold"
          onClick={onCall}
        >
          <Phone className="w-4 h-4 mr-1" />
          Call
        </Button>
        <Button 
          variant="secondary" 
          className="flex-1 text-[13px] py-2 font-semibold"
          onClick={onMessage}
        >
          <MessageCircle className="w-4 h-4 mr-1" />
          Message
        </Button>
      </div>
    </div>
  );
}
