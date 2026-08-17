import { useState } from 'react';
import { Card } from '../components/Card';
import { ChevronDown, Phone, MessageCircle, Share2, Search, ArrowLeft, MapPin, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router';

type CategoryFilter = 'all' | 'packaging' | 'rawMaterials' | 'delivery' | 'equipment';
type SortOption = 'recentlyAdded' | 'alphabetical';

interface Vendor {
  id: number;
  name: string;
  category: string;
  address: string;
  phone: string;
  notes?: string;
  recentlyAdded: boolean;
}

export function VendorsListScreen() {
  const navigate = useNavigate();
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');
  const [sortOption, setSortOption] = useState<SortOption>('recentlyAdded');
  const [showSortMenu, setShowSortMenu] = useState(false);
  
  const vendors: Vendor[] = [
    { 
      id: 1,
      name: 'ABC Packaging Solutions', 
      category: 'Packaging',
      address: 'BTM Layout, Bangalore',
      phone: '+91 98765 43210',
      notes: 'Eco-friendly boxes available',
      recentlyAdded: true
    },
    { 
      id: 2,
      name: 'Fresh Ingredients Co.', 
      category: 'Raw Materials',
      address: 'Indiranagar, Bangalore',
      phone: '+91 98765 43211',
      notes: 'Best quality baking ingredients',
      recentlyAdded: false
    },
    { 
      id: 3,
      name: 'QuickDeliver Express', 
      category: 'Delivery',
      address: 'Koramangala, Bangalore',
      phone: '+91 98765 43212',
      notes: 'Same-day delivery available',
      recentlyAdded: true
    },
    { 
      id: 4,
      name: 'Premium Baking Tools', 
      category: 'Equipment',
      address: 'MG Road, Bangalore',
      phone: '+91 98765 43213',
      notes: 'Professional baking equipment',
      recentlyAdded: false
    },
    { 
      id: 5,
      name: 'Green Pack India', 
      category: 'Packaging',
      address: 'Whitefield, Bangalore',
      phone: '+91 98765 43214',
      notes: 'Sustainable packaging solutions',
      recentlyAdded: true
    },
    { 
      id: 6,
      name: 'Organic Supplies Hub', 
      category: 'Raw Materials',
      address: 'HSR Layout, Bangalore',
      phone: '+91 98765 43215',
      notes: 'Organic ingredients only',
      recentlyAdded: false
    },
  ];
  
  const sortLabels = {
    'recentlyAdded': 'Recently Added',
    'alphabetical': 'A → Z'
  };
  
  const categoryLabels = {
    'all': 'All',
    'packaging': 'Packaging',
    'rawMaterials': 'Raw Materials',
    'delivery': 'Delivery',
    'equipment': 'Equipment'
  };
  
  // Filter logic
  const filterVendors = () => {
    let filtered = [...vendors];
    
    // Apply category filter
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(v => {
        const categoryMap: Record<string, string> = {
          'packaging': 'Packaging',
          'rawMaterials': 'Raw Materials',
          'delivery': 'Delivery',
          'equipment': 'Equipment'
        };
        return v.category === categoryMap[categoryFilter];
      });
    }
    
    // Apply sorting
    if (sortOption === 'alphabetical') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'recentlyAdded') {
      filtered.sort((a, b) => (b.recentlyAdded ? 1 : 0) - (a.recentlyAdded ? 1 : 0));
    }
    
    return filtered;
  };
  
  const filteredVendors = filterVendors();
  
  const handleOpenMaps = (address: string) => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
  };
  
  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-20 max-w-[390px] mx-auto">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 sticky top-0 z-10">
        <div className="flex items-center justify-between mb-4">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 hover:bg-[#F5F5F5] rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-[#1A1A1A]" />
          </button>
          <h1 className="flex-1 text-center">Vendors</h1>
          <button className="p-2 -mr-2 hover:bg-[#F5F5F5] rounded-full transition-colors">
            <Search className="w-5 h-5 text-[#666666]" />
          </button>
        </div>
      </div>
      
      <div className="px-6 pt-6 space-y-4">
        {/* Category Filters - Full Line */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {(Object.keys(categoryLabels) as CategoryFilter[]).map((category) => (
            <button
              key={category}
              onClick={() => setCategoryFilter(category)}
              className={`px-4 py-2 rounded-full text-[13px] font-medium whitespace-nowrap transition-colors ${
                categoryFilter === category
                  ? 'bg-[#5A8B6F] text-white'
                  : 'bg-white text-[#666666] border border-[#E0E0E0]'
              }`}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>
        
        {/* Sort Dropdown - Separate Line */}
        <div className="relative">
          <button
            onClick={() => setShowSortMenu(!showSortMenu)}
            className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-[12px] border border-[#E0E0E0] text-[13px] text-[#666666] hover:border-[#5A8B6F] transition-colors"
          >
            <span>{sortLabels[sortOption]}</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
          
          {showSortMenu && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-[12px] shadow-lg border border-[#E0E0E0] overflow-hidden z-20">
              {(Object.keys(sortLabels) as SortOption[]).map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setSortOption(option);
                    setShowSortMenu(false);
                  }}
                  className={`w-full px-4 py-3 text-left text-[13px] hover:bg-[#E8F0EC] transition-colors ${
                    sortOption === option ? 'bg-[#E8F0EC] text-[#5A8B6F] font-medium' : 'text-[#1A1A1A]'
                  }`}
                >
                  {sortLabels[option]}
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Vendor Cards */}
        <div className="space-y-3 pb-6">
          {filteredVendors.map((vendor) => (
            <Card key={vendor.id}>
              <div className="space-y-3">
                {/* Top - Name & Category */}
                <div>
                  <h3 className="font-semibold text-[15px] text-[#1A1A1A] mb-0.5">{vendor.name}</h3>
                  <p className="text-[12px] text-[#999999]">{vendor.category}</p>
                </div>
                
                {/* Middle - Address */}
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#999999] flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-[13px] text-[#666666] mb-1">{vendor.address}</p>
                    <button
                      onClick={() => handleOpenMaps(vendor.address)}
                      className="flex items-center gap-1 text-[11px] text-[#5A8B6F] hover:text-[#2E9370] transition-colors"
                    >
                      Open in Maps
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                
                {/* Optional Note */}
                {vendor.notes && (
                  <div className="bg-[#F9F9F9] px-3 py-2 rounded-[8px]">
                    <p className="text-[12px] text-[#666666] italic">{vendor.notes}</p>
                  </div>
                )}
                
                {/* Bottom - Phone & Actions */}
                <div className="flex items-center justify-between pt-2 border-t border-[#E0E0E0]">
                  <p className="text-[13px] text-[#666666]">{vendor.phone}</p>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button 
                      className="p-2.5 rounded-full bg-[#E8F0EC] hover:bg-[#D5F0E6] transition-colors"
                      onClick={() => window.open(`https://wa.me/${vendor.phone.replace(/[^0-9]/g, '')}`)}
                    >
                      <MessageCircle className="w-4 h-4 text-[#5A8B6F]" />
                    </button>
                    <button 
                      className="p-2.5 rounded-full bg-[#E8F0EC] hover:bg-[#D5F0E6] transition-colors"
                      onClick={() => window.open(`tel:${vendor.phone}`)}
                    >
                      <Phone className="w-4 h-4 text-[#5A8B6F]" />
                    </button>
                    <button 
                      className="p-2.5 rounded-full bg-[#E8F0EC] hover:bg-[#D5F0E6] transition-colors"
                      onClick={() => navigate(`/share-vendor/${vendor.id}`)}
                    >
                      <Share2 className="w-4 h-4 text-[#5A8B6F]" />
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}