import React from 'react'
import QueryForm from '../components/QueryForm/queryform'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import './pages.css'

const RegisterInterest: React.FC = () => {

  const navigate = useNavigate()
  
    const handleLanding = () => {
      navigate('/')
    }

  return (
    <>
      <Helmet>
        <title>Register Interest | L.A.C Fitness</title>
        <meta
          name="description"
          content="Register your interest for personal training and online coaching with L.A.C Fitness."
        />
      </Helmet>

      <main>
      <button className="cta-button" onClick={handleLanding}>
            Home
          </button>
        <h1 className='title'>Register Your Interest</h1>
        <p className='tagline'>Fill in the form below and I will get back to you.</p>

        <QueryForm />
        
      </main>
    </>
  )
}

export default RegisterInterest
