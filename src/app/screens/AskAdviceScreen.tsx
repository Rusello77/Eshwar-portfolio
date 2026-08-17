import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/Button';
import { Avatar } from '../components/Avatar';
import { SuccessBottomSheet } from '../components/SuccessBottomSheet';

export function AskAdviceScreen() {
  const navigate = useNavigate();
  const { mentorId } = useParams();
  const [category, setCategory] = useState('');
  const [question, setQuestion] = useState('');
  const [context, setContext] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  // Mock mentor data - in real app, fetch by mentorId
  const mentor = {
    id: mentorId,
    name: 'Rashmi Kulkarni',
    experience: '10 years baking experience',
    avatar: 'woman4' as const,
    specialty: 'Baking & Pastry',
    responseTime: 'Usually responds in 2 hours'
  };

  const categories = [
    'Pricing & Costing',
    'Marketing & Sales',
    'Product Development',
    'Business Growth',
    'Legal & Licensing',
    'Packaging & Branding',
    'Customer Relations',
    'Other'
  ];

  const handleSend = () => {
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
        <h1 className="mb-1">Ask for Advice</h1>
        <p className="text-[#666666] text-[14px]">Get guidance from an experienced mentor</p>
      </div>

      {/* Mentor Info */}
      <div className="px-6 pt-6">
        <div className="bg-white rounded-2xl p-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 shadow-sm">
              <Avatar variant={mentor.avatar} className="w-full h-full" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-[#1A1A1A] mb-0.5">{mentor.name}</h3>
              <p className="text-[12px] text-[#666666] mb-1">{mentor.experience}</p>
              <p className="text-[11px] text-[#999999]">{mentor.responseTime}</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {/* Category */}
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

          {/* Question */}
          <div>
            <label className="block mb-2 text-[14px] text-[#1A1A1A]">Your Question</label>
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="What would you like to know?"
              className="w-full px-4 py-3 rounded-[10px] border border-[#E0E0E0] focus:border-[#5A8B6F] focus:outline-none resize-none"
              rows={4}
            />
          </div>

          {/* Context */}
          <div>
            <label className="block mb-2 text-[14px] text-[#1A1A1A]">
              Background (optional)
            </label>
            <textarea
              value={context}
              onChange={(e) => setContext(e.target.value)}
              placeholder="Share relevant details to help the mentor understand better..."
              className="w-full px-4 py-3 rounded-[10px] border border-[#E0E0E0] focus:border-[#5A8B6F] focus:outline-none resize-none"
              rows={3}
            />
          </div>

          {/* Info Card */}
          <div className="bg-[#E8F0EC] rounded-2xl p-4 border border-[#5A8B6F]/20">
            <p className="text-[12px] text-[#1A1A1A] mb-2 font-medium">
              💡 Tips for getting better advice:
            </p>
            <ul className="text-[11px] text-[#666666] space-y-1 list-disc list-inside">
              <li>Be specific about your situation</li>
              <li>Share what you've already tried</li>
              <li>Mention your business stage and goals</li>
            </ul>
          </div>

          {/* CTA */}
          <Button
            variant="primary"
            onClick={handleSend}
            disabled={!category || !question}
            className="w-full"
          >
            Send Question
          </Button>
        </div>
      </div>

      <div className="h-24" />

      <SuccessBottomSheet
        isOpen={showSuccess}
        onClose={handleSuccessClose}
        message="Question sent to mentor 💚"
        actionLabel="Go to Home"
        onAction={() => navigate('/home')}
      />
    </div>
  );
}
