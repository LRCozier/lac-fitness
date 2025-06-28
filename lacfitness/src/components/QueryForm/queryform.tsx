import React from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import './queryform.css';

type FormValues = {
  name: string
  email: string
  services: string[]
  message: string
}

const QueryForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>()

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      await emailjs.send('service_iswqmqe', 'template_sgfyded', data, {
        publicKey: 'YNexT8O1rsZO9dyTq'
      })
      console.log('FORM SUBMITTED!')
      reset()
    } catch (error: any) {
      console.error('FAILED...', error?.text || error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="query-form">
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        {...register('name', { required: 'Name is required' })}
        placeholder="Your Name"
      />
      {errors.name && <span className="error">{errors.name.message}</span>}

      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^\S+@\S+$/i,
            message: 'Enter a valid email'
          }
        })}
        placeholder="Your Email"
      />
      {errors.email && <span className="error">{errors.email.message}</span>}

      <label>Services Interested In:</label>
      <div className="checkbox-group">
        <label>
          <input
            type="checkbox"
            value="personalised_training_plan"
            {...register('services', { required: 'Select at least one service' })}
          />
          Personalised Training Plan
        </label>
        <label>
          <input
            type="checkbox"
            value="personal_training_sessions"
            {...register('services')}
          />
          Personal Training Sessions
        </label>
        <label>
          <input
            type="checkbox"
            value="general_enquiry"
            {...register('services')}
          />
          General Enquiry
        </label>
      </div>
      {errors.services && <span className="error">{errors.services.message}</span>}

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        rows={4}
        {...register('message', { required: 'Message is required' })}
        placeholder="Your Message"
      />
      {errors.message && <span className="error">{errors.message.message}</span>}

      <button type="submit" className="query-form-button">
        Send Message
      </button>
    </form>
  )
}

export default QueryForm;
