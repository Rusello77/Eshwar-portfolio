import { useState } from 'react';
import { useNavigate } from 'react-router';
import { SectionHeader } from '../components/SectionHeader';
import { ContinueLearningCard } from '../components/ContinueLearningCard';
import { LearningPathCard } from '../components/LearningPathCard';
import { ContentCard } from '../components/ContentCard';
import { VideoStoryCard } from '../components/VideoStoryCard';
import { ToolCard } from '../components/ToolCard';
import { LiveSessionCard } from '../components/LiveSessionCard';
import { FilterPanel, FilterState } from '../components/FilterPanel';
import { Chip } from '../components/Chip';
import { BottomSpacer } from '../components/BottomSpacer';
import { WhatsAppSessionBottomSheet } from '../components/WhatsAppSessionBottomSheet';
import { ConfirmationDialog } from '../components/ConfirmationDialog';
import { Filter, X, TrendingUp } from 'lucide-react';
import ecoFriendlyPackaging from '../../imports/Eco_friendly.jpg';

export function LearningScreen() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState<string[]>([]);
  const [showSaved, setShowSaved] = useState(false);
  
  // WhatsApp session flow states
  const [selectedSession, setSelectedSession] = useState<number | null>(null);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [isReminder, setIsReminder] = useState(false);
  const [userRegistered, setUserRegistered] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const categories = ['All', 'Recommended', 'Marketing', 'Pricing', 'Packaging', 'Social Media', 'Finance'];

  const learningPaths = [
    {
      id: 1,
      title: 'Start Your First Business',
      description: 'Everything you need to launch your home business',
      lessons: 8,
      color: '#5A8B6F',
      thumbnailUrl: 'https://images.unsplash.com/photo-1542330952-bffc55e812b2?w=800&h=450&fit=crop&q=80'
    },
    {
      id: 2,
      title: 'Grow Your Customer Base',
      description: 'Marketing strategies for homemaker entrepreneurs',
      lessons: 6,
      color: '#7AA98A',
      thumbnailUrl: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&h=450&fit=crop&q=80'
    },
    {
      id: 3,
      title: 'Improve Packaging & Branding',
      description: 'Make your products stand out',
      lessons: 5,
      color: '#5A8B6F',
      thumbnailUrl: ecoFriendlyPackaging
    },
    {
      id: 4,
      title: 'Sell on Instagram',
      description: 'Master social media marketing',
      lessons: 7,
      color: '#7AA98A',
      thumbnailUrl: 'https://images.unsplash.com/photo-1762340273878-c98c78a45a1a?w=800&h=450&fit=crop&q=80'
    }
  ];

  const recommendedContent = [
    {
      id: 1,
      type: 'video' as const,
      title: 'How to Price Homemade Food',
      category: 'Pricing',
      duration: '15 min',
      label: 'Popular',
      thumbnailUrl: 'https://images.unsplash.com/photo-1670329949691-f056ce6bb079?w=400&h=400&fit=crop&q=80',
      bookmarked: false
    },
    {
      id: 2,
      type: 'story' as const,
      title: 'From Kitchen to 100+ Orders: My Journey',
      category: 'Inspiration',
      duration: '8 min',
      label: 'Story',
      thumbnailUrl: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=400&fit=crop&q=80',
      bookmarked: true
    },
    {
      id: 3,
      type: 'quick-tip' as const,
      title: '5 Ways to Improve Your Product Photos',
      category: 'Marketing',
      duration: '5 min',
      label: 'Quick Tip',
      thumbnailUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop&q=80',
      bookmarked: false
    },
    {
      id: 4,
      type: 'video' as const,
      title: 'Eco-friendly Packaging Options',
      category: 'Packaging',
      duration: '12 min',
      label: 'Beginner',
      thumbnailUrl: ecoFriendlyPackaging,
      bookmarked: false
    },
    {
      id: 5,
      type: 'video' as const,
      title: 'Managing Orders During Festival Season',
      category: 'Operations',
      duration: '18 min',
      label: 'Popular',
      thumbnailUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=400&fit=crop&q=80',
      bookmarked: true
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

  const tools = [
    {
      id: 1,
      name: 'Pricing Calculator',
      description: 'Calculate the right price for your products',
      icon: 'calculator' as const
    },
    {
      id: 2,
      name: 'Order Tracker',
      description: 'Keep track of all your orders',
      icon: 'tracker' as const
    },
    {
      id: 3,
      name: 'Packaging Checklist',
      description: 'Never forget important packaging steps',
      icon: 'checklist' as const
    },
    {
      id: 4,
      name: 'Expense Tracker',
      description: 'Monitor your business expenses',
      icon: 'expense' as const
    }
  ];

  const liveSessions = [
    {
      id: 1,
      title: 'Instagram Marketing Masterclass',
      mentorName: 'Rashmi Kulkarni',
      date: 'Dec 20',
      time: '6:00 PM'
    },
    {
      id: 2,
      title: 'Pricing Strategies Workshop',
      mentorName: 'Divya Iyer',
      date: 'Dec 22',
      time: '7:00 PM'
    }
  ];

  const handleApplyFilters = (filters: FilterState) => {
    const active: string[] = [];
    
    if (filters.contentType.length > 0) active.push(...filters.contentType);
    if (filters.skillLevel !== 'Beginner') active.push(filters.skillLevel);
    if (filters.businessType.length > 0) active.push(...filters.businessType);
    if (filters.duration.length > 0) active.push(...filters.duration);
    if (filters.goals.length > 0) active.push(...filters.goals);
    if (filters.format.length > 0) active.push(...filters.format);
    
    setAppliedFilters(active);
  };

  const removeFilter = (filter: string) => {
    setAppliedFilters(appliedFilters.filter(f => f !== filter));
  };

  // WhatsApp session handlers
  const handleJoinSession = (sessionId: number) => {
    setSelectedSession(sessionId);
    setIsReminder(false);
    
    if (userRegistered) {
      setShowConfirmDialog(true);
    } else {
      setIsBottomSheetOpen(true);
    }
  };

  const handleRemindSession = (sessionId: number) => {
    setSelectedSession(sessionId);
    setIsReminder(true);
    
    if (userRegistered) {
      setShowConfirmDialog(true);
    } else {
      setIsBottomSheetOpen(true);
    }
  };

  const handleFormSubmit = (data: { name: string; phone: string; email?: string }) => {
    // Store user data (in real app, this would be sent to backend)
    console.log('User registration:', data);
    setUserRegistered(true);
    setIsBottomSheetOpen(false);
  };

  const handleConfirmSend = () => {
    // Send link via WhatsApp (in real app, this would trigger API call)
    console.log('Sending link to WhatsApp for session:', selectedSession);
    setShowConfirmDialog(false);
    
    // Show a brief success toast or message
    // For now, we'll rely on the modal's success state
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-20 max-w-[390px] mx-auto">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-6">
        <h1 className="mb-2">Learning Hub</h1>
        <p className="text-[#666666] text-[14px] leading-relaxed">Grow your skills</p>
      </div>

      {/* Section 1 - Continue Learning */}
      <div className="px-6 pt-6 mb-6">
        <SectionHeader 
          title="Continue Learning" 
          className="mb-4" 
          showViewAll={true}
          onViewAll={() => navigate('/learning/continue')}
        />
        <ContinueLearningCard
          title="How to Price Homemade Food"
          progress={60}
          thumbnailColor="#5A8B6F"
          onResume={() => {}}
        />
      </div>

      {/* Section 2 - Learning Paths */}
      <div className="mb-6">
        <div className="px-6 mb-4">
          <SectionHeader title="Learning Paths" />
        </div>
        <div className="flex gap-3 overflow-x-auto px-6 pb-2 scrollbar-hide">
          {learningPaths.map(path => (
            <LearningPathCard
              key={path.id}
              {...path}
              onClick={() => navigate(`/learning/path/${path.id}`)}
            />
          ))}
        </div>
      </div>

      {/* Section 3 - Filter + Category Row */}
      <div className="sticky top-0 z-20 bg-[#F5F5F5] px-6 pt-4 pb-3">
        {/* Category Pills - Full Width Horizontal Scroll */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide -mx-6 px-6 mb-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-[13px] font-medium whitespace-nowrap transition-colors flex items-center gap-1 ${
                activeCategory === cat
                  ? 'bg-[#5A8B6F] text-white'
                  : 'bg-white text-[#666666] border border-[#E0E0E0]'
              }`}
            >
              {cat === 'All' && <TrendingUp className="w-4 h-4" />}
              {cat}
            </button>
          ))}
        </div>

        {/* Filter Button - Below Categories */}
        <button
          onClick={() => setIsFilterOpen(true)}
          className="w-full bg-white rounded-xl flex items-center justify-center gap-2 py-2.5 shadow-sm border border-[#E0E0E0] hover:bg-[#F5F5F5] transition-colors"
        >
          <Filter className="w-4 h-4 text-[#666666]" />
          <span className="text-[13px] font-medium text-[#666666]">
            {appliedFilters.length > 0 ? `Filters (${appliedFilters.length})` : 'More Filters'}
          </span>
        </button>

        {/* Active Filter Chips */}
        {appliedFilters.length > 0 && (
          <div className="flex gap-2 overflow-x-auto scrollbar-hide -mx-6 px-6 mt-3">
            {appliedFilters.map(filter => (
              <div
                key={filter}
                className="flex items-center gap-1 px-3 py-1.5 bg-[#5A8B6F] text-white text-[13px] rounded-full whitespace-nowrap"
              >
                <span>{filter}</span>
                <button onClick={() => removeFilter(filter)}>
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Section 5 - Recommended Content Feed */}
      <div className="px-6 mb-6 mt-4">
        {/* Header with Saved Toggle */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowSaved(false)}
              className={`text-[15px] pb-1 transition-colors ${
                !showSaved 
                  ? 'font-semibold text-[#1A1A1A] border-b-2 border-[#5A8B6F]' 
                  : 'text-[#999999]'
              }`}
            >
              {activeCategory === 'All' ? 'Trending Now' : 'Recommended for You'}
            </button>
            <button
              onClick={() => setShowSaved(true)}
              className={`text-[15px] pb-1 transition-colors ${
                showSaved 
                  ? 'font-semibold text-[#1A1A1A] border-b-2 border-[#5A8B6F]' 
                  : 'text-[#999999]'
              }`}
            >
              Saved
            </button>
          </div>
          <button 
            className="text-[13px] text-[#5A8B6F] font-medium hover:text-[#4A7360] transition-colors"
            onClick={() => navigate('/learning/all-content')}
          >
            View All
          </button>
        </div>
        
        <div className="space-y-3">
          {(showSaved ? recommendedContent.filter(c => c.bookmarked) : recommendedContent).map(content => (
            <ContentCard
              key={content.id}
              {...content}
              onClick={() => navigate(`/learning/content/${content.id}`)}
            />
          ))}
        </div>
      </div>

      {/* Section 6 - Learn from Real Stories */}
      <div className="mb-6">
        <div className="px-6">
          <SectionHeader title="Learn from Real Stories" />
        </div>
        <div className="flex gap-3 overflow-x-auto px-6 pb-2 scrollbar-hide">
          {videoStories.map(story => (
            <VideoStoryCard
              key={story.id}
              {...story}
              onClick={() => navigate(`/story/${story.id}`)}
            />
          ))}
        </div>
      </div>

      {/* Section 7 - Tools & Templates */}
      <div className="mb-6">
        <div className="px-6">
          <SectionHeader title="Tools for Your Business" />
        </div>
        <div className="flex gap-3 overflow-x-auto px-6 pb-2 scrollbar-hide">
          {tools.map(tool => (
            <ToolCard
              key={tool.id}
              {...tool}
              onClick={() => navigate(`/tools/${tool.id}`)}
            />
          ))}
        </div>
      </div>

      {/* Section 8 - Live Sessions & Mentors */}
      <div className="px-6 mb-6">
        <SectionHeader title="Learn with Experts" className="mb-3" />
        <div className="space-y-3">
          {liveSessions.map(session => (
            <LiveSessionCard
              key={session.id}
              {...session}
              onJoin={() => handleJoinSession(session.id)}
              onRemind={() => handleRemindSession(session.id)}
            />
          ))}
        </div>
      </div>

      {/* Filter Panel */}
      <FilterPanel
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onApply={handleApplyFilters}
      />

      {/* WhatsApp Session Bottom Sheet */}
      <WhatsAppSessionBottomSheet
        isOpen={isBottomSheetOpen}
        onClose={() => setIsBottomSheetOpen(false)}
        sessionTitle={selectedSession ? liveSessions.find(s => s.id === selectedSession)?.title || '' : ''}
        isReminder={isReminder}
        onSubmit={handleFormSubmit}
      />

      {/* Confirmation Dialog */}
      <ConfirmationDialog
        isOpen={showConfirmDialog}
        onClose={() => setShowConfirmDialog(false)}
        onConfirm={handleConfirmSend}
        title="Send to WhatsApp?"
        message={`${isReminder ? 'Send reminder' : 'Send session link'} to your registered WhatsApp number?`}
        confirmText="Yes, Send"
        cancelText="Cancel"
      />

      {/* Bottom Spacer */}
      <BottomSpacer />
    </div>
  );
}