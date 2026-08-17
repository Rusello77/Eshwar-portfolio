import { useNavigate } from 'react-router';
import { Button } from '../components/Button';
import { SectionHeader } from '../components/SectionHeader';
import { DiscussionCard } from '../components/DiscussionCard';
import { VideoStoryCard } from '../components/VideoStoryCard';
import { MilestoneCard } from '../components/MilestoneCard';
import { OpportunityCard } from '../components/OpportunityCard';
import { MentorCard } from '../components/MentorCard';
import { SearchInput } from '../components/SearchInput';
import { Avatar } from '../components/Avatar';
import { Bell } from 'lucide-react';

export function HomeScreen() {
  const navigate = useNavigate();
  
  const milestones = [
    {
      id: 1,
      emoji: '🎉',
      text: 'Priya Sharma completed 100 orders'
    },
    {
      id: 2,
      emoji: '🌟',
      text: 'Meera Patel launched a new cake menu'
    },
    {
      id: 3,
      emoji: '📦',
      text: 'Kavita Singh expanded to online delivery'
    },
    {
      id: 4,
      emoji: '🏆',
      text: 'Anjali Desai won Best Home Baker Award'
    },
    {
      id: 5,
      emoji: '💼',
      text: 'Lakshmi Reddy opened a home studio'
    }
  ];

  const videoStories = [
    {
      id: 1,
      name: 'Latha Nair',
      businessType: 'Homemade Pickles',
      thumbnailUrl: 'https://images.unsplash.com/photo-1659694459412-02735752031f?w=800&h=450&fit=crop&q=80',
      userImageUrl: 'https://images.unsplash.com/photo-1614436163996-25cee5f54290?w=200&h=200&fit=crop&q=80',
      duration: '6:42',
      title: 'How I Started My Mango Pickle Business From Home'
    },
    {
      id: 2,
      name: 'Rekha Menon',
      businessType: 'Home Baking',
      thumbnailUrl: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800&h=450&fit=crop&q=80',
      userImageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&q=80',
      duration: '8:15',
      title: 'My Journey to 100 Custom Cake Orders a Month'
    },
    {
      id: 3,
      name: 'Sunita Kumar',
      businessType: 'Handmade Crafts',
      thumbnailUrl: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=800&h=450&fit=crop&q=80',
      userImageUrl: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=200&h=200&fit=crop&q=80',
      duration: '5:28',
      title: 'From Hobby to Business: Selling Handmade Jewelry'
    }
  ];

  const discussions = [
    {
      id: 1,
      author: 'Priya Sharma',
      avatar: 'bee' as const,
      time: '2 hours ago',
      question: 'How do you price homemade pickles for festivals?',
      tags: ['Pricing', 'Marketing'],
      replies: 12,
      helpful: 8
    },
    {
      id: 2,
      author: 'Anjali Desai',
      avatar: 'bee' as const,
      time: '3 hours ago',
      question: 'Best packaging for homemade cakes - where to buy?',
      tags: ['Packaging', 'Suppliers'],
      replies: 15,
      helpful: 10
    }
  ];

  const opportunities = [
    {
      id: 1,
      title: 'Indiranagar Festive Market',
      location: 'Indiranagar',
      date: 'Dec 15',
      fee: '₹500'
    },
    {
      id: 2,
      title: 'HSR Women Entrepreneurs Fair',
      location: 'HSR Layout',
      date: 'Dec 22',
      fee: 'Free'
    }
  ];

  const mentors = [
    {
      id: 1,
      name: 'Rashmi Kulkarni',
      experience: '10 years baking experience',
      avatar: 'bee' as const
    },
    {
      id: 2,
      name: 'Lakshmi Reddy',
      experience: '8 years tailoring business',
      avatar: 'bee' as const
    },
    {
      id: 3,
      name: 'Divya Iyer',
      experience: '12 years craft business',
      avatar: 'bee' as const
    }
  ];
  
  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-20 max-w-[390px] mx-auto">
      {/* Section 1 - Top Bar */}
      <div className="bg-[#FAF8F2] px-6 pt-12 pb-5 sticky top-0 z-10 shadow-sm">
        <div className="flex gap-3 items-center">
          {/* Profile Avatar - clickable to access profile */}
          <button
            onClick={() => navigate('/profile')}
            className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0 hover:ring-2 hover:ring-[#5A8B6F] hover:ring-offset-2 transition-all shadow-sm"
          >
            <Avatar
              variant="me"
              imageUrl="https://images.unsplash.com/photo-1623594675959-02360202d4d6?w=200&h=200&fit=crop"
              alt="My Profile"
              className="w-full h-full"
            />
          </button>

          <SearchInput
            placeholder="Search questions, people, suppliers…"
            className="flex-1"
          />
          <button
            onClick={() => navigate('/notifications')}
            className="w-11 h-11 bg-[#EBE6D8] rounded-xl flex items-center justify-center relative flex-shrink-0 hover:bg-[#D8D3C8] transition-colors"
          >
            <Bell className="w-5 h-5 text-[#6B6B6B]" />
            <div className="absolute top-2 right-2 w-2 h-2 bg-[#5A8B6F] rounded-full shadow-sm" />
          </button>
        </div>
      </div>
      
      {/* Section 2 - Community Milestones Carousel */}
      <div className="pt-6 mb-6">
        <div className="px-6 mb-4">
          <SectionHeader title="Community Milestones" />
        </div>
        <div className="flex gap-3 overflow-x-auto px-6 pb-2 scrollbar-hide">
          {milestones.map((milestone) => (
            <MilestoneCard key={milestone.id} {...milestone} horizontal={true} />
          ))}
        </div>
      </div>

      {/* Section 3 - Trending Discussions */}
      <div className="px-6 mb-6">
        <div className="mb-4">
          <SectionHeader
            title="Trending Discussions"
            showViewAll={true}
            onViewAll={() => navigate('/discussion')}
          />
        </div>
        <div className="space-y-3">
          {discussions.map((discussion) => (
            <DiscussionCard 
              key={discussion.id} 
              {...discussion}
              onClick={() => navigate(`/discussion/${discussion.id}`)}
            />
          ))}
        </div>
      </div>

      {/* Section 4 - Ask a Question */}
      <div className="px-6 mb-6">
        <Button 
          variant="primary" 
          className="w-full flex items-center justify-center py-3.5 rounded-xl text-[15px] font-semibold shadow-sm hover:shadow-md transition-shadow"
          onClick={() => navigate('/ask-question')}
        >
          Ask a Question
        </Button>
      </div>

      {/* Section 5 - Stories from the Community (Video Stories) */}
      <div className="mb-6">
        <div className="px-6 mb-4">
          <SectionHeader title="Stories from the Community" />
        </div>
        <div className="flex gap-3 overflow-x-auto px-6 pb-2 scrollbar-hide">
          {videoStories.map((story) => (
            <VideoStoryCard 
              key={story.id} 
              {...story}
              onClick={() => navigate(`/story/${story.id}`)}
            />
          ))}
        </div>
      </div>
      
      {/* Section 6 - Opportunities Near You */}
      <div className="px-6 mb-6">
        <div className="mb-4">
          <SectionHeader
            title="Opportunities Near You"
            showViewAll={true}
            onViewAll={() => navigate('/opportunities')}
          />
        </div>
        <div className="space-y-3">
          {opportunities.map((opp) => (
            <OpportunityCard key={opp.id} {...opp} />
          ))}
        </div>
      </div>

      {/* Section 7 - Mentor Homemakers */}
      <div className="mb-6">
        <div className="px-6 mb-4">
          <SectionHeader
            title="Mentor Homemakers"
            showViewAll={true}
            onViewAll={() => navigate('/mentors')}
          />
        </div>
        <div className="flex gap-3 overflow-x-auto px-6 pb-2 scrollbar-hide">
          {mentors.map((mentor) => (
            <MentorCard
              key={mentor.id}
              {...mentor}
              onAskAdvice={() => navigate(`/mentor/${mentor.id}/ask-advice`)}
              onBookChat={() => navigate(`/mentor/${mentor.id}/book-chat`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}