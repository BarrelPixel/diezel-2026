const priorities = [
  {
    number: '01',
    title: 'Complete the Stormwater Masterplan',
    description: 'Finish implementing our comprehensive flood protection strategy across all neighborhoods.',
  },
  {
    number: '02',
    title: 'Finish Canal Armoring Projects',
    description: 'Complete major canal reconstruction and armoring to protect homes and infrastructure.',
  },
  {
    number: '03',
    title: 'Build New City Facilities',
    description: 'Construct a modern City Hall and upgraded fire facilities to serve our growing community.',
  },
  {
    number: '04',
    title: 'Secure Additional Funding',
    description: 'Continue pursuing state and federal grants for roads, lighting, and neighborhood improvements.',
  },
  {
    number: '05',
    title: 'Support Local Business Growth',
    description: 'Streamline codes and processes to make Edgewater the best place to start and grow a business.',
  },
  {
    number: '06',
    title: 'Protect Our Waterways',
    description: 'Maintain lagoon health and expand conservation efforts to preserve Edgewater\'s natural beauty.',
  },
]

export default function Vision() {
  return (
    <section id="vision" className="bg-dock-wood/10 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 lg:mb-16">
          <p className="text-sm uppercase tracking-widest text-heritage-red font-medium mb-4">
            Looking Ahead
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-river-navy mb-6">
            What's Next for Edgewater
          </h2>
          <p className="text-lg text-slate-asphalt/90 max-w-3xl">
            Building on our proven track record, here's what we'll accomplish together in the next term.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {priorities.map((priority) => (
            <div
              key={priority.number}
              className="bg-white rounded-lg p-6 shadow-sm border border-dock-wood/20 hover:shadow-md transition-shadow"
            >
              <span className="inline-block text-4xl font-serif font-bold text-dock-wood/40 mb-4">
                {priority.number}
              </span>
              <h3 className="font-serif text-xl font-semibold text-river-navy mb-3">
                {priority.title}
              </h3>
              <p className="text-slate-asphalt/80 text-sm leading-relaxed">
                {priority.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
