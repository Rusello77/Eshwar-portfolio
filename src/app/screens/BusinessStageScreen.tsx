import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

// Simple bee icon component
function SimpleBeeIcon({ variant, isSelected }: { variant: 'seed' | 'builder' | 'mentor'; isSelected: boolean }) {
  const color = isSelected ? '#ffffff' : '#5A8B6F';

  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
      {/* Bee Body */}
      <circle cx="50" cy="52" r="26" fill={color}/>

      {/* Left Antenna */}
      <line x1="38" y1="30" x2="32" y2="20" stroke={color} strokeWidth="3" strokeLinecap="round"/>
      <circle cx="32" cy="18" r="3" fill={color}/>

      {/* Right Antenna */}
      <line x1="62" y1="30" x2="68" y2="20" stroke={color} strokeWidth="3" strokeLinecap="round"/>
      <circle cx="68" cy="18" r="3" fill={color}/>

      {/* Happy Eyes */}
      <path d="M40 48 Q43 51 46 48" stroke={isSelected ? '#5A8B6F' : '#ffffff'} strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M54 48 Q57 51 60 48" stroke={isSelected ? '#5A8B6F' : '#ffffff'} strokeWidth="2.5" strokeLinecap="round" fill="none"/>

      {/* Smile */}
      <path d="M40 60 Q50 66 60 60" stroke={isSelected ? '#5A8B6F' : '#ffffff'} strokeWidth="2" strokeLinecap="round" fill="none"/>

      {/* Subtle variant differences - barely visible stripes/details */}
      {variant === 'builder' && (
        <ellipse cx="50" cy="62" rx="18" ry="4" fill={isSelected ? '#5A8B6F' : '#ffffff'} opacity="0.3"/>
      )}
      {variant === 'mentor' && (
        <>
          <ellipse cx="50" cy="58" rx="16" ry="3" fill={isSelected ? '#5A8B6F' : '#ffffff'} opacity="0.25"/>
          <ellipse cx="50" cy="64" rx="18" ry="4" fill={isSelected ? '#5A8B6F' : '#ffffff'} opacity="0.25"/>
        </>
      )}

      {/* Wings - very subtle */}
      <ellipse cx="28" cy="48" rx="6" ry="12" fill={color} opacity="0.4" transform="rotate(-20 28 48)"/>
      <ellipse cx="72" cy="48" rx="6" ry="12" fill={color} opacity="0.4" transform="rotate(20 72 48)"/>
    </svg>
  );
}

export function BusinessStageScreen() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string>('');

  const stages = [
    {
      id: 'seed',
      title: 'Seed Bee',
      subtext: '0–2 years',
      description: 'I\'m just getting started',
      variant: 'seed' as const
    },
    {
      id: 'builder',
      title: 'Builder Bee',
      subtext: '2–5 years',
      description: 'I\'m growing my business',
      variant: 'builder' as const
    },
    {
      id: 'mentor',
      title: 'Mentor Bee',
      subtext: '5+ years',
      description: 'I have strong experience',
      variant: 'mentor' as const
    },
  ];

  return (
    <div className="min-h-screen bg-white px-6 pt-12 pb-24 max-w-[390px] mx-auto">
      <h1 className="text-center mb-2">How long have you been running your business?</h1>
      <p className="text-center text-[#666666] mb-8">This helps us personalize your experience</p>

      <div className="space-y-4 mb-8">
        {stages.map((stage) => {
          const isSelected = selected === stage.id;

          return (
            <Card
              key={stage.id}
              className={`cursor-pointer transition-all ${
                isSelected ? 'border-2 border-[#5A8B6F] bg-[#E8F0EC]' : ''
              }`}
              onClick={() => setSelected(stage.id)}
            >
              <div className="flex items-start gap-4 py-2">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${
                  isSelected ? 'bg-[#5A8B6F]' : 'bg-[#E8F0EC]'
                }`}>
                  <SimpleBeeIcon variant={stage.variant} isSelected={isSelected} />
                </div>
                <div className="flex-1">
                  <h3 className={`mb-1 ${isSelected ? 'text-[#5A8B6F]' : 'text-[#1A1A1A]'}`}>
                    {stage.title}
                  </h3>
                  <p className="text-[12px] font-medium text-[#666666] mb-1">{stage.subtext}</p>
                  <p className="text-[14px] text-[#666666]">{stage.description}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="w-full max-w-[310px] mx-auto">
        <Button
          variant="primary"
          className="w-full"
          disabled={!selected}
          onClick={() => navigate('/location-setup')}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
