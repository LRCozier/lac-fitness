"use client";

import React, { useState, MouseEvent } from "react";
import Link from "next/link";
import "./header.css";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => setMenuOpen((prev) => !prev);

  const closeMenu = (e?: MouseEvent<HTMLAnchorElement>): void => {
    if (e) e.preventDefault();
    setMenuOpen(false);
  };

  return (
    <header>
      <nav className="navbar">
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="/services" onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
