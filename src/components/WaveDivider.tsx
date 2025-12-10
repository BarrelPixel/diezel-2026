interface WaveDividerProps {
  variant?: 'light' | 'dark'
  flip?: boolean
  className?: string
}

export default function WaveDivider({ variant = 'light', flip = false, className = '' }: WaveDividerProps) {
  const fillColor = variant === 'light' ? '#F7F4EF' : '#0B2340'

  return (
    <div
      className={`w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''} ${className}`}
      aria-hidden="true"
    >
      <svg
        className="relative block w-full h-8 sm:h-12 md:h-16"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C150,80 350,0 500,50 C650,100 800,20 1000,60 C1100,80 1150,40 1200,50 L1200,120 L0,120 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  )
}
