import { useNavigate } from 'react-router';
import { Card } from '../components/Card';
import { ArrowLeft, MessageCircle, UserPlus, Handshake, BookOpen } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function NotificationsScreen() {
  const navigate = useNavigate();
  
  const notifications = [
    {
      type: 'reply',
      icon: MessageCircle,
      avatar: 'https://images.unsplash.com/photo-1758600587839-56ba05596c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdvbWFuJTIwYnVzaW5lc3MlMjBjYXN1YWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzMwMjA0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Meera Patel',
      message: 'replied to your question about pricing',
      time: '2 hours ago',
      unread: true
    },
    {
      type: 'connection',
      icon: UserPlus,
      avatar: 'https://images.unsplash.com/photo-1735845929510-48e0ecdb53d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmZW1hbGUlMjBlbnRyZXByZW5ldXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzMwMjA0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Anjali Desai',
      message: 'wants to connect with you',
      time: '5 hours ago',
      unread: true
    },
    {
      type: 'collaboration',
      icon: Handshake,
      avatar: 'https://images.unsplash.com/photo-1623594675959-02360202d4d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwc21pbGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzMwMTIwNjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Priya Sharma',
      message: 'invited you to Diwali hamper collaboration',
      time: '1 day ago',
      unread: false
    },
    {
      type: 'learning',
      icon: BookOpen,
      message: 'New course: "Instagram Marketing Tips"',
      time: '2 days ago',
      unread: false
    }
  ];
  
  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-24 max-w-[390px] mx-auto">
      <div className="bg-white px-6 pt-12 pb-4 border-b border-[#E0E0E0] sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1>Notifications</h1>
        </div>
      </div>
      
      <div className="p-6 space-y-3">
        {notifications.map((notif, i) => {
          const Icon = notif.icon;
          return (
            <Card key={i} className={notif.unread ? 'bg-[#E8F0EC]' : ''}>
              <div className="flex gap-3">
                {notif.avatar ? (
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-[#E8F0EC] flex-shrink-0">
                    <ImageWithFallback 
                      src={notif.avatar}
                      alt={notif.name || 'Notification'}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full bg-[#5A8B6F] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                )}
                
                <div className="flex-1">
                  <p className="text-[#1A1A1A] mb-1">
                    {notif.name && <span className="font-semibold">{notif.name} </span>}
                    {notif.message}
                  </p>
                  <p className="text-[13px] text-[#666666]">{notif.time}</p>
                </div>
                
                {notif.unread && (
                  <div className="w-2 h-2 bg-[#5A8B6F] rounded-full mt-2" />
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
