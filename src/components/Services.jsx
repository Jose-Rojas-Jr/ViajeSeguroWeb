import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import Navbar from './Navbar';
import Footer from './Footer';
import {
  FaCar, FaShieldAlt, FaUserShield, FaSchool, FaUsers, 
  FaBuilding, FaRoute, FaHandshake, FaClock, FaMapMarkedAlt, 
  FaMobileAlt, FaMoneyBillWave, FaLock, FaHeadset,
  FaStar, FaSmile, FaCalendarCheck, FaCheck
} from 'react-icons/fa';

const Services = () => {
  // Efecto para animaciones al hacer scroll
  useEffect(() => {
    const sections = document.querySelectorAll('.services-container section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
      observer.observe(section);
    });

    // Efecto de onda para botones
    const btns = document.querySelectorAll('.services-hero-button, .cta-button-primary, .cta-button-secondary');
    
    btns.forEach(btn => {
      btn.addEventListener('click', function(e) {
        const x = e.clientX - e.target.getBoundingClientRect().left;
        const y = e.clientY - e.target.getBoundingClientRect().top;
        
        const ripple = document.createElement('span');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Función para hacer scroll suave hacia una sección
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="services-container">
      <Navbar />

      {/* HERO */}
      <section className="services-hero">
        <div className="services-hero-content">
          <h1>Nuestros Servicios</h1>
          <p>Soluciones de movilidad urbana con enfoque en seguridad, accesibilidad y responsabilidad social para todos los ciudadanos bolivianos.</p>
          <a 
            href="#services-list" 
            className="services-hero-button"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('services-list');
            }}
          >
            Explorar Servicios
          </a>
        </div>
      </section>

      {/* INTRODUCCIÓN */}
      <section className="services-intro">
        <h2>Transformando la Movilidad Urbana</h2>
        <p>
          En ViajeSeguro, entendemos que la movilidad es más que solo transportarse de un punto a otro. 
          Es sobre crear experiencias seguras, confiables y accesibles para todos.
        </p>
        <p>
          Nuestros servicios están diseñados pensando en las necesidades específicas de diferentes grupos 
          de usuarios, siempre manteniendo la seguridad y la calidad como prioridades.
        </p>
      </section>

      {/* LISTA DE SERVICIOS */}
      <section id="services-list" className="services-list">
        <div className="service">
          <FaShieldAlt className="icon" />
          <h3>Seguridad Garantizada</h3>
          <p>
            Todos nuestros conductores pasan por una rigurosa verificación de antecedentes y reciben capacitación 
            en protocolos de seguridad. Cada viaje está monitoreado en tiempo real para tu tranquilidad.
          </p>
          <a href="/contact" className="service-action">Conoce nuestros protocolos</a>
        </div>
        
        <div className="service">
          <FaUserShield className="icon" />
          <h3>Solo Mujeres</h3>
          <p>
            Servicio exclusivo con conductoras certificadas para mujeres que buscan un entorno 
            seguro y de confianza durante sus trayectos. Disponible las 24 horas.
          </p>
          <a href="/viajero" className="service-action">Solicitar viaje</a>
        </div>
        
        <div className="service">
          <FaSchool className="icon" />
          <h3>Escolar Seguro</h3>
          <p>
            Transporte escolar rastreado y controlado para la tranquilidad de padres y tutores. 
            Notificaciones automáticas de llegada y salida, y conductores especializados.
          </p>
          <a href="/membership" className="service-action">Ver planes mensuales</a>
        </div>
        
        <div className="service">
          <FaBuilding className="icon" />
          <h3>Transporte Corporativo</h3>
          <p>
            Soluciones empresariales para el traslado eficiente y seguro de personal. 
            Optimiza costos y mejora la puntualidad de tus colaboradores con nuestras flotas dedicadas.
          </p>
          <a href="/contact" className="service-action">Solicitar cotización</a>
        </div>
        
        <div className="service">
          <FaRoute className="icon" />
          <h3>Amplia Cobertura</h3>
          <p>
            Presencia en las principales zonas urbanas de La Paz, Santa Cruz y Cochabamba, 
            con planes de expansión a más ciudades bolivianas durante 2025.
          </p>
          <a href="/membership" className="service-action">Ver zonas de cobertura</a>
        </div>
        
        <div className="service">
          <FaClock className="icon" />
          <h3>Servicio 24/7</h3>
          <p>
            Disponibilidad completa a cualquier hora del día o de la noche. 
            Nunca te quedarás sin opciones de transporte seguro, sin importar la hora.
          </p>
          <a href="/viajero" className="service-action">Reservar ahora</a>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="services-benefits">
        <h2>Beneficios de Nuestros Servicios</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <FaLock className="benefit-icon" />
            <h3>Privacidad Garantizada</h3>
            <p>Tus datos personales están protegidos con los más altos estándares de seguridad.</p>
          </div>
          
          <div className="benefit-item">
            <FaHeadset className="benefit-icon" />
            <h3>Soporte 24/7</h3>
            <p>Atención al cliente disponible todo el día, todos los días de la semana.</p>
          </div>
          
          <div className="benefit-item">
            <FaMobileAlt className="benefit-icon" />
            <h3>App Intuitiva</h3>
            <p>Fácil de usar para todos los niveles de usuarios, con interfaces claras y sencillas.</p>
          </div>
          
          <div className="benefit-item">
            <FaMoneyBillWave className="benefit-icon" />
            <h3>Precios Justos</h3>
            <p>Tarifas transparentes y sin sorpresas. Siempre sabrás cuánto pagarás antes de confirmar.</p>
          </div>
          
          <div className="benefit-item">
            <FaMapMarkedAlt className="benefit-icon" />
            <h3>Seguimiento en Tiempo Real</h3>
            <p>Comparte tu ubicación con familiares o amigos durante todo el trayecto.</p>
          </div>
          
          <div className="benefit-item">
            <FaSmile className="benefit-icon" />
            <h3>Experiencia de Calidad</h3>
            <p>Conductores amables y profesionales, vehículos en excelentes condiciones.</p>
          </div>
          
          <div className="benefit-item">
            <FaCalendarCheck className="benefit-icon" />
            <h3>Reservas Anticipadas</h3>
            <p>Programa tus viajes con antelación para una mejor planificación de tu tiempo.</p>
          </div>
          
          <div className="benefit-item">
            <FaCheck className="benefit-icon" />
            <h3>Verificación Completa</h3>
            <p>Todos los conductores están verificados mediante múltiples métodos de validación.</p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="services-cta">
        <div className="services-cta-content">
          <h2>Comienza a viajar seguro hoy mismo</h2>
          <p>Únete a los miles de bolivianos que confían en nosotros para sus desplazamientos diarios, seguros y confiables.</p>
          <div className="cta-buttons">
            <a href="https://play.google.com" className="cta-button-primary">Descargar App</a>
            <Link to="/contact" className="cta-button-secondary">Contactar Soporte</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;