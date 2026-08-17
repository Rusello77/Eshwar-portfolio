import { useNavigate } from 'react-router';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { ArrowLeft, MapPin, Calendar, DollarSign } from 'lucide-react';

export function OpportunitiesScreen() {
  const navigate = useNavigate();
  
  const opportunities = [
    {
      id: 1,
      title: 'Indiranagar Festive Market',
      location: 'Indiranagar',
      date: 'Dec 15, 2025',
      fee: '₹500',
      description: 'Annual festive market featuring local homemaker entrepreneurs. Expected footfall: 500+ visitors.',
      category: 'Market',
      deadline: 'Dec 10, 2025'
    },
    {
      id: 2,
      title: 'HSR Women Entrepreneurs Fair',
      location: 'HSR Layout',
      date: 'Dec 22, 2025',
      fee: 'Free',
      description: 'Community fair celebrating women-led home businesses. Free stall for first 20 applicants.',
      category: 'Fair',
      deadline: 'Dec 15, 2025'
    },
    {
      id: 3,
      title: 'Koramangala Food Festival',
      location: 'Koramangala',
      date: 'Dec 28, 2025',
      fee: '₹800',
      description: 'Food-focused event perfect for baking, pickles, and homemade meal businesses.',
      category: 'Festival',
      deadline: 'Dec 18, 2025'
    },
    {
      id: 4,
      title: 'Whitefield Craft Bazaar',
      location: 'Whitefield',
      date: 'Jan 5, 2026',
      fee: '₹600',
      description: 'Handmade crafts and gifts bazaar. Great for jewelry, home décor, and tailoring.',
      category: 'Bazaar',
      deadline: 'Dec 25, 2025'
    },
    {
      id: 5,
      title: 'Jayanagar New Year Market',
      location: 'Jayanagar',
      date: 'Jan 1, 2026',
      fee: '₹400',
      description: 'New Year special market. All home business categories welcome.',
      category: 'Market',
      deadline: 'Dec 20, 2025'
    },
    {
      id: 6,
      title: 'Malleshwaram Sunday Bazaar',
      location: 'Malleshwaram',
      date: 'Every Sunday',
      fee: '₹300/day',
      description: 'Weekly bazaar with regular stall slots available for home entrepreneurs.',
      category: 'Weekly Market',
      deadline: 'Apply 3 days before'
    }
  ];
  
  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-20 max-w-[390px] mx-auto">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 sticky top-0 z-10">
        <div className="flex items-center gap-3 mb-2">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2">
            <ArrowLeft className="w-5 h-5 text-[#1A1A1A]" />
          </button>
          <h1>Opportunities</h1>
        </div>
        <p className="text-[#666666] text-[14px]">Markets, fairs, and events near you</p>
      </div>
      
      {/* Opportunities List */}
      <div className="px-6 pt-6 space-y-3">
        {opportunities.map((opp) => (
          <Card key={opp.id}>
            <div className="mb-3">
              <span className="px-3 py-1 bg-[#E8F0EC] text-[#5A8B6F] text-[12px] rounded-full font-medium">
                {opp.category}
              </span>
            </div>
            
            <h3 className="font-semibold text-[#1A1A1A] mb-3 text-[16px]">{opp.title}</h3>
            
            <p className="text-[#666666] text-[14px] leading-relaxed mb-4">{opp.description}</p>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-[#666666] text-[13px]">
                <MapPin className="w-4 h-4 text-[#5A8B6F]" />
                <span>{opp.location}</span>
              </div>
              <div className="flex items-center gap-2 text-[#666666] text-[13px]">
                <Calendar className="w-4 h-4 text-[#5A8B6F]" />
                <span>{opp.date}</span>
              </div>
              <div className="flex items-center gap-2 text-[#666666] text-[13px]">
                <DollarSign className="w-4 h-4 text-[#5A8B6F]" />
                <span className="text-[#5A8B6F] font-medium">Booth fee {opp.fee}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <p className="text-[#999999] text-[12px]">Apply by {opp.deadline}</p>
              <Button variant="primary" className="px-6 text-[14px] py-2.5">
                Apply Now
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
