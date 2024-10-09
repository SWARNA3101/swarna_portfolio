import React, { useState } from 'react';
import styles from './NavbarStyles.module.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu visibility for mobile devices
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h3><a href="#hero">Swarnali Das</a></h3>
      </div>

      {/* Hamburger menu (only shown on small screens) */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>

      {/* Nav links - only collapse on mobile */}
      <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
        <li><a href="#hero" onClick={toggleMenu}>Home</a></li>
        <li><a href="#education" onClick={toggleMenu}>Education</a></li>
        <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
        <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
