import WaveDivider from './WaveDivider'

const timeline = [
  { year: '2020', event: 'Flood vulnerability assessment initiated' },
  { year: '2021', event: 'Stormwater Masterplan funded and launched' },
  { year: '2022', event: 'Updated to 100-year storm protection standards' },
  { year: '2023', event: '$40M Gabordy canal reconstruction grant secured' },
  { year: '2024', event: 'First-ever state funding for canal armoring' },
  { year: '2025', event: 'Major canal restoration work underway' },
]

export default function Infrastructure() {
  return (
    <section id="infrastructure" className="relative bg-egret-white">
      <WaveDivider variant="light" flip className="-mt-1" />

      {/* Background pattern - subtle topographic/contour effect */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10 Q 70 25 60 50 Q 50 75 30 60 Q 10 45 25 25 Q 40 5 50 10' fill='none' stroke='%230B2340' stroke-width='0.5'/%3E%3Cpath d='M50 20 Q 65 32 57 50 Q 49 68 35 57 Q 21 46 32 30 Q 43 14 50 20' fill='none' stroke='%230B2340' stroke-width='0.5'/%3E%3Cpath d='M50 30 Q 60 38 55 50 Q 50 62 40 55 Q 30 48 38 38 Q 46 28 50 30' fill='none' stroke='%230B2340' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="mb-12 lg:mb-16">
          <p className="text-sm uppercase tracking-widest text-signal-amber font-medium mb-4">
            Infrastructure & Flood Protection
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-river-navy mb-6">
            Fixing Flooding for Good.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Main Content */}
          <div className="space-y-6">
            <p className="text-lg text-slate-asphalt/90 leading-relaxed">
              Edgewater's network of canals and proximity to the Indian River Lagoon make
              flood protection not just a priority—it's essential to our community's future.
              Mayor DePew has made stormwater management the cornerstone of his administration.
            </p>
            <p className="text-lg text-slate-asphalt/90 leading-relaxed">
              From securing the $40 million Gabordy canal reconstruction grant to implementing
              a comprehensive Stormwater Masterplan, we're building the infrastructure that
              will protect Edgewater families and businesses for generations.
            </p>
            <p className="text-lg text-slate-asphalt/90 leading-relaxed">
              Strategic property acquisitions, like the Stuart property, ensure stronger
              water flow and conservation—keeping flood waters moving while protecting
              our natural environment.
            </p>

            {/* Quote */}
            <blockquote className="border-l-4 border-lagoon-blue pl-6 py-4 my-8 bg-lagoon-blue/5 rounded-r-lg">
              <p className="text-xl font-serif italic text-river-navy leading-relaxed">
                "Water knows no boundaries — that's why I helped start the flooding
                subcommittee at the Volusia elected officials round table."
              </p>
              <footer className="mt-3 text-sm text-slate-asphalt/80">
                — Mayor Diezel DePew
              </footer>
            </blockquote>
          </div>

          {/* Timeline */}
          <div className="bg-river-navy rounded-lg p-6 lg:p-8">
            <h3 className="font-serif text-xl lg:text-2xl font-semibold text-egret-white mb-8">
              Flood Protection Timeline
            </h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-signal-amber shrink-0" />
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-egret-white/20 mt-1" />
                    )}
                  </div>
                  <div className="pb-4">
                    <p className="text-sm font-medium text-dock-wood uppercase tracking-wide">
                      {item.year}
                    </p>
                    <p className="text-egret-white/90 mt-1">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
