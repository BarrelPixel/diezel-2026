const accomplishments = [
  {
    category: 'Record Funding Secured',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    items: [
      'Over $30 million in grant funding secured for Edgewater',
      '$40M G2–G11 Gabordy canal reconstruction grant awarded',
      'First state funding in city history for Edgewater canal armoring appropriation',
    ],
  },
  {
    category: 'Flood & Stormwater Leadership',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    items: [
      'Updated city from 25-year storm code to 100-year storm protection plan',
      'Funded comprehensive Stormwater Masterplan for long-term resilience',
      'Completed detailed flood vulnerability assessment citywide',
    ],
  },
  {
    category: 'Smart, Controlled Growth',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    items: [
      'Enacted building moratorium to update and strengthen development codes',
      'Modernized impact fee structure for fair, sustainable growth',
      'Oversaw creation of comprehensive City Vision Plan',
    ],
  },
  {
    category: 'Community Safety & Quality of Life',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    items: [
      'Installed speed radars on key neighborhood streets',
      'Secured new traffic signals at NSB High School and Fire Station 55',
      'Launched Florida Shores streetlight initiative for safer nights',
    ],
  },
]

export default function Accomplishments() {
  return (
    <section id="accomplishments" className="bg-river-navy py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-sm uppercase tracking-widest text-dock-wood font-medium mb-4">
            Proven Results
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-egret-white">
            What We've Accomplished Together
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {accomplishments.map((section, index) => (
            <div
              key={index}
              className="bg-egret-white rounded-lg p-6 lg:p-8 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-lagoon-blue/10 text-lagoon-blue">
                  {section.icon}
                </div>
                <h3 className="font-serif text-xl lg:text-2xl font-semibold text-river-navy">
                  {section.category}
                </h3>
              </div>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-heritage-red mt-0.5 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-asphalt/90 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
