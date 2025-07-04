import React, { useEffect } from 'react';
import './Nosotros.css';
import Navbar from './Navbar';
import Footer from './Footer';
import {
  FaBullseye, FaEye, FaHeart, FaLightbulb, FaLeaf, FaHandshake,
  FaUsers, FaGraduationCap, FaLaptopCode, FaChartLine, FaCog,
  FaAward, FaRocket, FaShieldAlt, FaBalanceScale, FaGlobe,
  FaUniversity, FaMapMarkedAlt, FaClock, FaStar, FaMedal,
  FaLinkedin, FaGithub, FaEnvelope, FaPhone
} from 'react-icons/fa';

const Nosotros = () => {
  // Efecto para animaciones al hacer scroll
  useEffect(() => {
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

    // Efecto de contador animado para estadísticas
    const animateValue = (element, start, end, duration) => {
      if (!element) return;
      
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        element.innerHTML = current + (element.dataset.suffix || '');
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    // Activar contadores cuando las estadísticas sean visibles
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counters = entry.target.querySelectorAll('.counter');
          counters.forEach(counter => {
            const target = parseInt(counter.dataset.target);
            animateValue(counter, 0, target, 2000);
          });
          statsObserver.unobserve(entry.target);
        }
      });
    });

    const statsSection = document.querySelector('.company-stats');
    if (statsSection) {
      statsObserver.observe(statsSection);
    }

    return () => {
      observer.disconnect();
      statsObserver.disconnect();
    };
  }, []);


  return (
    <div className="nosotros-container">
      <Navbar />

      {/* HERO NOSOTROS */}
      <section className="nosotros-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Conoce a SmartLight</h1>
            <p>Un equipo de ingenieros comprometidos con la innovación tecnológica y la sostenibilidad urbana, desarrollando soluciones inteligentes para el futuro de nuestras ciudades.</p>
            <div className="hero-stats">
              <div className="hero-stat">
                <FaUniversity className="stat-icon" />
                <span>EMI - Ingeniería de Sistemas</span>
              </div>
              <div className="hero-stat">
                <FaMapMarkedAlt className="stat-icon" />
                <span>El Alto, Bolivia</span>
              </div>
              <div className="hero-stat">
                <FaClock className="stat-icon" />
                <span>Gestión I-2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section className="quienes-somos">
        <div className="container">
          <h2>¿Quiénes Somos?</h2>
          <div className="intro-content">
            <div className="intro-text">
              <p>
                Somos una empresa emergente de tecnología fundada por un equipo de ingenieros especializados en desarrollo de software y sistemas IoT. Nuestra misión es revolucionar la infraestructura urbana mediante soluciones tecnológicas innovadoras que generen impacto real en las comunidades.
              </p>
              <p>
                Especializados en desarrollo de microservicios, sistemas de gestión inteligente y tecnologías IoT, combinamos conocimientos técnicos sólidos con aplicaciones prácticas innovadoras. Nuestro enfoque empresarial busca crear soluciones que no solo resuelvan desafíos urbanos actuales, sino que también establezcan las bases para las ciudades inteligentes del futuro.
              </p>
            </div>
            <div className="intro-visual">
              <div className="team-illustration">
                <FaUsers className="team-icon" />
                <div className="tech-elements">
                  <FaLaptopCode className="tech-icon" />
                  <FaCog className="tech-icon rotating" />
                  <FaLightbulb className="tech-icon pulsing" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISIÓN, VISIÓN Y VALORES */}
      <section className="mision-vision-valores">
        <div className="container">
          <div className="mvv-grid">
            <div className="mvv-card mision">
              <div className="mvv-icon">
                <FaBullseye />
              </div>
              <h3>Nuestra Misión</h3>
              <p>
                Desarrollar e implementar sistemas tecnológicos inteligentes que optimicen la gestión de recursos 
                urbanos, promoviendo la eficiencia energética y contribuyendo al desarrollo sostenible de las 
                ciudades bolivianas, comenzando por El Alto.
              </p>
            </div>
            
            <div className="mvv-card vision">
              <div className="mvv-icon">
                <FaEye />
              </div>
              <h3>Nuestra Visión</h3>
              <p>
                Ser reconocidos como pioneros en el desarrollo de soluciones de ciudades inteligentes en Bolivia, 
                estableciendo un modelo replicable de gestión tecnológica urbana que inspire la transformación 
                digital en múltiples municipios del país.
              </p>
            </div>
            
            <div className="mvv-card valores">
              <div className="mvv-icon">
                <FaHeart />
              </div>
              <h3>Nuestros Valores</h3>
              <div className="valores-list">
                <div className="valor-item">
                  <FaRocket className="valor-icon" />
                  <span>Innovación</span>
                </div>
                <div className="valor-item">
                  <FaLeaf className="valor-icon" />
                  <span>Sostenibilidad</span>
                </div>
                <div className="valor-item">
                  <FaShieldAlt className="valor-icon" />
                  <span>Calidad</span>
                </div>
                <div className="valor-item">
                  <FaBalanceScale className="valor-icon" />
                  <span>Transparencia</span>
                </div>
                <div className="valor-item">
                  <FaHandshake className="valor-icon" />
                  <span>Compromiso</span>
                </div>
                <div className="valor-item">
                  <FaGlobe className="valor-icon" />
                  <span>Impacto Social</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESTADÍSTICAS DE LA EMPRESA */}
      <section className="company-stats">
        <div className="container">
          <h2>Nuestro Impacto en Números</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">
                <span className="counter" data-target="2" data-suffix="">2</span>
              </div>
              <div className="stat-label">Ingenieros Especializados</div>
              <div className="stat-description">Expertos en IoT y Desarrollo</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                <span className="counter" data-target="5" data-suffix="">5</span>
              </div>
              <div className="stat-label">Cuadras de Cobertura</div>
              <div className="stat-description">Área Piloto Villa Adela</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                <span className="counter" data-target="75" data-suffix="%">75%</span>
              </div>
              <div className="stat-label">Eficiencia Energética</div>
              <div className="stat-description">Ahorro Proyectado</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                <span className="counter" data-target="50" data-suffix="+">50+</span>
              </div>
              <div className="stat-label">Luminarias Inteligentes</div>
              <div className="stat-description">Monitoreadas en Tiempo Real</div>
            </div>
          </div>
        </div>
      </section>

     
      {/* COMPROMISO CON EL ALTO */}
      <section className="compromiso-alto">
        <div className="container">
          <div className="compromiso-content">
            <div className="compromiso-text">
              <h2>Nuestro Compromiso con El Alto</h2>
              <p>
                Como estudiantes y futuros ingenieros de sistemas, entendemos la importancia de retribuir 
                a nuestra comunidad mediante soluciones tecnológicas que generen un impacto real y positivo. 
                El Alto, nuestra ciudad, merece contar con infraestructura inteligente y sostenible.
              </p>
              <p>
                Este proyecto representa no solo un requisito académico, sino un compromiso genuino con el 
                desarrollo tecnológico local. Creemos firmemente que las ciudades inteligentes comienzan 
                con iniciativas como esta, implementadas con rigor técnico y visión de futuro.
              </p>
              <div className="compromiso-stats">
                <div className="compromiso-stat">
                  <FaMapMarkedAlt className="compromiso-icon" />
                  <span>Villa Adela, Distrito 2</span>
                </div>
                <div className="compromiso-stat">
                  <FaLeaf className="compromiso-icon" />
                  <span>Reducción de CO₂</span>
                </div>
                <div className="compromiso-stat">
                  <FaRocket className="compromiso-icon" />
                  <span>Tecnología de Vanguardia</span>
                </div>
              </div>
            </div>
            <div className="compromiso-visual">
              <div className="alto-illustration">
                <FaMapMarkedAlt className="alto-icon" />
                <div className="connection-lines">
                  <div className="line line-1"></div>
                  <div className="line line-2"></div>
                  <div className="line line-3"></div>
                </div>
                <div className="smart-elements">
                  <FaLightbulb className="smart-element" />
                  <FaCog className="smart-element" />
                  <FaChartLine className="smart-element" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nosotros;