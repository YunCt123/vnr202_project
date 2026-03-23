import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const isActive = (path: string) => location.pathname === path

  return (
    <>
      <motion.header
        className="header"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <nav className="nav container">
          <Link to="/" className="logo">
            <motion.span
              className="logo-icon"
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.5 }}
            >
              &#9733;
            </motion.span>
            <span className="logo-text">ĐCSVN</span>
          </Link>
          <ul className="nav-links">
            <li>
              <Link
                to="/"
                className={isActive('/') ? 'active' : ''}
              >
                Trang chủ
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={isActive('/about') ? 'active' : ''}
              >
                Giới thiệu
              </Link>
            </li>
            <li>
              <Link
                to="/timeline"
                className={isActive('/timeline') ? 'active' : ''}
              >
                Dòng thời gian
              </Link>
            </li>
            <li>
              <Link
                to="/map"
                className={isActive('/map') ? 'active' : ''}
              >
                Story Map
              </Link>
            </li>
            <li>
              <Link
                to="/leaders"
                className={isActive('/leaders') ? 'active' : ''}
              >
                Lãnh đạo
              </Link>
            </li>
            <li>
              <Link
                to="/videos"
                className={isActive('/videos') ? 'active' : ''}
              >
                Video
              </Link>
            </li>
            <li>
              <Link
                to="/group"
                className={isActive('/group') ? 'active' : ''}
              >
                Nhóm
              </Link>
            </li>
            <li>
              <Link
                to="/tools-ai"
                className={isActive('/tools-ai') ? 'active' : ''}
              >
                Tools & AI
              </Link>
            </li>
          </ul>
          <motion.button
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            whileTap={{ scale: 0.9 }}
          >
            <span></span>
            <span></span>
            <span></span>
          </motion.button>
        </nav>
      </motion.header>

      <motion.div
        className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}
        initial={false}
        animate={mobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      >
        <ul className="mobile-nav-links">
          <li>
            <Link to="/" onClick={closeMobileMenu}>
              Trang chủ
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMobileMenu}>
              Giới thiệu
            </Link>
          </li>
          <li>
            <Link to="/timeline" onClick={closeMobileMenu}>
              Dòng thời gian
            </Link>
          </li>
          <li>
            <Link to="/map" onClick={closeMobileMenu}>
              Story Map
            </Link>
          </li>
          <li>
            <Link to="/leaders" onClick={closeMobileMenu}>
              Lãnh đạo
            </Link>
          </li>
          <li>
            <Link to="/videos" onClick={closeMobileMenu}>
              Video
            </Link>
          </li>
          <li>
            <Link to="/group" onClick={closeMobileMenu}>
              Nhóm
            </Link>
          </li>
          <li>
            <Link to="/tools-ai" onClick={closeMobileMenu}>
              Tools & AI
            </Link>
          </li>
        </ul>
      </motion.div>
    </>
  )
}
