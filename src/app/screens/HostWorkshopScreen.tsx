import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Info } from 'lucide-react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { SuccessBottomSheet } from '../components/SuccessBottomSheet';

export function HostWorkshopScreen() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [topic, setTopic] = useState('');
  const [overview, setOverview] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  // In a real app, this would come from user context/auth
  // Options: 'beginner', 'intermediary', 'mentor'
  const userLevel = 'intermediary';

  const handleSubmit = () => {
    setShowSuccess(true);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    navigate('/home');
  };

  const getLevelConfig = () => {
    switch (userLevel) {
      case 'beginner':
        return {
          ctaLabel: 'Submit for Review',
          showInfoBanner: true,
          showMentorNote: false
        };
      case 'mentor':
        return {
          ctaLabel: 'Host Workshop',
          showInfoBanner: false,
          showMentorNote: true
        };
      default:
        return {
          ctaLabel: 'Host Workshop',
          showInfoBanner: false,
          showMentorNote: false
        };
    }
  };

  const config = getLevelConfig();

  const getLevelLabel = () => {
    switch (userLevel) {
      case 'beginner':
        return 'Beginner';
      case 'mentor':
        return 'Mentor';
      default:
        return 'Intermediary';
    }
  };

  const getLevelColor = () => {
    switch (userLevel) {
      case 'beginner':
        return '#FFB85C';
      case 'mentor':
        return '#9B8AF5';
      default:
        return '#5A8B6F';
    }
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
        <h1 className="mb-1">Host a workshop</h1>
        <p className="text-[#666666] text-[14px] mb-3">Teach others what you know best</p>

        {/* Level Indicator */}
        <div
          className="inline-flex items-center px-3 py-1 rounded-full"
          style={{ backgroundColor: `${getLevelColor()}15` }}
        >
          <span className="text-[12px] font-medium" style={{ color: getLevelColor() }}>
            {getLevelLabel()}
          </span>
        </div>
      </div>

      {/* Form */}
      <div className="p-6 space-y-6">
        {/* Info Banner for Beginners */}
        {config.showInfoBanner && (
          <div className="bg-[#FFF8EC] border border-[#FFB85C] rounded-2xl p-4 flex items-start gap-3">
            <Info className="w-5 h-5 text-[#FFB85C] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-[14px] text-[#1A1A1A] mb-1 font-medium">
                You can host workshops after approval
              </p>
              <p className="text-[13px] text-[#666666]">
                Submit your workshop idea and our team will review it
              </p>
            </div>
          </div>
        )}

        {/* Workshop Title */}
        <div>
          <Input
            label="Workshop title"
            placeholder="Introduction to home baking basics"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Topic */}
        <div>
          <Input
            label="Topic"
            placeholder="Baking, Marketing, Packaging, etc."
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>

        {/* Overview */}
        <div>
          <label className="block mb-2 text-[14px] text-[#1A1A1A]">Overview</label>
          <textarea
            value={overview}
            onChange={(e) => setOverview(e.target.value)}
            placeholder="What will participants learn in this workshop..."
            className="w-full px-4 py-3 rounded-[10px] border border-[#E0E0E0] focus:border-[#5A8B6F] focus:outline-none resize-none"
            rows={5}
          />
        </div>

        {/* Date and Time */}
        <div className="bg-white rounded-2xl p-4 space-y-4">
          <h3 className="text-[15px] font-semibold text-[#1A1A1A]">When</h3>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block mb-2 text-[14px] text-[#1A1A1A]">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-3 rounded-[10px] border border-[#E0E0E0] focus:border-[#5A8B6F] focus:outline-none text-[14px]"
              />
            </div>
            <div>
              <label className="block mb-2 text-[14px] text-[#1A1A1A]">Time</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-4 py-3 rounded-[10px] border border-[#E0E0E0] focus:border-[#5A8B6F] focus:outline-none text-[14px]"
              />
            </div>
          </div>
        </div>

        {/* Response Time Note for Beginners */}
        {config.showInfoBanner && (
          <div className="bg-white rounded-2xl p-4 border border-[#E0E0E0]">
            <p className="text-[13px] text-[#666666] text-center">
              Response within 48 hours
            </p>
          </div>
        )}

        {/* Mentor Note */}
        {config.showMentorNote && (
          <div className="bg-[#F8F7FE] rounded-2xl p-4 border border-[#9B8AF5]">
            <p className="text-[13px] text-[#666666] text-center">
              You can also review workshop requests from beginners
            </p>
          </div>
        )}

        {/* CTA */}
        <Button
          variant="primary"
          onClick={handleSubmit}
          className="w-full"
        >
          {config.ctaLabel}
        </Button>
      </div>

      <div className="h-24" />

      <SuccessBottomSheet
        isOpen={showSuccess}
        onClose={handleSuccessClose}
        message={
          userLevel === 'beginner'
            ? 'Submitted for review 💚'
            : 'Shared with the community 💚'
        }
        actionLabel="View in community"
        onAction={() => navigate('/home')}
      />
    </div>
  );
}
