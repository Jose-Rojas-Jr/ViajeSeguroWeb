import React from 'react';
import './Services.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaCar, FaShieldAlt, FaUserShield, FaSchool, FaUsers, FaBuilding } from 'react-icons/fa';

const Services = () => {
  return (
    <div className="services-container">
      <Navbar />
      
      <section className="services-hero">
        <h1>Nuestros Servicios</h1>
        <p>Soluciones de transporte diseñadas para brindarte seguridad y comodidad en cada viaje.</p>
      </section>
      
      <section className="services-list">
        <div className="service">
          <FaShieldAlt size={50} className="icon" />
          <h3>Seguridad Garantizada</h3>
          <p>Todos nuestros conductores están verificados y capacitados para ofrecerte el mejor servicio.</p>
        </div>
        
        <div className="service">
          <FaUserShield size={50} className="icon" />
          <h3>Solo Mujeres</h3>
          <p>Conductoras certificadas para brindar un entorno de confianza y seguridad a nuestras pasajeras.</p>
        </div>
        
        <div className="service">
          <FaSchool size={50} className="icon" />
          <h3>Escolar Seguro</h3>
          <p>Transporte especializado para niños con seguimiento en tiempo real y notificaciones a los padres.</p>
        </div>
        
        <div className="service">
          <FaUsers size={50} className="icon" />
          <h3>Adultos Mayores</h3>
          <p>Viajes con asistencia especial para garantizar comodidad y tranquilidad en cada trayecto.</p>
        </div>
        
        <div className="service">
          <FaBuilding size={50} className="icon" />
          <h3>Transporte Corporativo</h3>
          <p>Movilidad segura para empleados con planes personalizados para empresas.</p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;