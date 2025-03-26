import React from 'react';
import './Home.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaShieldAlt, FaUserCheck, FaMapMarkedAlt, FaDownload, FaCar, FaMap, FaPhone, FaMoneyBill, FaUsers, FaBuilding, FaExclamationTriangle } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      
      {/* Sección Hero */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Tu viaje, más seguro que nunca</h1>
          <p>ViajeSeguro te conecta con conductores verificados para que llegues a tu destino con tranquilidad.</p>
          <a href="https://play.google.com" className="download-button">
            <button>Descargar en Play Store</button>
          </a>
        </div>
        <div className="hero-image">
          <img src="https://i.ibb.co/xtN8mjLv/logo.png" alt="Viaje Seguro" />
        </div>
      </section>

      {/* Nueva Sección: Quiénes Somos */}
      <section className="about-us">
        <h2>Quiénes Somos</h2>
        <p>Somos una plataforma de movilidad segura diseñada para brindar confianza y protección en cada viaje.</p>

        <div className="about-columns">
          <div className="about-box">
            <h3> Nuestra Misión</h3>
            <p>Ofrecer un servicio de transporte seguro, accesible y confiable para todos, priorizando la protección de nuestros pasajeros y conductores.</p>
          </div>

          <div className="about-box">
            <h3> Nuestra Visión</h3>
            <p>Ser la plataforma de transporte más confiable en La Paz y expandirnos a toda Bolivia con un enfoque en seguridad y tecnología innovadora.</p>
          </div>

          <div className="about-box">
            <h3> Nuestros Valores</h3>
            
              <p>Seguridad y Confianza Transparencia y Honestidad Innovación Tecnológica Compromiso con la Comunidad</p>
              
          </div>
        </div>
      </section>

      {/* Sección ¿Cómo funciona? */}
      <section className="how-it-works">
        <h2>¿Cómo funciona?</h2>
        <div className="steps">
          <div className="step">
            <FaDownload size={40} className="icon" />
            <h3>Descarga la App</h3>
            <p>Regístrate en minutos y accede a todas las funciones.</p>
          </div>
          <div className="step">
            <FaCar size={40} className="icon" />
            <h3>Solicita un Viaje</h3>
            <p>Elige un conductor verificado y prepárate para el viaje.</p>
          </div>
          <div className="step">
            <FaMap size={40} className="icon" />
            <h3>Viaja con Seguridad</h3>
            <p>Monitorea el trayecto en tiempo real y llega seguro a tu destino.</p>
          </div>
        </div>
      </section>

      {/* Sección Seguridad */}
      <section className="security-section">
        <h2>Tu seguridad es nuestra prioridad</h2>
        <div className="security-features">
          <div className="feature">
            <FaShieldAlt size={40} className="icon" />
            <h3>Conductores Verificados</h3>
            <p>Todos nuestros conductores pasan una verificación de identidad y antecedentes.</p>
          </div>
          <div className="feature">
            <FaUserCheck size={40} className="icon" />
            <h3>Monitoreo en Tiempo Real</h3>
            <p>Ubicación GPS y cámaras en el vehículo para mayor seguridad.</p>
          </div>
          <div className="feature">
            <FaExclamationTriangle size={40} className="icon" />
            <h3>Botón de Emergencia</h3>
            <p>Disponible en la app y físicamente en el vehículo.</p>
          </div>
        </div>
      </section>

      {/* Sección Planes de Membresía */}
      <section className="membership-section">
        <h2>Planes de Membresía</h2>
        <div className="membership-options">
          <div className="membership">
            <FaUsers size={40} className="icon" />
            <h3>Familiar</h3>
            <p>Transporte seguro para hasta 5 personas con seguimiento en vivo.</p>
          </div>
          <div className="membership">
            <FaBuilding size={40} className="icon" />
            <h3>Empresarial</h3>
            <p>Movilidad segura para empleados con tarifas especiales.</p>
          </div>
        </div>
      </section>

      {/* Sección Descarga la App */}
      <section className="cta">
        <h2>Descarga ViajeSeguro hoy mismo</h2>
        <p>Empieza a viajar con total confianza y seguridad.</p>
        <a href="https://play.google.com" className="download-button">
            <button>Descargar Ahora</button>
          </a>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
