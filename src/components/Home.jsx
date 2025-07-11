import React, { useEffect } from 'react';
import './Home.css';
import Navbar from './Navbar';
import Footer from './Footer';
import {
  FaLightbulb, FaBolt, FaChartLine, FaMobileAlt, FaClock,
  FaWifi, FaShieldAlt, FaLeaf, FaBullseye, FaEye, 
  FaBalanceScale, FaLock, FaStar, FaRocket, FaHeadset,
  FaMapMarkedAlt, FaServer, FaMicrochip, FaCloudUploadAlt,
  FaCheckCircle, FaExclamationTriangle, FaMoneyBillWave
} from 'react-icons/fa';

const Home = () => {
  // Efecto para animaciones al hacer scroll
  useEffect(() => {
    // Activar animaciones al hacer scroll
    const sections = document.querySelectorAll('section');
    
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
    const btns = document.querySelectorAll('.btn-primary, .btn-secondary');
    
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

    // Limpiar los observadores cuando el componente se desmonte
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="home-container">
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="heading-hero">
            Tecnología que ilumina, eficiencia que transforma
          </h1>
          <p className="text-lead">
            Sistema automatizado de gestión energética que optimiza el alumbrado público 
            mediante IoT, reduciendo costos y mejorando la eficiencia urbana en Villa Adela, 
            Distrito 2 de El Alto.
          </p>
          <div className="hero-buttons">
            <a href="/proyecto" className="btn btn-primary btn-lg">
              Ver Proyecto
            </a>
            <a href="#about" className="btn btn-secondary btn-lg">
              Conocer más
            </a>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="smart-light-illustration">
            <FaLightbulb className="main-bulb" />
            <div className="sensor-indicators">
              <div className="sensor-dot"></div>
              <div className="sensor-dot"></div>
              <div className="sensor-dot"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ESTADÍSTICAS */}
      <section className="statistics">
        <div className="container">
          <div className="stat-container">
            <div className="stat-item">
              <div className="stat-number">75%</div>
              <div className="stat-label">Ahorro Energético</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Luminarias Monitoreadas</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Monitoreo Continuo</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5</div>
              <div className="stat-label">Cuadras de Cobertura</div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE EL PROYECTO */}
      <section id="about" className="about-us">
        <div className="container">
          <h2 className="heading-section">Sobre el Proyecto</h2>
          <p className="text-lead">
            SmartLight El Alto es un sistema inteligente de gestión de alumbrado público 
            que utiliza tecnologías IoT y microservicios para automatizar el control de 
            luminarias, optimizar el consumo energético y facilitar el monitoreo remoto 
            en tiempo real.
          </p>
          
          <div className="mision-vision">
            <div className="card card-gradient-border">
              <FaBullseye className="icon" />
              <h3 className="heading-card">Objetivo</h3>
              <p className="text-body">
                Desarrollar un sistema inteligente que reduzca el consumo energético del 
                alumbrado público mediante automatización basada en sensores y control 
                remoto centralizado.
              </p>
            </div>
            
            <div className="card card-gradient-border">
              <FaEye className="icon" />
              <h3 className="heading-card">Visión</h3>
              <p className="text-body">
                Convertirse en el modelo de referencia para la implementación de sistemas 
                inteligentes de alumbrado público en ciudades de Bolivia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TECNOLOGÍAS IMPLEMENTADAS */}
      <section className="valores">
        <div className="container">
          <h2 className="heading-section">Tecnologías Implementadas</h2>
          
          <div className="features">
            <div className="feature card">
              <FaMicrochip className="feature-icon" />
              <h3 className="heading-card">Sensores IoT</h3>
              <p className="text-body">
                Sensores de luminosidad y movimiento conectados a microcontroladores 
                con capacidad de comunicación IP para monitoreo en tiempo real.
              </p>
            </div>
            
            <div className="feature card">
              <FaServer className="feature-icon" />
              <h3 className="heading-card">Microservicios</h3>
              <p className="text-body">
                Backend modular desarrollado en Flask para procesamiento y gestión 
                de datos IoT con arquitectura escalable y APIs RESTful.
              </p>
            </div>
            
            <div className="feature card">
              <FaMobileAlt className="feature-icon" />
              <h3 className="heading-card">Dashboard Web</h3>
              <p className="text-body">
                Interfaz responsive desarrollada en React para visualización, control 
                remoto y gestión centralizada de luminarias.
              </p>
            </div>
            
            <div className="feature card">
              <FaWifi className="feature-icon" />
              <h3 className="heading-card">Conectividad</h3>
              <p className="text-body">
                Red IP local robusta para transmisión segura de datos entre sensores 
                y sistema central con capacidad de expansión.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS DEL SISTEMA */}
      <section className="benefits">
        <div className="container">
          <h2 className="heading-section">Beneficios del Sistema</h2>
          
          <div className="benefit-columns">
            <div className="benefit-card">
              <h3 className="heading-card">Para la Municipalidad</h3>
              <ul>
                <li>Reducción significativa en costos de energía eléctrica</li>
                <li>Monitoreo centralizado de toda la infraestructura</li>
                <li>Detección automática de fallas y mantenimiento predictivo</li>
                <li>Reportes detallados de consumo por sector</li>
                <li>Control remoto completo de encendido y apagado</li>
                <li>Optimización automática basada en condiciones reales</li>
              </ul>
            </div>
            
            <div className="benefit-card">
              <h3 className="heading-card">Para la Comunidad</h3>
              <ul>
                <li>Iluminación eficiente y sostenible las 24 horas</li>
                <li>Mejor calidad del servicio de alumbrado público</li>
                <li>Contribución a la reducción de emisiones de CO₂</li>
                <li>Mayor seguridad con iluminación inteligente</li>
                <li>Respuesta rápida a problemas de iluminación</li>
                <li>Modelo de ciudad inteligente y tecnológica</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA EL SISTEMA */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="heading-section">¿Cómo Funciona el Sistema?</h2>
          
          <div className="steps">
            <div className="step card">
              <FaLightbulb className="step-icon" />
              <h3 className="heading-card">Detección Inteligente</h3>
              <p className="text-body">
                Los sensores de luminosidad y movimiento recopilan datos ambientales 
                en tiempo real de cada poste de iluminación.
              </p>
            </div>
            
            <div className="step card">
              <FaCloudUploadAlt className="step-icon" />
              <h3 className="heading-card">Transmisión de Datos</h3>
              <p className="text-body">
                La información se envía al servidor central a través de la red IP 
                local para su procesamiento inmediato.
              </p>
            </div>
            
            <div className="step card">
              <FaChartLine className="step-icon" />
              <h3 className="heading-card">Análisis y Control</h3>
              <p className="text-body">
                El sistema procesa los datos y ejecuta algoritmos de optimización 
                energética de forma automática.
              </p>
            </div>
            
            <div className="step card">
              <FaMobileAlt className="step-icon" />
              <h3 className="heading-card">Monitoreo Web</h3>
              <p className="text-body">
                Los administradores supervisan y controlan el sistema desde el 
                dashboard web en tiempo real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CARACTERÍSTICAS DEL SISTEMA */}
      <section className="app-features">
        <div className="container">
          <h2 className="heading-section">Características del Sistema</h2>
          
          <div className="app-features-container">
            <div className="app-feature-item card">
              <FaClock className="app-feature-icon" />
              <h3 className="heading-card">Monitoreo 24/7</h3>
              <p className="text-body">
                Supervisión continua del estado y consumo de cada luminaria 
                con alertas automáticas.
              </p>
            </div>
            
            <div className="app-feature-item card">
              <FaBolt className="app-feature-icon" />
              <h3 className="heading-card">Automatización Inteligente</h3>
              <p className="text-body">
                Control automático basado en luminosidad ambiental y detección 
                de presencia humana.
              </p>
            </div>
            
            <div className="app-feature-item card">
              <FaShieldAlt className="app-feature-icon" />
              <h3 className="heading-card">Sistema de Alertas</h3>
              <p className="text-body">
                Notificaciones automáticas ante fallas, anomalías o mantenimiento 
                requerido del sistema.
              </p>
            </div>
            
            <div className="app-feature-item card">
              <FaLeaf className="app-feature-icon" />
              <h3 className="heading-card">Eficiencia Energética</h3>
              <p className="text-body">
                Optimización del consumo eléctrico mediante algoritmos de gestión 
                inteligente y aprendizaje.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTADOS ESPERADOS */}
      <section className="testimonials">
        <div className="container">
          <h2 className="heading-section">Resultados Esperados</h2>
          
          <div className="testimonial-slider">
            <div className="testimonial-item">
              <div className="testimonial-rating">
                <FaMoneyBillWave />
              </div>
              <p>
                "Reducción estimada del 60-75% en costos de energía eléctrica destinados 
                al alumbrado público en la zona piloto de Villa Adela."
              </p>
              <div className="testimonial-author">
                <h4 className="heading-card">Ahorro Económico</h4>
                <p className="text-small">Impacto Financiero Directo</p>
              </div>
            </div>
            
            <div className="testimonial-item">
              <div className="testimonial-rating">
                <FaLeaf />
              </div>
              <p>
                "Disminución significativa de la huella de carbono y contribución activa 
                a los objetivos de sostenibilidad ambiental municipal."
              </p>
              <div className="testimonial-author">
                <h4 className="heading-card">Impacto Ambiental</h4>
                <p className="text-small">Sostenibilidad Urbana</p>
              </div>
            </div>
            
            <div className="testimonial-item">
              <div className="testimonial-rating">
                <FaRocket />
              </div>
              <p>
                "Mejora sustancial en la eficiencia operativa y posicionamiento como 
                ciudad pionera en tecnologías inteligentes en Bolivia."
              </p>
              <div className="testimonial-author">
                <h4 className="heading-card">Innovación Tecnológica</h4>
                <p className="text-small">Modernización Municipal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES */}
      <section className="faq">
        <div className="container">
          <h2 className="heading-section">Preguntas Frecuentes</h2>
          
          <div className="faq-list">
            <div className="card">
              <FaLightbulb className="icon" />
              <h4 className="heading-card">¿Qué tipo de sensores utiliza el sistema?</h4>
              <p className="text-body">
                Sensores de luminosidad para detectar condiciones ambientales y sensores 
                de movimiento para optimizar el encendido según la presencia de personas, 
                todos conectados a microcontroladores ESP32.
              </p>
            </div>
            
            <div className="card">
              <FaWifi className="icon" />
              <h4 className="heading-card">¿Cómo se comunican los dispositivos?</h4>
              <p className="text-body">
                A través de una red IP local robusta que conecta todos los microcontroladores 
                con el servidor central, permitiendo transmisión de datos segura en tiempo real.
              </p>
            </div>
            
            <div className="card">
              <FaShieldAlt className="icon" />
              <h4 className="heading-card">¿Qué pasa si falla una luminaria?</h4>
              <p className="text-body">
                El sistema detecta automáticamente las fallas y envía alertas inmediatas 
                al dashboard de administración, permitiendo una respuesta rápida y eficiente.
              </p>
            </div>
            
            <div className="card">
              <FaMapMarkedAlt className="icon" />
              <h4 className="heading-card">¿Cuál es el área de cobertura del proyecto?</h4>
              <p className="text-body">
                La implementación piloto cubre aproximadamente 5 cuadras en Villa Adela, 
                Distrito 2 de El Alto, con arquitectura diseñada para expansión escalable.
              </p>
            </div>
            
            <div className="card">
              <FaBolt className="icon" />
              <h4 className="heading-card">¿Cuánto ahorro energético se espera?</h4>
              <p className="text-body">
                Se estima una reducción del 60-75% en el consumo energético mediante la 
                automatización inteligente y algoritmos de optimización del sistema.
              </p>
            </div>
            
            <div className="card">
              <FaMobileAlt className="icon" />
              <h4 className="heading-card">¿Se puede controlar desde dispositivos móviles?</h4>
              <p className="text-body">
                Sí, el dashboard web es completamente responsive y se puede acceder desde 
                cualquier dispositivo con navegador web moderno, incluidos móviles y tablets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;