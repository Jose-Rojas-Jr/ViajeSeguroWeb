import React, { useEffect } from 'react';
import './Viajero.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { 
  FaShieldAlt, FaMapMarkedAlt, FaVideo, 
  FaMobileAlt, FaCar, FaCheckCircle,
  FaStar, FaUserShield, FaRoute, FaClock,
  FaBell, FaMoneyBillWave, FaLock
} from 'react-icons/fa';

const Viajero = () => {
  // Efecto para animaciones al hacer scroll
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const elements = document.querySelectorAll('.benefit-item, .step, .feature-item, .testimonial');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
      observer.observe(section);
    });
    
    elements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Función para scroll suave
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="viajero-container">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="intro">
        <div className="intro-content">
          <h1>Tu viaje, más seguro que nunca</h1>
          <p>Viaja con tranquilidad absoluta gracias a conductores verificados, seguimiento en tiempo real y la mejor tecnología de seguridad en Bolivia.</p>
          <div className="intro-buttons">
            <a 
              href="#how-it-works" 
              className="primary-button"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('how-it-works');
              }}
            >
              Cómo funciona
            </a>
            <a 
              href="https://play.google.com" 
              className="secondary-button"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Descargar app
            </a>
          </div>
          <img 
            src="data:image/jpeg;base64,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" 
            alt="Pasajero disfrutando un viaje seguro" 
            className="intro-image" 
          />
        </div>
      </section>
      
      {/* ESTADÍSTICAS */}
      <section className="stats">
        <div className="content-wrapper">
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">15,000+</div>
              <div className="stat-label">Viajes seguros</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.9/5</div>
              <div className="stat-label">Calificación promedio</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Conductores verificados</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Soporte disponible</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* BENEFICIOS */}
      <section className="benefits">
        <div className="content-wrapper">
          <h2 className="section-title">¿Por qué viajar con ViajeSeguro?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnP6B7Aeb8KO5feuWSFqs457KgujBBw5R_8w&s" 
                alt="Conductor verificado" 
                className="benefit-image" 
              />
              <div className="benefit-content">
                <FaUserShield className="benefit-icon" />
                <h3>Conductores Verificados</h3>
                <p>Todos nuestros conductores pasan por un riguroso proceso de validación que incluye verificación de antecedentes, revisión de documentos y capacitación en seguridad.</p>
                <a href="/membership" className="benefit-link">Conoce nuestro proceso</a>
              </div>
            </div>
            
            <div className="benefit-item">
              <img 
                src="data:image/jpeg;base64,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" 
                alt="Monitoreo en tiempo real" 
                className="benefit-image" 
              />
              <div className="benefit-content">
                <FaMapMarkedAlt className="benefit-icon" />
                <h3>Monitoreo en Tiempo Real</h3>
                <p>Comparte tu ubicación en tiempo real con tus contactos de confianza. Ellos podrán seguir tu viaje hasta que llegues seguro a tu destino.</p>
                <a href="#how-it-works" className="benefit-link">Ver cómo funciona</a>
              </div>
            </div>
            
            <div className="benefit-item">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjJyCtVEThBhb99Sd6C5jKwGAnjsc5oY6euQ&s" 
                alt="Seguridad garantizada" 
                className="benefit-image" 
              />
              <div className="benefit-content">
                <FaVideo className="benefit-icon" />
                <h3>Seguridad Garantizada</h3>
                <p>Viaja con tranquilidad gracias a la integración de una cámara de seguridad a la cual tú y tus contactos de confianza podrán acceder en caso de emergencia.</p>
                <a href="/contact" className="benefit-link">Más información</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CARACTERÍSTICAS ADICIONALES */}
      <section className="features">
        <div className="content-wrapper">
          <h2 className="section-title">Características exclusivas</h2>
          <div className="features-grid">
            <div className="feature-item">
              <FaBell className="feature-icon" />
              <h3>Alertas de Emergencia</h3>
              <p>Botón de pánico que envía alertas inmediatas a contactos y a nuestro centro de monitoreo.</p>
            </div>
            <div className="feature-item">
              <FaRoute className="feature-icon" />
              <h3>Rutas Seguras</h3>
              <p>Algoritmo que selecciona las rutas más seguras basadas en datos de seguridad actualizados.</p>
            </div>
            <div className="feature-item">
              <FaClock className="feature-icon" />
              <h3>Viajes Programados</h3>
              <p>Programa tus viajes con anticipación para mayor comodidad y planificación.</p>
            </div>
            <div className="feature-item">
              <FaMoneyBillWave className="feature-icon" />
              <h3>Precios Transparentes</h3>
              <p>Sin tarifas dinámicas. Conoce el precio exacto antes de confirmar tu viaje.</p>
            </div>
            <div className="feature-item">
              <FaLock className="feature-icon" />
              <h3>Código de Seguridad</h3>
              <p>Verifica la identidad de tu conductor con un código único antes de abordar.</p>
            </div>
            <div className="feature-item">
              <FaShieldAlt className="feature-icon" />
              <h3>Seguro de Viaje</h3>
              <p>Todos los viajes incluyen cobertura de seguro para mayor tranquilidad.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CÓMO FUNCIONA */}
      <section id="how-it-works" className="how-it-works">
        <div className="content-wrapper">
          <h2 className="section-title">¿Cómo funciona?</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <img 
                src="data:image/jpeg;base64,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" 
                alt="Descarga la app" 
                className="step-image" 
              />
              <div className="step-content">
                <FaMobileAlt className="step-icon" />
                <h3>Descarga la App</h3>
                <p>Regístrate en minutos con tu correo electrónico o número de teléfono. Verifica tu identidad para mayor seguridad.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj28u6ar520i7uLtzTVY8Xvh6RrMCO1gJV-g&s" 
                alt="Solicita un viaje" 
                className="step-image" 
              />
              <div className="step-content">
                <FaCar className="step-icon" />
                <h3>Solicita un Viaje</h3>
                <p>Indica tu destino, elige un conductor disponible y la tarifa fija que se te mostrará antes de confirmar.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBj94Nfu8SFlMRNtsLbkiEh-i3EI99FBGrBQ&s" 
                alt="Llega seguro" 
                className="step-image" 
              />
              <div className="step-content">
                <FaCheckCircle className="step-icon" />
                <h3>Llega Seguro</h3>
                <p>Disfruta de un viaje cómodo y seguro. Califica al conductor y comparte tu experiencia para ayudar a nuestra comunidad.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* TESTIMONIOS */}
      <section className="testimonials">
        <div className="content-wrapper">
          <h2 className="section-title">Experiencias de nuestros usuarios</h2>
          <div className="testimonials-container">
            <div className="testimonial">
              <div className="testimonial-rating">
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
              </div>
              <p>"La función de compartir mi ubicación con mi familia me da una tranquilidad enorme. Es la única app de transporte que realmente me hace sentir segura."</p>
              <div className="testimonial-author">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="María G." />
                <div>
                  <h4>María G.</h4>
                  <p>Usuario desde 2025</p>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-rating">
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
              </div>
              <p>"Mis hijos adolescentes usan ViajeSeguro y puedo monitorear sus trayectos en tiempo real. Es una tranquilidad enorme para cualquier padre."</p>
              <div className="testimonial-author">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Carlos T." />
                <div>
                  <h4>Carlos T.</h4>
                  <p>Usuario desde 2025</p>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-rating">
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
              </div>
              <p>"La diferencia entre ViajeSeguro y otras apps es notoria. Los conductores son realmente profesionales y el servicio al cliente responde inmediatamente."</p>
              <div className="testimonial-author">
                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Laura M." />
                <div>
                  <h4>Laura M.</h4>
                  <p>Usuario desde 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CALL TO ACTION */}
      <section className="call-to-action">
        <div className="cta-content">
          <h2>Empieza a viajar con seguridad hoy mismo</h2>
          <p>Únete a miles de usuarios satisfechos que han elegido ViajeSeguro para sus traslados diarios.</p>
          <div className="cta-buttons">
            <a href="https://play.google.com" className="cta-button primary" target="_blank" rel="noopener noreferrer">
              Descargar la App
            </a>
            <a href="/contact" className="cta-button secondary">
              Contactar soporte
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Viajero;