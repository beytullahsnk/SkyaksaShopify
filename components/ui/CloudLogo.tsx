export default function CloudLogo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 120 80" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Nuage avec dégradé violet */}
      <defs>
        <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9333ea" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      
      {/* Forme du nuage */}
      <path
        d="M25 50C25 42 30 35 37.5 35C40 25 50 18 60 18C70 18 80 25 82.5 35C90 35 95 42 95 50C95 58 90 65 82.5 65H37.5C30 65 25 58 25 50Z"
        fill="url(#cloudGradient)"
        stroke="white"
        strokeWidth="3"
      />
    </svg>
  )
}

