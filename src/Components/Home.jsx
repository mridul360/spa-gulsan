import React from 'react'
import Container from './Layout/Container'
import Book from './Book'
import Price from './Price'
import About from './About'     
import Navbar from './Navbar'
import Footer from './Footer'
import Review from './Review'
import WhatsAppContactWidget from './WhatsAppContactWidget' 

const Home = () => {
  return (
      <div>
        <Navbar />
      <About /> 
      <Price />
      <Book />
      <Review/>
      <WhatsAppContactWidget />
      <Footer/>
      </div>
      

  )
}

export default Home
