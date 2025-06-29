interface LogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export default function Logo({ className = "w-12 h-12", size = 'medium' }: LogoProps) {
  const sizeClasses = {
    small: "w-8 h-8",
    medium: "w-12 h-12", 
    large: "w-24 h-24"
  };

  const finalClassName = className || sizeClasses[size];

  return (
    <svg 
      className={finalClassName}
      viewBox="0 0 80 80" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background circle with gradient */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#FBBF24" />
        </linearGradient>
        <linearGradient id="whiteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f8fafc" />
        </linearGradient>
      </defs>
      
      {/* Main background circle */}
      <circle cx="40" cy="40" r="38" fill="url(#logoGradient)" stroke="#FBBF24" strokeWidth="2" />
      
      {/* Traditional pot/vessel shape */}
      <path 
        d="M25 35 C25 30, 30 28, 40 28 C50 28, 55 30, 55 35 L55 50 C55 55, 50 58, 40 58 C30 58, 25 55, 25 50 Z" 
        fill="url(#whiteGradient)" 
        opacity="0.95"
        stroke="#F59E0B"
        strokeWidth="1"
      />
      
      {/* Pot rim/handle details */}
      <ellipse cx="40" cy="30" rx="13" ry="3" fill="url(#accentGradient)" />
      <rect x="22" y="33" width="4" height="8" rx="2" fill="url(#accentGradient)" />
      <rect x="54" y="33" width="4" height="8" rx="2" fill="url(#accentGradient)" />
      
      {/* Traditional decorative patterns */}
      <circle cx="40" cy="40" r="2.5" fill="url(#accentGradient)" />
      <path d="M32 44 Q40 41 48 44" stroke="url(#accentGradient)" strokeWidth="1.5" fill="none" />
      <path d="M30 48 Q40 45 50 48" stroke="url(#accentGradient)" strokeWidth="1.5" fill="none" />
      
      {/* Letter 'A' stylized - representing Annraaj */}
      <path 
        d="M35 52 L40 38 L45 52 M37 47 L43 47" 
        stroke="#B45309" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        fill="none"
      />
      
      {/* Decorative spice/grain dots around the circle */}
      <circle cx="40" cy="12" r="1.5" fill="url(#accentGradient)" />
      <circle cx="40" cy="68" r="1.5" fill="url(#accentGradient)" />
      <circle cx="12" cy="40" r="1.5" fill="url(#accentGradient)" />
      <circle cx="68" cy="40" r="1.5" fill="url(#accentGradient)" />
      
      {/* Additional traditional elements */}
      <circle cx="20" cy="20" r="1" fill="url(#accentGradient)" opacity="0.7" />
      <circle cx="60" cy="20" r="1" fill="url(#accentGradient)" opacity="0.7" />
      <circle cx="20" cy="60" r="1" fill="url(#accentGradient)" opacity="0.7" />
      <circle cx="60" cy="60" r="1" fill="url(#accentGradient)" opacity="0.7" />
    </svg>
  );
}