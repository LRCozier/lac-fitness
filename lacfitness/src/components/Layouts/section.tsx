import React from 'react'

interface SectionProps {
  title?: string
  subtitle?: string
  children: React.ReactNode
}

const Section: React.FC<SectionProps> = ({ title, subtitle, children }) => {
  return (
    <section className="section">
      {title && <h1 className="heading">{title}</h1>}
      {subtitle && <h2 className="subheading">{subtitle}</h2>}
      {children}
    </section>
  )
}

export default Section
