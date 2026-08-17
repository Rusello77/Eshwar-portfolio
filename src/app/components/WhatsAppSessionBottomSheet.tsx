import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from './Button';

interface WhatsAppSessionBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  sessionTitle: string;
  isReminder?: boolean;
  onSubmit: (data: { name: string; phone: string; email?: string }) => void;
}

export function WhatsAppSessionBottomSheet({ 
  isOpen, 
  onClose, 
  sessionTitle,
  isReminder = false,
  onSubmit 
}: WhatsAppSessionBottomSheetProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      // Reset form when closed
      setTimeout(() => {
        setName('');
        setPhone('');
        setEmail('');
        setShowSuccess(false);
      }, 300);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    
    onSubmit({ name, phone, email: email || undefined });
    setShowSuccess(true);
    
    // Close after showing success
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Bottom Sheet */}
      <div 
        className="relative bg-white rounded-t-3xl w-full max-w-[390px] mx-auto shadow-2xl transition-transform"
        style={{
          animation: isOpen ? 'slideUp 0.3s ease-out' : 'slideDown 0.3s ease-out'
        }}
      >
        {/* Handle Bar */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-10 h-1 bg-[#E0E0E0] rounded-full" />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5 text-[#666666]" />
        </button>

        {!showSuccess ? (
          // Form State
          <div className="px-6 pb-28 pt-2">
            <h2 className="text-[20px] font-semibold text-[#1A1A1A] mb-1">
              {isReminder ? 'Get Reminder on WhatsApp' : 'Join via WhatsApp'}
            </h2>
            <p className="text-[14px] text-[#666666] mb-6">
              {isReminder 
                ? "We'll remind you 15 minutes before the session starts."
                : "We'll send the session link and updates directly to your WhatsApp."
              }
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-[14px] text-[#1A1A1A] mb-2 font-medium">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 bg-[#F5F5F5] rounded-xl text-[15px] text-[#1A1A1A] placeholder-[#999999] focus:outline-none focus:ring-2 focus:ring-[#5A8B6F]"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-[14px] text-[#1A1A1A] mb-2 font-medium">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 XXXXX XXXXX"
                  required
                  className="w-full px-4 py-3 bg-[#F5F5F5] rounded-xl text-[15px] text-[#1A1A1A] placeholder-[#999999] focus:outline-none focus:ring-2 focus:ring-[#5A8B6F]"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-[14px] text-[#666666] mb-2">
                  Email <span className="text-[#999999]">(optional)</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-[#F5F5F5] rounded-xl text-[15px] text-[#1A1A1A] placeholder-[#999999] focus:outline-none focus:ring-2 focus:ring-[#5A8B6F]"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button 
                  type="submit"
                  variant="primary"
                  className="w-full"
                  disabled={!name.trim() || !phone.trim()}
                >
                  {isReminder ? 'Set Reminder' : 'Get Link on WhatsApp'}
                </Button>
              </div>
            </form>
          </div>
        ) : (
          // Success State
          <div className="px-6 pb-8 pt-2 text-center">
            {/* Success Icon */}
            <div className="w-16 h-16 bg-[#E8F5F1] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path 
                  d="M20 6L9 17L4 12" 
                  stroke="#5A8B6F" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className="text-[18px] font-semibold text-[#1A1A1A] mb-2">
              {isReminder ? 'Reminder Set!' : 'Link Sent to Your WhatsApp'}
            </h3>
            <p className="text-[14px] text-[#666666]">
              {isReminder 
                ? "We'll remind you before the session starts"
                : "Check your messages to join the session"
              }
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        @keyframes slideDown {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(100%);
          }
        }
      `}</style>
    </div>
  );
}