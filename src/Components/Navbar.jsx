import React, { useEffect, useState } from "react";
import Container from "./Layout/Container";

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="font-bold text-[#3a5c3a] text-xl">Gulshan</div>
  </div>
);

const navLinks = [
  { name: "About Us", id: "about" },
  { name: "Price", id: "price" },
  { name: "Contact", id: "contact" }, // now WhatsApp
  { name: "Booking", id: "booking" },
  { name : "Review", id: "review" },
];

export default function Navbar() {
  const [active, setActive] = useState("About Us");

  // Smooth scroll helper
  const handleScroll = (id, name) => {
    setActive(name);

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // 🔥 Scroll Spy System
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
    <div className="fixed top-0 left-0 w-full z-[9999] bg-white shadow-sm">
      <Container>
        <nav className="flex items-center justify-between h-[70px] px-8">

          {/* Logo */}
          <Logo />

          {/* Nav Links */}
          <div className="flex gap-2">
            {navLinks.map((link) => {
              // 🔥 SPECIAL CASE: CONTACT → WhatsApp
              if (link.name === "Contact") {
                return (
                  <button
                    key={link.id}
                    onClick={() =>
                      window.open(
                        "https://wa.me/8801614326888?text=Hi%20I%20want%20to%20book%20a%20session",
                        "_blank"
                      )
                    }
                    className={`text-xs uppercase tracking-widest px-4 py-2 rounded-full transition
                      ${
                        active === link.name
                          ? "bg-[#3a5c3a] text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                  >
                    Contact
                  </button>
                );
              }

              // Normal scroll buttons
              return (
                <button
                  key={link.id}
                  onClick={() => handleScroll(link.id, link.name)}
                  className={`text-xs uppercase tracking-widest px-4 py-2 rounded-full transition
                    ${
                      active === link.name
                        ? "bg-[#3a5c3a] text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  {link.name}
                </button>
              );
            })}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => handleScroll("booking", "Booking")}
            className="bg-[#3a5c3a] text-white px-5 py-2 rounded-full text-xs uppercase tracking-widest"
          >
            Book Session
          </button>
        </nav>
      </Container>
    </div>
  );
}