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
        <div>
          <h2>About Us</h2>
        </div>
      </section>

      <section id="services">
        <div>
          <h2>Our Services</h2>
          <p>Plant Tale helps you care for your plants with personalized recommendations and timely reminders.</p> 
          <div className="service-cards">

            <div className="card-1">
              <img src="/plant-recognition.jpg" alt="Plant Recognition" />
              <h2>PLANT RECOGNITION</h2>
              <p>Identify any plant instantly with our AI-powered plant recognition technology. Just upload a photo and receive accurate identification.</p>
            </div>

            <div className="card-2">
              <img src="/plant-care.jpg" alt="Plant Care" />
              <h2>CARE INSTRUCTIONS</h2>
              <p>Get personalized care advice for each of your plants, including watering schedules, sunlight requirements, and soil recommendations.</p>
            </div>

            <div className="card-3">
              <img src="/plant-reminder.jpg" alt="Plant Reminder" />
              <h2>SMART REMINDERS</h2>
              <p>Never forget to water your plants again. Receive timely notifications customized to each plant's specific needs.</p>
            </div>

            <div className="card-2">
              <img src="/plant-care.jpg" alt="Plant Care" />
              <h2>WETHER INTEGRATION</h2>
              <p>Our app uses local weather data to adjust care recommendations, ensuring your plants get exactly what they need in any climate.</p>
            </div>

          </div>
        </div>
      </section>

      <section id="features">
        <div>
          <h2>Key Features</h2>
          <p>Discover how Plant Tale can transform your gardening experience with these powerful features</p> 
          <p><strong>01</strong> AI Plant Recognition<br/><span style={{fontSize: '0.9rem', color: '#666'}}>Instantly identify any plant species by simply taking a photo with your device's camera</span></p>
          <p><strong>02</strong> Personalized Care Plans<br/><span style={{fontSize: '0.9rem', color: '#666'}}>Get tailored care instructions unique to each plant's species and your local environment</span></p>
          <p><strong>03</strong> Weather Integration<br/><span style={{fontSize: '0.9rem', color: '#666'}}>Our system adapts care recommendations based on real-time local weather conditions</span></p>
          <p><strong>04</strong> Care Reminders<br/><span style={{fontSize: '0.9rem', color: '#666'}}>Receive timely notifications when your plants need watering, fertilizing, or other care</span></p>
          <p><strong>05</strong> Plant Health Monitoring<br/><span style={{fontSize: '0.9rem', color: '#666'}}>Track your plants' growth and health over time with visual progress charts</span></p>
          <p><strong>06</strong> Community Garden<br/><span style={{fontSize: '0.9rem', color: '#666'}}>Connect with fellow plant enthusiasts to share tips, success stories, and advice</span></p>
        </div>
      </section>

    </main> 
</>
    
  )
}

export default HomePage