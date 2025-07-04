import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaLightbulb } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Función para verificar si un enlace está activo
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Efecto para cerrar el menú al hacer clic en cualquier parte de la pantalla
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.navbar')) {
        setMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen]);

  // Efecto para manejar el cambio de estilo al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Agregar clase al body para prevenir scroll cuando el menú está abierto en móvil
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <>
      <div className={`overlay ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(false)}></div>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <Link to="/" className="logo-container" onClick={() => setMenuOpen(false)}>
            <div className="logo-icon">
              <FaLightbulb />
            </div>
            <div className="logo-text">
              <h1 className="logo-title">SmartLight</h1>
              <span className="logo-subtitle"></span>
            </div>
          </Link>
          
          <div className="menu-icon" onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(!menuOpen);
          }}>
            {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </div>
          
          <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link 
                to="/" 
                className={isActive('/') ? 'active' : ''} 
                onClick={() => setMenuOpen(false)}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link 
                to="/nosotros" 
                className={isActive('/nosotros') ? 'active' : ''} 
                onClick={() => setMenuOpen(false)}
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className={isActive('/services') ? 'active' : ''} 
                onClick={() => setMenuOpen(false)}
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link 
                to="/proyecto" 
                className={isActive('/proyecto') ? 'active' : ''} 
                onClick={() => setMenuOpen(false)}
              >
                Proyecto
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={isActive('/contact') ? 'active' : ''} 
                onClick={() => setMenuOpen(false)}
              >
                Contacto
              </Link>
            </li>
            <li>
              <a 
                href="/dashboard" 
                className="dashboard-link"
                onClick={() => setMenuOpen(false)}
              >
                Dashboard
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;