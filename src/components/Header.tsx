import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#accomplishments', label: 'Accomplishments' },
  { href: '#infrastructure', label: 'Flood & Infrastructure' },
  { href: '#community', label: 'Community & Small Business' },
  { href: '#get-involved', label: 'Get Involved' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-river-navy/95 backdrop-blur-sm shadow-lg'
          : 'bg-river-navy'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo / Wordmark */}
          <a href="#home" className="flex flex-col">
            <span className="font-serif text-xl lg:text-2xl font-bold text-egret-white tracking-tight">
              Mayor Diezel DePew
            </span>
            <span className="text-xs text-dock-wood tracking-widest uppercase">
              Fighter. Leader. Worker.
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-egret-white/80 hover:text-egret-white transition-colors rounded-md hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#get-involved"
              className="px-5 py-2.5 text-sm font-medium text-egret-white bg-lagoon-blue hover:bg-lagoon-blue/90 rounded-md transition-colors focus:ring-2 focus:ring-lagoon-blue focus:ring-offset-2 focus:ring-offset-river-navy"
            >
              Volunteer
            </a>
            <a
              href="#get-involved"
              className="px-5 py-2.5 text-sm font-medium text-egret-white bg-heritage-red hover:bg-heritage-red/90 rounded-md transition-colors focus:ring-2 focus:ring-heritage-red focus:ring-offset-2 focus:ring-offset-river-navy"
            >
              Donate
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-egret-white rounded-md hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav
            id="mobile-menu"
            className="lg:hidden py-4 border-t border-white/10"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-egret-white/90 hover:text-egret-white hover:bg-white/5 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-3 mt-4 pt-4 border-t border-white/10">
                <a
                  href="#get-involved"
                  className="flex-1 px-4 py-3 text-center text-sm font-medium text-egret-white bg-lagoon-blue hover:bg-lagoon-blue/90 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Volunteer
                </a>
                <a
                  href="#get-involved"
                  className="flex-1 px-4 py-3 text-center text-sm font-medium text-egret-white bg-heritage-red hover:bg-heritage-red/90 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Donate
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
