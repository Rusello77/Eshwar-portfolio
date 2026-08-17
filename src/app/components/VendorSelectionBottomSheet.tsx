import { X, Phone, MapPin, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Chip } from './Chip';

interface Vendor {
  id: number;
  name: string;
  category: string;
  address: string;
  phone: string;
  notes?: string;
}

interface VendorSelectionBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (vendor: Vendor) => void;
}

export function VendorSelectionBottomSheet({ isOpen, onClose, onSelect }: VendorSelectionBottomSheetProps) {
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [selectedVendor, setSelectedVendor] = useState<Vendor | null>(null);

  const categories = ['All', 'Packaging', 'Raw Materials', 'Delivery', 'Equipment'];

  const vendors: Vendor[] = [
    { 
      id: 1,
      name: 'ABC Packaging Solutions', 
      category: 'Packaging',
      address: 'BTM Layout, Bangalore',
      phone: '+91 98765 43210',
      notes: 'Eco-friendly boxes available'
    },
    { 
      id: 2,
      name: 'Fresh Ingredients Co.', 
      category: 'Raw Materials',
      address: 'Indiranagar, Bangalore',
      phone: '+91 98765 43211',
      notes: 'Best quality baking ingredients'
    },
    { 
      id: 3,
      name: 'QuickDeliver Express', 
      category: 'Delivery',
      address: 'Koramangala, Bangalore',
      phone: '+91 98765 43212',
      notes: 'Same-day delivery available'
    },
    { 
      id: 4,
      name: 'Premium Baking Tools', 
      category: 'Equipment',
      address: 'MG Road, Bangalore',
      phone: '+91 98765 43213',
      notes: 'Professional baking equipment'
    },
    { 
      id: 5,
      name: 'Green Pack India', 
      category: 'Packaging',
      address: 'Whitefield, Bangalore',
      phone: '+91 98765 43214',
      notes: 'Sustainable packaging solutions'
    },
    { 
      id: 6,
      name: 'Organic Supplies Hub', 
      category: 'Raw Materials',
      address: 'HSR Layout, Bangalore',
      phone: '+91 98765 43215',
      notes: 'Organic ingredients only'
    },
  ];

  const filteredVendors = categoryFilter === 'All' 
    ? vendors 
    : vendors.filter(v => v.category === categoryFilter);

  const handleVendorClick = (vendor: Vendor) => {
    setSelectedVendor(vendor);
    onSelect(vendor);
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
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl z-50 max-w-[390px] mx-auto max-h-[85vh] flex flex-col"
          >
            <div className="px-6 pt-6 pb-4 border-b border-[#E0E0E0]">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-[18px] font-semibold text-[#1A1A1A]">Select Vendor</h2>
                <button
                  onClick={onClose}
                  className="p-2 -mr-2 hover:bg-[#F5F5F5] rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-[#666666]" />
                </button>
              </div>

              {/* Category Filters */}
              <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                {categories.map(cat => (
                  <Chip 
                    key={cat}
                    variant={categoryFilter === cat ? 'primary' : 'default'}
                    onClick={() => setCategoryFilter(cat)}
                  >
                    {cat}
                  </Chip>
                ))}
              </div>
            </div>

            {/* Vendor List */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <div className="space-y-3">
                {filteredVendors.map(vendor => (
                  <button
                    key={vendor.id}
                    onClick={() => handleVendorClick(vendor)}
                    className="w-full bg-white border border-[#E0E0E0] hover:border-[#5A8B6F] rounded-2xl p-4 transition-all active:scale-[0.98] text-left relative"
                  >
                    {selectedVendor?.id === vendor.id && (
                      <div className="absolute top-4 right-4">
                        <div className="w-6 h-6 bg-[#5A8B6F] rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    )}
                    
                    <h3 className="text-[15px] font-semibold text-[#1A1A1A] mb-1 pr-8">{vendor.name}</h3>
                    <div className="inline-block px-2 py-0.5 bg-[#E8F0EC] text-[#5A8B6F] text-[11px] rounded-full mb-2">
                      {vendor.category}
                    </div>
                    
                    <div className="flex items-start gap-2 mb-2">
                      <MapPin className="w-3.5 h-3.5 text-[#666666] mt-0.5 flex-shrink-0" />
                      <span className="text-[13px] text-[#666666]">{vendor.address}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#666666] flex-shrink-0" />
                      <span className="text-[13px] text-[#666666]">{vendor.phone}</span>
                    </div>
                    
                    {vendor.notes && (
                      <p className="text-[12px] text-[#999999] mt-2 italic">{vendor.notes}</p>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
