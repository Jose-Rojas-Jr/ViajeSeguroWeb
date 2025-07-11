import React, { useEffect, useState } from 'react';
import './Contact.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, 
  FaFacebookMessenger, FaInstagram, FaCheck, FaExclamationTriangle,
  FaClock, FaHeadset, FaShieldAlt
} from 'react-icons/fa';

const Contact = () => {
  // Estado para el formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  // Efecto para animaciones al hacer scroll
  useEffect(() => {
    const sections = document.querySelectorAll('.contacto-container section');
    
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

    // Efecto de onda para botones
    const btns = document.querySelectorAll('.hero-button, .info-button, .social-button, .submit-button');
    
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

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.nombre || !formData.email || !formData.asunto || !formData.mensaje) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Por favor, completa todos los campos obligatorios.'
      });
      return;
    }
    
    // Simulación de envío exitoso
    setFormStatus({
      submitted: true,
      success: true,
      message: '¡Tu mensaje ha sido enviado exitosamente! Nos pondremos en contacto contigo lo antes posible.'
    });
    
    // Resetear el formulario después de 5 segundos
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: ''
      });
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: ''
      });
    }, 5000);
  };

  return (
    <div className="contacto-container">
      <Navbar />
      
      {/* HERO - ÚNICA SECCIÓN CON FONDO AZUL */}
      <section className="contacto-hero">
        <div className="hero-content">
          <h1 className="heading-hero">                  Contáctanos</h1>
          <p className="text-lead">
            Estamos aquí para ayudarte con cualquier consulta sobre SmartLight El Alto. 
            Tu satisfacción y el éxito de tu proyecto son nuestra prioridad.
          </p>
          <div className="hero-buttons">
            <a 
              href="#contacto-form" 
              className="hero-button btn btn-primary btn-lg"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contacto-form');
              }}
            >
              Enviar Mensaje
            </a>
            <a href="tel:+59178795918" className="hero-button secondary btn btn-lg">
              <FaPhone className="button-icon" /> Llamar Ahora
            </a>
          </div>
        </div>
      </section>
      
      {/* INFORMACIÓN DE CONTACTO */}
      <section className="contacto-info section">
        <div className="container">
          <h2 className="heading-section">Medios de Contacto</h2>
          <div className="info-container">
            <div className="info-item card card-gradient-border">
              <div className="info-icon-container">
                <FaPhone className="info-icon" />
              </div>
              <h3 className="heading-card">Teléfono Directo</h3>
              <p className="text-body">+591 78795918</p>
              <p className="info-detail text-small">
                <FaClock style={{ marginRight: '8px' }} />
                Lunes a Viernes: 8:00 - 20:00
              </p>
              <p className="info-detail text-small">
                <FaClock style={{ marginRight: '8px' }} />
                Sábados: 9:00 - 15:00
              </p>
              <a href="tel:+59178795918" className="info-button btn btn-secondary btn-sm">
                Llamar Ahora
              </a>
            </div>
            
            <div className="info-item card card-gradient-border">
              <div className="info-icon-container">
                <FaEnvelope className="info-icon" />
              </div>
              <h3 className="heading-card">Email Corporativo</h3>
              <p className="text-body">soporte@smartlight.com</p>
              <p className="info-detail text-small">
                <FaHeadset style={{ marginRight: '8px' }} />
                Respuesta en menos de 24 horas
              </p>
              <p className="info-detail text-small">
                <FaShieldAlt style={{ marginRight: '8px' }} />
                Soporte técnico especializado
              </p>
              <a href="mailto:soporte@smartlight.com" className="info-button btn btn-secondary btn-sm">
                Enviar Email
              </a>
            </div>
            
            <div className="info-item card card-gradient-border">
              <div className="info-icon-container">
                <FaMapMarkerAlt className="info-icon" />
              </div>
              <h3 className="heading-card">Oficina Principal</h3>
              <p className="text-body">Av. Montes, Plaza Pérez Velasco</p>
              <p className="info-detail text-small">La Paz, Bolivia - Zona Central</p>
              <p className="info-detail text-small">Edificio SmartLight, Piso 3</p>
              <a 
                href="https://maps.google.com/?q=Plaza Pérez Velasco, La Paz, Bolivia" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="info-button btn btn-secondary btn-sm"
              >
                Ver en Mapa
              </a>
            </div>
          </div>
          
          <div className="social-container">
            <h3 className="heading-card">También puedes contactarnos por:</h3>
            <div className="social-buttons">
              <a 
                href="https://wa.me/59178795918?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20SmartLight%20El%20Alto" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-button whatsapp"
              >
                <FaWhatsapp className="social-icon" /> WhatsApp Business
              </a>
              
              <a 
                href="https://m.me/smartlightelalto" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-button messenger"
              >
                <FaFacebookMessenger className="social-icon" /> Messenger
              </a>
              
              <a 
                href="https://instagram.com/smartlightelalto" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-button instagram"
              >
                <FaInstagram className="social-icon" /> Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* FORMULARIO DE CONTACTO */}
      <section id="contacto-form" className="contacto-form section">
        <div className="container">
          <div className="form-map-container">
            <div className="form-container card card-gradient-border">
              <h2 className="heading-section">Envíanos un Mensaje</h2>
              {formStatus.submitted ? (
                <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
                  {formStatus.success ? (
                    <FaCheck className="message-icon" />
                  ) : (
                    <FaExclamationTriangle className="message-icon" />
                  )}
                  <p className="text-body">{formStatus.message}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="nombre" className="text-small">Nombre completo *</label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Ingresa tu nombre completo"
                      required
                      className="focus-visible"
                    />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email" className="text-small">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        required
                        className="focus-visible"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="telefono" className="text-small">Teléfono (opcional)</label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="+591 XXXXXXXX"
                        className="focus-visible"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="asunto" className="text-small">Asunto *</label>
                    <input
                      type="text"
                      id="asunto"
                      name="asunto"
                      value={formData.asunto}
                      onChange={handleChange}
                      placeholder="¿En qué podemos ayudarte?"
                      required
                      className="focus-visible"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="mensaje" className="text-small">Mensaje *</label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      placeholder="Describe tu consulta, proyecto o necesidad específica..."
                      rows="5"
                      required
                      className="focus-visible"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="submit-button btn btn-secondary btn-lg">
                    Enviar Mensaje
                  </button>
                </form>
              )}
            </div>
            
            <div className="map-container card card-gradient-border">
              <h3 className="heading-card">Nuestra Ubicación</h3>
              <div className="map">
                <iframe
                  title="Ubicación SmartLight El Alto - Plaza Pérez Velasco"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.4057860662384!2d-68.14296328513696!3d-16.495908688618393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edec1dc1d0393%3A0xce7521a126fa8c2!2sPlaza%20P%C3%A9rez%20Velasco%2C%20La%20Paz!5e0!3m2!1ses!2sbo!4v1654651234567!5m2!1ses!2sbo"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="office-info">
                <p className="text-small">
                  <strong>Horario de Atención:</strong><br />
                  Lunes a Viernes: 8:00 - 20:00<br />
                  Sábados: 9:00 - 15:00
                </p>
                <p className="text-small">
                  <strong>Servicios Disponibles:</strong><br />
                  • Consultoría técnica especializada<br />
                  • Demostraciones del sistema<br />
                  • Soporte post-implementación
                </p>
                <p className="text-small">
                  <strong>Email:</strong> soporte@smartlight.com<br />
                  <strong>WhatsApp:</strong> +591 78795918
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;