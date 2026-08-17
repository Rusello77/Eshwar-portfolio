import { useState } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router';

export function AddVendorScreen() {
  const navigate = useNavigate();
  const [vendorName, setVendorName] = useState('');
  const [category, setCategory] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  
  const categories = ['Packaging', 'Raw Materials', 'Delivery', 'Equipment'];
  
  const handleSave = () => {
    if (!vendorName || !category || !phone || !address) {
      alert('Please fill in all required fields');
      return;
    }
    
    // In a real app, save to database
    console.log('Saving vendor:', { vendorName, category, phone, address, notes });
    navigate('/vendors');
  };
  
  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-20 max-w-[390px] mx-auto">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 sticky top-0 z-10">
        <div className="flex items-center mb-4">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 hover:bg-[#F5F5F5] rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-[#1A1A1A]" />
          </button>
          <h1 className="flex-1 text-center mr-10">Add Vendor</h1>
        </div>
      </div>
      
      <div className="px-6 pt-6 space-y-6">
        <Card>
          <div className="space-y-4">
            {/* Vendor Name */}
            <div>
              <label className="block text-[13px] font-medium text-[#1A1A1A] mb-2">
                Vendor Name <span className="text-[#FF6B6B]">*</span>
              </label>
              <input
                type="text"
                value={vendorName}
                onChange={(e) => setVendorName(e.target.value)}
                placeholder="Enter vendor name"
                className="w-full px-4 py-3 bg-[#F9F9F9] rounded-[8px] text-[14px] text-[#1A1A1A] outline-none focus:bg-white focus:ring-2 focus:ring-[#5A8B6F] transition-all"
              />
            </div>
            
            {/* Category */}
            <div>
              <label className="block text-[13px] font-medium text-[#1A1A1A] mb-2">
                Category <span className="text-[#FF6B6B]">*</span>
              </label>
              <div className="relative">
                <button
                  onClick={() => setShowCategoryMenu(!showCategoryMenu)}
                  className="w-full px-4 py-3 bg-[#F9F9F9] rounded-[8px] text-[14px] text-left flex items-center justify-between hover:bg-[#F5F5F5] transition-colors"
                >
                  <span className={category ? 'text-[#1A1A1A]' : 'text-[#999999]'}>
                    {category || 'Select category'}
                  </span>
                  <ChevronDown className="w-4 h-4 text-[#999999]" />
                </button>
                
                {showCategoryMenu && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-[12px] shadow-lg border border-[#E0E0E0] overflow-hidden z-20">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => {
                          setCategory(cat);
                          setShowCategoryMenu(false);
                        }}
                        className="w-full px-4 py-3 text-left text-[13px] hover:bg-[#E8F0EC] transition-colors text-[#1A1A1A]"
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {/* Phone Number */}
            <div>
              <label className="block text-[13px] font-medium text-[#1A1A1A] mb-2">
                Phone Number <span className="text-[#FF6B6B]">*</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 XXXXX XXXXX"
                className="w-full px-4 py-3 bg-[#F9F9F9] rounded-[8px] text-[14px] text-[#1A1A1A] outline-none focus:bg-white focus:ring-2 focus:ring-[#5A8B6F] transition-all"
              />
            </div>
            
            {/* Address */}
            <div>
              <label className="block text-[13px] font-medium text-[#1A1A1A] mb-2">
                Address <span className="text-[#FF6B6B]">*</span>
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter address"
                className="w-full px-4 py-3 bg-[#F9F9F9] rounded-[8px] text-[14px] text-[#1A1A1A] outline-none focus:bg-white focus:ring-2 focus:ring-[#5A8B6F] transition-all"
              />
            </div>
            
            {/* Notes */}
            <div>
              <label className="block text-[13px] font-medium text-[#1A1A1A] mb-2">
                Notes (Optional)
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Add any additional information..."
                rows={3}
                className="w-full px-4 py-3 bg-[#F9F9F9] rounded-[8px] text-[14px] text-[#1A1A1A] outline-none focus:bg-white focus:ring-2 focus:ring-[#5A8B6F] transition-all resize-none"
              />
            </div>
          </div>
        </Card>
        
        {/* Save Button */}
        <Button 
          variant="primary" 
          className="w-full"
          onClick={handleSave}
        >
          Save Vendor
        </Button>
      </div>
    </div>
  );
}
