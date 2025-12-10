const smallBusinessItems = [
  {
    title: 'Small Business Taskforce',
    description: 'Created a dedicated taskforce to identify and remove barriers for local entrepreneurs.',
  },
  {
    title: 'Updated Signage Laws',
    description: 'Reformed feather-flag and banner regulations to help local shops gain visibility.',
  },
  {
    title: 'Local Business Owner',
    description: 'As a lifelong small business owner, Diezel understands the challenges firsthand.',
  },
]

const safetyItems = [
  {
    title: 'Speed Radar Installations',
    description: 'Placed speed monitoring devices on key neighborhood streets to slow traffic.',
  },
  {
    title: 'New Traffic Signals',
    description: 'Secured signals at NSB High School and Fire Station 55 for safer crossings.',
  },
  {
    title: 'Streetlight Initiative',
    description: 'Launched Florida Shores streetlight program for safer nighttime streets.',
  },
  {
    title: 'Boat Ramp & Wetland Park',
    description: 'Invested in design and engineering for improved lagoon access and water quality.',
  },
]

export default function Community() {
  return (
    <section id="community" className="bg-egret-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-sm uppercase tracking-widest text-lagoon-blue font-medium mb-4">
            Building a Stronger Community
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-river-navy">
            Community & Small Business
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Small Business Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-heritage-red/10">
                <svg className="w-5 h-5 text-heritage-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-river-navy">
                Supporting Small Business
              </h3>
            </div>
            <div className="space-y-6">
              {smallBusinessItems.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-5 shadow-sm border border-slate-asphalt/10">
                  <h4 className="font-medium text-river-navy mb-2">{item.title}</h4>
                  <p className="text-slate-asphalt/80 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Safety Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-lagoon-blue/10">
                <svg className="w-5 h-5 text-lagoon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-river-navy">
                Safer Streets & Families
              </h3>
            </div>
            <div className="space-y-6">
              {safetyItems.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-5 shadow-sm border border-slate-asphalt/10">
                  <h4 className="font-medium text-river-navy mb-2">{item.title}</h4>
                  <p className="text-slate-asphalt/80 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
