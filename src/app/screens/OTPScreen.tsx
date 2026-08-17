import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../components/Button';

export function OTPScreen() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '']);
  
  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Auto-focus next input
      if (value && index < 3) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };
  
  return (
    <div className="min-h-screen bg-[#F5F1E8] flex flex-col items-center justify-center px-6 max-w-[390px] mx-auto">
      <h1 className="text-center mb-2 text-[#2D2D2D]">Enter Verification Code</h1>

      <p className="text-center text-[#6B6B6B] mb-8">
        We've sent a code to your phone
      </p>

      <div className="flex gap-4 mb-8">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-${index}`}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleOtpChange(index, e.target.value)}
            className="w-14 h-14 text-center text-[#2D2D2D] bg-[#FAF8F2] border-2 border-[#D8D3C8] rounded-[10px] focus:border-[#5A8B6F] focus:outline-none font-semibold text-lg"
          />
        ))}
      </div>

      <div className="w-full max-w-[310px] flex flex-col items-center">
        <Button
          variant="primary"
          className="w-full mb-4"
          onClick={() => navigate('/choose-category')}
        >
          Verify
        </Button>

        <button className="text-[#5A8B6F] text-[14px] font-semibold hover:text-[#4A7360] transition-colors">
          Resend OTP
        </button>
      </div>
    </div>
  );
}
