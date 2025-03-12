import React from 'react';
import './Contact.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contacto-container">
      <Navbar />
      
      <section className="contacto-hero">
        <h1>Contáctanos</h1>
        <p>Estamos aquí para ayudarte. Escríbenos y responderemos lo antes posible.</p>
      </section>
      
      <section className="contacto-info">
        <div className="info-item">
          <FaPhone size={40} className="icon" />
          <h3>Teléfono</h3>
          <p>+591 78795918</p>
        </div>
        <div className="info-item">
          <FaEnvelope size={40} className="icon" />
          <h3>Email</h3>
          <p>soporte@viajeseguro.com</p>
        </div>
        <div className="info-item">
          <FaMapMarkerAlt size={40} className="icon" />
          <h3>Ubicación</h3>
          <p>Av. Montes, Plaza Pérez Velasco, La Paz, Bolivia</p>
        </div>
      </section>
      
      <section className="contacto-form">
        <h2>Envíanos un mensaje</h2>
        <form>
          <input type="text" placeholder="Nombre" required />
          <input type="email" placeholder="Correo Electrónico" required />
          <textarea placeholder="Tu mensaje" rows="5" required></textarea>
          <button type="submit">Enviar Mensaje</button>
        </form>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
