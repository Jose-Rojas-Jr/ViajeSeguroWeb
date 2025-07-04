import React, { useEffect } from 'react';
import './Proyecto.css';
import Navbar from './Navbar';
import Footer from './Footer';
import {
  FaLightbulb, FaWifi, FaChartLine, FaCog, FaShieldAlt, 
  FaServer, FaRoute, FaHandshake, FaClock, FaMapMarkedAlt, 
  FaMobileAlt, FaMoneyBillWave, FaLock, FaHeadset,
  FaStar, FaSmile, FaCalendarCheck, FaCheck, FaLeaf,
  FaEye, FaBolt, FaCloud, FaTools, FaUsers, FaCity,
  FaDesktop, FaDatabase, FaNetworkWired, FaRobot,
  FaBullseye, FaProjectDiagram, FaChartPie, FaClipboardCheck,
  FaEnvelope, FaPhoneAlt, FaBuilding, FaFlag
} from 'react-icons/fa';

const Proyecto = () => {
  // Efecto para animaciones al hacer scroll
  useEffect(() => {
    const sections = document.querySelectorAll('.proyecto-container section');
    
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
    const btns = document.querySelectorAll('.proyecto-hero-button, .cta-button-primary, .cta-button-secondary');
    
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
    <div className="proyecto-container">
      <Navbar />

      {/* HERO */}
      <section className="proyecto-hero">
        <div className="proyecto-hero-content">
          <h1>Sistema Inteligente de Alumbrado Público</h1>
          <p>Proyecto innovador para la automatización y gestión eficiente del alumbrado público en El Alto, Distrito 2, Villa Adela. Tecnología IoT aplicada para optimizar el consumo energético y mejorar la infraestructura urbana.</p>
          <a 
            href="#proyecto-objetivos" 
            className="proyecto-hero-button"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('proyecto-objetivos');
            }}
          >
            Conocer Objetivos
          </a>
        </div>
      </section>

      {/* INTRODUCCIÓN */}
      <section className="proyecto-intro">
        <h2>Descripción del Proyecto</h2>
        <p>
          El presente proyecto consiste en el desarrollo de un sistema inteligente para la monitorización 
          y gestión remota del consumo energético en el alumbrado público de Villa Adela, Distrito 2 de El Alto.
        </p>
        <p>
          La iniciativa surge como respuesta a la necesidad de optimizar el uso de energía eléctrica en el 
          alumbrado público, reducir costos operativos y mejorar la calidad de vida de los ciudadanos mediante 
          tecnologías IoT avanzadas.
        </p>
        <p>
          El sistema permitirá la gestión automatizada del encendido y apagado de luminarias basándose en 
          condiciones ambientales reales, movimiento detectado y horarios programados, generando un impacto 
          positivo en la eficiencia energética municipal.
        </p>
      </section>

      {/* OBJETIVOS */}
      <section id="proyecto-objetivos" className="proyecto-objetivos">
        <h2>Objetivos del Proyecto</h2>
        
        <div className="objetivo-general">
          <h3><FaBullseye /> Objetivo General</h3>
          <p>
            Desarrollar un sistema inteligente para la monitorización y gestión remota del consumo 
            energético en el alumbrado público de una zona específica de la ciudad de El Alto, que 
            permita minimizar el uso de la energía, controlando del encendido y apagado de las luminarias, 
            facilitado a través de un dashboard web para la visualización en tiempo real, control remoto 
            y generación de reportes.
          </p>
        </div>

        <div className="objetivos-especificos">
          <div className="objetivo-especifico">
            <h4>Análisis de Consumo Energético</h4>
            <p>
              Realizar un análisis integral del consumo energético actual en la zona de Villa Adela, 
              cuantificando patrones de uso, horarios de operación y niveles de eficiencia energética.
            </p>
          </div>
          
          <div className="objetivo-especifico">
            <h4>Arquitectura de Sensores IoT</h4>
            <p>
              Diseñar una arquitectura basada en sensores de luminosidad y detección de movimiento, 
              junto con dispositivos de control en cada luminaria para transmisión de datos en tiempo real.
            </p>
          </div>

          <div className="objetivo-especifico">
            <h4>Interfaz Web Interactiva</h4>
            <p>
              Desarrollar una interfaz web usando React que proporcione visualización en tiempo real del 
              estado de luminarias, panel de control remoto, dashboard analítico con métricas de consumo 
              y sistema de reportes.
            </p>
          </div>

          <div className="objetivo-especifico">
            <h4>Backend de Microservicios</h4>
            <p>
              Desarrollar un backend basado en microservicios usando Flask que gestione la recepción, 
              procesamiento y almacenamiento de datos IoT, incorporando algoritmos de optimización energética 
              y sistema de alertas automáticas.
            </p>
          </div>

          <div className="objetivo-especifico">
            <h4>Pruebas de Integración</h4>
            <p>
              Realizar pruebas de integración y validación del sistema dentro del área delimitada, 
              considerando las limitaciones técnicas y operativas establecidas en el proyecto.
            </p>
          </div>
        </div>
      </section>

      {/* ARQUITECTURA DEL SISTEMA */}
      <section className="proyecto-arquitectura">
        <h2>Arquitectura del Sistema</h2>
        <div className="arquitectura-grid">
          <div className="arquitectura-item">
            <div className="arquitectura-icon">
              <FaNetworkWired />
            </div>
            <h3>Sensores IoT Distribuidos</h3>
            <p>
              Red de sensores de luminosidad y movimiento instalados en cada poste de iluminación, 
              conectados a microcontroladores con capacidad de comunicación IP para transmisión de datos en tiempo real.
            </p>
          </div>

          <div className="arquitectura-item">
            <div className="arquitectura-icon">
              <FaWifi />
            </div>
            <h3>Red de Comunicación</h3>
            <p>
              Implementación de una red local que permite el envío de información en tiempo real entre 
              los sensores distribuidos y el backend del sistema, garantizando conectividad estable.
            </p>
          </div>

          <div className="arquitectura-item">
            <div className="arquitectura-icon">
              <FaServer />
            </div>
            <h3>Backend de Microservicios</h3>
            <p>
              Sistema backend modular desarrollado con Flask, encargado de recibir, procesar y almacenar 
              la información de los sensores, así como ejecutar comandos de control hacia las luminarias.
            </p>
          </div>

          <div className="arquitectura-item">
            <div className="arquitectura-icon">
              <FaDesktop />
            </div>
            <h3>Dashboard Web Responsive</h3>
            <p>
              Interfaz web desarrollada con React que permite visualizar el estado actual de las luminarias, 
              consultar reportes de consumo energético y realizar control remoto de cada punto de luz.
            </p>
          </div>

          <div className="arquitectura-item">
            <div className="arquitectura-icon">
              <FaDatabase />
            </div>
            <h3>Sistema de Almacenamiento</h3>
            <p>
              Base de datos robusta para el almacenamiento de datos históricos, patrones de consumo, 
              configuraciones del sistema y generación de reportes analíticos detallados.
            </p>
          </div>

          <div className="arquitectura-item">
            <div className="arquitectura-icon">
              <FaRobot />
            </div>
            <h3>Automatización Inteligente</h3>
            <p>
              Algoritmos de automatización que gestionan el encendido y apagado de luminarias basándose 
              en condiciones ambientales, detección de movimiento y horarios programados.
            </p>
          </div>
        </div>
      </section>

      {/* RESULTADOS ESPERADOS */}
      <section className="proyecto-resultados">
        <h2>Resultados Esperados</h2>
        <div className="resultados-grid">
          <div className="resultado-item">
            <div className="resultado-icon">
              <FaLeaf />
            </div>
            <h3>Eficiencia Energética</h3>
            <p>
              Reducción significativa del consumo energético mediante la automatización inteligente 
              del alumbrado público, optimizando el uso de recursos y minimizando el impacto ambiental.
            </p>
          </div>

          <div className="resultado-item">
            <div className="resultado-icon">
              <FaMoneyBillWave />
            </div>
            <h3>Reducción de Costos</h3>
            <p>
              Disminución de los gastos operativos municipales relacionados con el alumbrado público, 
              permitiendo la reasignación de recursos hacia otros proyectos de infraestructura urbana.
            </p>
          </div>

          <div className="resultado-item">
            <div className="resultado-icon">
              <FaChartLine />
            </div>
            <h3>Monitoreo en Tiempo Real</h3>
            <p>
              Capacidad de supervisión constante del sistema de alumbrado con datos actualizados, 
              permitiendo la toma de decisiones informadas y la detección temprana de problemas.
            </p>
          </div>

          <div className="resultado-item">
            <div className="resultado-icon">
              <FaTools />
            </div>
            <h3>Mantenimiento Predictivo</h3>
            <p>
              Sistema de alertas automáticas que facilita el mantenimiento preventivo y la identificación 
              de fallas en las luminarias, mejorando la vida útil del equipamiento.
            </p>
          </div>

          <div className="resultado-item">
            <div className="resultado-icon">
              <FaShieldAlt />
            </div>
            <h3>Mejora en Seguridad</h3>
            <p>
              Incremento en la seguridad pública mediante la iluminación inteligente activada por movimiento 
              y la garantía de funcionamiento óptimo del sistema de alumbrado.
            </p>
          </div>

          <div className="resultado-item">
            <div className="resultado-icon">
              <FaClipboardCheck />
            </div>
            <h3>Reportes Detallados</h3>
            <p>
              Generación automática de reportes analíticos sobre patrones de consumo, eficiencia energética 
              y estado operativo del sistema para la toma de decisiones estratégicas.
            </p>
          </div>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section className="proyecto-ubicacion">
        <h2>Ubicación del Proyecto</h2>
        
        <div className="ubicacion-info">
          <h3><FaMapMarkedAlt /> Zona de Implementación</h3>
          <p>
            El proyecto se implementará en Villa Adela, Distrito 2 de la ciudad de El Alto, Bolivia. 
            Esta zona ha sido seleccionada por su alta densidad poblacional y la necesidad de optimizar 
            la infraestructura de alumbrado público existente.
          </p>
          <p>
            El área de intervención comprende aproximadamente cinco cuadras cuadradas, lo que permite 
            realizar un piloto efectivo del sistema antes de su eventual expansión a otras zonas de la ciudad.
          </p>
        </div>

        <div className="ubicacion-detalles">
          <div className="detalle-item">
            <h4><FaCity /> Ciudad</h4>
            <p>El Alto, Bolivia</p>
          </div>

          <div className="detalle-item">
            <h4><FaFlag /> Distrito</h4>
            <p>Distrito 2</p>
          </div>

          <div className="detalle-item">
            <h4><FaBuilding /> Zona</h4>
            <p>Villa Adela</p>
          </div>

          <div className="detalle-item">
            <h4><FaProjectDiagram /> Área de Cobertura</h4>
            <p>5 cuadras cuadradas aproximadamente</p>
          </div>

          <div className="detalle-item">
            <h4><FaUsers /> Población Beneficiada</h4>
            <p>Residentes y transeúntes de la zona</p>
          </div>

          <div className="detalle-item">
            <h4><FaLightbulb /> Puntos de Luz</h4>
            <p>Luminarias existentes en el área delimitada</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Proyecto;