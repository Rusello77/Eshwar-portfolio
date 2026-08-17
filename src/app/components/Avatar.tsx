import { BeeAvatar } from './BeeAvatar';

interface AvatarProps {
  variant?: 'bee' | 'me' | 'real';
  imageUrl?: string;
  className?: string;
  alt?: string;
}

export function Avatar({ variant = 'bee', imageUrl, className = '', alt = 'Avatar' }: AvatarProps) {
  // Real photo - for connected users, stories, and user's own profile
  if (variant === 'real' && imageUrl) {
    return (
      <img
        src={imageUrl}
        alt={alt}
        className={`${className} object-cover`}
      />
    );
  }

  // User's own avatar with real photo - used in radar center and homepage
  if (variant === 'me' && imageUrl) {
    return (
      <img
        src={imageUrl}
        alt={alt}
        className={`${className} object-cover`}
      />
    );
  }

  // Default: Juno 2D bee icon for privacy
  // Used for non-connected users in radar, lists, discussions
  return <BeeAvatar className={className} />;
}
