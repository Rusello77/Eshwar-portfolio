import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { Avatar } from '../components/Avatar';

interface Message {
  id: number;
  userId: number;
  name: string;
  avatar: 'woman1' | 'woman2' | 'woman3' | 'woman4';
  lastMessage: string;
  timestamp: string;
  unread: boolean;
}

const messages: Message[] = [
  {
    id: 1,
    userId: 1,
    name: 'Meera Patel',
    avatar: 'woman1',
    lastMessage: 'Thank you! Looking forward to collaborating',
    timestamp: '2m ago',
    unread: true,
  },
  {
    id: 2,
    userId: 3,
    name: 'Anjali Desai',
    avatar: 'woman3',
    lastMessage: 'Yes, I can help with that!',
    timestamp: '1h ago',
    unread: true,
  },
  {
    id: 3,
    userId: 2,
    name: 'Kavita Singh',
    avatar: 'woman2',
    lastMessage: 'Perfect! See you at the workshop',
    timestamp: '3h ago',
    unread: false,
  },
  {
    id: 4,
    userId: 10,
    name: 'Nisha Varma',
    avatar: 'woman2',
    lastMessage: 'I would love to connect for bridal services',
    timestamp: '1d ago',
    unread: false,
  },
  {
    id: 5,
    userId: 4,
    name: 'Lakshmi Reddy',
    avatar: 'woman1',
    lastMessage: 'Thanks for the referral!',
    timestamp: '2d ago',
    unread: false,
  },
  {
    id: 6,
    userId: 9,
    name: 'Radha Krishnan',
    avatar: 'woman4',
    lastMessage: 'Great question in the discussion group',
    timestamp: '3d ago',
    unread: false,
  },
];

export function MessagesScreen() {
  const navigate = useNavigate();
  const unreadCount = messages.filter(m => m.unread).length;

  return (
    <div className="min-h-screen bg-white pb-20 max-w-[390px] mx-auto">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <div className="flex items-center gap-3 mb-2">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6 text-[#1A1A1A]" />
          </button>
          <div className="flex-1">
            <h1 className="mb-0">Messages</h1>
          </div>
        </div>
        {unreadCount > 0 && (
          <p className="text-[#666666] text-[14px]">
            {unreadCount} unread {unreadCount === 1 ? 'message' : 'messages'}
          </p>
        )}
      </div>

      {/* Messages List */}
      <div className="px-6">
        <div className="space-y-2">
          {messages.map((message) => (
            <button
              key={message.id}
              onClick={() => navigate(`/chat/${message.userId}`)}
              className={`w-full p-4 rounded-2xl text-left transition-all hover:shadow-md ${
                message.unread 
                  ? 'bg-[#E8F0EC]' 
                  : 'bg-white border border-[#E0E0E0]'
              }`}
            >
              <div className="flex items-start gap-3">
                {/* Avatar */}
                <div className="w-12 h-12 flex-shrink-0 relative">
                  <Avatar variant={message.avatar} className="w-full h-full" />
                  {message.unread && (
                    <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-[#5A8B6F] rounded-full border-2 border-white" />
                  )}
                </div>

                {/* Message Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className={`${
                      message.unread ? 'font-semibold' : 'font-medium'
                    } text-[#1A1A1A]`}>
                      {message.name}
                    </h3>
                    <span className="text-[12px] text-[#999999] flex-shrink-0 ml-2">
                      {message.timestamp}
                    </span>
                  </div>
                  <p className={`text-[14px] ${
                    message.unread ? 'text-[#1A1A1A] font-medium' : 'text-[#666666]'
                  } truncate`}>
                    {message.lastMessage}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Empty State (if no messages) */}
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
            <div className="w-20 h-20 bg-[#E8F0EC] rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-10 h-10 text-[#5A8B6F]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-[#1A1A1A] mb-2">No messages yet</h3>
            <p className="text-[14px] text-[#666666]">
              Start connecting with other homemakers to begin conversations
            </p>
          </div>
        )}
      </div>
    </div>
  );
}