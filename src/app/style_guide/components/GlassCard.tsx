import React from 'react'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
}

export function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div className={`bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg ${className}`}>
      {children}
    </div>
  )
}

