import { useState } from 'react';
import { Card } from '../components/Card';
import { ChevronDown, Phone, MessageCircle, Search, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';

type Filter = 'all' | 'pendingPayment' | 'pendingDelivery' | 'both' | 'recentlyCompleted';
type SortOption = 'alphabetical-az' | 'alphabetical-za' | 'recentlyAdded' | 'mostOrders';

interface Customer {
  id: number;
  name: string;
  phone: string;
  lastOrder: string;
  totalOrders: number;
  pendingPayment: number;
  pendingDelivery: boolean;
  totalPaid: number;
  recentlyAdded: boolean;
}

export function CustomersListScreen() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<Filter>('all');
  const [sortOption, setSortOption] = useState<SortOption>('alphabetical-az');
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const customers: Customer[] = [
    { 
      id: 1,
      name: 'Priya Sharma', 
      phone: '+91 98765 43210',
      lastOrder: 'Chocolate Cake',
      totalOrders: 5,
      pendingPayment: 500,
      pendingDelivery: true,
      totalPaid: 2500,
      recentlyAdded: false
    },
    { 
      id: 2,
      name: 'Anjali Desai', 
      phone: '+91 98765 43211',
      lastOrder: 'Cookie Box',
      totalOrders: 8,
      pendingPayment: 0,
      pendingDelivery: false,
      totalPaid: 3200,
      recentlyAdded: true
    },
    { 
      id: 3,
      name: 'Kavita Singh', 
      phone: '+91 98765 43212',
      lastOrder: 'Custom Sweets',
      totalOrders: 3,
      pendingPayment: 300,
      pendingDelivery: false,
      totalPaid: 1200,
      recentlyAdded: false
    },
    { 
      id: 4,
      name: 'Meera Patel', 
      phone: '+91 98765 43213',
      lastOrder: 'Birthday Cake',
      totalOrders: 12,
      pendingPayment: 0,
      pendingDelivery: true,
      totalPaid: 5400,
      recentlyAdded: false
    },
    { 
      id: 5,
      name: 'Sunita Rao', 
      phone: '+91 98765 43214',
      lastOrder: 'Muffins',
      totalOrders: 6,
      pendingPayment: 800,
      pendingDelivery: true,
      totalPaid: 2100,
      recentlyAdded: true
    },
    { 
      id: 6,
      name: 'Asha Kumar', 
      phone: '+91 98765 43215',
      lastOrder: 'Cupcakes',
      totalOrders: 4,
      pendingPayment: 0,
      pendingDelivery: false,
      totalPaid: 1600,
      recentlyAdded: true
    },
  ];
  
  const sortLabels = {
    'alphabetical-az': 'A → Z',
    'alphabetical-za': 'Z → A',
    'recentlyAdded': 'Recently Added',
    'mostOrders': 'Most Orders'
  };
  
  // Filter labels
  const filterLabels: Record<Filter, string> = {
    all: 'All',
    pendingPayment: 'Pending payment',
    pendingDelivery: 'Pending delivery',
    both: 'Both',
    recentlyCompleted: 'Recently completed'
  };

  // Filter logic
  const filterCustomers = () => {
    let filtered = [...customers];

    // Apply search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(c =>
        c.name.toLowerCase().includes(query) ||
        c.phone.includes(query)
      );
    }

    // Apply filter
    if (filter === 'pendingPayment') {
      filtered = filtered.filter(c => c.pendingPayment > 0);
    } else if (filter === 'pendingDelivery') {
      filtered = filtered.filter(c => c.pendingDelivery);
    } else if (filter === 'both') {
      filtered = filtered.filter(c => c.pendingPayment > 0 && c.pendingDelivery);
    } else if (filter === 'recentlyCompleted') {
      filtered = filtered.filter(c => c.recentlyAdded);
    }

    // Apply sorting
    if (sortOption === 'alphabetical-az') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'alphabetical-za') {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortOption === 'recentlyAdded') {
      filtered.sort((a, b) => (b.recentlyAdded ? 1 : 0) - (a.recentlyAdded ? 1 : 0));
    } else if (sortOption === 'mostOrders') {
      filtered.sort((a, b) => b.totalOrders - a.totalOrders);
    }

    return filtered;
  };
  
  const filteredCustomers = filterCustomers();
  
  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-20 max-w-[390px] mx-auto">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 sticky top-0 z-10">
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 hover:bg-[#F5F5F5] rounded-full transition-colors flex-shrink-0"
          >
            <ArrowLeft className="w-5 h-5 text-[#1A1A1A]" />
          </button>
          <h1 className="flex-1">Customers</h1>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#999999]" />
          <input
            type="text"
            placeholder="Search by name or phone"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-[12px] border border-[#E0E0E0] focus:border-[#5A8B6F] focus:outline-none text-[14px]"
          />
        </div>

        {/* Filters - Single Row */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-6 px-6 scrollbar-hide">
          {(Object.keys(filterLabels) as Filter[]).map((filterOption) => (
            <button
              key={filterOption}
              onClick={() => setFilter(filterOption)}
              className={`px-4 py-2 rounded-full text-[13px] font-medium whitespace-nowrap transition-colors ${
                filter === filterOption
                  ? 'bg-[#5A8B6F] text-white'
                  : 'bg-white text-[#666666] border border-[#E0E0E0]'
              }`}
            >
              {filterLabels[filterOption]}
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 pt-4 space-y-4">
        {/* Sorting */}
        <div className="relative flex justify-end">
          <button
            onClick={() => setShowSortMenu(!showSortMenu)}
            className="flex items-center gap-1.5 px-3 py-2 bg-white rounded-[10px] border border-[#E0E0E0] text-[13px] text-[#666666] hover:border-[#5A8B6F] transition-colors"
          >
            <span>{sortLabels[sortOption]}</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>

          {showSortMenu && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-[12px] shadow-lg border border-[#E0E0E0] overflow-hidden z-20">
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
        
        {/* Customer Cards */}
        <div className="space-y-3 pb-6">
          {filteredCustomers.map((customer) => {
            const hasPendingPayment = customer.pendingPayment > 0;
            const hasPendingDelivery = customer.pendingDelivery;
            
            return (
              <Card key={customer.id} className="cursor-pointer hover:shadow-md transition-shadow">
                <div className="space-y-3">
                  {/* Top - Name */}
                  <div>
                    <h3 className="font-medium text-[#1A1A1A]">{customer.name}</h3>
                  </div>
                  
                  {/* Middle - Phone & Last Order */}
                  <div className="space-y-1">
                    <p className="text-[13px] text-[#666666]">{customer.phone}</p>
                    <p className="text-[12px] text-[#999999]">Last order: {customer.lastOrder}</p>
                  </div>
                  
                  {/* Tags */}
                  {(hasPendingPayment || hasPendingDelivery) && (
                    <div className="flex items-center gap-2 flex-wrap">
                      {hasPendingDelivery && (
                        <span className="text-[11px] px-2.5 py-1 rounded-full bg-[#FFF5E6] text-[#FFB85C]">
                          Pending Delivery
                        </span>
                      )}
                      {hasPendingPayment && (
                        <span className="text-[11px] px-2.5 py-1 rounded-full bg-[#FFE6E6] text-[#FF6B6B]">
                          Pending Payment
                        </span>
                      )}
                    </div>
                  )}
                  
                  {/* Bottom - Payment Summary & Actions */}
                  <div className="flex items-center justify-between pt-2 border-t border-[#E0E0E0]">
                    <div className="flex-1">
                      {hasPendingPayment ? (
                        <p className="text-[13px] text-[#FF6B6B] font-medium">
                          ₹{customer.pendingPayment} pending
                        </p>
                      ) : (
                        <p className="text-[13px] text-[#5A8B6F] font-medium">
                          ₹{customer.totalPaid} paid
                        </p>
                      )}
                      <p className="text-[12px] text-[#999999] mt-0.5">
                        {customer.totalOrders} orders
                      </p>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button 
                        className="p-2.5 rounded-full bg-[#E8F0EC] hover:bg-[#D5F0E6] transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(`https://wa.me/${customer.phone.replace(/[^0-9]/g, '')}`);
                        }}
                      >
                        <MessageCircle className="w-4 h-4 text-[#5A8B6F]" />
                      </button>
                      <button 
                        className="p-2.5 rounded-full bg-[#E8F0EC] hover:bg-[#D5F0E6] transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(`tel:${customer.phone}`);
                        }}
                      >
                        <Phone className="w-4 h-4 text-[#5A8B6F]" />
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
