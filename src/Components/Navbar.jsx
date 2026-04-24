import React, { useEffect, useRef, useState } from "react";
import Container from "../Components/Layout/Container";
import logo from "../assets/spaLogo.png";

import { FaTelegramPlane, FaWhatsapp, FaInstagram } from "react-icons/fa";
import {
  RiHome4Line,
  RiHome4Fill,
  RiFileListLine,
  RiFileListFill,
  RiCalendarLine,
  RiCalendarFill,
  RiChatSmile2Line,
  RiChatSmile2Fill,
  RiMailLine,
  RiMailFill,
  RiPhoneFill,
} from "react-icons/ri";

const navLinks = [
  {
    name: "About",
    id: "about",
    icon: (active) =>
      active ? (
        <RiHome4Fill size={22} color="#43464E" />
      ) : (
        <RiHome4Line size={22} color="#baaec0" />
      ),
  },
  {
    name: "Services",
    id: "price",
    icon: (active) =>
      active ? (
        <RiFileListFill size={22} color="#43464E" />
      ) : (
        <RiFileListLine size={22} color="#baaec0" />
      ),
  },
  {
    name: "Book",
    id: "booking",
    icon: (active) =>
      active ? (
        <RiCalendarFill size={22} color="#43464E" />
      ) : (
        <RiCalendarLine size={22} color="#baaec0" />
      ),
  },
  {
    name: "Review",
    id: "review",
    icon: (active) =>
      active ? (
        <RiChatSmile2Fill size={22} color="#43464E" />
      ) : (
        <RiChatSmile2Line size={22} color="#baaec0" />
      ),
  },
];

const contactLinks = [
  {
    name: "Call Now",
    handle: "+8801863905937",
    href: "tel:+8801863905937",
    bg: "#fff0f0",
    iconColor: "#d32f2f",
    Icon: RiPhoneFill,
    external: false,
  },
  {
    name: "Telegram",
    handle: "@zenvyspagulshan",
    href: "https://t.me/zenvyspagulshan",
    bg: "#e8f4fd",
    iconColor: "#229ED9",
    Icon: FaTelegramPlane,
    external: true,
  },
  {
    name: "WhatsApp",
    handle: "+8801863905937",
    href: "https://wa.me/8801863905937?text=Hi%2C%20I%20want%20to%20book%20a%20session",
    bg: "#e8f8ee",
    iconColor: "#25D366",
    Icon: FaWhatsapp,
    external: true,
  },
  {
    name: "Instagram",
    handle: "@zenvyspagulshan",
    href: "https://www.instagram.com/zenvyspagulshan/",
    bg: "#fdeef5",
    iconColor: "#DD2A7B",
    Icon: FaInstagram,
    external: true,
  },
];

const isMobileDevice = () =>
  /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
    navigator.userAgent
  );

