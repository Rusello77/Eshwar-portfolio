import { useNavigate } from 'react-router';
import { Button } from '../components/Button';
import { ToolBeeMascot } from '../components/ToolBeeMascot';
import { Phone, MessageCircle } from 'lucide-react';

export function WelcomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5F1E8] flex flex-col items-center justify-center px-6 max-w-[390px] mx-auto relative overflow-hidden">
      {/* Subtle botanical accent in corner */}
      <div className="absolute top-8 right-8 w-24 h-24 opacity-10">
        <svg viewBox="0 0 100 100" fill="none">
          <path d="M50 20 Q35 30 30 45 Q40 40 50 45 Q60 40 70 45 Q65 30 50 20Z" fill="#5A8B6F"/>
          <path d="M50 45 L50 80" stroke="#5A8B6F" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="w-full max-w-[280px] h-[280px] mb-6">
        <ToolBeeMascot />
      </div>

      <h1 className="text-center mb-2 text-[#2D2D2D]">Welcome to Juno!</h1>

      <p className="text-center text-[#6B6B6B] mb-2 max-w-[280px] leading-relaxed">
        Your Tool for Life. Let's buzz about your home business.
      </p>

      <p className="text-center text-[#6B6B6B] text-sm mb-8 max-w-[300px] leading-relaxed">
        Connect with other homemaker entrepreneurs, share ideas, and construct your network.
      </p>

      <div className="w-full max-w-[310px] space-y-3">
        <Button
          variant="primary"
          className="w-full flex items-center justify-center gap-2 shadow-md"
          onClick={() => navigate('/otp')}
        >
          <Phone className="w-5 h-5" />
          Continue with Phone Number
        </Button>

        <Button
          variant="secondary"
          className="w-full flex items-center justify-center gap-2"
          onClick={() => navigate('/otp')}
        >
          <MessageCircle className="w-5 h-5" />
          Continue with WhatsApp
        </Button>
      </div>
    </div>
  );
}
