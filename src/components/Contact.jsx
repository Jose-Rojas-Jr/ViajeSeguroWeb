import React, { useEffect, useState } from 'react';
import './Contact.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, 
  FaFacebookMessenger, FaInstagram, FaCheck, FaExclamationTriangle
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
    const sections = document.querySelectorAll('section');
    const elements = document.querySelectorAll('.info-item, .form-container, .map-container, .faq-item');
    
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
    
    // Aquí se podría agregar la lógica real para enviar el formulario
    // Simulación de envío exitoso
    setFormStatus({
      submitted: true,
      success: true,
      message: '¡Tu mensaje ha sido enviado! Nos pondremos en contacto contigo lo antes posible.'
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
      
      {/* HERO */}
      <section className="contacto-hero">
        <div className="hero-content">
          <h1>Contáctanos</h1>
          <p>Estamos aquí para ayudarte. Tu seguridad y satisfacción son nuestra prioridad.</p>
          <div className="hero-buttons">
            <a href="#contacto-form" className="hero-button">Enviar mensaje</a>
            <a href="tel:+59178795918" className="hero-button secondary">
              <FaPhone className="button-icon" /> Llamar ahora
            </a>
          </div>
        </div>
      </section>
      
      {/* INFORMACIÓN DE CONTACTO */}
      <section className="contacto-info">
        <div className="content-wrapper">
          <h2 className="section-title">Medios de Contacto</h2>
          <div className="info-container">
            <div className="info-item">
              <div className="info-icon-container">
                <FaPhone className="info-icon" />
              </div>
              <h3>Teléfono</h3>
              <p>+591 78795918</p>
              <p className="info-detail">Lunes a Viernes: 8:00 - 20:00</p>
              <p className="info-detail">Sábados: 9:00 - 15:00</p>
              <a href="tel:+59178795918" className="info-button">Llamar ahora</a>
            </div>
            
            <div className="info-item">
              <div className="info-icon-container">
                <FaEnvelope className="info-icon" />
              </div>
              <h3>Email</h3>
              <p>soporte@SmartLight.com</p>
              <p className="info-detail">Respuesta en menos de 24 horas</p>
              <p className="info-detail">Soporte disponible 24/7</p>
              <a href="mailto:soporte@viajeseguro.com" className="info-button">Enviar email</a>
            </div>
            
            <div className="info-item">
              <div className="info-icon-container">
                <FaMapMarkerAlt className="info-icon" />
              </div>
              <h3>Ubicación</h3>
              <p>Av. Montes, Plaza Pérez Velasco</p>
              <p className="info-detail">La Paz, Bolivia</p>
              <p className="info-detail">Código Postal: 12345</p>
              <a 
                href="https://maps.google.com/?q=Av. Montes, Plaza Pérez Velasco, La Paz, Bolivia" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="info-button"
              >
                Ver en mapa
              </a>
            </div>
          </div>
          
          <div className="social-container">
            <h3>También puedes contactarnos por:</h3>
            <div className="social-buttons">
              <a 
                href="https://wa.me/59178795918" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-button whatsapp"
              >
                <FaWhatsapp className="social-icon" /> WhatsApp
              </a>
              
    
            </div>
          </div>
        </div>
      </section>
      
      {/* FORMULARIO DE CONTACTO */}
      <section id="contacto-form" className="contacto-form">
        <div className="content-wrapper">
          <div className="form-map-container">
            <div className="form-container">
              <h2 className="section-title">Envíanos un Mensaje</h2>
              {formStatus.submitted ? (
                <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
                  {formStatus.success ? (
                    <FaCheck className="message-icon" />
                  ) : (
                    <FaExclamationTriangle className="message-icon" />
                  )}
                  <p>{formStatus.message}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre completo</label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Ingresa tu nombre"
                      required
                    />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="telefono">Teléfono</label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="Tu número de contacto"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="asunto">Asunto</label>
                    <input
                      type="text"
                      id="asunto"
                      name="asunto"
                      value={formData.asunto}
                      onChange={handleChange}
                      placeholder="¿En qué podemos ayudarte?"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      placeholder="Escribe tu mensaje aquí..."
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="submit-button">
                    Enviar mensaje
                  </button>
                </form>
              )}
            </div>
            
            <div className="map-container">
              <h3>Nuestra oficina</h3>
              <div className="map">
                <iframe
                  title="Ubicación de ViajeSeguro"
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
                <p><strong>Horario de atención:</strong> Lunes a Viernes 8:00 - 20:00</p>
                <p><strong>Sábados:</strong> 9:00 - 15:00</p>
                <p><strong>Email:</strong> soporte@SmartLight.com</p>
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