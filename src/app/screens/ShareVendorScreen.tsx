import { useState } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { ArrowLeft, Check, Search } from 'lucide-react';
import { useNavigate, useParams } from 'react-router';

interface Connection {
  id: number;
  name: string;
  category: string;
  avatar: string;
}

export function ShareVendorScreen() {
  const navigate = useNavigate();
  const { vendorId } = useParams();
  const [selectedConnections, setSelectedConnections] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock vendor data
  const vendor = {
    id: vendorId,
    name: 'ABC Packaging Solutions',
    category: 'Packaging',
    address: 'BTM Layout, Bangalore',
    phone: '+91 98765 43210',
    notes: 'Eco-friendly boxes available'
  };
  
  // Mock connections
  const connections: Connection[] = [
    { id: 1, name: 'Priya Sharma', category: 'Home Baker', avatar: '👩🏻' },
    { id: 2, name: 'Anjali Desai', category: 'Craft Business', avatar: '👩🏽' },
    { id: 3, name: 'Kavita Singh', category: 'Home Chef', avatar: '👩🏾' },
    { id: 4, name: 'Meera Patel', category: 'Jewelry Designer', avatar: '👩🏻' },
    { id: 5, name: 'Sunita Rao', category: 'Home Baker', avatar: '👩🏽' },
    { id: 6, name: 'Asha Kumar', category: 'Textile Business', avatar: '👩🏾' },
  ];
  
  const filteredConnections = connections.filter(conn =>
    conn.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conn.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const toggleConnection = (id: number) => {
    if (selectedConnections.includes(id)) {
      setSelectedConnections(selectedConnections.filter(cid => cid !== id));
    } else {
      setSelectedConnections([...selectedConnections, id]);
    }
  };
  
  const handleShare = () => {
    if (selectedConnections.length === 0) {
      alert('Please select at least one connection');
      return;
    }
    
    // In a real app, send vendor info via DM
    const message = `Vendor: ${vendor.name}
Category: ${vendor.category}
Address: ${vendor.address}
Contact: ${vendor.phone}${vendor.notes ? `\nNotes: ${vendor.notes}` : ''}`;
    
    console.log('Sharing with:', selectedConnections);
    console.log('Message:', message);
    
    alert(`Vendor shared with ${selectedConnections.length} connection(s)!`);
    navigate(-1);
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
          <h1 className="flex-1 text-center mr-10">Share Vendor</h1>
        </div>
        
        {/* Vendor Preview */}
        <Card className="bg-[#E8F0EC]">
          <div className="space-y-1">
            <h3 className="font-semibold text-[14px] text-[#1A1A1A]">{vendor.name}</h3>
            <p className="text-[12px] text-[#666666]">{vendor.category} • {vendor.address}</p>
          </div>
        </Card>
      </div>
      
      <div className="px-6 pt-6 space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999999]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search connections..."
            className="w-full pl-11 pr-4 py-3 bg-white rounded-[12px] text-[14px] text-[#1A1A1A] outline-none focus:ring-2 focus:ring-[#5A8B6F] transition-all"
          />
        </div>
        
        {/* Selected Count */}
        {selectedConnections.length > 0 && (
          <div className="flex items-center justify-between px-4 py-2 bg-[#E8F0EC] rounded-[8px]">
            <p className="text-[13px] text-[#5A8B6F] font-medium">
              {selectedConnections.length} connection{selectedConnections.length !== 1 ? 's' : ''} selected
            </p>
          </div>
        )}
        
        {/* Connections List */}
        <div className="space-y-2">
          {filteredConnections.map((connection) => {
            const isSelected = selectedConnections.includes(connection.id);
            return (
              <Card 
                key={connection.id}
                className={`cursor-pointer transition-all ${
                  isSelected ? 'ring-2 ring-[#5A8B6F] bg-[#E8F0EC]' : 'hover:shadow-md'
                }`}
                onClick={() => toggleConnection(connection.id)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5A8B6F] to-[#7AA98A] flex items-center justify-center text-2xl flex-shrink-0">
                    {connection.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-[14px] text-[#1A1A1A] truncate">{connection.name}</h3>
                    <p className="text-[12px] text-[#999999] truncate">{connection.category}</p>
                  </div>
                  <div 
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                      isSelected 
                        ? 'bg-[#5A8B6F] border-[#5A8B6F]' 
                        : 'bg-white border-[#CCCCCC]'
                    }`}
                  >
                    {isSelected && (
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        
        {/* Share Button */}
        <div className="pt-4">
          <Button 
            variant="primary" 
            className="w-full"
            onClick={handleShare}
            disabled={selectedConnections.length === 0}
          >
            Share with {selectedConnections.length > 0 ? selectedConnections.length : ''} Connection{selectedConnections.length !== 1 ? 's' : ''}
          </Button>
        </div>
      </div>
    </div>
  );
}
