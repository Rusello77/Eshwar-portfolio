import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Package, DollarSign, Users, Star } from 'lucide-react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { SuccessBottomSheet } from '../components/SuccessBottomSheet';

export function UpdateMilestoneScreen() {
  const navigate = useNavigate();
  const [milestoneType, setMilestoneType] = useState('');
  const [customMilestone, setCustomMilestone] = useState('');
  const [value, setValue] = useState('');
  const [note, setNote] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const milestoneTypes = [
    { id: 'orders', label: 'Orders completed', icon: Package, color: '#5A8B6F' },
    { id: 'revenue', label: 'Revenue earned', icon: DollarSign, color: '#FFB85C' },
    { id: 'customers', label: 'Customers served', icon: Users, color: '#7AA98A' },
    { id: 'other', label: 'Something else', icon: Star, color: '#9B8AF5' }
  ];

  const handleUpdate = () => {
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
        <h1 className="mb-1">Update a milestone</h1>
        <p className="text-[#666666] text-[14px] mb-3">Celebrate your progress with the community</p>

        {/* Level Indicator */}
        <div className="inline-flex items-center px-3 py-1 bg-[#E8F0EC] rounded-full">
          <span className="text-[12px] text-[#5A8B6F] font-medium">Intermediary</span>
        </div>
      </div>

      {/* Form */}
      <div className="p-6 space-y-6">
        {/* Milestone Type */}
        <div>
          <label className="block mb-3 text-[14px] text-[#1A1A1A]">Milestone type</label>
          <div className="space-y-3">
            {milestoneTypes.map((type) => {
              const Icon = type.icon;
              const isSelected = milestoneType === type.id;
              return (
                <button
                  key={type.id}
                  onClick={() => setMilestoneType(type.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all border-2 ${
                    isSelected
                      ? 'border-[#5A8B6F] bg-[#F8FCF9]'
                      : 'border-transparent bg-white hover:bg-[#F8FCF9]'
                  }`}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${type.color}20` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: type.color }} />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-[15px] font-semibold text-[#1A1A1A]">
                      {type.label}
                    </h3>
                  </div>
                  {isSelected && (
                    <div className="w-6 h-6 bg-[#5A8B6F] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Custom Milestone Input */}
        {milestoneType === 'other' && (
          <div>
            <Input
              label="What milestone did you achieve?"
              placeholder="e.g., Launched my website, Got featured, etc."
              value={customMilestone}
              onChange={(e) => setCustomMilestone(e.target.value)}
            />
          </div>
        )}

        {/* Value Input */}
        {milestoneType && milestoneType !== 'other' && (
          <div>
            <Input
              label={
                milestoneType === 'revenue'
                  ? 'Amount (₹)'
                  : milestoneType === 'orders'
                  ? 'Number of orders'
                  : 'Number of customers'
              }
              type="number"
              placeholder={milestoneType === 'revenue' ? '10000' : '100'}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        )}

        {/* Optional Note */}
        {milestoneType && (
          <div>
            <label className="block mb-2 text-[14px] text-[#1A1A1A]">
              What helped you reach this? (optional)
            </label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Share what made this possible..."
              className="w-full px-4 py-3 rounded-[10px] border border-[#E0E0E0] focus:border-[#5A8B6F] focus:outline-none resize-none"
              rows={4}
            />
          </div>
        )}

        {/* CTA */}
        <Button
          variant="primary"
          onClick={handleUpdate}
          disabled={
            !milestoneType ||
            (milestoneType === 'other' ? !customMilestone : !value)
          }
          className="w-full"
        >
          Update Milestone
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
