import { CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './Button';

interface SuccessBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function SuccessBottomSheet({
  isOpen,
  onClose,
  message,
  actionLabel,
  onAction
}: SuccessBottomSheetProps) {
  const handleAction = () => {
    if (onAction) {
      onAction();
    }
    onClose();
  };

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
            <div className="px-6 pt-8 pb-8">
              {/* Success Icon */}
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-16 h-16 bg-[#E8F0EC] rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-10 h-10 text-[#5A8B6F]" />
                </div>
                <h2 className="text-[18px] font-semibold text-[#1A1A1A] mb-2">Success!</h2>
                <p className="text-[15px] text-[#666666]">{message}</p>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                {actionLabel && onAction && (
                  <Button
                    variant="primary"
                    onClick={handleAction}
                    className="w-full"
                  >
                    {actionLabel}
                  </Button>
                )}
                <Button
                  variant="ghost"
                  onClick={onClose}
                  className="w-full"
                >
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
