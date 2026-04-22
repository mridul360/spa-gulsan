import React, { useEffect, useState } from "react";
import Container from "./Layout/Container";
import logo from "../assets/spaLogo.png";

const Logo = () => (
  <div className="flex items-center gap-2">
    <img src={logo} alt="Logo" className="h-12 w-12 md:h-16 md:w-16" />
  </div>
);

const navLinks = [
  { name: "About Us", id: "about" },
  { name: "Price", id: "price" },
  { name: "Contact", id: "contact" },
  { name: "Booking", id: "booking" },
  { name: "Review", id: "review" },
];

export default function Navbar() {
  const [active, setActive] = useState("About Us");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id, name) => {
    setActive(name);
    setMenuOpen(false);

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = navLinks.map((link) =>
        document.getElementById(link.id)
      );

      let current = "";

      sections.forEach((section) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          current = section.id;
        }
      });

      const activeLink = navLinks.find((l) => l.id === current);

      if (activeLink) {
        setActive(activeLink.name);
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-[9999] bg-white/40 backdrop-blur-md shadow-sm">
      <Container>
        <nav className="flex items-center justify-between h-[70px] px-4 md:px-8">

          {/* Logo */}
          <Logo />

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  if (link.name === "Contact") {
                    window.open(
                      "https://api.whatsapp.com/message/HZBN77UPZTBQH1?autoload=1&app_absent=0",
                      "_blank"
                    );
                    return;
                  }
                  handleScroll(link.id, link.name);
                }}
                className={`text-xs uppercase tracking-widest px-4 py-2 rounded-full transition
                  ${
                    active === link.name
                      ? "bg-[#3C3F44] text-white"
                      : "text-gray-700 hover:bg-[#F3C2A4]"
                  }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CTA Desktop */}
          <button
            onClick={() => handleScroll("booking", "Booking")}
            className="hidden md:block bg-[#3C3F44] text-white px-5 py-2 rounded-full text-xs uppercase tracking-widest"
          >
            Book Session
          </button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-2 px-4 pb-4 bg-[#F3C2A4]/90 backdrop-blur-md border-t border-[#3C3F44]/10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  if (link.name === "Contact") {
                    window.open(
                      "https://wa.me/8801863905937?text=Hi%20I%20want%20to%20book%20a%20session",
                      "_blank"
                    );
                    setMenuOpen(false);
                    return;
                  }
                  handleScroll(link.id, link.name);
                }}
                className={`text-sm uppercase tracking-widest px-4 py-2 rounded-full text-left
                  ${
                    active === link.name
                      ? "bg-[#3C3F44] text-white"
                      : "text-gray-700"
                  }`}
              >
                {link.name}
              </button>
            ))}

            {/* Mobile CTA */}
            <button
              onClick={() => handleScroll("booking", "Booking")}
              className="bg-[#3C3F44] text-white px-5 py-2 rounded-full text-sm uppercase tracking-widest mt-2"
            >
              Book Session
            </button>
          </div>
        )}
      </Container>
    </div>
  );
}