import { useNavigate } from 'react-router';
import { ArrowLeft, Search } from 'lucide-react';
import { Avatar } from '../components/Avatar';

interface Connection {
  id: number;
  name: string;
  businessType: string;
  distance: number;
  area: string;
  imageUrl: string;
}

// Connected users (My People) - All show real photos since they're connected
const myPeople: Connection[] = [
  { id: 1, name: 'Meera Patel', businessType: 'Home Baking', distance: 2.3, area: 'Indiranagar', imageUrl: 'https://images.unsplash.com/photo-1614436163996-25cee5f54290?w=200&h=200&fit=crop' },
  { id: 2, name: 'Kavita Singh', businessType: 'Handmade Crafts', distance: 3.1, area: 'Koramangala', imageUrl: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=200&h=200&fit=crop' },
  { id: 3, name: 'Anjali Desai', businessType: 'Beauty Services', distance: 1.8, area: 'JP Nagar', imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop' },
  { id: 4, name: 'Lakshmi Reddy', businessType: 'Tailoring Services', distance: 2.8, area: 'Malleshwaram', imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop' },
  { id: 9, name: 'Radha Krishnan', businessType: 'Yoga Classes', distance: 2.1, area: 'BTM Layout', imageUrl: 'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=200&h=200&fit=crop' },
  { id: 10, name: 'Nisha Varma', businessType: 'Mehendi Artist', distance: 3.8, area: 'Rajajinagar', imageUrl: 'https://images.unsplash.com/photo-1558899-1ea57e8a-0c6e-42c8-8f84-c19c6d3c-8b38?w=200&h=200&fit=crop' },
  { id: 11, name: 'Pooja Nair', businessType: 'Organic Spices', distance: 4.5, area: 'Yelahanka', imageUrl: 'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=200&h=200&fit=crop' },
  { id: 12, name: 'Geeta Rao', businessType: 'Catering Services', distance: 2.9, area: 'RT Nagar', imageUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=200&fit=crop' },
  { id: 13, name: 'Shanti Devi', businessType: 'Embroidery Work', distance: 3.3, area: 'Vijayanagar', imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop' },
  { id: 14, name: 'Latha Kumar', businessType: 'Tiffin Service', distance: 1.9, area: 'Basavanagudi', imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop' },
];

export function MyPeopleScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5F1E8] pb-20 max-w-[390px] mx-auto">
      {/* Header */}
      <div className="bg-[#FAF8F2] px-6 pt-12 pb-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate(-1)} className="p-2 -ml-2 hover:bg-[#EBE6D8] rounded-lg transition-colors">
              <ArrowLeft className="w-6 h-6 text-[#2D2D2D]" />
            </button>
            <div>
              <h1 className="mb-1 text-[#2D2D2D]">My People</h1>
              <p className="text-[#6B6B6B] text-[14px]">People you've connected with</p>
            </div>
          </div>
          <button className="p-2 -mr-2 hover:bg-[#EBE6D8] rounded-lg transition-colors">
            <Search className="w-5 h-5 text-[#5A8B6F]" />
          </button>
        </div>
      </div>

      {/* People Grid */}
      <div className="px-6 pt-6">
        <p className="text-[#999999] text-[13px] mb-4">
          {myPeople.length} {myPeople.length === 1 ? 'connection' : 'connections'}
        </p>

        <div className="space-y-3">
          {myPeople.map((person) => (
            <button
              key={person.id}
              onClick={() => navigate(`/profile/${person.id}`)}
              className="w-full bg-[#FAF8F2] border-2 border-[#D8D3C8] rounded-2xl p-4 hover:border-[#5A8B6F] hover:shadow-md transition-all text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden ring-2 ring-[#5A8B6F]/20">
                  <Avatar
                    variant="real"
                    imageUrl={person.imageUrl}
                    alt={person.name}
                    className="w-full h-full"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-[#2D2D2D] mb-1">
                    {person.name}
                  </h3>
                  <p className="text-[14px] text-[#6B6B6B] mb-2">
                    {person.businessType}
                  </p>
                  <p className="text-[13px] text-[#999999]">
                    {person.distance} km away · {person.area}
                  </p>
                </div>

                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-[#E8F0EC] flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-[#5A8B6F]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}