import { useNavigate, useParams } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/Button';
import { BottomSpacer } from '../components/BottomSpacer';
import ecoFriendlyPackaging from '../../imports/Eco_friendly.jpg';

export function LearningPathDetailScreen() {
  const navigate = useNavigate();
  const { id } = useParams();

  const pathDetails = {
    1: {
      title: 'Start Your First Business',
      description: 'Everything you need to launch your home business',
      thumbnailUrl: 'https://images.unsplash.com/photo-1542330952-bffc55e812b2?w=800&h=450&fit=crop&q=80',
      lessons: ['Setting up your workspace', 'Legal requirements', 'Pricing basics', 'First customers', 'Managing time', 'Marketing basics', 'Customer service', 'Growing sustainably']
    },
    2: {
      title: 'Grow Your Customer Base',
      description: 'Marketing strategies for homemaker entrepreneurs',
      thumbnailUrl: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&h=450&fit=crop&q=80',
      lessons: ['Word of mouth marketing', 'Social media basics', 'Building your brand', 'Customer retention', 'Referral programs', 'Local marketing']
    },
    3: {
      title: 'Improve Packaging & Branding',
      description: 'Make your products stand out',
      thumbnailUrl: ecoFriendlyPackaging,
      lessons: ['Packaging essentials', 'Eco-friendly options', 'Branding basics', 'Label design', 'Cost-effective solutions']
    },
    4: {
      title: 'Sell on Instagram',
      description: 'Master social media marketing',
      thumbnailUrl: 'https://images.unsplash.com/photo-1762340273878-c98c78a45a1a?w=800&h=450&fit=crop&q=80',
      lessons: ['Setting up business account', 'Content creation', 'Reels strategy', 'Engagement tips', 'Instagram stories', 'Analytics', 'Selling features']
    }
  };

  const path = pathDetails[id as keyof typeof pathDetails] || pathDetails[1];

  return (
    <div className="min-h-screen bg-[#F5F5F5] max-w-[390px] mx-auto">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4">
        <button onClick={() => navigate(-1)} className="mb-4">
          <ArrowLeft className="w-6 h-6 text-[#1A1A1A]" />
        </button>
      </div>

      {/* Thumbnail */}
      {path.thumbnailUrl && (
        <div className="h-48 w-full overflow-hidden bg-[#E8F0EC]">
          <img
            src={path.thumbnailUrl}
            alt={path.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Title Section */}
      <div className="bg-white px-6 pt-6 pb-6">
        <h1 className="mb-2">{path.title}</h1>
        <p className="text-[#666666] text-[14px]">{path.description}</p>
        <p className="text-[#5A8B6F] text-[14px] font-medium mt-2">{path.lessons.length} lessons</p>
      </div>

      {/* Lessons */}
      <div className="px-6 py-6 space-y-3 pb-28">
        {path.lessons.map((lesson, index) => (
          <div key={index} className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#5A8B6F] text-white rounded-full flex items-center justify-center text-[14px] font-semibold">
                {index + 1}
              </div>
              <h3 className="flex-1 text-[#1A1A1A] text-[15px] font-medium">{lesson}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Start Button - Fixed above bottom nav */}
      <div className="fixed bottom-16 left-0 right-0 bg-white p-6 border-t border-[#E5E5E5] max-w-[390px] mx-auto">
        <Button variant="primary" className="w-full">
          Start Learning Path
        </Button>
      </div>
    </div>
  );
}