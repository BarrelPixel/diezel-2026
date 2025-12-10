import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would connect to a form service like Formspree
    console.log('Contact form:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="bg-egret-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-lagoon-blue font-medium mb-4">
            Get in Touch
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-river-navy mb-6">
            Contact the Campaign
          </h2>
          <p className="text-slate-asphalt/80 text-lg mb-8">
            Have questions about Mayor DePew's platform or want to share your thoughts on
            Edgewater's future? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div>
            {submitted ? (
              <div className="bg-lagoon-blue/10 border border-lagoon-blue/30 rounded-lg p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-lagoon-blue/20">
                    <svg className="w-5 h-5 text-lagoon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-river-navy">
                    Message Sent
                  </h3>
                </div>
                <p className="text-slate-asphalt/80">
                  Thank you for reaching out. We'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-lagoon-blue hover:text-lagoon-blue/80 font-medium transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-asphalt mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md bg-white border border-slate-asphalt/20 text-slate-asphalt placeholder-slate-asphalt/50 focus:outline-none focus:ring-2 focus:ring-lagoon-blue focus:border-transparent transition-colors"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-asphalt mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md bg-white border border-slate-asphalt/20 text-slate-asphalt placeholder-slate-asphalt/50 focus:outline-none focus:ring-2 focus:ring-lagoon-blue focus:border-transparent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-asphalt mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-md bg-white border border-slate-asphalt/20 text-slate-asphalt placeholder-slate-asphalt/50 focus:outline-none focus:ring-2 focus:ring-lagoon-blue focus:border-transparent transition-colors resize-none"
                    placeholder="Share your thoughts or questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 text-base font-medium text-egret-white bg-lagoon-blue hover:bg-lagoon-blue/90 rounded-md transition-colors focus:ring-2 focus:ring-lagoon-blue focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-xl font-semibold text-river-navy mb-4">
                Campaign Office
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-lagoon-blue mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-slate-asphalt">Edgewater, Florida</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-lagoon-blue mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <a
                      href="mailto:info@diezeldepew.com"
                      className="text-lagoon-blue hover:text-lagoon-blue/80 transition-colors"
                    >
                      info@diezeldepew.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold text-river-navy mb-4">
                Follow the Campaign
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/DiezelDePewForMayor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-river-navy/10 text-river-navy hover:bg-river-navy hover:text-egret-white transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/diezeldepew"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-river-navy/10 text-river-navy hover:bg-river-navy hover:text-egret-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.27.2-6.78,2.71-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.27,2.71,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.27-.2,6.78-2.71,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.27-2.71-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-dock-wood/10 border border-dock-wood/30 rounded-lg p-6">
              <h3 className="font-serif text-lg font-semibold text-river-navy mb-2">
                Press Inquiries
              </h3>
              <p className="text-slate-asphalt/80 text-sm mb-3">
                Media representatives can reach us at:
              </p>
              <a
                href="mailto:press@diezeldepew.com"
                className="text-lagoon-blue hover:text-lagoon-blue/80 font-medium transition-colors"
              >
                press@diezeldepew.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
