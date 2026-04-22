import React from 'react'
import Container from '../Components/Layout/Container'

function Footer() {
  const primaryColor = "#43464E"
  
  const quickLinks = [
    { name: "About Us", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Pricing", id: "price",href: "/price" },
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
    <footer className="text-white pt-16 pb-8" style={{ backgroundColor: primaryColor }}>
      <Container>
        {/* TOP SECTION */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-10 md:mb-12">

  {/* ABOUT */}
  <div className="sm:col-span-2 lg:col-span-1">
    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
      Zenvy Spa Gulshan
    </h3>

    <p className="text-white/80 text-sm md:text-base leading-relaxed">
      Experience tranquility and rejuvenation in the heart of Gulshan.
      Your wellness journey begins here.
    </p>

    {/* SOCIAL */}
    
  </div>

  {/* QUICK LINKS + SERVICES SIDE BY SIDE */}
  <div className="sm:col-span-2 lg:col-span-2 grid grid-cols-2 gap-8 md:gap-10">

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

  </div>

</div>

{/* BOTTOM SECTION - GET IN TOUCH */}
<div className="border-t border-white/20 pt-8 pb-2">

  <h3 className="text-lg md:text-xl font-semibold mb-4 ">
    Get in Touch
  </h3>

  <ul className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm md:text-base  md:text-left">

    <li className="flex md:justify-start gap-2">
      <span>📍</span>
      <span className="text-white/80">
        Gulshan-2, Dhaka
      </span>
    </li>

    <li className="flex md:justify-start gap-2">
      <span>📞</span>
      <a href="tel:+8801863-905937" className="text-white/80 hover:text-white">
        01863-905937
      </a>
    </li>

    <li className="flex md:justify-start gap-2">
      <span>✉️</span>
      <a href="mailto:zenvyspagulshan@gmail.com" className="text-white/80 hover:text-white">
        zenvyspagulshan@gmail.com
      </a>
    </li>

    <li className="flex  md:justify-start gap-2">
      <span>🕒</span>
      <span className="text-white/80">
        9AM - 10PM
      </span>
    </li>

  </ul>

</div>

        {/* Copyright Bar */}
        <div className="border-t border-white/20 pt-8 text-center text-white/70 text-sm">
          <p>&copy; {new Date().getFullYear()} Silken Touch Spa, Gulshan. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer