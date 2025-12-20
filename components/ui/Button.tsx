import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-dark'
  children: ReactNode
  className?: string
}

export default function Button({ 
  href, 
  onClick, 
  variant = 'primary', 
  children, 
  className = '' 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200'
  
  const variants = {
    primary: 'bg-skyaksa text-white hover:bg-skyaksa-700 shadow-lg shadow-skyaksa/20 hover:shadow-skyaksa/30',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300',
    outline: 'border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white',
    'outline-dark': 'border-2 border-white text-white hover:bg-white hover:text-black',
  }

  const classes = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}

