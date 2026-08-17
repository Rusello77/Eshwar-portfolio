import { useNavigate, useParams } from 'react-router';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { ArrowLeft, ThumbsUp, Send } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function DiscussionScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const question = {
    author: 'Priya Sharma',
    avatar: 'https://images.unsplash.com/photo-1623594675959-02360202d4d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwc21pbGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzMwMTIwNjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    question: 'How do you price homemade pickles for festivals?',
    tags: ['Pricing', 'Marketing'],
    time: '2 hours ago'
  };
  
  const replies = [
    {
      author: 'Meera Patel',
      avatar: 'https://images.unsplash.com/photo-1758600587839-56ba05596c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdvbWFuJTIwYnVzaW5lc3MlMjBjYXN1YWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzMwMjA0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      answer: 'I usually calculate cost of ingredients + packaging + 40% profit margin. For festivals, I add a premium of 10-15% more.',
      time: '1 hour ago',
      helpful: 5
    },
    {
      author: 'Kavita Singh',
      avatar: 'https://images.unsplash.com/photo-1735845929510-48e0ecdb53d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmZW1hbGUlMjBlbnRyZXByZW5ldXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzMwMjA0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      answer: 'Check what others are selling similar pickles for. Also consider your time - that\'s valuable too!',
      time: '45 minutes ago',
      helpful: 3
    }
  ];
  
  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-24 max-w-[390px] mx-auto">
      <div className="bg-white px-6 pt-12 pb-4 border-b border-[#E0E0E0] sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2>Discussion</h2>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        {/* Original Question */}
        <Card>
          <div className="flex gap-3 mb-3">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-[#E8F0EC]">
              <ImageWithFallback 
                src={question.avatar}
                alt={question.author}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-[#1A1A1A]">{question.author}</p>
              <p className="text-[13px] text-[#666666]">{question.time}</p>
            </div>
          </div>
          
          <p className="text-[#1A1A1A] mb-3">{question.question}</p>
          
          <div className="flex gap-2">
            {question.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-[#D8F3E6] text-[#5A8B6F] text-[13px] rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </Card>
        
        {/* Replies */}
        <div>
          <h3 className="mb-3">{replies.length} Replies</h3>
          <div className="space-y-3">
            {replies.map((reply, i) => (
              <Card key={i}>
                <div className="flex gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-[#E8F0EC]">
                    <ImageWithFallback 
                      src={reply.avatar}
                      alt={reply.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A] text-[14px]">{reply.author}</p>
                    <p className="text-[13px] text-[#666666]">{reply.time}</p>
                  </div>
                </div>
                
                <p className="text-[#1A1A1A] mb-3">{reply.answer}</p>
                
                <button className="flex items-center gap-1 text-[#5A8B6F] text-[14px]">
                  <ThumbsUp className="w-4 h-4" />
                  <span>Helpful ({reply.helpful})</span>
                </button>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      {/* Reply Input */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E0E0E0] p-4 max-w-[390px] mx-auto">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Write your reply..."
            className="flex-1 px-4 py-2 border border-[#E0E0E0] rounded-[10px] focus:border-[#5A8B6F] focus:outline-none"
          />
          <button className="w-10 h-10 bg-[#5A8B6F] rounded-[10px] flex items-center justify-center">
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
