import React, { useEffect } from 'react';
import './Home.css';
import Navbar from './Navbar';
import Footer from './Footer';
import {
  FaShieldAlt, FaUserCheck, FaMapMarkedAlt, FaCar, FaClock,
  FaMobileAlt, FaHandshake, FaQuestionCircle, FaBullseye, FaEye, 
  FaBalanceScale, FaLock, FaStar, FaRocket, FaHeadset
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
          <h1>Tu viaje, más seguro que nunca</h1>
          <p>Conecta con conductores verificados y navega con confianza gracias a nuestra plataforma digital de transporte seguro.</p>
          <div className="hero-buttons">
            <a href="https://play.google.com" className="btn-primary">Descargar App</a>
            <a href="#about" className="btn-secondary">Conocer más</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://i.ibb.co/xtN8mjLv/logo.png" alt="Viaje Seguro App" />
        </div>
      </section>

      {/* ESTADÍSTICAS - NUEVA SECCIÓN */}
      <section className="statistics">
        <div className="stat-container">
          <div className="stat-item">
            <div className="stat-number">5,000+</div>
            <div className="stat-label">Viajes Seguros</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1,200+</div>
            <div className="stat-label">Conductores Verificados</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">20+</div>
            <div className="stat-label">Ciudades</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4.8</div>
            <div className="stat-label">Valoración Promedio</div>
          </div>
        </div>
      </section>

      {/* SOBRE NOSOTROS */}
      <section id="about" className="about-us">
        <h2>¿Quiénes Somos?</h2>
        <p>ViajeSeguro es una iniciativa boliviana que busca transformar la movilidad urbana,
        conectando pasajeros con conductores certificados para ofrecer viajes seguros, accesibles y monitoreados en tiempo real.</p>
        <div className="mision-vision">
          <div>
            <FaBullseye className="icon" />
            <h3>Misión</h3>
            <p>Ofrecer una solución tecnológica que promueva la seguridad y confianza en el transporte diario de los ciudadanos bolivianos.</p>
          </div>
          <div>
            <FaEye className="icon" />
            <h3>Visión</h3>
            <p>Ser la plataforma de movilidad más segura y confiable de Bolivia, presente en todas las ciudades y comunidades del país.</p>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="valores">
        <h2>Nuestros Valores</h2>
        <div className="features">
          <div className="feature">
            <FaShieldAlt className="feature-icon" />
            <h3>Seguridad</h3>
            <p>En el centro de cada viaje está tu tranquilidad. Verificamos a todos nuestros conductores.</p>
          </div>
          <div className="feature">
            <FaBalanceScale className="feature-icon" />
            <h3>Transparencia</h3>
            <p>Todos los perfiles y procesos son públicos y verificables para garantizar tu confianza.</p>
          </div>
          <div className="feature">
            <FaLock className="feature-icon" />
            <h3>Privacidad</h3>
            <p>Tus datos personales están protegidos con los más altos estándares de seguridad.</p>
          </div>
          <div className="feature">
            <FaMobileAlt className="feature-icon" />
            <h3>Accesibilidad</h3>
            <p>Una app intuitiva y fácil de usar para todos los niveles de usuarios.</p>
          </div>
        </div>
      </section>

      {/* BENEFICIOS CONDUCTOR / VIAJERO */}
      <section className="benefits">
        <h2>Beneficios de ViajeSeguro</h2>
        <div className="benefit-columns">
          <div className="benefit-card">
            <h3>Para Conductores</h3>
            <ul>
              <li>Registro fácil desde la app con verificación rápida</li>
              <li>Bonos por cumplimiento y calificaciones positivas</li>
              <li>Soporte técnico y humano disponible 24/7</li>
              <li>Tarifas competitivas sin comisiones abusivas</li>
              <li>Mayor seguridad con pasajeros verificados</li>
              <li>Flexibilidad para trabajar en tus horarios</li>
            </ul>
          </div>
          <div className="benefit-card">
            <h3>Para Pasajeros</h3>
            <ul>
              <li>Conductores verificados con documentación al día</li>
              <li>Seguimiento en tiempo real compartible con familiares</li>
              <li>Botón de emergencia con respuesta inmediata</li>
              <li>Opciones de viaje flexibles según tus necesidades</li>
              <li>Precios transparentes sin tarifas dinámicas abusivas</li>
              <li>Historial de viajes detallado para control personal</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ¿CÓMO FUNCIONA? */}
      <section className="how-it-works">
        <h2>¿Cómo funciona?</h2>
        <div className="steps">
          <div className="step">
            <FaMobileAlt className="step-icon" />
            <h3>Descarga la App</h3>
            <p>Disponible gratuitamente en la Play Store para todos los dispositivos Android y próximamente en iOS.</p>
          </div>
          <div className="step">
            <FaUserCheck className="step-icon" />
            <h3>Crea tu Cuenta</h3>
            <p>Regístrate con tus datos básicos y verifica tu identidad para mayor seguridad.</p>
          </div>
          <div className="step">
            <FaMapMarkedAlt className="step-icon" />
            <h3>Solicita tu Viaje</h3>
            <p>Escoge tu destino, horario y tipo de vehículo según tus necesidades.</p>
          </div>
          <div className="step">
            <FaCar className="step-icon" />
            <h3>Disfruta el Trayecto</h3>
            <p>Viaja con tranquilidad con seguimiento en tiempo real y botón de emergencia.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS - NUEVA SECCIÓN */}
      <section className="testimonials">
        <h2>Lo que dicen nuestros usuarios</h2>
        <div className="testimonial-slider">
          <div className="testimonial-item">
            <div className="testimonial-rating">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <p>"Como conductora, me siento más segura sabiendo que los pasajeros están verificados. Además, las comisiones son justas."</p>
            <div className="testimonial-author">
              <h4>Laura Mendoza</h4>
              <p>Conductora desde 2023</p>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-rating">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <p>"Por fin una app donde puedo compartir mi ubicación con mi familia mientras viajo. El botón de pánico me da tranquilidad adicional."</p>
            <div className="testimonial-author">
              <h4>Martín Flores</h4>
              <p>Usuario frecuente</p>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-rating">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <p>"Después de probar otras aplicaciones, ViajeSeguro es la única que realmente prioriza la seguridad. Los conductores son profesionales."</p>
            <div className="testimonial-author">
              <h4>Carla Iriarte</h4>
              <p>Usuaria desde 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES */}
      <section className="faq">
        <h2>Preguntas Frecuentes</h2>
        <div className="faq-list">
          <div>
            <FaQuestionCircle className="icon" />
            <h4>¿Qué necesito para registrarme como conductor?</h4>
            <p>Documento de identidad vigente, licencia de conducir actualizada, SOAT al día, inspección técnica del vehículo y un smartphone con GPS.</p>
          </div>
          <div>
            <FaQuestionCircle className="icon" />
            <h4>¿Qué pasa si tengo una emergencia durante el viaje?</h4>
            <p>Puedes activar el botón de emergencia en la app, que notifica automáticamente a nuestro equipo de soporte y a tus contactos de confianza con tu ubicación exacta.</p>
          </div>
          <div>
            <FaQuestionCircle className="icon" />
            <h4>¿Cómo garantiza mi seguridad ViajeSeguro?</h4>
            <p>Todos los conductores pasan por un proceso de verificación manual, cada viaje es monitoreado en tiempo real, y puedes compartir tu ruta con contactos de confianza.</p>
          </div>
          <div>
            <FaQuestionCircle className="icon" />
            <h4>¿ViajeSeguro funciona en toda Bolivia?</h4>
            <p>Actualmente operamos en La Paz, Santa Cruz y Cochabamba, con planes de expansión a todas las ciudades principales del país durante 2025.</p>
          </div>
          <div>
            <FaQuestionCircle className="icon" />
            <h4>¿Cómo se calculan las tarifas?</h4>
            <p>Las tarifas se calculan en base a la distancia, tiempo estimado de viaje y tipo de vehículo. Siempre verás el precio final antes de confirmar tu viaje.</p>
          </div>
          <div>
            <FaQuestionCircle className="icon" />
            <h4>¿Puedo pagar en efectivo?</h4>
            <p>Sí, aceptamos pagos en efectivo, tarjetas de crédito/débito y pagos a través de billeteras digitales como Tigo Money y QR Simple.</p>
          </div>
        </div>
      </section>

      {/* APP FEATURES - NUEVA SECCIÓN */}
      <section className="app-features">
        <h2>Características destacadas de nuestra app</h2>
        <div className="app-features-container">
          <div className="app-feature-item">
            <FaLock className="app-feature-icon" />
            <h3>Verificación de Identidad</h3>
            <p>Tanto conductores como pasajeros verifican su identidad para mayor seguridad.</p>
          </div>
          <div className="app-feature-item">
            <FaMapMarkedAlt className="app-feature-icon" />
            <h3>Seguimiento en Tiempo Real</h3>
            <p>Comparte tu ubicación con familiares o amigos durante todo el trayecto.</p>
          </div>
          <div className="app-feature-item">
            <FaHeadset className="app-feature-icon" />
            <h3>Soporte 24/7</h3>
            <p>Atención al cliente disponible todo el día, todos los días de la semana.</p>
          </div>
          <div className="app-feature-item">
            <FaRocket className="app-feature-icon" />
            <h3>Interfaz Intuitiva</h3>
            <p>Diseñada para ser fácil de usar por cualquier persona.</p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-final">
        <h2>Únete hoy a la movilidad segura</h2>
        <p>Haz parte de la red de usuarios que confían en ViajeSeguro para sus trayectos diarios. Ya somos más de 10,000 usuarios satisfechos en toda Bolivia.</p>
        <div className="hero-buttons">
          <a href="https://play.google.com" className="btn-primary">Descargar App</a>
          <a href="/contact" className="btn-secondary">Contactar Soporte</a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;