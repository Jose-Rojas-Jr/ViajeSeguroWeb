import React, { useEffect } from 'react';
import './Services.css';
import Navbar from './Navbar';
import Footer from './Footer';
import {
  FaLightbulb, FaWifi, FaChartLine, FaCog, FaShieldAlt, 
  FaServer, FaMapMarkedAlt, FaMobileAlt, FaMoneyBillWave, 
  FaLeaf, FaEye, FaBolt, FaCloud, FaTools, FaUsers,
  FaMicrochip, FaNetworkWired
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
    const btns = document.querySelectorAll('.services-hero-button, .service-action');
    
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

      {/* HERO - ÚNICA SECCIÓN CON FONDO AZUL */}
      <section className="services-hero">
        <div className="services-hero-content">
          <h1 className="heading-hero">Servicios SmartLight</h1>
          <p className="text-lead">
            Soluciones tecnológicas completas para la gestión inteligente del alumbrado público. 
            Desde sensores IoT hasta dashboards web, transformamos la infraestructura urbana 
            con tecnología de vanguardia y eficiencia energética.
          </p>
          <a 
            href="#services-list" 
            className="services-hero-button btn btn-primary btn-lg"
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
      <section className="services-intro section">
        <div className="container">
          <h2 className="heading-section">Transformando El Alto con Tecnología</h2>
          <p className="text-lead">
            En SmartLight El Alto, entendemos que el alumbrado público es más que solo iluminación. 
            Es la base para crear ciudades inteligentes, eficientes y sostenibles que mejoren la calidad 
            de vida de nuestros ciudadanos.
          </p>
          <p className="text-body">
            Nuestros servicios están diseñados específicamente para optimizar el consumo energético, 
            reducir costos operativos municipales y proporcionar un control total sobre la infraestructura 
            de iluminación en Villa Adela, Distrito 2, con proyección de escalabilidad a toda la ciudad.
          </p>
        </div>
      </section>

      {/* LISTA DE SERVICIOS */}
      <section id="services-list" className="services-list section">
        <h2 className="heading-section">Transformando El Alto con Tecnología</h2>
        <div className="services-grid">
          <div className="service card card-gradient-border">
            <FaLightbulb className="icon" />
            <h3 className="heading-card">Sistemas IoT Inteligentes</h3>
            <p className="text-body">
              Implementación de redes de sensores distribuidos que monitorizan luminosidad, movimiento y 
              condiciones ambientales en tiempo real. Cada luminaria se convierte en un nodo inteligente 
              con microcontroladores ESP32 y comunicación IP robusta.
            </p>
            <a href="/contacto" className="service-action btn btn-secondary btn-sm">
              Solicitar Información
            </a>
          </div>
          
          <div className="service card card-gradient-border">
            <FaChartLine className="icon" />
            <h3 className="heading-card">Gestión Energética Avanzada</h3>
            <p className="text-body">
              Monitoreo y análisis del consumo energético con algoritmos de optimización automática. 
              Reducción del consumo hasta un 75% mediante control inteligente, programación adaptativa 
              y automatización basada en condiciones reales.
            </p>
            <a href="/proyecto" className="service-action btn btn-secondary btn-sm">
              Ver Resultados
            </a>
          </div>
          
          <div className="service card card-gradient-border">
            <FaWifi className="icon" />
            <h3 className="heading-card">Conectividad y Comunicación</h3>
            <p className="text-body">
              Red IP local robusta con protocolos de comunicación seguros entre todos los dispositivos. 
              Integración con infraestructura municipal existente y capacidad de expansión modular 
              para futuras implementaciones.
            </p>
            <a href="/contacto" className="service-action btn btn-secondary btn-sm">
              Conocer Tecnología
            </a>
          </div>
          
          <div className="service card card-gradient-border">
            <FaServer className="icon" />
            <h3 className="heading-card">Backend de Microservicios</h3>
            <p className="text-body">
              Arquitectura escalable desarrollada en Flask que gestiona millones de eventos IoT. 
              APIs RESTful para integración con sistemas municipales, procesamiento de datos en tiempo real 
              y algoritmos de optimización energética.
            </p>
            <a href="/contacto" className="service-action btn btn-secondary btn-sm">
              Solicitar Demo
            </a>
          </div>
          
          <div className="service card card-gradient-border">
            <FaMapMarkedAlt className="icon" />
            <h3 className="heading-card">Dashboard Web Interactivo</h3>
            <p className="text-body">
              Interfaz web responsive desarrollada en React con mapas georreferenciales en tiempo real. 
              Visualización del estado de luminarias, consumo energético por sectores, control remoto 
              y sistema de alertas automáticas.
            </p>
            <a href="/contacto" className="service-action btn btn-secondary btn-sm">
              Ver Demo
            </a>
          </div>
          
          <div className="service card card-gradient-border">
            <FaTools className="icon" />
            <h3 className="heading-card">Mantenimiento Predictivo</h3>
            <p className="text-body">
              Sistema inteligente de alertas automáticas para detección temprana de fallas y anomalías. 
              Programación predictiva de mantenimiento basada en análisis de datos históricos, 
              patrones de uso y algoritmos de machine learning.
            </p>
            <a href="/contacto" className="service-action btn btn-secondary btn-sm">
              Conocer Más
            </a>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="services-benefits section">
        <div className="container">
          <h2 className="heading-section">Beneficios de Nuestros Servicios</h2>
          <div className="benefits-grid">
            <div className="benefit-item card">
              <FaLeaf className="benefit-icon" />
              <h3 className="heading-card">Sostenibilidad Ambiental</h3>
              <p className="text-body">
                Reducción significativa de la huella de carbono mediante optimización energética 
                inteligente y automatización basada en condiciones reales.
              </p>
            </div>
            
            <div className="benefit-item card">
              <FaMoneyBillWave className="benefit-icon" />
              <h3 className="heading-card">Ahorro Económico</h3>
              <p className="text-body">
                Reducción de costos operativos hasta un 75% en consumo eléctrico, gastos de 
                mantenimiento y operación manual del sistema.
              </p>
            </div>
            
            <div className="benefit-item card">
              <FaEye className="benefit-icon" />
              <h3 className="heading-card">Monitoreo 24/7</h3>
              <p className="text-body">
                Supervisión continua del estado operativo de cada luminaria con alertas 
                instantáneas y reportes detallados en tiempo real.
              </p>
            </div>
            
            <div className="benefit-item card">
              <FaCloud className="benefit-icon" />
              <h3 className="heading-card">Datos Centralizados</h3>
              <p className="text-body">
                Almacenamiento seguro y análisis avanzado de datos históricos para toma de 
                decisiones informadas y planificación estratégica.
              </p>
            </div>
            
            <div className="benefit-item card">
              <FaBolt className="benefit-icon" />
              <h3 className="heading-card">Control Remoto</h3>
              <p className="text-body">
                Gestión completa desde cualquier ubicación con comandos instantáneos a luminarias 
                y configuración de parámetros operativos.
              </p>
            </div>
            
            <div className="benefit-item card">
              <FaShieldAlt className="benefit-icon" />
              <h3 className="heading-card">Seguridad Avanzada</h3>
              <p className="text-body">
                Protocolos de comunicación encriptados y sistema de autenticación robusto 
                para proteger la infraestructura crítica.
              </p>
            </div>
            
            <div className="benefit-item card">
              <FaCog className="benefit-icon" />
              <h3 className="heading-card">Automatización Total</h3>
              <p className="text-body">
                Funcionamiento autónomo basado en condiciones ambientales, patrones de uso 
                y algoritmos de aprendizaje automático.
              </p>
            </div>
            
            <div className="benefit-item card">
              <FaUsers className="benefit-icon" />
              <h3 className="heading-card">Soporte Especializado</h3>
              <p className="text-body">
                Equipo técnico dedicado para implementación, capacitación, mantenimiento 
                y soporte continuo del sistema.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS TÉCNICOS ESPECÍFICOS */}
      <section className="technical-services section">
        <div className="container">
          <h2 className="heading-section">Servicios Técnicos Especializados</h2>
          <div className="technical-grid">
            <div className="technical-service card">
              <h3 className="heading-card">
                <FaMicrochip className="benefit-icon" />
                Implementación IoT
              </h3>
              <ul>
                <li>Instalación de sensores de luminosidad y movimiento</li>
                <li>Configuración de microcontroladores ESP32</li>
                <li>Establecimiento de red de comunicación IP</li>
                <li>Integración con infraestructura existente</li>
                <li>Pruebas de conectividad y calibración</li>
              </ul>
            </div>
            
            <div className="technical-service card">
              <h3 className="heading-card">
                <FaChartLine className="benefit-icon" />
                Análisis de Datos
              </h3>
              <ul>
                <li>Estudios de consumo energético actual</li>
                <li>Análisis de patrones de uso nocturno</li>
                <li>Reportes de eficiencia energética</li>
                <li>Proyecciones de ahorro a largo plazo</li>
                <li>Benchmarking con estándares internacionales</li>
              </ul>
            </div>
            
            <div className="technical-service card">
              <h3 className="heading-card">
                <FaMobileAlt className="benefit-icon" />
                Desarrollo de Software
              </h3>
              <ul>
                <li>Dashboard web responsive con React</li>
                <li>Backend robusto con Flask</li>
                <li>APIs RESTful para integración</li>
                <li>Sistemas de reportes automáticos</li>
                <li>Aplicaciones móviles complementarias</li>
              </ul>
            </div>
            
            <div className="technical-service card">
              <h3 className="heading-card">
                <FaTools className="benefit-icon" />
                Mantenimiento y Soporte
              </h3>
              <ul>
                <li>Monitoreo continuo 24/7</li>
                <li>Mantenimiento preventivo programado</li>
                <li>Soporte técnico especializado</li>
                <li>Actualizaciones de firmware remotas</li>
                <li>Capacitación de personal municipal</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;