import React from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import './pages.css'
import heroImage from '../assets/hero.jpg'

const LandingPage: React.FC = () => {
  const navigate = useNavigate()

  const handleRegisterClick = () => {
    navigate('/register-interest')
  }

  return (
    <>
      <Helmet>
        <title>L.A.C Fitness | Personal Training & Online Coaching</title>
        <meta
          name="description"
          content="L.A.C Fitness offers personal training and online coaching services in Richmond Upon Thames and surrounding areas. Get fit and healthy with expert guidance."
        />
        <meta name="keywords" content="personal training, online coaching, fitness, Richmond Upon Thames, health, workout" />
        <meta name="author" content="Luke Cozier" />
        <meta property="og:title" content="L.A.C Fitness | Personal Training & Online Coaching" />
        <meta
          property="og:description"
          content="Personal training and online coaching services in Richmond Upon Thames by L.A.C Fitness."
        />
      </Helmet>

      <section className="landing-container">
        <div className="landing-left">
          <img src={heroImage} alt="L.A.C Fitness hero" className="hero-image" />
        </div>
        <div className="landing-right">
          <h1 className="site-title">L.A.C Fitness</h1>
          <p className="site-tagline">
            Personal Training & Online Coaching in Richmond Upon Thames
          </p>
          <button className="cta-button" onClick={handleRegisterClick}>
            Register Interest
          </button>
        </div>
      </section>
    </>
  )
}

export default LandingPage
