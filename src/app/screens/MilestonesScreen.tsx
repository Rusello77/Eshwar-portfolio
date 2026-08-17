import { useNavigate } from 'react-router';
import { Card } from '../components/Card';
import { Avatar } from '../components/Avatar';
import { ArrowLeft } from 'lucide-react';

export function MilestonesScreen() {
  const navigate = useNavigate();
  
  const milestones = [
    {
      id: 1,
      emoji: '🎉',
      name: 'Priya Sharma',
      avatar: 'woman1' as const,
      achievement: 'Completed 100 orders',
      description: 'Reached a major milestone in her pickle business',
      date: '2 days ago'
    },
    {
      id: 2,
      emoji: '🌟',
      name: 'Meera Patel',
      avatar: 'woman2' as const,
      achievement: 'Launched a new cake menu',
      description: 'Introduced 5 new signature cake flavors',
      date: '3 days ago'
    },
    {
      id: 3,
      emoji: '📦',
      name: 'Kavita Singh',
      avatar: 'woman3' as const,
      achievement: 'Expanded to online delivery',
      description: 'Now delivering handmade crafts across the city',
      date: '5 days ago'
    },
    {
      id: 4,
      emoji: '🏆',
      name: 'Anjali Desai',
      avatar: 'woman4' as const,
      achievement: 'Won Best Home Baker Award',
      description: 'Recognized at the local food festival',
      date: '1 week ago'
    },
    {
      id: 5,
      emoji: '💼',
      name: 'Lakshmi Reddy',
      avatar: 'woman1' as const,
      achievement: 'Opened a home studio',
      description: 'Dedicated space for tailoring services',
      date: '1 week ago'
    },
    {
      id: 6,
      emoji: '🎨',
      name: 'Divya Iyer',
      avatar: 'woman2' as const,
      achievement: 'Featured in local magazine',
      description: 'Craft business story published in City Times',
      date: '2 weeks ago'
    },
    {
      id: 7,
      emoji: '👥',
      name: 'Sunita Kumar',
      avatar: 'woman3' as const,
      achievement: 'Hired first assistant',
      description: 'Growing the team to meet demand',
      date: '2 weeks ago'
    },
    {
      id: 8,
      emoji: '🌍',
      name: 'Rekha Menon',
      avatar: 'woman4' as const,
      achievement: 'Started shipping nationwide',
      description: 'Homemade meals now available across India',
      date: '3 weeks ago'
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
          <h1>Community Milestones</h1>
        </div>
        <p className="text-[#666666] text-[14px]">Celebrating our community's achievements</p>
      </div>
      
      {/* Milestones List */}
      <div className="px-6 pt-6 space-y-3">
        {milestones.map((milestone) => (
          <Card key={milestone.id} className="bg-gradient-to-r from-[#E8F0EC] to-white">
            <div className="flex gap-3">
              <span className="text-3xl">{milestone.emoji}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <Avatar variant={milestone.avatar} className="w-full h-full" />
                  </div>
                  <p className="font-semibold text-[#1A1A1A] text-[14px]">{milestone.name}</p>
                </div>
                <h3 className="font-semibold text-[#1A1A1A] mb-1 text-[15px]">
                  {milestone.achievement}
                </h3>
                <p className="text-[#666666] text-[13px] mb-2">{milestone.description}</p>
                <p className="text-[#999999] text-[12px]">{milestone.date}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
