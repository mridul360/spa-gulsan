import React from 'react'

const About = () => {
  return (
    <div id='about' className="bg-stone-50 text-stone-800 min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#4a6741] py-20 px-6 text-center text-white">
        <h1 className="display text-5xl md:text-6xl font-bold mb-4">Our Heritage</h1>
        <p className="max-w-2xl mx-auto text-white/80 font-light tracking-wide uppercase text-xs">
          Providing sanctuary and restoration for over 15 years
        </p>
      </section>

      {/* Story Section */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="display text-4xl font-bold mb-6 text-[#4a6741]">A Journey to Serenity</h2>
          <p className="text-stone-600 leading-relaxed mb-6">
            Founded in 2008, Serenity Wellness & Spa began with a simple mission: to create a space where the noise of the world fades away. We believe that true wellness comes from harmony between the mind, body, and spirit.
          </p>
          <p className="text-stone-600 leading-relaxed">
            Our therapists are trained in ancient techniques combined with modern science to provide a restorative experience that goes beyond the surface. Every treatment is a bespoke journey tailored to your individual needs.
          </p>
        </div>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80" 
            alt="Spa interior" 
            className="rounded-sm shadow-xl"
          />
          <div className="absolute -bottom-6 -left-6 bg-[#b5a96e] p-8 hidden md:block">
            <p className="display text-2xl text-white italic">"The art of relaxation."</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 px-6 border-y border-stone-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          {['Purity', 'Harmony', 'Excellence'].map((value) => (
            <div key={value}>
              <h3 className="display text-2xl font-bold text-[#4a6741] mb-4">{value}</h3>
              <p className="text-stone-500 text-sm font-light">We commit to the highest standards of service and organic products in everything we do.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About
