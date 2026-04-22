import React from 'react'
import Container from './Layout/Container'
import dryMassage from '../assets/dry-massage.webp'

const About = () => {
  return (
    <div id="about" className="bg-white text-stone-800">

      {/* HERO */}
      <section className="bg-[#43464E] py-14 md:py-20 px-4 text-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 md:mb-4">
          Our Heritage
        </h1>

        <p className="max-w-2xl mx-auto text-white/80 font-light tracking-wide uppercase text-[10px] sm:text-xs md:text-sm">
          Providing sanctuary and restoration for over 15 years
        </p>
      </section>

      {/* STORY */}
      <Container>
        <section className="py-12 md:py-20 grid grid-cols-1 md:md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* TEXT - Order 2 on mobile to show image first */}
          <div className="order-2 md:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 md:mb-6 text-[#43464E]">
              A Journey to Serenity
            </h2>

            <p className="text-stone-600 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
              Founded in 2008, Serenity Wellness & Spa began with a simple mission:
              to create a space where the noise of the world fades away.
            </p>

            <p className="text-stone-600 leading-relaxed text-sm md:text-base">
              Our therapists combine ancient techniques with modern science to
              provide a restorative experience tailored to your needs.
            </p>
          </div>

          {/* IMAGE - Order 1 on mobile */}
          <div className="relative order-1 md:order-2">
            <img
              src={dryMassage}
              alt="Spa interior"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />

            {/* QUOTE (hidden on mobile) */}
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-[#808080] p-4 md:p-8 hidden sm:block">
              <p className="text-lg md:text-2xl text-white italic">
                "The art of relaxation."
              </p>
            </div>
          </div>

        </section>
      </Container>

      {/* VALUES */}
      <section className="bg-[#D5BADB] py-12 md:py-20 px-4 sm:px-6 border-y border-[#43464E]/10">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 text-center">

          {['Purity', 'Harmony', 'Excellence'].map((value) => (
            <div key={value} className="px-2">
              <h3 className="text-lg md:text-2xl font-bold text-[#43464E] mb-2 md:mb-4">
                {value}
              </h3>

              <p className="text-stone-700 text-xs sm:text-sm font-light">
                We commit to the highest standards of service and organic products in everything we do.
              </p>
            </div>
          ))}

          </div>
        </Container>

      </section>

    </div>
  )
}

export default About