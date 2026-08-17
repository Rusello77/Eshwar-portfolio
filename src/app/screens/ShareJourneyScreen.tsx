import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Upload } from 'lucide-react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { SuccessBottomSheet } from '../components/SuccessBottomSheet';

export function ShareJourneyScreen() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [whatYouDid, setWhatYouDid] = useState('');
  const [whatWorked, setWhatWorked] = useState('');
  const [tips, setTips] = useState('');
  const [category, setCategory] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const categories = [
    'Food & Beverages',
    'Fashion & Accessories',
    'Beauty & Wellness',
    'Arts & Crafts',
    'Home Decor',
    'Education & Tutoring',
    'Other'
  ];

  const handleShare = () => {
    setShowSuccess(true);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] max-w-[390px] mx-auto">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 sticky top-0 z-10">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 p-2 -ml-2 hover:bg-[#F5F5F5] rounded-full transition-colors inline-flex"
        >
          <ArrowLeft className="w-5 h-5 text-[#1A1A1A]" />
        </button>
        <h1 className="mb-1">Share your journey</h1>
        <p className="text-[#666666] text-[14px] mb-3">Tell others what worked for you</p>

        {/* Level Indicator */}
        <div className="inline-flex items-center px-3 py-1 bg-[#E8F0EC] rounded-full">
          <span className="text-[12px] text-[#5A8B6F] font-medium">Intermediary</span>
        </div>
      </div>

      {/* Form */}
      <div className="p-6 space-y-6">
        {/* Title */}
        <div>
          <Input
            label="Title"
            placeholder="How I got my first 10 orders"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Description Section */}
        <div className="bg-white rounded-2xl p-4 space-y-4">
          <h3 className="text-[15px] font-semibold text-[#1A1A1A]">Share your story</h3>

          <div>
            <label className="block mb-2 text-[14px] text-[#1A1A1A]">Tell us what you did</label>
            <textarea
              value={whatYouDid}
              onChange={(e) => setWhatYouDid(e.target.value)}
              placeholder="Describe the steps you took..."
              className="w-full px-4 py-3 rounded-[10px] border border-[#E0E0E0] focus:border-[#5A8B6F] focus:outline-none resize-none"
              rows={3}
            />
          </div>

          <div>
            <label className="block mb-2 text-[14px] text-[#1A1A1A]">What worked well?</label>
            <textarea
              value={whatWorked}
              onChange={(e) => setWhatWorked(e.target.value)}
              placeholder="Share what brought success..."
              className="w-full px-4 py-3 rounded-[10px] border border-[#E0E0E0] focus:border-[#5A8B6F] focus:outline-none resize-none"
              rows={3}
            />
          </div>

          <div>
            <label className="block mb-2 text-[14px] text-[#1A1A1A]">Any tips for others?</label>
            <textarea
              value={tips}
              onChange={(e) => setTips(e.target.value)}
              placeholder="Your advice to help others..."
              className="w-full px-4 py-3 rounded-[10px] border border-[#E0E0E0] focus:border-[#5A8B6F] focus:outline-none resize-none"
              rows={3}
            />
          </div>
        </div>

        {/* Add Photo */}
        <div>
          <label className="block mb-2 text-[14px] text-[#1A1A1A]">Add photo (optional)</label>
          <button className="w-full p-6 border-2 border-dashed border-[#E0E0E0] rounded-2xl hover:border-[#5A8B6F] transition-colors flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-[#E8F0EC] rounded-full flex items-center justify-center">
              <Upload className="w-6 h-6 text-[#5A8B6F]" />
            </div>
            <span className="text-[14px] text-[#666666]">Upload image</span>
          </button>
        </div>

        {/* Category Selector */}
        <div>
          <label className="block mb-2 text-[14px] text-[#1A1A1A]">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-3 rounded-[10px] border border-[#E0E0E0] focus:border-[#5A8B6F] focus:outline-none text-[14px]"
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* CTA */}
        <Button
          variant="primary"
          onClick={handleShare}
          className="w-full"
        >
          Share
        </Button>
      </div>

      <div className="h-24" />

      <SuccessBottomSheet
        isOpen={showSuccess}
        onClose={handleSuccessClose}
        message="Shared with the community 💚"
        actionLabel="View in community"
        onAction={() => navigate('/home')}
      />
    </div>
  );
}
