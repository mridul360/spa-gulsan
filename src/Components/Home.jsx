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
    <div className="w-full min-h-screen flex flex-col">

      {/* Sticky Navbar (optional) */}
      <div className="w-full sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Main Content Wrapper */}
      <main className="flex-1 w-full">
        
        {/* Each section gets consistent spacing */}
        <section className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
          <About />
        </section>

        <section className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-10 bg-gray-50">
          <Price />
        </section>

        <section className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
          <Book />
        </section>

        <section className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-10 bg-gray-50">
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