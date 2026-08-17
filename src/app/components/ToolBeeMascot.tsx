interface ToolBeeMascotProps {
  className?: string;
  showMessage?: boolean;
  message?: string;
}

export function ToolBeeMascot({ className = '', showMessage = false, message }: ToolBeeMascotProps) {
  return (
    <div className={`relative ${className}`}>
      {/* 3D-style Tool-Bee illustration */}
      <svg
        viewBox="0 0 280 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        role="img"
        aria-label="Juno Tool-Bee Mascot"
      >
        {/* Shadow */}
        <ellipse cx="140" cy="260" rx="80" ry="12" fill="#4A7360" opacity="0.15"/>

        {/* Tool handles at bottom (whisk legs) */}
        <g>
          {/* Left leg */}
          <line x1="115" y1="210" x2="105" y2="245" stroke="#D4A86F" strokeWidth="8" strokeLinecap="round"/>
          <circle cx="105" cy="248" r="6" fill="#D4A86F"/>

          {/* Right leg */}
          <line x1="165" y1="210" x2="175" y2="245" stroke="#D4A86F" strokeWidth="8" strokeLinecap="round"/>
          <circle cx="175" cy="248" r="6" fill="#D4A86F"/>
        </g>

        {/* Main body - 3D effect with gradient simulation */}
        <ellipse cx="140" cy="160" rx="70" ry="75" fill="#5A8B6F"/>
        <ellipse cx="140" cy="160" rx="65" ry="70" fill="#6B9D80"/>
        <ellipse cx="135" cy="155" rx="25" ry="30" fill="#7AA98A" opacity="0.4"/>

        {/* Stripes */}
        <ellipse cx="140" cy="135" rx="55" ry="12" fill="#4A7360" opacity="0.3"/>
        <ellipse cx="140" cy="160" rx="60" ry="14" fill="#4A7360" opacity="0.3"/>
        <ellipse cx="140" cy="185" rx="55" ry="12" fill="#4A7360" opacity="0.3"/>

        {/* Head */}
        <circle cx="140" cy="90" r="55" fill="#5A8B6F"/>
        <circle cx="140" cy="90" r="50" fill="#6B9D80"/>
        <ellipse cx="130" cy="85" rx="18" ry="22" fill="#7AA98A" opacity="0.4"/>

        {/* Left antenna */}
        <g>
          <path d="M115 50 Q105 30 95 25" stroke="#5A8B6F" strokeWidth="6" strokeLinecap="round" fill="none"/>
          <circle cx="95" cy="23" r="8" fill="#D4A86F"/>
          <circle cx="95" cy="23" r="5" fill="#E8C89A"/>
        </g>

        {/* Right antenna */}
        <g>
          <path d="M165 50 Q175 30 185 25" stroke="#5A8B6F" strokeWidth="6" strokeLinecap="round" fill="none"/>
          <circle cx="185" cy="23" r="8" fill="#D4A86F"/>
          <circle cx="185" cy="23" r="5" fill="#E8C89A"/>
        </g>

        {/* Happy closed eyes */}
        <path d="M115 85 Q120 92 125 85" stroke="#2D2D2D" strokeWidth="5" strokeLinecap="round" fill="none"/>
        <path d="M155 85 Q160 92 165 85" stroke="#2D2D2D" strokeWidth="5" strokeLinecap="round" fill="none"/>

        {/* Smile */}
        <path d="M115 105 Q140 118 165 105" stroke="#2D2D2D" strokeWidth="4" strokeLinecap="round" fill="none"/>

        {/* Blush marks */}
        <ellipse cx="100" cy="100" rx="8" ry="6" fill="#E8C89A" opacity="0.5"/>
        <ellipse cx="180" cy="100" rx="8" ry="6" fill="#E8C89A" opacity="0.5"/>

        {/* Wings - transparent with soft edges */}
        <g opacity="0.6">
          <ellipse cx="75" cy="130" rx="20" ry="40" fill="#E8F0EC" transform="rotate(-30 75 130)"/>
          <ellipse cx="75" cy="130" rx="15" ry="35" fill="white" opacity="0.6" transform="rotate(-30 75 130)"/>

          <ellipse cx="205" cy="130" rx="20" ry="40" fill="#E8F0EC" transform="rotate(30 205 130)"/>
          <ellipse cx="205" cy="130" rx="15" ry="35" fill="white" opacity="0.6" transform="rotate(30 205 130)"/>
        </g>

        {/* Wing details - subtle lines */}
        <path d="M70 115 Q75 130 72 145" stroke="#5A8B6F" strokeWidth="1.5" opacity="0.3" fill="none"/>
        <path d="M210 115 Q205 130 208 145" stroke="#5A8B6F" strokeWidth="1.5" opacity="0.3" fill="none"/>
      </svg>

      {/* Optional message bubble */}
      {showMessage && message && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#FAF8F2] px-5 py-3 rounded-2xl shadow-md border-2 border-[#5A8B6F] whitespace-nowrap">
          <p className="text-sm font-medium text-[#2D2D2D]">{message}</p>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FAF8F2] border-b-2 border-r-2 border-[#5A8B6F] rotate-45" />
        </div>
      )}
    </div>
  );
}
