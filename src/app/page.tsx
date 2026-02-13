import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

const HomePage = () => {
  return (
    <>
    <Navbar />
      <main>
      <section className="hero">
        <p style={{ fontSize: '0.95rem', color: '#7da87e', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>
          NURTURE YOUR GARDEN
        </p>
        <h1>BLOOM - REAL PASSION</h1>
        <p>
          Plant Tale is your intelligent gardening companion powered by AI and weather-aware technology helping home gardeners recognize plants, understand their unique needs, and care for them effortlessly. Whether you're a beginner or a seasoned green thumb, Plant Tale guides you with personalized tips, photo-based plant identification, and timely reminders to keep your garden blooming beautifully all year round.
        </p>
        <a href="#about" className="view-more">View More</a>
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