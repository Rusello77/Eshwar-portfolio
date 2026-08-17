import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Users, Calendar, ShoppingBag } from 'lucide-react';

export function CollaborateScreen() {
  const collaborations = [
    {
      type: 'Collaboration Request',
      icon: Users,
      title: 'Looking for photographer for product photos',
      description: 'Need someone to take professional photos of homemade pickles',
      members: '3 interested',
      color: '#5A8B6F'
    },
    {
      type: 'Festival Partnership',
      icon: Calendar,
      title: 'Diwali hamper collaboration',
      description: 'Join to create combo hampers for Diwali - bakers, pickle makers, crafts',
      members: '8 members',
      color: '#FFB85C'
    },
    {
      type: 'Bulk Supplier Group',
      icon: ShoppingBag,
      title: 'Bulk packaging order for bakers',
      description: 'Pool orders for cake boxes and containers - better prices together',
      members: '12 members',
      color: '#7AA98A'
    }
  ];
  
  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-20 max-w-[390px] mx-auto">
      <div className="bg-white px-6 pt-12 pb-4 sticky top-0 z-10">
        <h1 className="mb-2">Collaboration Hub</h1>
        <p className="text-[#666666] text-[14px]">Work together, grow together</p>
      </div>
      
      <div className="p-6 space-y-4">
        {collaborations.map((collab, i) => {
          const Icon = collab.icon;
          return (
            <Card key={i}>
              <div className="flex items-start gap-3 mb-3">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${collab.color}20` }}
                >
                  <Icon className="w-6 h-6" style={{ color: collab.color }} />
                </div>
                <div className="flex-1">
                  <p className="text-[13px] text-[#666666] mb-1">{collab.type}</p>
                  <h3 className="mb-1">{collab.title}</h3>
                </div>
              </div>
              
              <p className="text-[#666666] mb-3">{collab.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-[13px] text-[#666666]">{collab.members}</span>
                <Button variant="primary" className="py-2 px-4 text-[14px]">
                  Join
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
