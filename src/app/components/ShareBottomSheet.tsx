import { X, Users, Store } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ShareBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectVendor: () => void;
  onSelectConnection: () => void;
}

export function ShareBottomSheet({ isOpen, onClose, onSelectVendor, onSelectConnection }: ShareBottomSheetProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 z-50"
            onClick={onClose}
          />

          {/* Bottom Sheet */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl z-50 max-w-[390px] mx-auto"
          >
            <div className="px-6 pt-6 pb-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-[18px] font-semibold text-[#1A1A1A]">Share</h2>
                <button
                  onClick={onClose}
                  className="p-2 -mr-2 hover:bg-[#F5F5F5] rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-[#666666]" />
                </button>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {/* Vendor Option */}
                <button
                  onClick={() => {
                    onSelectVendor();
                    onClose();
                  }}
                  className="w-full flex items-center gap-4 p-4 bg-[#F8FCF9] hover:bg-[#E8F0EC] rounded-2xl transition-all active:scale-[0.98]"
                >
                  <div className="w-12 h-12 bg-[#5A8B6F] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Store className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-[15px] font-semibold text-[#1A1A1A] mb-0.5">Vendor</h3>
                    <p className="text-[13px] text-[#666666]">Share a trusted supplier</p>
                  </div>
                </button>

                {/* Connection Option */}
                <button
                  onClick={() => {
                    onSelectConnection();
                    onClose();
                  }}
                  className="w-full flex items-center gap-4 p-4 bg-[#F8FCF9] hover:bg-[#E8F0EC] rounded-2xl transition-all active:scale-[0.98]"
                >
                  <div className="w-12 h-12 bg-[#7AA98A] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-[15px] font-semibold text-[#1A1A1A] mb-0.5">Connection</h3>
                    <p className="text-[13px] text-[#666666]">Recommend someone to connect with</p>
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
