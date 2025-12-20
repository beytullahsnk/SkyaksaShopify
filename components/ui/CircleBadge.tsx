interface CircleBadgeProps {
  text: string
  className?: string
}

export default function CircleBadge({ text, className = '' }: CircleBadgeProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Circle with glow */}
      <div className="w-32 h-32 rounded-full bg-skyaksa flex items-center justify-center shadow-glow-purple">
        <div className="text-center">
          <div className="text-white font-bold text-sm uppercase tracking-wider whitespace-pre-line">
            {text}
          </div>
        </div>
      </div>
      
      {/* Optional rotating border */}
      <div className="absolute inset-0 rounded-full border-4 border-shopify-fluo opacity-20 animate-spin" style={{ animationDuration: '10s' }}></div>
    </div>
  )
}

