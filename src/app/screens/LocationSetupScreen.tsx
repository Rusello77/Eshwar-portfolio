import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { WhatsAppCommunityBottomSheet } from '../components/WhatsAppCommunityBottomSheet';

export function LocationSetupScreen() {
  const navigate = useNavigate();
  const [showLocally, setShowLocally] = useState(true);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [hasJoined, setHasJoined] = useState(false);

  return (
    <div className="min-h-screen bg-white px-6 pt-12 pb-24 max-w-[390px] mx-auto">
      <h1 className="text-center mb-2">Find People Near You</h1>
      <p className="text-center text-[#666666] mb-8">Connect with entrepreneurs in your area</p>
      
      <div className="space-y-4 mb-6">
        <Input 
          label="City"
          placeholder="Enter your city"
        />
        
        <Input 
          label="Area / Pincode"
          placeholder="Enter area or pincode"
        />
      </div>
      
      <div className="flex items-center justify-between p-4 bg-[#E8F0EC] rounded-[12px] mb-8">
        <span className="text-[#1A1A1A]">Show my business locally</span>
        <button
          onClick={() => setShowLocally(!showLocally)}
          className={`w-12 h-6 rounded-full transition-colors relative ${
            showLocally ? 'bg-[#5A8B6F]' : 'bg-[#E0E0E0]'
          }`}
        >
          <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
            showLocally ? 'translate-x-6' : 'translate-x-0.5'
          }`} />
        </button>
      </div>

      {/* Join Communities Section */}
      <div className="mb-8">
        <h2 className="font-semibold text-[#1A1A1A] mb-1">
          Join Our Community <span className="text-[#999999] font-normal">(Optional)</span>
        </h2>
        <p className="text-[#666666] text-[14px] mb-4">
          Connect with fellow homemaker entrepreneurs on WhatsApp
        </p>

        {/* Single Community Card */}
        <div className="bg-white border border-[#E0E0E0] rounded-[16px] p-5">
          <div className="flex items-start gap-4 mb-4">
            {/* WhatsApp Community Icon */}
            <div className="flex-shrink-0">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                {/* Background circle */}
                <rect width="56" height="56" rx="12" fill="#5A8B6F"/>
                
                {/* Community icon - overlapping circles representing groups */}
                <g transform="translate(12, 12)">
                  {/* Large circle (main community) */}
                  <circle cx="16" cy="20" r="9" fill="white" fillOpacity="0.9"/>
                  
                  {/* Small circles (sub-groups) */}
                  <circle cx="9" cy="12" r="5" fill="white" fillOpacity="0.85"/>
                  <circle cx="23" cy="12" r="5" fill="white" fillOpacity="0.85"/>
                  <circle cx="9" cy="24" r="4.5" fill="white" fillOpacity="0.8"/>
                  <circle cx="23" cy="24" r="4.5" fill="white" fillOpacity="0.8"/>
                </g>
              </svg>
            </div>
            
            <div className="flex-1">
              <h3 className="font-semibold text-[#1A1A1A] text-[16px] mb-1">
                Business Homemakers Community
              </h3>
              <p className="text-[#666666] text-[13px] mb-3">
                Join our WhatsApp community and get access to specialized groups
              </p>
              
              {/* Available Groups */}
              <div className="bg-[#F8F8F8] rounded-[10px] p-3 mb-2">
                <p className="text-[#1A1A1A] text-[13px] font-medium mb-1.5">
                  📱 Available Groups:
                </p>
                <ul className="text-[#666666] text-[12px] space-y-1">
                  <li>• Bakers Community</li>
                  <li>• Pickle & Snacks Makers</li>
                  <li>• Tailoring Network</li>
                  <li>• Handmade Crafts Circle</li>
                  <li>• Beauty Services Group</li>
                </ul>
                <p className="text-[#999999] text-[11px] mt-2 italic">
                  More groups coming soon...
                </p>
              </div>
            </div>
          </div>
          
          <button
            onClick={() => {
              if (!hasJoined) {
                setIsBottomSheetOpen(true);
              }
            }}
            disabled={hasJoined}
            className={`w-full py-3 rounded-[10px] text-[14px] font-medium transition-colors ${
              hasJoined
                ? 'bg-[#E8F0EC] text-[#5A8B6F] cursor-default'
                : 'bg-[#5A8B6F] text-white hover:bg-[#4A7360]'
            }`}
          >
            {hasJoined ? '✓ Joined Community' : 'Join Community'}
          </button>
        </div>
      </div>
      
      <div className="w-full max-w-[310px] mx-auto">
        <Button
          variant="primary"
          className="w-full"
          onClick={() => navigate('/create-profile')}
        >
          Continue
        </Button>
      </div>

      {/* WhatsApp Community Bottom Sheet */}
      <WhatsAppCommunityBottomSheet
        isOpen={isBottomSheetOpen}
        onClose={() => {
          setHasJoined(true);
          setIsBottomSheetOpen(false);
        }}
        communityName="Bakers Community"
      />
    </div>
  );
}