import React from 'react'
import Container from '../Components/Layout/Container'

function Footer() {
  const primaryColor = "#4A6741"

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Book a Session", href: "/book" }
  ]

  const services = [
    "Dry Massage",
    "Oil Massage",
    "Hot Oil Massage",
    "Deep Tissue Massage",
    "Nuru Massage",
    "Body Scrub"
  ]

  const socialLinks = [
    { name: "Facebook", icon: "📘", url: "https://facebook.com" },
    { name: "Instagram", icon: "📷", url: "https://instagram.com" },
    { name: "WhatsApp", icon: "💬", url: "https://wa.me/8801614326888" },
    { name: "Twitter", icon: "🐦", url: "https://twitter.com" }
  ]

  return (
    <footer
      className="text-white pt-12 md:pt-16 pb-8"
      style={{ backgroundColor: primaryColor }}
    >
      <Container>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-10 md:mb-12">

          {/* ABOUT */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
              Silken Touch Spa
            </h3>

            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              Experience tranquility and rejuvenation in the heart of Gulshan.
              Your wellness journey begins here.
            </p>

            {/* SOCIAL */}
            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/30 rounded-full w-9 h-9 md:w-10 md:h-10 flex items-center justify-center transition"
                >
                  <span className="text-lg md:text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm md:text-base">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
              Our Services
            </h3>

            <ul className="space-y-2 text-sm md:text-base">
              {services.map((service, idx) => (
                <li key={idx}>
                  <a
                    href="/pricing"
                    className="text-white/80 hover:text-white transition"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
              Get in Touch
            </h3>

            <ul className="space-y-3 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span className="text-white/80">
                  House 12, Road 10, Gulshan-1, Dhaka
                </span>
              </li>

              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+8801614326888" className="text-white/80 hover:text-white">
                  01614326888
                </a>
              </li>

              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:info@silkentouchspa.com" className="text-white/80 hover:text-white">
                  info@silkentouchspa.com
                </a>
              </li>

              <li className="flex items-center gap-2">
                <span>🕒</span>
                <span className="text-white/80">
                  Daily: 9:00 AM - 10:00 PM
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/20 pt-6 md:pt-8 text-center text-white/70 text-xs md:text-sm">
          <p>
            &copy; {new Date().getFullYear()} Silken Touch Spa, Gulshan. All rights reserved.
          </p>
        </div>

      </Container>
    </footer>
  )
}

export default Footer