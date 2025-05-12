import React, { useEffect } from 'react';
import './Membership.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { 
  FaUsers, FaBuilding, FaBriefcase, FaCheck, 
  FaTimes, FaHandshake, FaQuestionCircle, FaShieldAlt,
  FaClock, FaMapMarkedAlt, FaRoute
} from 'react-icons/fa';

const Membership = () => {
  // Efecto para animaciones al hacer scroll
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const elements = document.querySelectorAll('.membership, .faq-img, details');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
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

  return (
    <div className="membership-container">
      <Navbar />
      
      {/* Hero Section */}
      <section className="membership-hero">
        <div className="hero-content">
          <h1>Planes de Membresía</h1>
          <p>Elige el plan que mejor se adapte a tus necesidades y disfruta de viajes seguros con tarifas preferenciales y beneficios exclusivos.</p>
          <a href="#membership-options" className="hero-button">Ver planes disponibles</a>
        </div>
      </section>
      
      {/* Introducción */}
      <section className="membership-intro">
        <div className="content-wrapper">
          <h2 className="section-title">Beneficios de Nuestras Membresías</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <FaShieldAlt className="benefit-icon" />
              <h3>Seguridad Garantizada</h3>
              <p>Conductores verificados y monitoreados en tiempo real para tu tranquilidad.</p>
            </div>
            
            <div className="benefit-card">
              <FaClock className="benefit-icon" />
              <p>Disponibilidad 24/7</p>
              <p>Acceso a transporte seguro a cualquier hora del día o de la noche.</p>
            </div>
            
            <div className="benefit-card">
              <FaMapMarkedAlt className="benefit-icon" />
              <h3>Compartir Ubicación</h3>
              <p>Comparte tu ubicación en tiempo real con tus contactos de confianza.</p>
            </div>
            
            <div className="benefit-card">
              <FaHandshake className="benefit-icon" />
              <h3>Tarifas Preferenciales</h3>
              <p>Precios especiales y sin recargos para miembros.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Planes de Membresía */}
      <section id="membership-options" className="membership-options-section">
        <div className="content-wrapper">
          <h2 className="section-title">Nuestros Planes</h2>
          
          <div className="membership-options">
            <div className="membership">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtJAbyIv1PzFjIr3gt5nUEwolvP1jr_X803g&s" alt="Plan Familiar" className="membership-img" />

              <FaUsers size={50} className="icon" />
              <div className="membership-content">
                <h3>Plan Familiar</h3>
                <p>Ideal para familias, incluye transporte seguro para hasta 5 miembros con seguimiento en tiempo real y botón de pánico.</p>
                <ul className="membership-features">
                  <li><FaCheck /> Hasta 30 viajes mensuales</li>
                  <li><FaCheck /> Compartir ubicación con familiares</li>
                  <li><FaCheck /> Solicitudes múltiples simultáneas</li>
                  <li><FaCheck /> Atención prioritaria</li>
                </ul>
                <p><strong>Bs 800/mes</strong></p>
              </div>
              <a href="/contact" className="membership-button">Solicitar ahora</a>
            </div>
            
            <div className="membership">
                        <img src="data:image/jpeg;base64,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" alt="Plan Empresarial" className="membership-img" />

              <FaBuilding size={50} className="icon" />
              <div className="membership-content">
                <h3>Plan Empresarial</h3>
                <p>Solución corporativa para la movilidad segura de tus empleados con tarifas especiales y panel de control administrativo.</p>
                <ul className="membership-features">
                  <li><FaCheck /> Facturación centralizada</li>
                  <li><FaCheck /> Panel de administración</li>
                  <li><FaCheck /> Reportes mensuales</li>
                  <li><FaCheck /> Conductores exclusivos</li>
                </ul>
                <p><strong>Bs 500/mes</strong></p>
              </div>
              <a href="/contact" className="membership-button">Contactar ventas</a>
            </div>
            
            <div className="membership">
              <img 
                src="data:image/jpeg;base64,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" 
                alt="Plan Ejecutivo" 
                className="membership-img"
              />
              <FaBriefcase size={50} className="icon" />
              <div className="membership-content">
                <h3>Plan Ejecutivo</h3>
                <p>Servicio premium con vehículos exclusivos, conductores de élite y atención personalizada para ejecutivos y profesionales.</p>
                <ul className="membership-features">
                  <li><FaCheck /> Vehículos de alta gama</li>
                  <li><FaCheck /> Conductores bilingües</li>
                  <li><FaCheck /> Wifi a bordo</li>
                  <li><FaCheck /> Reservas anticipadas</li>
                </ul>
                <p><strong>Bs 1200/mes</strong></p>
              </div>
              <a href="/contact" className="membership-button">Solicitar ahora</a>
            </div>
          </div>
        </div>
      </section>
      
      
      
      {/* Preguntas Frecuentes */}
      <section className="faq">
        <div className="content-wrapper">
          <h2 className="section-title">Preguntas Frecuentes</h2>
          
          <div className="faq-content">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStIysgd8qXx2kKlxhq1nsg6MGSFYBrpf2SaA&s" 
              alt="Preguntas Frecuentes" 
              className="faq-img" 
            />
            
            <details>
              <summary>¿Puedo cancelar mi membresía en cualquier momento?</summary>
              <p>Sí, puedes cancelar tu membresía en cualquier momento desde la aplicación o contactando a nuestro servicio de atención al cliente. El reembolso se realizará proporcionalmente a los días restantes del mes en curso.</p>
            </details>
            
            <details>
              <summary>¿Cómo funciona el seguimiento en tiempo real?</summary>
              <p>Nuestra app te permite ver la ubicación exacta del vehículo en tiempo real durante todo el trayecto. Además, puedes compartir esta información con tus contactos de confianza para que ellos también puedan seguir tu viaje desde sus dispositivos.</p>
            </details>
            
            <details>
              <summary>¿Qué pasa si necesito más viajes de los incluidos en mi plan?</summary>
              <p>Si necesitas viajes adicionales a los incluidos en tu plan, podrás realizarlos pagando una tarifa preferencial con descuentos de hasta el 20% sobre la tarifa estándar, dependiendo de tu tipo de membresía.</p>
            </details>
            
            <details>
              <summary>¿Cómo puedo solicitar un conductor específico?</summary>
              <p>Con las membresías Familiar y Ejecutiva, puedes guardar conductores como "favoritos" y solicitarlos específicamente si están disponibles. En el plan Empresarial, puedes asignar conductores fijos para rutas regulares.</p>
            </details>
            
            <details>
              <summary>¿Qué métodos de pago aceptan para las membresías?</summary>
              <p>Aceptamos múltiples métodos de pago para tu comodidad: tarjetas de crédito/débito, transferencias bancarias y pagos a través de billeteras digitales como Tigo Money y QR Simple.</p>
            </details>
            
            <details>
              <summary>¿Las membresías incluyen viajes interurbanos?</summary>
              <p>Los planes estándar cubren viajes dentro del área metropolitana de cada ciudad. Para viajes interurbanos, ofrecemos un servicio adicional con tarifas especiales para miembros.</p>
            </details>
          </div>
        </div>
      </section>
      
      {/* CTA Final */}
      <section className="membership-cta">
        <div className="content-wrapper">
          <h2>Comienza a disfrutar de beneficios exclusivos</h2>
          <p>Selecciona el plan que mejor se adapte a tus necesidades y únete a los miles de usuarios que viajan seguros con ViajeSeguro.</p>
          <div className="cta-buttons">
            <a href="/contact" className="cta-button primary">Contratar membresía</a>
            <a href="#membership-options" className="cta-button secondary">Ver planes de nuevo</a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Membership;