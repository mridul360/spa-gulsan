import React, { useEffect, useState, useRef } from "react";
import Container from "../Components/Layout/Container";
import logo from "../assets/spaLogo.png";

import { FaTelegramPlane, FaWhatsapp, FaInstagram } from "react-icons/fa";
import {
  RiHome4Line, RiHome4Fill,
  RiFileListLine, RiFileListFill,
  RiCalendarLine, RiCalendarFill,
  RiChatSmile2Line, RiChatSmile2Fill,
  RiMailLine, RiMailFill,
} from "react-icons/ri";

// ── Smart deep-link opener ──────────────────────────────────────────
// On mobile: tries app scheme first, falls back to web after 1.5s
// On desktop: opens web URL directly
const isMobile = () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const openLink = (appScheme, webUrl) => {
  if (isMobile()) {
    // Try to open the native app
    const start = Date.now();
    window.location.href = appScheme;
    // If app not installed, browser stays — fall back to web after 1.5s
    setTimeout(() => {
      if (Date.now() - start < 2000) {
        window.open(webUrl, "_blank", "noopener,noreferrer");
      }
    }, 1500);
  } else {
    window.open(webUrl, "_blank", "noopener,noreferrer");
  }
};

// ── Contact links with both app scheme + web URL ────────────────────
const contactLinks = [
  {
    name: "Telegram",
    handle: "@zenvyspagulshan",
    appScheme: "tg://resolve?domain=ZENVYSPAGULSHAN",
    webUrl: "https://t.me/ZENVYSPAGULSHAN",
    bg: "#e8f4fd",
    iconColor: "#229ED9",
    Icon: FaTelegramPlane,
  },
  {
    name: "WhatsApp",
    handle: "+8801863905937",
    appScheme: "whatsapp://send?phone=8801863905937&text=Hi%2C%20I%20want%20to%20book%20a%20session",
    webUrl: "https://wa.me/8801863905937?text=Hi%2C%20I%20want%20to%20book%20a%20session",
    bg: "#e8f8ee",
    iconColor: "#25D366",
    Icon: FaWhatsapp,
  },
  {
    name: "Instagram",
    handle: "@zenvyspagulshan",
    appScheme: "instagram://user?username=zenvyspagulshan",
    webUrl: "https://www.instagram.com/zenvyspagulshan",
    bg: "#fdeef5",
    iconColor: "#DD2A7B",
    Icon: FaInstagram,
  },
];

const navLinks = [
  {
    name: "About",
    id: "about",
    icon: (active) => active
      ? <RiHome4Fill size={22} color="#43464E" />
      : <RiHome4Line size={22} color="#baaec0" />,
  },
  {
    name: "Services",
    id: "price",
    icon: (active) => active
      ? <RiFileListFill size={22} color="#43464E" />
      : <RiFileListLine size={22} color="#baaec0" />,
  },
  {
    name: "Book",
    id: "booking",
    icon: (active) => active
      ? <RiCalendarFill size={22} color="#43464E" />
      : <RiCalendarLine size={22} color="#baaec0" />,
  },
  {
    name: "Review",
    id: "review",
    icon: (active) => active
      ? <RiChatSmile2Fill size={22} color="#43464E" />
      : <RiChatSmile2Line size={22} color="#baaec0" />,
  },
];

const linkStyle = {
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: 12,
  padding: "10px 12px",
  borderRadius: 12,
  cursor: "pointer",
  background: "transparent",
  border: "none",
  width: "100%",
  textAlign: "left",
};

