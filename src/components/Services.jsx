import React, { useEffect } from 'react';
import './Services.css';
import Navbar from './Navbar';
import Footer from './Footer';
import {
  FaLightbulb, FaWifi, FaChartLine, FaCog, FaShieldAlt, 
  FaServer, FaRoute, FaHandshake, FaClock, FaMapMarkedAlt, 
  FaMobileAlt, FaMoneyBillWave, FaLock, FaHeadset,
  FaStar, FaSmile, FaCalendarCheck, FaCheck, FaLeaf,
  FaEye, FaBolt, FaCloud, FaTools, FaUsers
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
          <p>Soluciones tecnológicas avanzadas para la gestión inteligente del alumbrado público, optimizando el consumo energético y mejorando la calidad de vida urbana.</p>
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
        <h2>Transformando la Iluminación Urbana</h2>
        <p>
          En LuzSmart, entendemos que el alumbrado público es más que solo iluminación. 
          Es sobre crear ciudades inteligentes, eficientes y sostenibles para el futuro.
        </p>
        <p>
          Nuestros servicios están diseñados para optimizar el consumo energético, reducir costos operativos 
          y proporcionar un control total sobre la infraestructura de iluminación urbana.
        </p>
      </section>

      {/* LISTA DE SERVICIOS */}
      <section id="services-list" className="services-list">
        <div className="service">
          <FaLightbulb className="icon" />
          <h3>Sistemas IoT Inteligentes</h3>
          <p>
            Implementación de redes de sensores distribuidos que monitorizan luminosidad, movimiento y condiciones 
            ambientales en tiempo real. Cada luminaria se convierte en un nodo inteligente de la red urbana.
          </p>
          <a href="/contact" className="service-action">Solicitar información</a>
        </div>
        
        <div className="service">
          <FaChartLine className="icon" />
          <h3>Gestión Energética</h3>
          <p>
            Monitoreo y análisis del consumo energético con algoritmos de optimización automática. 
            Reducción del consumo hasta un 60% mediante control inteligente y programación adaptativa.
          </p>
          <a href="/proyecto" className="service-action">Ver resultados</a>
        </div>
        
        <div className="service">
          <FaWifi className="icon" />
          <h3>Conectividad Avanzada</h3>
          <p>
            Comunicación IP robusta entre dispositivos con protocolos de red seguros. 
            Integración con infraestructura existente y capacidad de expansión modular.
          </p>
          <a href="/contact" className="service-action">Conocer tecnología</a>
        </div>
        
        <div className="service">
          <FaServer className="icon" />
          <h3>Backend de Microservicios</h3>
          <p>
            Arquitectura escalable que gestiona millones de eventos IoT. 
            APIs RESTful para integración con sistemas municipales y plataformas de terceros.
          </p>
          <a href="/contact" className="service-action">Solicitar demo</a>
        </div>
        
        <div className="service">
          <FaMapMarkedAlt className="icon" />
          <h3>Dashboard Geoespacial</h3>
          <p>
            Interfaz web interactiva con mapas en tiempo real del estado de luminarias. 
            Visualización georreferenciada del consumo energético y alertas por sectores.
          </p>
          <a href="/contact" className="service-action">Ver demo</a>
        </div>
        
        <div className="service">
          <FaTools className="icon" />
          <h3>Mantenimiento Predictivo</h3>
          <p>
            Sistema de alertas automáticas para detección temprana de fallas. 
            Programación inteligente de mantenimiento basada en datos históricos y patrones de uso.
          </p>
          <a href="/contact" className="service-action">Conocer más</a>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="services-benefits">
        <h2>Beneficios de Nuestros Servicios</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <FaLeaf className="benefit-icon" />
            <h3>Sostenibilidad Ambiental</h3>
            <p>Reducción significativa de la huella de carbono mediante optimización energética inteligente.</p>
          </div>
          
          <div className="benefit-item">
            <FaMoneyBillWave className="benefit-icon" />
            <h3>Ahorro Económico</h3>
            <p>Reducción de costos operativos hasta un 60% en consumo eléctrico y gastos de mantenimiento.</p>
          </div>
          
          <div className="benefit-item">
            <FaEye className="benefit-icon" />
            <h3>Monitoreo 24/7</h3>
            <p>Supervisión continua del estado operativo de cada luminaria con alertas instantáneas.</p>
          </div>
          
          <div className="benefit-item">
            <FaCloud className="benefit-icon" />
            <h3>Datos en la Nube</h3>
            <p>Almacenamiento seguro y análisis avanzado de datos históricos para toma de decisiones.</p>
          </div>
          
          <div className="benefit-item">
            <FaBolt className="benefit-icon" />
            <h3>Control Remoto</h3>
            <p>Gestión completa desde cualquier ubicación con comandos instantáneos a luminarias.</p>
          </div>
          
          <div className="benefit-item">
            <FaShieldAlt className="benefit-icon" />
            <h3>Seguridad Avanzada</h3>
            <p>Protocolos de comunicación encriptados y sistema de autenticación robusto.</p>
          </div>
          
          <div className="benefit-item">
            <FaCog className="benefit-icon" />
            <h3>Automatización Total</h3>
            <p>Funcionamiento autónomo basado en condiciones ambientales y patrones de uso.</p>
          </div>
          
          <div className="benefit-item">
            <FaUsers className="benefit-icon" />
            <h3>Soporte Especializado</h3>
            <p>Equipo técnico dedicado para implementación, capacitación y soporte continuo.</p>
          </div>
        </div>
      </section>

      {/* SERVICIOS TÉCNICOS ESPECÍFICOS */}
      <section className="technical-services">
        <h2>Servicios Técnicos Especializados</h2>
        <div className="technical-grid">
          <div className="technical-service">
            <h3>🔧 Implementación IoT</h3>
            <ul>
              <li>Instalación de sensores de luminosidad y movimiento</li>
              <li>Configuración de microcontroladores ESP32</li>
              <li>Establecimiento de red de comunicación IP</li>
              <li>Integración con infraestructura existente</li>
            </ul>
          </div>
          
          <div className="technical-service">
            <h3>📊 Análisis de Datos</h3>
            <ul>
              <li>Estudios de consumo energético actual</li>
              <li>Análisis de patrones de uso nocturno</li>
              <li>Reportes de eficiencia energética</li>
              <li>Proyecciones de ahorro a largo plazo</li>
            </ul>
          </div>
          
          <div className="technical-service">
            <h3>💻 Desarrollo de Software</h3>
            <ul>
              <li>Dashboard web responsive con React</li>
              <li>Backend robusto con Flask</li>
              <li>APIs RESTful para integración</li>
              <li>Sistemas de reportes automáticos</li>
            </ul>
          </div>
          
          <div className="technical-service">
            <h3>🛠️ Mantenimiento y Soporte</h3>
            <ul>
              <li>Monitoreo continuo 24/7</li>
              <li>Mantenimiento preventivo programado</li>
              <li>Soporte técnico especializado</li>
              <li>Actualizaciones de firmware remotas</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;