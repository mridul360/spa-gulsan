import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Price from './Price'
import Book from './Book'
import Review from './Review'
import WhatsAppContactWidget from './WhatsAppContactWidget'
import Footer from './Footer'

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-[#D4BADA] flex flex-col">

      {/* Navbar is already fixed in its component, so no wrapper needed */}
      <Navbar />

      {/* Main Content Wrapper */}
      <main className="flex-1 w-full pt-[70px]">
        
        {/* Sections use inner Containers for horizontal padding */}
        <section className="w-full py-6 sm:py-10">
          <About />
        </section>

        <section className="w-full py-6 sm:py-10 bg-[#D5BADB]">
          <Price />
        </section>

        <section className="w-full py-6 sm:py-10">
          <Book />
        </section>

        <section className="w-full py-6 sm:py-10 bg-[#D5BADB]">
          <Review />
        </section>

      </main>

      {/* Floating WhatsApp button (kept outside layout flow) */}
      <WhatsAppContactWidget />

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default Home