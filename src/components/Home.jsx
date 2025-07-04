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

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Iluminación Inteligente para El Alto</h1>
          <p>Sistema automatizado de gestión energética que optimiza el alumbrado público mediante IoT, reduciendo costos y mejorando la eficiencia urbana</p>
          <div className="hero-buttons">
            <a href="/proyecto" className="btn-primary">Ver Proyecto</a>
            <a href="#about" className="btn-secondary">Conocer más</a>
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
      </section>

      {/* SOBRE EL PROYECTO */}
      <section id="about" className="about-us">
        <h2>Sobre el Proyecto</h2>
        <p>SmartLight El Alto es un sistema inteligente de gestión de alumbrado público que utiliza tecnologías IoT y microservicios para automatizar el control de luminarias, optimizar el consumo energético y facilitar el monitoreo remoto en tiempo real </p>
        <div className="mision-vision">
          <div>
            <FaBullseye className="icon" />
            <h3>Objetivo</h3>
            <p>Desarrollar un sistema inteligente que reduzca el consumo energético del alumbrado público mediante automatización basada en sensores y control remoto centralizado.</p>
          </div>
          <div>
            <FaEye className="icon" />
            <h3>Visión</h3>
            <p>Convertirse en el modelo de referencia para la implementación de sistemas inteligentes de alumbrado público en ciudades de Bolivia.</p>
          </div>
        </div>
      </section>

      {/* TECNOLOGÍAS */}
      <section className="valores">
        <h2>Tecnologías Implementadas</h2>
        <div className="features">
          <div className="feature">
            <FaMicrochip className="feature-icon" />
            <h3>Sensores IoT</h3>
            <p>Sensores de luminosidad y movimiento conectados a microcontroladores con capacidad de comunicación IP.</p>
          </div>
          <div className="feature">
            <FaServer className="feature-icon" />
            <h3>Microservicios</h3>
            <p>Backend modular desarrollado en Flask para procesamiento y gestión de datos en tiempo real.</p>
          </div>
          <div className="feature">
            <FaMobileAlt className="feature-icon" />
            <h3>Dashboard Web</h3>
            <p>Interfaz responsive desarrollada en React para visualización y control remoto de luminarias.</p>
          </div>
          <div className="feature">
            <FaWifi className="feature-icon" />
            <h3>Conectividad</h3>
            <p>Red local robusta para transmisión de datos entre sensores y sistema central.</p>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="benefits">
        <h2>Beneficios del Sistema</h2>
        <div className="benefit-columns">
          <div className="benefit-card">
            <h3>Para la Municipalidad</h3>
            <ul>
              <li>Reducción significativa en costos de energía eléctrica</li>
              <li>Monitoreo centralizado de toda la infraestructura</li>
              <li>Detección automática de fallas y mantenimiento</li>
              <li>Reportes detallados de consumo por sector</li>
              <li>Control remoto de encendido y apagado</li>
              <li>Optimización automática basada en condiciones reales</li>
            </ul>
          </div>
          <div className="benefit-card">
            <h3>Para la Comunidad</h3>
            <ul>
              <li>Iluminación eficiente y sostenible</li>
              <li>Mejor calidad del servicio de alumbrado público</li>
              <li>Contribución a la reducción de emisiones de CO₂</li>
              <li>Mayor seguridad con iluminación inteligente</li>
              <li>Respuesta rápida a problemas de iluminación</li>
              <li>Modelo de ciudad inteligente y tecnológica</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="how-it-works">
        <h2>¿Cómo Funciona el Sistema?</h2>
        <div className="steps">
          <div className="step">
            <FaLightbulb className="step-icon" />
            <h3>Detección Inteligente</h3>
            <p>Los sensores de luminosidad y movimiento recopilan datos ambientales en tiempo real de cada poste.</p>
          </div>
          <div className="step">
            <FaCloudUploadAlt className="step-icon" />
            <h3>Transmisión de Datos</h3>
            <p>La información se envía al servidor central a través de la red IP local para su procesamiento.</p>
          </div>
          <div className="step">
            <FaChartLine className="step-icon" />
            <h3>Análisis y Control</h3>
            <p>El sistema procesa los datos y ejecuta algoritmos de optimización energética automáticamente.</p>
          </div>
          <div className="step">
            <FaMobileAlt className="step-icon" />
            <h3>Monitoreo Web</h3>
            <p>Los administradores supervisan y controlan el sistema desde el dashboard web en tiempo real.</p>
          </div>
        </div>
      </section>

      {/* CARACTERÍSTICAS DEL SISTEMA */}
      <section className="app-features">
        <h2>Características del Sistema</h2>
        <div className="app-features-container">
          <div className="app-feature-item">
            <FaClock className="app-feature-icon" />
            <h3>Monitoreo 24/7</h3>
            <p>Supervisión continua del estado y consumo de cada luminaria en tiempo real.</p>
          </div>
          <div className="app-feature-item">
            <FaBolt className="app-feature-icon" />
            <h3>Automatización Inteligente</h3>
            <p>Control automático basado en luminosidad ambiental y detección de presencia.</p>
          </div>
          <div className="app-feature-item">
            <FaShieldAlt className="app-feature-icon" />
            <h3>Sistema de Alertas</h3>
            <p>Notificaciones automáticas ante fallas o anomalías en el funcionamiento.</p>
          </div>
          <div className="app-feature-item">
            <FaLeaf className="app-feature-icon" />
            <h3>Eficiencia Energética</h3>
            <p>Optimización del consumo eléctrico mediante algoritmos de gestión inteligente.</p>
          </div>
        </div>
      </section>

      {/* RESULTADOS ESPERADOS */}
      <section className="testimonials">
        <h2>Resultados Esperados</h2>
        <div className="testimonial-slider">
          <div className="testimonial-item">
            <div className="testimonial-rating">
              <FaMoneyBillWave />
            </div>
            <p>"Reducción estimada del 60-75% en costos de energía eléctrica destinados al alumbrado público en la zona piloto."</p>
            <div className="testimonial-author">
              <h4>Ahorro Económico</h4>
              <p>Impacto Financiero</p>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-rating">
              <FaLeaf />
            </div>
            <p>"Disminución significativa de la huella de carbono y contribución a los objetivos de sostenibilidad ambiental."</p>
            <div className="testimonial-author">
              <h4>Impacto Ambiental</h4>
              <p>Sostenibilidad</p>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-rating">
              <FaRocket />
            </div>
            <p>"Mejora en la eficiencia operativa y posicionamiento como ciudad pionera en tecnologías inteligentes."</p>
            <div className="testimonial-author">
              <h4>Innovación Tecnológica</h4>
              <p>Modernización Urbana</p>
            </div>
          </div>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES */}
      <section className="faq">
        <h2>Preguntas Frecuentes</h2>
        <div className="faq-list">
          <div>
            <FaLightbulb className="icon" />
            <h4>¿Qué tipo de sensores utiliza el sistema?</h4>
            <p>Sensores de luminosidad para detectar condiciones ambientales y sensores de movimiento para optimizar el encendido según la presencia de personas.</p>
          </div>
          <div>
            <FaWifi className="icon" />
            <h4>¿Cómo se comunican los dispositivos?</h4>
            <p>A través de una red IP local que conecta todos los microcontroladores con el servidor central para transmisión de datos en tiempo real.</p>
          </div>
          <div>
            <FaShieldAlt className="icon" />
            <h4>¿Qué pasa si falla una luminaria?</h4>
            <p>El sistema detecta automáticamente las fallas y envía alertas inmediatas al dashboard de administración para una respuesta rápida.</p>
          </div>
          <div>
            <FaMapMarkedAlt className="icon" />
            <h4>¿Cuál es el área de cobertura del proyecto?</h4>
            <p>La implementación piloto cubre aproximadamente 5 cuadras en Villa Adela, Distrito 2 de El Alto, con posibilidad de expansión.</p>
          </div>
          <div>
            <FaBolt className="icon" />
            <h4>¿Cuánto ahorro energético se espera?</h4>
            <p>Se estima una reducción del 60-75% en el consumo energético mediante la automatización inteligente del sistema de alumbrado.</p>
          </div>
          <div>
            <FaMobileAlt className="icon" />
            <h4>¿Se puede controlar desde dispositivos móviles?</h4>
            <p>Sí, el dashboard web es responsive y se puede acceder desde cualquier dispositivo con navegador web.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;