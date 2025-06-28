import React from 'react'
import QueryForm from '../components/QueryForm/queryform'
import { Helmet } from 'react-helmet'
import './pages.css'

const RegisterInterest: React.FC = () => {
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
        <h1 className='title'>Register Your Interest</h1>
        <p className='tagline'>Fill in the form below and I will get back to you.</p>

        <QueryForm />
      </main>
    </>
  )
}

export default RegisterInterest
