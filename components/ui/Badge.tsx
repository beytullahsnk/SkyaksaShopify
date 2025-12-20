interface BadgeProps {
  children: React.ReactNode
  variant?: 'purple' | 'green'
  className?: string
}

export default function Badge({ children, variant = 'purple', className = '' }: BadgeProps) {
  const variants = {
    purple: 'bg-skyaksa text-white',
    green: 'bg-shopify-fluo text-black',
  }

  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm ${variants[variant]} ${className}`}>
      {children}
    </div>
  )
}

