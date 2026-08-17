import { useNavigate } from 'react-router';
import { Card } from '../components/Card';
import { Avatar } from '../components/Avatar';
import { ArrowLeft, MessageCircle, ThumbsUp } from 'lucide-react';

export function DiscussionsListScreen() {
  const navigate = useNavigate();
  
  const discussions = [
    {
      id: 1,
      author: 'Priya Sharma',
      avatar: 'woman1' as const,
      time: '2 hours ago',
      question: 'How do you price homemade pickles for festivals?',
      tags: ['Pricing', 'Marketing'],
      replies: 12,
      helpful: 8
    },
    {
      id: 2,
      author: 'Anjali Desai',
      avatar: 'woman2' as const,
      time: '3 hours ago',
      question: 'Best packaging for homemade cakes - where to buy?',
      tags: ['Packaging', 'Suppliers'],
      replies: 15,
      helpful: 10
    },
    {
      id: 3,
      author: 'Meera Patel',
      avatar: 'woman3' as const,
      time: '5 hours ago',
      question: 'Tips for getting first customers for home baking business?',
      tags: ['Marketing', 'Getting Started'],
      replies: 20,
      helpful: 15
    },
    {
      id: 4,
      author: 'Kavita Singh',
      avatar: 'woman4' as const,
      time: '8 hours ago',
      question: 'How to manage orders during festival season?',
      tags: ['Operations', 'Planning'],
      replies: 18,
      helpful: 12
    },
    {
      id: 5,
      author: 'Lakshmi Reddy',
      avatar: 'woman1' as const,
      time: '1 day ago',
      question: 'Where to source quality fabric for tailoring?',
      tags: ['Suppliers', 'Tailoring'],
      replies: 9,
      helpful: 7
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
          <h1>Discussions</h1>
        </div>
        <p className="text-[#666666] text-[14px]">Browse community questions</p>
      </div>
      
      {/* Discussions List */}
      <div className="px-6 pt-6 space-y-3">
        {discussions.map((discussion) => (
          <Card key={discussion.id} onClick={() => navigate(`/discussion/${discussion.id}`)}>
            <div className="flex gap-3 mb-3">
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <Avatar variant={discussion.avatar} className="w-full h-full" />
              </div>
              <div>
                <p className="font-semibold text-[#1A1A1A] text-[14px]">{discussion.author}</p>
                <p className="text-[13px] text-[#666666]">{discussion.time}</p>
              </div>
            </div>
            
            <p className="text-[#1A1A1A] mb-3 text-[15px] leading-relaxed">{discussion.question}</p>
            
            <div className="flex gap-2 mb-3 flex-wrap">
              {discussion.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-[#E8F0EC] text-[#5A8B6F] text-[13px] rounded-full font-medium">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4 text-[#666666] text-[13px]">
              <div className="flex items-center gap-1">
                <MessageCircle className="w-4 h-4" />
                <span>{discussion.replies} replies</span>
              </div>
              <div className="flex items-center gap-1">
                <ThumbsUp className="w-4 h-4" />
                <span>{discussion.helpful} helpful</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
