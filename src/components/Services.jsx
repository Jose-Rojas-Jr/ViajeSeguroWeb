
import React from 'react';
import './Services.css';
import Navbar from './Navbar';
import Footer from './Footer';
import {
  FaCar, FaShieldAlt, FaUserShield, FaSchool, FaUsers, FaBuilding, FaRoute
} from 'react-icons/fa';

const Services = () => {
  return (
    <div className="services-container">
      <Navbar />

      <section className="services-hero">
        <h1>Nuestros Servicios</h1>
        <p>Soluciones de movilidad urbana con enfoque en seguridad, accesibilidad y responsabilidad social.</p>
      </section>

      <section className="services-list">
        <div className="service">
          <FaShieldAlt className="icon" />
          <h3>Seguridad Garantizada</h3>
          <p>Todos nuestros conductores están verificados y capacitados para ofrecerte un servicio responsable.</p>
        </div>

        <div className="service">
          <FaUserShield className="icon" />
          <h3>Solo Mujeres</h3>
          <p>Viajes exclusivos con conductoras certificadas para brindar un entorno seguro y de confianza.</p>
        </div>

        <div className="service">
          <FaSchool className="icon" />
          <h3>Escolar Seguro</h3>
          <p>Transporte escolar rastreado y controlado para la tranquilidad de padres y tutores.</p>
        </div>

        <div className="service">
          <FaBuilding className="icon" />
          <h3>Transporte Corporativo</h3>
          <p>Soluciones empresariales para el traslado eficiente y seguro de personal.</p>
        </div>

        <div className="service">
          <FaRoute className="icon" />
          <h3>Amplia Cobertura</h3>
          <p>Principal presencia en zonas con cobertura a internet </p>
        </div>

      
      </section>

      <Footer />
    </div>
  );
};

export default Services;
