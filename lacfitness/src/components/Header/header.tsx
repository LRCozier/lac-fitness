import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header>
      <nav className="navbar">
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