export default function Navbar() {
  const [active, setActive] = useState("About");
  const [contactOpen, setContactOpen] = useState(false);

  const desktopDropdownRef = useRef(null);
  const mobilePopupRef = useRef(null);
  const mobileContactButtonRef = useRef(null);

  const isMobile = typeof window !== "undefined" ? isMobileDevice() : false;

  const scrollTo = (id, name) => {
    setActive(name);
    setContactOpen(false);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleOutside = (e) => {
      const target = e.target;

      const insideDesktop =
        desktopDropdownRef.current &&
        desktopDropdownRef.current.contains(target);

      const insideMobilePopup =
        mobilePopupRef.current && mobilePopupRef.current.contains(target);

      const insideMobileButton =
        mobileContactButtonRef.current &&
        mobileContactButtonRef.current.contains(target);

      if (insideDesktop || insideMobilePopup || insideMobileButton) return;

      setContactOpen(false);
    };

    document.addEventListener("pointerdown", handleOutside);
    return () => document.removeEventListener("pointerdown", handleOutside);
  }, []);

  const ContactPopup = ({ mobile = false }) => (
    <div
      ref={mobile ? mobilePopupRef : null}
      style={{
        background: "rgba(255,255,255,0.98)",
        backdropFilter: "blur(20px)",
        borderRadius: 16,
        border: "1px solid rgba(67,70,78,0.1)",
        boxShadow: "0 8px 32px rgba(67,70,78,0.15)",
        padding: 8,
        minWidth: mobile ? "min(92vw, 320px)" : 220,
      }}
    >
      {contactLinks.map(
        ({ name, handle, href, bg, iconColor, Icon, external }, idx) => (
          <a
            key={idx}
            href={href}
            target={external && !isMobile ? "_blank" : "_self"}
            rel={external && !isMobile ? "noopener noreferrer" : undefined}
            style={{
              width: "100%",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 12px",
              borderRadius: 12,
              cursor: "pointer",
              textAlign: "left",
              WebkitTapHighlightColor: "transparent",
            }}
            onClick={() => {
              if (!isMobile) {
                setTimeout(() => setContactOpen(false), 100);
              }
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(67,70,78,0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
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
              <p
                style={{
                  margin: 0,
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#43464E",
                }}
              >
                {name}
              </p>
              <p style={{ margin: 0, fontSize: 11, color: "#a090a4" }}>
                {handle}
              </p>
            </div>
          </a>
        )
      )}
    </div>
  );

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-[9999] bg-white/50 backdrop-blur-md border-b border-[#43464E]/10">
        <Container>
          <div className="flex items-center justify-between h-[60px] px-4 md:px-8">
            <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />

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
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(100% + 8px)",
                      right: 0,
                      zIndex: 9999,
                    }}
                  >
                    <ContactPopup />
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={() => scrollTo("booking", "Book")}
              className="hidden md:block bg-[#43464E] text-white px-5 py-2 rounded-full text-xs uppercase tracking-widest hover:bg-[#2d2f33] transition"
            >
              Book Session
            </button>

            <button
              onClick={() => scrollTo("booking", "Book")}
              className="md:hidden bg-[#43464E] text-white px-4 py-2 rounded-full text-[10px] uppercase tracking-widest"
            >
              Book Now
            </button>
          </div>
        </Container>
      </div>

      <div className="md:hidden fixed bottom-0 left-0 w-full z-[9999] bg-white/70 backdrop-blur-xl border-t border-[#43464E]/10">
        {contactOpen && (
          <div
            style={{
              position: "absolute",
              bottom: "100%",
              left: "50%",
              transform: "translateX(-50%)",
              marginBottom: 10,
              zIndex: 9999,
              width: "min(92vw, 320px)",
            }}
          >
            <ContactPopup mobile />
          </div>
        )}

        <div className="flex items-center justify-around h-[64px] px-2">
          {(() => {
            const link = navLinks[0];
            const isActive = active === link.name;
            return (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id, link.name)}
                className={`flex flex-col items-center gap-[3px] flex-1 py-2 rounded-xl transition-all ${
                  isActive ? "bg-[#43464E]/[.08]" : ""
                }`}
              >
                {link.icon(isActive)}
                {isActive && (
                  <span className="w-1 h-1 rounded-full bg-[#D5BADB]" />
                )}
                <span
                  className={`text-[9px] uppercase tracking-wider ${
                    isActive ? "text-[#43464E] font-medium" : "text-[#baaec0]"
                  }`}
                >
                  {link.name}
                </span>
              </button>
            );
          })()}

          <button
            ref={mobileContactButtonRef}
            onClick={() => setContactOpen((o) => !o)}
            className={`flex flex-col items-center gap-[3px] flex-1 py-2 rounded-xl transition-all ${
              contactOpen ? "bg-[#43464E]/[.08]" : ""
            }`}
          >
            <div className="relative">
              {contactOpen ? (
                <RiMailFill size={22} color="#43464E" />
              ) : (
                <RiMailLine size={22} color="#baaec0" />
              )}
              <span
                style={{
                  position: "absolute",
                  top: -2,
                  right: -2,
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#D5BADB",
                  border: "1.5px solid white",
                }}
              />
            </div>

            {contactOpen && (
              <span className="w-1 h-1 rounded-full bg-[#D5BADB]" />
            )}

            <span
              className={`text-[9px] uppercase tracking-wider ${
                contactOpen ? "text-[#43464E] font-medium" : "text-[#baaec0]"
              }`}
            >
              Contact
            </span>
          </button>

          {navLinks.slice(1).map((link) => {
            const isActive = active === link.name;
            return (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id, link.name)}
                className={`flex flex-col items-center gap-[3px] flex-1 py-2 rounded-xl transition-all ${
                  isActive ? "bg-[#43464E]/[.08]" : ""
                }`}
              >
                {link.icon(isActive)}
                {isActive && (
                  <span className="w-1 h-1 rounded-full bg-[#D5BADB]" />
                )}
                <span
                  className={`text-[9px] uppercase tracking-wider ${
                    isActive ? "text-[#43464E] font-medium" : "text-[#baaec0]"
                  }`}
                >
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
