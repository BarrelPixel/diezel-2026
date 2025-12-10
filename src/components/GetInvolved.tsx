import { useState } from 'react'

export default function GetInvolved() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would connect to an email service
    console.log('Email signup:', email)
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section id="get-involved" className="bg-river-navy py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-sm uppercase tracking-widest text-dock-wood font-medium mb-4">
            Join the Movement
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-egret-white">
            Get Involved
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Donate Card */}
          <div className="bg-heritage-red/10 border border-heritage-red/30 rounded-lg p-6 lg:p-8 text-center">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-heritage-red/20 mx-auto mb-6">
              <svg className="w-7 h-7 text-heritage-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-semibold text-egret-white mb-4">
              Donate
            </h3>
            <p className="text-egret-white/80 mb-6 text-sm leading-relaxed">
              Your contribution helps us reach more voters and protect Edgewater's future.
            </p>
            <a
              href="https://www.diezeldepew.com/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-egret-white bg-heritage-red hover:bg-heritage-red/90 rounded-md transition-colors focus:ring-2 focus:ring-heritage-red focus:ring-offset-2 focus:ring-offset-river-navy"
            >
              Donate Now
            </a>
          </div>

          {/* Volunteer Card */}
          <div className="bg-lagoon-blue/10 border border-lagoon-blue/30 rounded-lg p-6 lg:p-8 text-center">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-lagoon-blue/20 mx-auto mb-6">
              <svg className="w-7 h-7 text-lagoon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-semibold text-egret-white mb-4">
              Volunteer
            </h3>
            <p className="text-egret-white/80 mb-6 text-sm leading-relaxed">
              Join our team. Knock doors, make calls, or help at events.
            </p>
            <a
              href="mailto:volunteer@diezeldepew.com?subject=I want to volunteer"
              className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-egret-white bg-lagoon-blue hover:bg-lagoon-blue/90 rounded-md transition-colors focus:ring-2 focus:ring-lagoon-blue focus:ring-offset-2 focus:ring-offset-river-navy"
            >
              Sign Up to Volunteer
            </a>
          </div>

          {/* Stay Informed Card */}
          <div className="bg-egret-white/5 border border-egret-white/20 rounded-lg p-6 lg:p-8 text-center">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-egret-white/10 mx-auto mb-6">
              <svg className="w-7 h-7 text-egret-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-semibold text-egret-white mb-4">
              Stay Informed
            </h3>
            <p className="text-egret-white/80 mb-6 text-sm leading-relaxed">
              Get campaign updates and news delivered to your inbox.
            </p>
            {submitted ? (
              <div className="bg-green-500/20 border border-green-500/30 rounded-md p-4">
                <p className="text-green-300 text-sm">Thanks for signing up!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 rounded-md bg-egret-white/10 border border-egret-white/20 text-egret-white placeholder-egret-white/50 focus:outline-none focus:ring-2 focus:ring-dock-wood focus:border-transparent"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-base font-medium text-river-navy bg-dock-wood hover:bg-dock-wood/90 rounded-md transition-colors focus:ring-2 focus:ring-dock-wood focus:ring-offset-2 focus:ring-offset-river-navy"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
