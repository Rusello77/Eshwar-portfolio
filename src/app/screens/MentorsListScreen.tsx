import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Search } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Avatar } from '../components/Avatar';

interface Mentor {
  id: number;
  name: string;
  experience: string;
  avatar: 'woman1' | 'woman2' | 'woman3' | 'woman4';
  specialty: string;
  location: string;
  responseTime: string;
  helpedCount: number;
}

export function MentorsListScreen() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const mentors: Mentor[] = [
    {
      id: 1,
      name: 'Rashmi Kulkarni',
      experience: '10 years baking experience',
      avatar: 'woman4',
      specialty: 'Baking & Pastry',
      location: 'Bangalore',
      responseTime: 'Usually responds in 2 hours',
      helpedCount: 45
    },
    {
      id: 2,
      name: 'Lakshmi Reddy',
      experience: '8 years tailoring business',
      avatar: 'woman1',
      specialty: 'Fashion & Tailoring',
      location: 'Hyderabad',
      responseTime: 'Usually responds in 4 hours',
      helpedCount: 38
    },
    {
      id: 3,
      name: 'Divya Iyer',
      experience: '12 years craft business',
      avatar: 'woman2',
      specialty: 'Arts & Crafts',
      location: 'Chennai',
      responseTime: 'Usually responds in 1 hour',
      helpedCount: 62
    },
    {
      id: 4,
      name: 'Meera Patel',
      experience: '15 years catering business',
      avatar: 'woman3',
      specialty: 'Catering & Food',
      location: 'Mumbai',
      responseTime: 'Usually responds in 3 hours',
      helpedCount: 51
    },
    {
      id: 5,
      name: 'Anjali Sharma',
      experience: '9 years jewelry making',
      avatar: 'woman1',
      specialty: 'Jewelry & Accessories',
      location: 'Delhi',
      responseTime: 'Usually responds in 2 hours',
      helpedCount: 29
    },
    {
      id: 6,
      name: 'Kavita Singh',
      experience: '11 years pickle business',
      avatar: 'woman2',
      specialty: 'Food Products',
      location: 'Pune',
      responseTime: 'Usually responds in 5 hours',
      helpedCount: 34
    }
  ];

  const filteredMentors = mentors.filter((mentor) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      mentor.name.toLowerCase().includes(query) ||
      mentor.specialty.toLowerCase().includes(query) ||
      mentor.location.toLowerCase().includes(query)
    );
  });

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
          <h1 className="flex-1">Mentor Homemakers</h1>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#999999]" />
          <input
            type="text"
            placeholder="Search by name, specialty, or location"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-[12px] border border-[#E0E0E0] focus:border-[#5A8B6F] focus:outline-none text-[14px]"
          />
        </div>
      </div>

      {/* Mentor Cards */}
      <div className="px-6 pt-6 space-y-4">
        {filteredMentors.map((mentor) => (
          <Card key={mentor.id} className="hover:shadow-md transition-shadow">
            <div className="flex gap-4">
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 shadow-sm">
                <Avatar variant={mentor.avatar} className="w-full h-full" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-[#1A1A1A] mb-1">{mentor.name}</h3>
                <p className="text-[12px] text-[#666666] mb-1">{mentor.experience}</p>
                <p className="text-[13px] text-[#5A8B6F] font-medium mb-2">{mentor.specialty}</p>

                <div className="flex items-center gap-4 mb-3">
                  <p className="text-[11px] text-[#999999]">📍 {mentor.location}</p>
                  <p className="text-[11px] text-[#999999]">💚 Helped {mentor.helpedCount}</p>
                </div>

                <p className="text-[11px] text-[#999999] mb-3">{mentor.responseTime}</p>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button
                    variant="primary"
                    className="flex-1 py-2 text-[13px]"
                    onClick={() => navigate(`/mentor/${mentor.id}/ask-advice`)}
                  >
                    Ask Advice
                  </Button>
                  <Button
                    variant="secondary"
                    className="flex-1 py-2 text-[13px]"
                    onClick={() => navigate(`/mentor/${mentor.id}/book-chat`)}
                  >
                    Book Chat
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
