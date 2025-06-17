import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <main className="lacfitness-page">
        {children}
      </main>
    </div>
  )
}

export default Layout
