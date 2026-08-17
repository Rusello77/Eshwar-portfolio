interface BeeAvatarProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function BeeAvatar({ className = '', size = 'md' }: BeeAvatarProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Juno Bee Avatar"
    >
      {/* Background Circle */}
      <circle cx="50" cy="50" r="50" fill="#E8F0EC"/>

      {/* Bee Body - Main Circle */}
      <circle cx="50" cy="52" r="28" fill="#5A8B6F"/>

      {/* Left Antenna */}
      <g>
        <line x1="38" y1="28" x2="32" y2="18" stroke="#5A8B6F" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="32" cy="16" r="4" fill="#D4A86F"/>
      </g>

      {/* Right Antenna */}
      <g>
        <line x1="62" y1="28" x2="68" y2="18" stroke="#5A8B6F" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="68" cy="16" r="4" fill="#D4A86F"/>
      </g>

      {/* Happy Eyes */}
      <path d="M38 48 Q42 52 46 48" stroke="#2D2D2D" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <path d="M54 48 Q58 52 62 48" stroke="#2D2D2D" strokeWidth="3" strokeLinecap="round" fill="none"/>

      {/* Smile */}
      <path d="M38 60 Q50 68 62 60" stroke="#2D2D2D" strokeWidth="2.5" strokeLinecap="round" fill="none"/>

      {/* Stripes on body */}
      <ellipse cx="50" cy="64" rx="20" ry="6" fill="#4A7360" opacity="0.3"/>
      <ellipse cx="50" cy="56" rx="18" ry="5" fill="#4A7360" opacity="0.2"/>

      {/* Wings - simplified */}
      <ellipse cx="28" cy="45" rx="8" ry="14" fill="#7AA98A" opacity="0.6" transform="rotate(-25 28 45)"/>
      <ellipse cx="72" cy="45" rx="8" ry="14" fill="#7AA98A" opacity="0.6" transform="rotate(25 72 45)"/>
    </svg>
  );
}
