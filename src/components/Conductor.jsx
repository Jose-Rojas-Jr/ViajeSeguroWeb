import React, { useEffect } from 'react';
import './Conductor.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { 
  FaHeadset, FaMoneyBillWave, FaCalendarAlt, FaCar, 
  FaIdCard, FaCheckCircle, FaUserCircle, FaGraduationCap, 
  FaRegStar, FaRoute, FaMobile, FaFileAlt, FaRocket, FaShieldAlt
} from 'react-icons/fa';

const Conductor = () => {
  // Efecto para animaciones al hacer scroll
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const elements = document.querySelectorAll('.benefit-item, .requirement-item, .step, .testimonial-item, .stat-item');
    
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
    <div className="conductor-container">
      <Navbar />
      
      <section className="intro">
        <div className="intro-overlay"></div>
        <div className="intro-content">
          <h1>Conduce con libertad, genera ingresos con seguridad</h1>
          <p>Únete a la plataforma líder en seguridad y aprovecha al máximo tu tiempo al volante con la red más grande de usuarios verificados en Bolivia.</p>
          <div className="intro-buttons">
            <a 
              href="#requirements" 
              className="primary-button"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('requirements');
              }}
            >
              Ver requisitos
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYVMr8mU8GTyyKd1SUxxpNTXJKwefO05zqmg&s" 
            alt="Conductor feliz al volante" 
            className="intro-image" 
          />
        </div>
      </section>
      
      {/* Estadísticas */}
      <section className="stats">
        <div className="content-wrapper">
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">1,200+</div>
              <div className="stat-label">Conductores activos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15,000+</div>
              <div className="stat-label">Viajes mensuales</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.8/5</div>
              <div className="stat-label">Calificación promedio</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-label">Ciudades cubiertas</div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="benefits">
        <div className="content-wrapper">
          <h2 className="section-title">¿Por qué manejar con ViajeSeguro?</h2>
          <div className="benefits-container">
            <div className="benefit-item">
              <FaHeadset className="benefit-icon" />
              <h3>Soporte 24/7</h3>
              <p>Asistencia personalizada disponible todo el día, todos los días, para responder a tus dudas y ayudarte en el camino.</p>
            </div>
            <div className="benefit-item">
              <FaMoneyBillWave className="benefit-icon" />
              <h3>Pago rápido y seguro</h3>
              <p>Elige cómo y cuándo recibir tus ganancias sin complicaciones. Transparencia total en cada transacción.</p>
            </div>
            <div className="benefit-item">
              <FaCalendarAlt className="benefit-icon" />
              <h3>Flexibilidad total</h3>
              <p>Conduce cuando quieras y genera ingresos a tu propio ritmo. Tú decides cuándo y cuánto trabajar.</p>
            </div>
            <div className="benefit-item">
              <FaShieldAlt className="benefit-icon" />
              <h3>Pasajeros verificados</h3>
              <p>Mayor seguridad al transportar solo usuarios que han pasado por nuestro proceso de verificación de identidad.</p>
            </div>
            <div className="benefit-item">
              <FaRegStar className="benefit-icon" />
              <h3>Bonos e incentivos</h3>
              <p>Recibe bonificaciones por buen desempeño, horas pico y programas de lealtad para aumentar tus ingresos.</p>
            </div>
            <div className="benefit-item">
              <FaRoute className="benefit-icon" />
              <h3>Rutas optimizadas</h3>
              <p>Nuestra tecnología te ayuda a optimizar rutas y viajes para maximizar tus ganancias y minimizar tiempos muertos.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="requirements" className="requirements">
        <div className="content-wrapper">
          <h2 className="section-title">Requisitos para conducir</h2>
          <div className="requirements-container">
            <div className="requirement-item">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeQyDSDDP4fjTxwcM4YgwBfDG-JqsHs8263Q&s" 
                alt="Requisitos del auto" 
                className="requirement-image" 
              />
              <FaCar className="requirement-icon" />
              <h3>Requisitos del Auto</h3>
              <ul>
                <li>Modelo 2004 en adelante</li>
                <li>Inspección técnica vehicular vigente</li>
                <li>4 puertas y capacidad para 4 pasajeros</li>
                <li>Excelentes condiciones mecánicas</li>
                <li>Aire acondicionado funcional</li>
                <li>SOAT al día</li>
              </ul>
              <a href="/contact" className="requirement-link">Consultar excepciones</a>
            </div>
            <div className="requirement-item">
              
              <FaIdCard className="requirement-icon" />
              <h3>Documentos requeridos</h3>
              <ul>
                <li>Licencia de conducción vigente</li>
                <li>Documento de identidad</li>
                <li>Certificado de propiedad del vehículo</li>
                <li>SOAT vigente</li>
                <li>Certificado de antecedentes (no mayor a 30 días)</li>
                <li>Cuenta bancaria para pagos</li>
              </ul>
              <a href="/contact" className="requirement-link">Ver proceso de verificación</a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="earnings">
        <div className="content-wrapper">
          <h2 className="section-title">Maximiza tus ganancias</h2>
          <div className="earnings-content">
            <div className="earnings-info">
              <h3>Tarifas competitivas y transparentes</h3>
              <p>En ViajeSeguro creemos en la transparencia. Nuestra comisión es una de las más bajas del mercado, permitiéndote quedarte con la mayor parte de lo que generas.</p>
              
              <div className="earnings-highlights">
                <div className="highlight">
                  <span className="highlight-number">85%</span>
                  <span className="highlight-text">De la tarifa es para ti</span>
                </div>
                <div className="highlight">
                  <span className="highlight-number">+20%</span>
                  <span className="highlight-text">Bonos por horas pico</span>
                </div>
                <div className="highlight">
                  <span className="highlight-number">+15%</span>
                  <span className="highlight-text">Bonus por calificación</span>
                </div>
              </div>
              
              <p>Además, no tendrás que esperar días para recibir tu dinero. Podrás hacer retiros diarios a partir de un mínimo de Bs 50.</p>
            </div>
            <div className="earnings-calculator">
              <h3>Calculadora de ganancias estimadas</h3>
              <div className="calculator-box">
                <p>Un conductor que trabaja 8 horas diarias, 5 días a la semana puede generar aproximadamente:</p>
                <div className="calculator-result">
                  <span>Bs 4,500 - 6,000</span>
                  <span className="result-period">mensuales</span>
                </div>
                <p className="calculator-note">*Las ganancias pueden variar según la ciudad, horarios y demanda. Esta es solo una estimación basada en el promedio de nuestros conductores activos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="profile-tips">
        <div className="content-wrapper">
          <h2 className="section-title">Consejos para tu foto del perfil</h2>
          <div className="profile-tips-content">
            <p>Para mejorar la seguridad de los socios de la app y usuarios, te recomendamos seguir estos consejos para que tu foto de perfil sea aprobada rápidamente:</p>
            <img 
              src="data:image/jpeg;base64,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" 
              alt="Consejos foto perfil" 
              className="profile-tips-image" 
            />
            
            <div className="tips-column">
              <div>
                <FaCheckCircle className="tips-icon good" />
                <h3>Características de una buena foto de perfil:</h3>
                <ul>
                  <li>Buena iluminación natural.</li>
                  <li>Tomada de frente, no de lado.</li>
                  <li>El rostro debe ser visible y centrado.</li>
                  <li>Fondo claro y sin distracciones.</li>
                  <li>Apariencia actual y profesional.</li>
                  <li>Expresión neutral o sonrisa natural.</li>
                </ul>
              </div>
              
              <div>
                <FaUserCircle className="tips-icon bad" />
                <h3>Evita lo siguiente:</h3>
                <ul>
                  <li>Fotos de cuerpo completo o demasiado alejadas.</li>
                  <li>Fotos donde aparezcas con otras personas.</li>
                  <li>Imágenes con poca luz o fondo oscuro.</li>
                  <li>Fotos borrosas o de baja calidad.</li>
                  <li>Accesorios que oculten el rostro (gorros, anteojos de sol).</li>
                  <li>Fotos de tu auto, caricaturas o imágenes no personales.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Nueva sección: Testimonios */}
      <section className="testimonials">
        <div className="content-wrapper">
          <h2 className="section-title">Lo que dicen nuestros conductores</h2>
          <div className="testimonials-container">
            <div className="testimonial-item">
              <div className="testimonial-rating">
                <FaRegStar className="star filled" />
                <FaRegStar className="star filled" />
                <FaRegStar className="star filled" />
                <FaRegStar className="star filled" />
                <FaRegStar className="star filled" />
              </div>
              <p>"Desde que empecé con ViajeSeguro, mis ingresos han aumentado considerablemente. La flexibilidad me permite trabajar en mis propios horarios y el equipo de soporte siempre está disponible."</p>
              <div className="testimonial-author">
                <img src="https://randomuser.me/api/portraits/men/54.jpg" alt="Carlos Mamani" />
                <div>
                  <h4>Carlos Mamani</h4>
                  <p>Conductor desde 2025 • La Paz</p>
                </div>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-rating">
                <FaRegStar className="star filled" />
                <FaRegStar className="star filled" />
                <FaRegStar className="star filled" />
                <FaRegStar className="star filled" />
                <FaRegStar className="star filled" />
              </div>
              <p>"Lo que más valoro es la seguridad. Solo llevo pasajeros verificados y el sistema de alerta me da tranquilidad. Además, las comisiones son mucho más justas que en otras plataformas."</p>
              <div className="testimonial-author">
                <img src="https://randomuser.me/api/portraits/women/54.jpg" alt="Laura Flores" />
                <div>
                  <h4>Laura Flores</h4>
                  <p>Conductora desde 2025 • La Paz</p>
                </div>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-rating">
                <FaRegStar className="star filled" />
                <FaRegStar className="star filled" />
                <FaRegStar className="star filled" />
                <FaRegStar className="star filled" />
                <FaRegStar className="star half" />
              </div>
              <p>"Los pagos son puntuales y la aplicación es muy intuitiva. La posibilidad de retirar mis ganancias diariamente me ayuda mucho con mi flujo de caja para otros negocios."</p>
              <div className="testimonial-author">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Javier Mendoza" />
                <div>
                  <h4>Javier Mendoza</h4>
                  <p>Conductor desde 2025 • La Paz</p>
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

export default Conductor;