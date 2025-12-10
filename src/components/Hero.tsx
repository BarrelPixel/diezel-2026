import WaveDivider from './WaveDivider'

const stats = [
  { value: '$30M+', label: 'in Grants Secured' },
  { value: '100-Year', label: 'Storm Plan Implemented' },
  { value: '$40M', label: 'Canal Restoration Underway' },
]

export default function Hero() {
  return (
    <section id="home" className="relative pt-20 lg:pt-24 bg-egret-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-sm uppercase tracking-widest text-lagoon-blue font-medium mb-4">
              Working River, Future City
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-river-navy leading-tight mb-6">
              Protecting Edgewater's Future, One Project at a Time.
            </h1>
            <p className="text-lg text-slate-asphalt/90 mb-8 leading-relaxed">
              As the youngest elected official in Florida history, Mayor Diezel DePew has delivered
              record grant funding, led the charge on flood protection, and championed smart growth
              and small-business support for our community.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#get-involved"
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-egret-white bg-heritage-red hover:bg-heritage-red/90 rounded-md transition-colors shadow-lg shadow-heritage-red/25 focus:ring-2 focus:ring-heritage-red focus:ring-offset-2"
              >
                Donate Now
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#get-involved"
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-river-navy bg-transparent border-2 border-river-navy hover:bg-river-navy hover:text-egret-white rounded-md transition-colors focus:ring-2 focus:ring-river-navy focus:ring-offset-2"
              >
                Volunteer
              </a>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-river-navy/5 border-4 border-dock-wood/30 shadow-xl">
              <img
                src="/images/536385592_1829752434247114_3777977537759686385_n.jpg"
                alt="Mayor Diezel DePew working with the Edgewater community"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-signal-amber/20 rounded-lg -z-10" aria-hidden="true" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-lagoon-blue/20 rounded-lg -z-10" aria-hidden="true" />
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-16 lg:mt-20 grid sm:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm border border-slate-asphalt/10 text-center"
            >
              <p className="font-serif text-3xl lg:text-4xl font-bold text-heritage-red mb-2">
                {stat.value}
              </p>
              <p className="text-sm uppercase tracking-wide text-slate-asphalt/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <WaveDivider variant="dark" className="-mb-1" />
    </section>
  )
}
