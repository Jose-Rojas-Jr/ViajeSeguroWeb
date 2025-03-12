import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo-container" onClick={() => setMenuOpen(false)}>
          <img src={"https://i.ibb.co/xtN8mjLv/logo.png"} alt="Viaje Seguro" className="logo-image" />
          <h1 className="logo">ViajeSeguro</h1>
        </Link>
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
          <li><Link to="/services" onClick={() => setMenuOpen(false)}>Servicios</Link></li>
          <li><Link to="/membership" onClick={() => setMenuOpen(false)}>Planes de Membresía</Link></li>
          <li><Link to="/Conductor" onClick={() => setMenuOpen(false)}>Conductor</Link></li>
          <li><Link to="/viajero" onClick={() => setMenuOpen(false)}>Viajero</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contacto</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;