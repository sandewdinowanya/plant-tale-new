import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

const HomePage = () => {
  return (
    <>
    <Navbar />
      <main>
      <div>HomePage</div>
      <section className="hero">
        <h1> Home</h1>
      </section>

      <section id="about">
        <h2>About Us</h2>
      </section>

      <section id="services">
        <h2>Services</h2>
      </section>

      <section id="features">
        <h2>Features</h2>
      </section>

    </main> 
</>
    
  )
}

export default HomePage