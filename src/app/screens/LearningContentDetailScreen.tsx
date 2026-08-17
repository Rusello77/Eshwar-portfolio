import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, Play, Clock, Bookmark } from 'lucide-react';
import { Button } from '../components/Button';
import { Chip } from '../components/Chip';
import ecoFriendlyPackaging from '../../imports/Eco_friendly.jpg';

export function LearningContentDetailScreen() {
  const navigate = useNavigate();
  const { id } = useParams();

  const contentDetails = {
    1: {
      type: 'video',
      title: 'How to Price Homemade Food',
      category: 'Pricing',
      duration: '15 min',
      description: 'Learn the fundamentals of pricing your homemade food products. This lesson covers cost calculation, market research, and competitive pricing strategies.',
      thumbnailUrl: 'https://images.unsplash.com/photo-1670329949691-f056ce6bb079?w=800&h=450&fit=crop&q=80'
    },
    2: {
      type: 'story',
      title: 'From Kitchen to 100+ Orders: My Journey',
      category: 'Inspiration',
      duration: '8 min',
      description: 'Hear from Priya Sharma about how she grew her home baking business from a hobby to a thriving enterprise.',
      thumbnailUrl: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=450&fit=crop&q=80'
    },
    3: {
      type: 'quick-tip',
      title: '5 Ways to Improve Your Product Photos',
      category: 'Marketing',
      duration: '5 min',
      description: 'Quick tips to make your product photos more appealing on social media and attract more customers.',
      thumbnailUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=450&fit=crop&q=80'
    },
    4: {
      type: 'video',
      title: 'Eco-friendly Packaging Options',
      category: 'Packaging',
      duration: '12 min',
      description: 'Discover sustainable and eco-friendly packaging solutions for your home business.',
      thumbnailUrl: ecoFriendlyPackaging
    },
    5: {
      type: 'video',
      title: 'Managing Orders During Festival Season',
      category: 'Operations',
      duration: '18 min',
      description: 'Strategies to handle increased orders during busy festival seasons without getting overwhelmed.',
      thumbnailUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=450&fit=crop&q=80'
    }
  };

  const content = contentDetails[id as keyof typeof contentDetails] || contentDetails[1];

  return (
    <div className="min-h-screen bg-[#F5F5F5] max-w-[390px] mx-auto">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4">
        <button onClick={() => navigate(-1)} className="mb-4">
          <ArrowLeft className="w-6 h-6 text-[#1A1A1A]" />
        </button>
      </div>

      {/* Video/Content Area */}
      <div className="relative h-56 overflow-hidden bg-[#E8F0EC]">
        {content.thumbnailUrl && (
          <img
            src={content.thumbnailUrl}
            alt={content.title}
            className="w-full h-full object-cover"
          />
        )}

        {/* Overlay icon */}
        {content.type === 'video' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
              <Play className="w-8 h-8 text-[#5A8B6F] fill-[#5A8B6F] ml-1" />
            </div>
          </div>
        )}
      </div>

      {/* Content Details */}
      <div className="px-6 py-6 pb-40">
        <div className="flex items-center justify-between mb-3">
          <Chip variant="secondary" size="small">{content.category}</Chip>
          <button>
            <Bookmark className="w-5 h-5 text-[#666666]" />
          </button>
        </div>

        <h1 className="mb-3">{content.title}</h1>

        <div className="flex items-center gap-1 text-[#666666] text-[14px] mb-6">
          <Clock className="w-4 h-4" />
          <span>{content.duration}</span>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm mb-6">
          <h3 className="font-semibold text-[#1A1A1A] text-[15px] mb-2">About this lesson</h3>
          <p className="text-[#666666] text-[14px] leading-relaxed">{content.description}</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="font-semibold text-[#1A1A1A] text-[15px] mb-3">What you'll learn</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-[#666666] text-[14px]">
              <span className="text-[#5A8B6F] mt-0.5">✓</span>
              <span>Step-by-step practical guidance</span>
            </li>
            <li className="flex items-start gap-2 text-[#666666] text-[14px]">
              <span className="text-[#5A8B6F] mt-0.5">✓</span>
              <span>Real-world examples from homemaker entrepreneurs</span>
            </li>
            <li className="flex items-start gap-2 text-[#666666] text-[14px]">
              <span className="text-[#5A8B6F] mt-0.5">✓</span>
              <span>Actionable tips you can implement today</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Button - Fixed above bottom nav */}
      <div className="fixed bottom-16 left-0 right-0 bg-white p-6 border-t border-[#E5E5E5] max-w-[390px] mx-auto">
        <Button variant="primary" className="w-full">
          {content.type === 'video' ? 'Watch Now' : content.type === 'story' ? 'Read Story' : 'View Tips'}
        </Button>
      </div>
    </div>
  );
}