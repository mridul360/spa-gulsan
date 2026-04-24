import React, { useEffect, useState, useRef } from "react";
import Container from "./Layout/Container";
import logo from "../assets/spaLogo.png";

// react-icons
import { FaTelegramPlane, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { RiHome4Line, RiHome4Fill } from "react-icons/ri";
import { RiFileListLine, RiFileListFill } from "react-icons/ri";
import { RiCalendarLine, RiCalendarFill } from "react-icons/ri";
import { RiChatSmile2Line, RiChatSmile2Fill } from "react-icons/ri";
import { RiMailLine, RiMailFill } from "react-icons/ri";

const navLinks = [
  {
    name: "About",
    id: "about",
    icon: (active) =>
      active
        ? <RiHome4Fill size={22} color="#43464E" />
        : <RiHome4Line size={22} color="#baaec0" />,
  },
  {
    name: "Services",
    id: "price",
    icon: (active) =>
      active
        ? <RiFileListFill size={22} color="#43464E" />
        : <RiFileListLine size={22} color="#baaec0" />,
  },
  {
    name: "Book",
    id: "booking",
    icon: (active) =>
      active
        ? <RiCalendarFill size={22} color="#43464E" />
        : <RiCalendarLine size={22} color="#baaec0" />,
  },
  {
    name: "Review",
    id: "review",
    icon: (active) =>
      active
        ? <RiChatSmile2Fill size={22} color="#43464E" />
        : <RiChatSmile2Line size={22} color="#baaec0" />,
  },
];

const contactLinks = [
  {
    name: "Telegram",
    handle: "@your_handle",
    href: "https://t.me/your_handle",
    bg: "#e8f4fd",
    iconColor: "#229ED9",
    Icon: FaTelegramPlane,
  },
  {
    name: "WhatsApp",
    handle: "+8801863905937",
    href: "https://wa.me/8801863905937?text=hi%20i%20want%20to%20book",
    bg: "#e8f8ee",
    iconColor: "#25D366",
    Icon: FaWhatsapp,
  },
  {
    name: "Instagram",
    handle: "@your_handle",
    href: "https://instagram.com/your_handle",
    bg: "#fdeef5",
    iconColor: "#DD2A7B",
    Icon: FaInstagram,
  },
];

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

  // Fixed ContactPopup – uses window.open to ensure navigation works
  const ContactPopup = () => {
    const handleClick = (url) => {
      window.open(url, "_blank", "noopener,noreferrer");
      setContactOpen(false);
    };

    return (
      <div
        style={{
          background: "rgba(255,255,255,0.96)",
          backdropFilter: "blur(20px)",
          borderRadius: 16,
          border: "1px solid rgba(67,70,78,0.1)",
          boxShadow: "0 8px 32px rgba(67,70,78,0.12)",
          padding: 8,
          minWidth: 210,
        }}
      >
        {contactLinks.map(({ name, handle, href, bg, iconColor, Icon }) => (
          <div
            key={name}
            onClick={() => handleClick(href)}
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 12px",
              borderRadius: 12,
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(67,70,78,0.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <div
              style={{
                width: 34,
                height: 34,
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
              <p style={{ margin: 0, fontSize: 12, fontWeight: 500, color: "#43464E" }}>{name}</p>
              <p style={{ margin: 0, fontSize: 10, color: "#a090a4" }}>{handle}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      {/* ── TOP BAR ── */}
      <div className="fixed top-0 left-0 w-full z-[9999] bg-white/50 backdrop-blur-md border-b border-[#43464E]/10">
        <Container>
          <div className="flex items-center justify-between h-[60px] px-4 md:px-8">
            <img src={logo} alt="Logo" className="h-10 w-10" />

            {/* Desktop nav */}
            <div className="hidden md:flex gap-1 items-center">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.id, link.name)}
                  className={`text-xs uppercase tracking-widest px-4 py-2 rounded-full transition
                    ${active === link.name
                      ? "bg-[#43464E] text-white"
                      : "text-gray-600 hover:bg-[#D5BADB]/50"
                    }`}
                >
                  {link.name}
                </button>
              ))}

              {/* Desktop Contact dropdown */}
              <div className="relative" ref={desktopDropdownRef}>
                <button
                  onClick={() => setContactOpen((o) => !o)}
                  className={`text-xs uppercase tracking-widest px-4 py-2 rounded-full transition
                    ${contactOpen
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
              className="hidden md:block bg-[#43464E] text-white px-5 py-2 rounded-full text-xs uppercase tracking-widest"
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

      {/* ── MOBILE BOTTOM TAB BAR ── */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-[9999] bg-white/70 backdrop-blur-xl border-t border-[#43464E]/10">

        {/* Contact popup above tab bar */}
        {contactOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setContactOpen(false)}
            />
            <div style={{ position: "absolute", bottom: "100%", left: "50%", transform: "translateX(-50%)", marginBottom: 8, zIndex: 50 }}>
              <ContactPopup />
            </div>
          </>
        )}

        <div className="flex items-center justify-around h-[64px] px-2">

          {/* 1. About tab */}
          {(() => {
            const link = navLinks[0];
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
          })()}

          {/* 2. Contact tab */}
          <button
            onClick={() => setContactOpen((o) => !o)}
            className={`flex flex-col items-center gap-[3px] flex-1 py-2 rounded-xl transition-all ${contactOpen ? "bg-[#43464E]/[.08]" : ""}`}
          >
            <div className="relative">
              {contactOpen
                ? <RiMailFill size={22} color="#43464E" />
                : <RiMailLine size={22} color="#baaec0" />
              }
              <span
                style={{ position: "absolute", top: -2, right: -2, width: 7, height: 7, borderRadius: "50%", background: "#D5BADB", border: "1.5px solid white" }}
              />
            </div>
            {contactOpen && <span className="w-1 h-1 rounded-full bg-[#D5BADB]" />}
            <span className={`text-[9px] uppercase tracking-wider ${contactOpen ? "text-[#43464E] font-medium" : "text-[#baaec0]"}`}>
              Contact
            </span>
          </button>

          {/* 3. Services, Book, Review tabs */}
          {navLinks.slice(1).map((link) => {
            const isActive = active === link.name;
            return (
              <button
                key={link.name}
                onClick={() => {
                  scrollTo(link.id, link.name);
                }}
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

      {/* Bottom spacer */}
      <div className="md:hidden h-[64px]" />
    </>
  );
}