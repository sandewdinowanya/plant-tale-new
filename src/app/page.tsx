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

      <section id="services">
        <div>
          <h2>Our Services</h2>
          <p>Plant Tale helps you care for your plants with personalized recommendations and timely reminders.</p> 
          <div className="service-cards">

            <div className="card-1">
              <img src="/service-1.png" alt="Plant Recognition" />
              <h2>PLANT RECOGNITION</h2>
              <p>Identify any plant instantly with our AI-powered plant recognition technology. Just upload a photo and receive accurate identification.</p>
            </div>

            <div className="card-2">
              <img src="/service-2.jpg" alt="Plant Care" />
              <h2>CARE INSTRUCTIONS</h2>
              <p>Get personalized care advice for each of your plants, including watering schedules, sunlight requirements, and soil recommendations.</p>
            </div>

            <div className="card-3">
              <img src="/service-3.png" alt="Plant Reminder" />
              <h2>SMART REMINDERS</h2>
              <p>Never forget to water your plants again. Receive timely notifications customized to each plant's specific needs.</p>
            </div>

            <div className="card-2">
              <img src="/service-4.png" alt="Plant Care" />
              <h2>WETHER INTEGRATION</h2>
              <p>Our app uses local weather data to adjust care recommendations, ensuring your plants get exactly what they need in any climate.</p>
            </div>

          </div>
        </div>
      </section>

      <section id="features">
        <div className="features-container">
          <div className="features-image">
            <img src="/feature.avif" alt="Feature Image" />
          </div>
          <div className="features-content">
            <h2>Key Features</h2>
            <p>Discover how Plant Tale can transform your gardening experience with these powerful features</p> 
            <div className="feature-item">
              <span className="feature-number">01</span>
              <div className="feature-text">
                <strong>AI Plant Recognition</strong>
                <p>Instantly identify any plant species by simply taking a photo with your device's camera</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-number">02</span>
              <div className="feature-text">
                <strong>Personalized Care Plans</strong>
                <p>Get tailored care instructions unique to each plant's species and your local environment</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-number">03</span>
              <div className="feature-text">
                <strong>Weather Integration</strong>
                <p>Our system adapts care recommendations based on real-time local weather conditions</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-number">04</span>
              <div className="feature-text">
                <strong>Care Reminders</strong>
                <p>Receive timely notifications when your plants need watering, fertilizing, or other care</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-number">05</span>
              <div className="feature-text">
                <strong>Plant Health Monitoring</strong>
                <p>Track your plants' growth and health over time with visual progress charts</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-number">06</span>
              <div className="feature-text">
                <strong>Community Garden</strong>
                <p>Connect with fellow plant enthusiasts to share tips, success stories, and advice</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="grid-1">
          <h1>Plant Tale</h1>
          <p>Plant Tale is a smart flower care companion that helps you identify plants, provides personalized care instructions, and sends timely reminders to keep your plants thriving and beautiful.</p>
        </div>
        <div className="grid-2">
          <p>Home</p>
          <p>Features</p>
          <p>Services</p>
          <p>About</p>
        </div>
        <div className="grid-3">
          <h2>Contact Us</h2>
          <p>info@bloombuddy.com</p>
          <p>+1 (123) 456-7890</p>
          <p>123 Garden St, Plant City</p>
          <div className="social-media-icons">
            <p>F</p>
            <p>L</p>
            <p>I</p>
            <p>T</p>
          </div>
        </div>
        <div className="copy-right">
          <p>© 2026 BloomBuddy. All rights reserved.</p>
        </div>
      </footer>

    </main> 
</>
    
  )
}

export default HomePage