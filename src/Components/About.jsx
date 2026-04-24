import React, { useEffect, useState } from "react";
import Container from "./Layout/Container";
import dryMassage from "../assets/dry-massage.webp";
import mmaaaasss from "../assets/mmaaaasss.webp";
import neck from "../assets/neck.jpeg";
import neck2 from "../assets/neck2.jpeg";
import neck3 from "../assets/neck3.jpeg";

const slides = [
  {
    image: dryMassage,
    alt: "Spa interior",
  },
  {
    image: mmaaaasss,
    alt: "Therapeutic massage",
  },
  {
    image: neck,
    alt: "Neck massage",
  },
  {
    image: neck2,
    alt: "Neck massage",
  },
  {
    image: neck3,
    alt: "Neck massage",
  },
];

const aboutContent = {
  label: "Spa Interior",
  title: "The art of relaxation.",
  text1:
    "Founded in 2007, Zenvy Wellness & Spa began with a simple mission: to create a space where the noise of the world fades away.",
  text2:
    "Our therapists combine ancient techniques with modern science to provide a restorative experience tailored to your needs.",
};

const About = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div id="about" className="bg-[#F4DADF] text-stone-800">
      <section className="bg-[#43464E] py-14 md:py-20 px-4 text-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 md:mb-4">
          Our Heritage
        </h1>

        <p className="max-w-2xl mx-auto text-white/80 font-light tracking-wide uppercase text-[10px] sm:text-xs md:text-sm">
          Providing sanctuary and restoration for over 15 years
        </p>
      </section>

      <section className="py-8 md:py-12">
        <div className="relative h-[260px] sm:h-[380px] md:h-[620px] overflow-hidden shadow-lg">
          {slides.map((slide, index) => {
            const isActive = current === index;

            return (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-[1600ms] ease-in-out ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className={`h-full w-full object-cover transition-transform duration-[4000ms] ease-out ${
                    isActive ? "scale-110" : "scale-100"
                  }`}
                />
              </div>
            );
          })}

          <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-black/5 to-transparent" />
        </div>
      </section>

      <Container>
        <section className="pb-12 md:pb-20">
          <div className="p-6 sm:p-8 md:p-10 max-w-4xl mx-auto">
            <p className="text-[11px] text-center sm:text-xs uppercase tracking-[0.28em] text-[#43464E]/60 mb-3">
              {aboutContent.label}
            </p>

            <h2 className="text-2xl text-center sm:text-3xl md:text-5xl font-bold text-[#43464E] leading-tight mb-5">
              {aboutContent.title}
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-stone-700 leading-7 md:leading-8 mb-4">
              {aboutContent.text1}
            </p>

            <p className="text-sm sm:text-base md:text-lg text-stone-600 leading-7 md:leading-8">
              {aboutContent.text2}
            </p>
          </div>
        </section>
      </Container>

      <section className="bg-[#D5BADB] py-12 md:py-20 px-4 sm:px-6 border-y border-[#43464E]/10">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 text-center">
            {["Purity", "Harmony", "Excellence"].map((value) => (
              <div key={value} className="px-2">
                <h3 className="text-lg md:text-2xl font-bold text-[#43464E] mb-2 md:mb-4">
                  {value}
                </h3>

                <p className="text-stone-700 text-xs sm:text-sm font-light">
                  We commit to the highest standards of service and organic
                  products in everything we do.
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default About;