export default function Navbar() {
  const [active, setActive] = useState("About");
  const [contactOpen, setContactOpen] = useState(false);
  const desktopDropdownRef = useRef(null);

  const scrollTo = (id, name) => {
    setActive(name);
    setContactOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Scroll spy
  useEffect(() => {
    const onScroll = () => {
      let current = "";
      navLinks.forEach(({ id, name }) => {
        const el = document.getElementById(id);
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (r.top <= 150 && r.bottom >= 150) current = name;
      });
      if (current) setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (desktopDropdownRef.current && !desktopDropdownRef.current.contains(e.target))
        setContactOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const ContactPopup = () => (
    <div
      style={{
        background: "rgba(255,255,255,0.98)",
        backdropFilter: "blur(20px)",
        borderRadius: 16,
        border: "1px solid rgba(67,70,78,0.1)",
        boxShadow: "0 8px 32px rgba(67,70,78,0.15)",
        padding: 8,
        minWidth: 210,
      }}
    >
      {contactLinks.map(({ name, handle, appScheme, webUrl, bg, iconColor, Icon }) => (
        <button
          key={name}
          style={linkStyle}
          onClick={() => {
            openLink(appScheme, webUrl);
            setTimeout(() => setContactOpen(false), 300);
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(67,70,78,0.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: bg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Icon size={17} color={iconColor} />
          </div>
          <div>
            <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: "#43464E" }}>
              {name}
            </p>
            <p style={{ margin: 0, fontSize: 11, color: "#a090a4" }}>
              {handle}
            </p>
          </div>
        </button>
      ))}
    </div>
  );

  return (
    <>
      {/* TOP BAR */}
      <div className="fixed top-0 left-0 w-full z-[9999] bg-white/50 backdrop-blur-md border-b border-[#43464E]/10">
        <Container>
          <div className="flex items-center justify-between h-[60px] px-4 md:px-8">

            <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />

            {/* Desktop Nav */}
            <div className="hidden md:flex gap-1 items-center">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.id, link.name)}
                  className={`text-xs uppercase tracking-widest px-4 py-2 rounded-full transition ${
                    active === link.name
                      ? "bg-[#43464E] text-white"
                      : "text-gray-600 hover:bg-[#D5BADB]/50"
                  }`}
                >
                  {link.name}
                </button>
              ))}

              <div className="relative" ref={desktopDropdownRef}>
                <button
                  onClick={() => setContactOpen((o) => !o)}
                  className={`text-xs uppercase tracking-widest px-4 py-2 rounded-full transition ${
                    contactOpen
                      ? "bg-[#43464E] text-white"
                      : "text-gray-600 hover:bg-[#D5BADB]/50"
                  }`}
                >
                  Contact ▾
                </button>
                {contactOpen && (
                  <div style={{ position: "absolute", top: "calc(100% + 8px)", right: 0, zIndex: 9999 }}>
                    <ContactPopup />
                  </div>
                )}
              </div>
            </div>

            {/* Desktop CTA */}
            <button
              onClick={() => scrollTo("booking", "Book")}
              className="hidden md:block bg-[#43464E] text-white px-5 py-2 rounded-full text-xs uppercase tracking-widest hover:bg-[#2d2f33] transition"
            >
              Book Session
            </button>

            {/* Mobile CTA */}
            <button
              onClick={() => scrollTo("booking", "Book")}
              className="md:hidden bg-[#43464E] text-white px-4 py-2 rounded-full text-[10px] uppercase tracking-widest"
            >
              Book Now
            </button>

          </div>
        </Container>
      </div>

      {/* MOBILE BOTTOM TAB BAR */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-[9999] bg-white/70 backdrop-blur-xl border-t border-[#43464E]/10">

        {contactOpen && (
          <div style={{
            position: "absolute",
            bottom: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            marginBottom: 10,
            zIndex: 9999,
          }}>
            <ContactPopup />
          </div>
        )}

        <div className="flex items-center justify-around h-[64px] px-2">

          {/* About */}
          {(() => {
            const link = navLinks[0];
            const isActive = active === link.name;
            return (
              <button
                onClick={() => scrollTo(link.id, link.name)}
                className={`flex flex-col items-center gap-[3px] flex-1 py-2 rounded-xl transition-all ${isActive ? "bg-[#43464E]/[.08]" : ""}`}
              >
                {link.icon(isActive)}
                {isActive && <span className="w-1 h-1 rounded-full bg-[#D5BADB]" />}
                <span className={`text-[9px] uppercase tracking-wider ${isActive ? "text-[#43464E] font-medium" : "text-[#baaec0]"}`}>
                  {link.name}
                </span>
              </button>
            );
          })()}

          {/* Contact */}
          <button
            onClick={() => setContactOpen((o) => !o)}
            className={`flex flex-col items-center gap-[3px] flex-1 py-2 rounded-xl transition-all ${contactOpen ? "bg-[#43464E]/[.08]" : ""}`}
          >
            <div className="relative">
              {contactOpen
                ? <RiMailFill size={22} color="#43464E" />
                : <RiMailLine size={22} color="#baaec0" />
              }
              <span style={{
                position: "absolute",
                top: -2,
                right: -2,
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#D5BADB",
                border: "1.5px solid white",
              }} />
            </div>
            {contactOpen && <span className="w-1 h-1 rounded-full bg-[#D5BADB]" />}
            <span className={`text-[9px] uppercase tracking-wider ${contactOpen ? "text-[#43464E] font-medium" : "text-[#baaec0]"}`}>
              Contact
            </span>
          </button>

          {/* Services, Book, Review */}
          {navLinks.slice(1).map((link) => {
            const isActive = active === link.name;
            return (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id, link.name)}
                className={`flex flex-col items-center gap-[3px] flex-1 py-2 rounded-xl transition-all ${isActive ? "bg-[#43464E]/[.08]" : ""}`}
              >
                {link.icon(isActive)}
                {isActive && <span className="w-1 h-1 rounded-full bg-[#D5BADB]" />}
                <span className={`text-[9px] uppercase tracking-wider ${isActive ? "text-[#43464E] font-medium" : "text-[#baaec0]"}`}>
                  {link.name}
                </span>
              </button>
            );
          })}

        </div>
      </div>

      <div className="md:hidden h-[64px]" />
    </>
  );
}