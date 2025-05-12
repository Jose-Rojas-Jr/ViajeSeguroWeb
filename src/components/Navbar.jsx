import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
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
            <img src={"https://i.ibb.co/xtN8mjLv/logo.png"} alt="Viaje Seguro" className="logo-image" />
            <h1 className="logo">ViajeSeguro</h1>
          </Link>
          
          <div className="menu-icon" onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(!menuOpen);
          }}>
            {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
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
                to="/services" 
                className={isActive('/services') ? 'active' : ''} 
                onClick={() => setMenuOpen(false)}
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link 
                to="/membership" 
                className={isActive('/membership') ? 'active' : ''} 
                onClick={() => setMenuOpen(false)}
              >
                Membresía
              </Link>
            </li>
            <li>
              <Link 
                to="/Conductor" 
                className={isActive('/Conductor') ? 'active' : ''} 
                onClick={() => setMenuOpen(false)}
              >
                Conductor
              </Link>
            </li>
            <li>
              <Link 
                to="/viajero" 
                className={isActive('/viajero') ? 'active' : ''} 
                onClick={() => setMenuOpen(false)}
              >
                Viajero
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
                href="https://viajeseguro-b204d.web.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="admin-link"
                onClick={() => setMenuOpen(false)}
              >
                Administración
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;