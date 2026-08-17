import { useState } from 'react';
import { X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Input } from './Input';
import { Button } from './Button';

interface WhatsAppCommunityBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  communityName?: string;
}

export function WhatsAppCommunityBottomSheet({
  isOpen,
  onClose,
}: WhatsAppCommunityBottomSheetProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    // In a real app, this would send the data to a backend
    setIsSubmitted(true);
    
    // Close after 2 seconds
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setName('');
      setPhone('');
      setEmail('');
    }, 2000);
  };

  const handleClose = () => {
    onClose();
    setIsSubmitted(false);
    setName('');
    setPhone('');
    setEmail('');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-40"
            onClick={handleClose}
          />

          {/* Bottom Sheet */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[24px] shadow-2xl z-50 max-w-[390px] mx-auto"
          >
            {/* Handle Bar */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-10 h-1 bg-[#E0E0E0] rounded-full" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-6 pb-4">
              <h3 className="font-semibold text-[18px] text-[#1A1A1A]">
                {isSubmitted ? 'Success!' : 'Join via WhatsApp'}
              </h3>
              <button
                onClick={handleClose}
                className="p-2 -mr-2 hover:bg-[#F5F5F5] rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-[#666666]" />
              </button>
            </div>

            {!isSubmitted ? (
              // Form State
              <div className="px-6 pb-8">
                <p className="text-[14px] text-[#666666] mb-6">
                  We'll send you a WhatsApp community invite link. Once you join, all specialized groups will appear in your WhatsApp.
                </p>

                <div className="space-y-4 mb-6">
                  <Input
                    label="Name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />

                  <Input
                    label="Phone Number"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />

                  <Input
                    label="Email (Optional)"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <Button
                  variant="primary"
                  className="w-full"
                  onClick={handleSubmit}
                  disabled={!name || !phone}
                >
                  Get Link on WhatsApp
                </Button>
              </div>
            ) : (
              // Success State
              <div className="px-6 pb-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#E8F0EC] rounded-full flex items-center justify-center mb-4">
                  <Check className="w-8 h-8 text-[#5A8B6F]" />
                </div>
                <h4 className="font-semibold text-[#1A1A1A] mb-2">
                  Link sent to your WhatsApp
                </h4>
                <p className="text-[14px] text-[#666666] mb-4">
                  Check your WhatsApp for the community invite link. All groups will appear after you join!
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}