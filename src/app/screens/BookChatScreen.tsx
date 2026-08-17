import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Button } from '../components/Button';
import { Avatar } from '../components/Avatar';
import { SuccessBottomSheet } from '../components/SuccessBottomSheet';

export function BookChatScreen() {
  const navigate = useNavigate();
  const { mentorId } = useParams();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [topic, setTopic] = useState('');
  const [notes, setNotes] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  // Mock mentor data - in real app, fetch by mentorId
  const mentor = {
    id: mentorId,
    name: 'Rashmi Kulkarni',
    experience: '10 years baking experience',
    avatar: 'woman4' as const,
    specialty: 'Baking & Pastry',
    sessionDuration: '30 minutes',
    sessionFee: 'Free'
  };

  const availableTimeSlots = [
    '10:00 AM',
    '11:00 AM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM'
  ];

  const topics = [
    'Getting Started',
    'Pricing Strategy',
    'Marketing Tips',
    'Product Quality',
    'Scaling Business',
    'Customer Management',
    'General Guidance'
  ];

  const handleBook = () => {
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
        <h1 className="mb-1">Book a Chat Session</h1>
        <p className="text-[#666666] text-[14px]">Schedule a one-on-one guidance session</p>
      </div>

      {/* Mentor Info */}
      <div className="px-6 pt-6">
        <div className="bg-white rounded-2xl p-4 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 shadow-sm">
              <Avatar variant={mentor.avatar} className="w-full h-full" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-[#1A1A1A] mb-0.5">{mentor.name}</h3>
              <p className="text-[12px] text-[#666666] mb-1">{mentor.experience}</p>
              <p className="text-[11px] text-[#5A8B6F] font-medium">{mentor.specialty}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-3 border-t border-[#E0E0E0]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#666666]" />
              <p className="text-[12px] text-[#666666]">{mentor.sessionDuration}</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-[12px] font-semibold text-[#5A8B6F]">{mentor.sessionFee}</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {/* Date Selection */}
          <div>
            <label className="block mb-2 text-[14px] text-[#1A1A1A]">Select Date</label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#999999]" />
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full pl-12 pr-4 py-3 rounded-[10px] border border-[#E0E0E0] focus:border-[#5A8B6F] focus:outline-none text-[14px]"
              />
            </div>
          </div>

          {/* Time Slot Selection */}
          {selectedDate && (
            <div>
              <label className="block mb-3 text-[14px] text-[#1A1A1A]">Available Time Slots</label>
              <div className="grid grid-cols-3 gap-2">
                {availableTimeSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedTimeSlot(slot)}
                    className={`py-3 px-2 rounded-[10px] text-[13px] font-medium transition-all ${
                      selectedTimeSlot === slot
                        ? 'bg-[#5A8B6F] text-white'
                        : 'bg-white text-[#666666] border border-[#E0E0E0] hover:border-[#5A8B6F]'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Topic */}
          <div>
            <label className="block mb-2 text-[14px] text-[#1A1A1A]">Discussion Topic</label>
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full px-4 py-3 rounded-[10px] border border-[#E0E0E0] focus:border-[#5A8B6F] focus:outline-none text-[14px]"
            >
              <option value="">Select a topic</option>
              {topics.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Notes */}
          <div>
            <label className="block mb-2 text-[14px] text-[#1A1A1A]">
              Additional Notes (optional)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Share what you'd like to discuss in this session..."
              className="w-full px-4 py-3 rounded-[10px] border border-[#E0E0E0] focus:border-[#5A8B6F] focus:outline-none resize-none"
              rows={3}
            />
          </div>

          {/* Info Card */}
          <div className="bg-[#FFF8EC] rounded-2xl p-4 border border-[#FFB85C]/30">
            <p className="text-[12px] text-[#1A1A1A] mb-2 font-medium">
              📅 What to expect:
            </p>
            <ul className="text-[11px] text-[#666666] space-y-1 list-disc list-inside">
              <li>You'll receive a confirmation via notification</li>
              <li>The mentor will send a WhatsApp link before the session</li>
              <li>You can reschedule up to 2 hours before</li>
            </ul>
          </div>

          {/* CTA */}
          <Button
            variant="primary"
            onClick={handleBook}
            disabled={!selectedDate || !selectedTimeSlot || !topic}
            className="w-full"
          >
            Confirm Booking
          </Button>
        </div>
      </div>

      <div className="h-24" />

      <SuccessBottomSheet
        isOpen={showSuccess}
        onClose={handleSuccessClose}
        message="Chat session booked successfully 💚"
        actionLabel="Go to Home"
        onAction={() => navigate('/home')}
      />
    </div>
  );
}
