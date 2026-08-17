import { useNavigate, useParams } from 'react-router';
import { Card } from '../components/Card';
import { Avatar } from '../components/Avatar';
import { ArrowLeft, Play } from 'lucide-react';

export function StoryDetailScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const stories = [
    {
      id: '1',
      name: 'Latha Nair',
      businessType: 'Homemade Pickles',
      thumbnailUrl: 'https://images.unsplash.com/photo-1659694459412-02735752031f?w=800&h=450&fit=crop&q=80',
      userImageUrl: 'https://images.unsplash.com/photo-1614436163996-25cee5f54290?w=200&h=200&fit=crop&q=80',
      duration: '6:42',
      title: 'How I Started My Mango Pickle Business From Home',
      journey: 'When the lockdown started in 2020, I was looking for something meaningful to do from home. I had always made pickles for my family, and they loved them. I decided to try selling to my neighbors. What started with 5 bottles has now grown to shipping across 4 cities.',
      challenges: 'The biggest challenge was getting the word out and building trust. Many people were hesitant to buy homemade products from someone they didn\'t know well. I started by giving free samples to neighbors and asking them to share with friends. Gradually, word spread through WhatsApp groups.',
      lessons: 'Start small and focus on quality. Word of mouth is the best marketing for home businesses. Don\'t be afraid to ask for feedback - it helped me improve my recipes and packaging. Building trust takes time, but consistency is key.',
      tips: [
        'Use high-quality ingredients - customers can taste the difference',
        'Keep detailed records of your recipes and costs from day one',
        'Build relationships with local suppliers for consistent quality',
        'Package beautifully - first impressions matter a lot',
        'Join local homemaker groups for support and advice'
      ]
    },
    {
      id: '2',
      name: 'Rekha Menon',
      businessType: 'Home Baking',
      thumbnailUrl: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800&h=450&fit=crop&q=80',
      userImageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&q=80',
      duration: '8:15',
      title: 'My Journey to 100 Custom Cake Orders a Month',
      journey: 'I started baking cakes for my daughter\'s birthday parties. Friends started requesting cakes for their events, and I realized I could turn this into a business. From my kitchen, I now serve 50+ regular customers every month.',
      challenges: 'Managing orders during peak seasons like festivals and managing quality while scaling up production were my biggest challenges. I learned the hard way that taking too many orders can affect quality.',
      lessons: 'Having a proper booking system and being clear about lead times is crucial. I learned to say no when needed to maintain quality. It\'s better to deliver excellent work to fewer customers than disappoint many.',
      tips: [
        'Invest in good quality baking equipment - it pays off',
        'Take photos of every cake - they are your best marketing tool',
        'Build a WhatsApp broadcast list for regular updates',
        'Seasonal planning helps manage busy periods better',
        'Set clear policies on advance booking and cancellations'
      ]
    },
    {
      id: '3',
      name: 'Sunita Kumar',
      businessType: 'Handmade Crafts',
      thumbnailUrl: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=800&h=450&fit=crop&q=80',
      userImageUrl: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=200&h=200&fit=crop&q=80',
      duration: '5:28',
      title: 'From Hobby to Business: Selling Handmade Jewelry',
      journey: 'I started making handmade jewelry and home décor items as a hobby during evenings. When I shared photos on social media, people started asking if they could buy them. Today, my designs are featured in three local boutiques.',
      challenges: 'Finding reliable suppliers for quality materials and pricing my work appropriately were major challenges. I was initially underselling because I didn\'t value my time and skill properly.',
      lessons: 'Value your time and skill. Don\'t undersell your work just to get orders. Build relationships with boutique owners who appreciate handmade items and are willing to pay fair prices.',
      tips: [
        'Document your creative process - people love seeing behind the scenes',
        'Network with other craft makers to share supplier information',
        'Participate in local markets and fairs for visibility',
        'Create signature pieces that people recognize as yours',
        'Price your work including materials, time, and skill'
      ]
    }
  ];
  
  const story = stories.find(s => s.id === id) || stories[0];
  
  return (
    <div className="min-h-screen bg-[#F5F1E8] pb-20 max-w-[390px] mx-auto">
      {/* Header */}
      <div className="bg-[#FAF8F2] px-6 pt-12 pb-4 sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 hover:bg-[#EBE6D8] rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5 text-[#1A1A1A]" />
          </button>
          <h1 className="text-[#2D2D2D]">Success Story</h1>
        </div>
      </div>

      {/* Video Player Section - YouTube Style with Real Thumbnail */}
      <div className="mb-4">
        <div className="relative w-full bg-[#2D2D2D] overflow-hidden" style={{ aspectRatio: '16/9' }}>
          {/* Real Thumbnail Image */}
          <img
            src={story.thumbnailUrl}
            alt={story.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.backgroundColor = '#5A8B6F';
              target.style.opacity = '0.3';
            }}
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

          {/* Play Icon - In a real app, this would trigger video playback */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-black/70 hover:bg-[#5A8B6F] rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-all">
              <Play className="w-10 h-10 text-white fill-white ml-1" />
            </div>
          </div>

          {/* Duration badge */}
          <div className="absolute top-4 right-4 bg-black/80 px-2 py-1 rounded text-white text-[12px] font-semibold">
            {story.duration}
          </div>

          {/* Title overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4">
            <h2 className="text-white font-semibold text-[16px] leading-snug mb-2">
              {story.title}
            </h2>
          </div>

          {/* Profile Badge */}
          <div className="absolute bottom-4 left-4 flex items-center gap-3 bg-[#FAF8F2]/95 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg">
            <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#5A8B6F]/20">
              <Avatar
                variant="real"
                imageUrl={story.userImageUrl}
                alt={story.name}
                className="w-full h-full"
              />
            </div>
            <div>
              <p className="text-[14px] font-semibold text-[#1A1A1A]">{story.name}</p>
              <p className="text-[13px] text-[#6B6B6B]">{story.businessType}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Story Content */}
      <div className="px-6 space-y-4">
        {/* Journey */}
        <Card>
          <h3 className="font-semibold text-[#1A1A1A] mb-3 text-[16px]">My Journey</h3>
          <p className="text-[#1A1A1A] text-[14px] leading-relaxed">{story.journey}</p>
        </Card>
        
        {/* Challenges */}
        <Card>
          <h3 className="font-semibold text-[#1A1A1A] mb-3 text-[16px]">Challenges I Faced</h3>
          <p className="text-[#1A1A1A] text-[14px] leading-relaxed">{story.challenges}</p>
        </Card>
        
        {/* Lessons */}
        <Card>
          <h3 className="font-semibold text-[#1A1A1A] mb-3 text-[16px]">Lessons Learned</h3>
          <p className="text-[#1A1A1A] text-[14px] leading-relaxed">{story.lessons}</p>
        </Card>
        
        {/* Tips */}
        <Card>
          <h3 className="font-semibold text-[#1A1A1A] mb-3 text-[16px]">Tips for Other Homemakers</h3>
          <div className="space-y-3">
            {story.tips.map((tip, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-[#5A8B6F] text-[#FAF8F2] flex items-center justify-center flex-shrink-0 text-[13px] font-semibold">
                  {i + 1}
                </div>
                <p className="text-[#1A1A1A] text-[14px] leading-relaxed flex-1">{tip}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
