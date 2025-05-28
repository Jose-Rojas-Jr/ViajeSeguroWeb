import React from 'react';
import './Footer.css';
import { 
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaApple, 
  FaGooglePlay, FaWhatsapp, FaShieldAlt, FaCreditCard,
  FaUsers, FaRoute, FaClock, FaHeart
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Columna de información de la empresa */}
        <div className="footer-column brand-column">
          <div className="footer-brand">
            <h3>ViajeSeguro</h3>
            <p>Tu plataforma de transporte más segura y confiable en Bolivia.</p>
          </div>
          
          <div className="footer-stats">
            <div className="stat">
              <FaUsers className="stat-icon" />
              <div>
                <span className="stat-number">15,000+</span>
                <span className="stat-label">Viajes realizados</span>
              </div>
            </div>
            <div className="stat">
              <FaShieldAlt className="stat-icon" />
              <div>
                <span className="stat-number">100%</span>
                <span className="stat-label">Conductores verificados</span>
              </div>
            </div>
          </div>
          
          <div className="social-links">
            <a 
              href="https://facebook.com/viajeseguro" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a 
              href="https://twitter.com/viajeseguro" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a 
              href="https://instagram.com/viajeseguro" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://linkedin.com/company/viajeseguro" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Columna de servicios */}
        <div className="footer-column">
          <h4>Servicios</h4>
          <ul>
            <li><a href="/servicios">Viajes en la ciudad</a></li>
            <li><a href="/servicios">Viajes largos</a></li>
            <li><a href="/servicios">Servicios corporativos</a></li>
            <li><a href="/conductor">Únete como conductor</a></li>
            <li><a href="/membership">Membership Premium</a></li>
          </ul>
        </div>

        {/* Columna de soporte */}
        <div className="footer-column">
          <h4>Soporte</h4>
          <ul>
            <li><a href="/contact">Centro de ayuda</a></li>
            <li><a href="/contact">Contacto</a></li>
            <li><a href="/safety">Seguridad</a></li>
            <li><a href="/faq">Preguntas frecuentes</a></li>
            <li><a href="/emergency">Emergencias</a></li>
            <li><a href="/insurance">Seguros</a></li>
          </ul>
        </div>

        {/* Columna de información legal */}
        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li><a href="/privacy">Política de privacidad</a></li>
            <li><a href="/terms">Términos y condiciones</a></li>
            <li><a href="/cookies">Política de cookies</a></li>
            <li><a href="/accessibility">Accesibilidad</a></li>
            <li><a href="/licenses">Licencias</a></li>
            <li><a href="/complaints">Libro de reclamaciones</a></li>
          </ul>
        </div>

        {/* Columna de contacto y descarga */}
        <div className="footer-column contact-column">
          <h4>Contacto</h4>
          <div className="contact-info">
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div>
                <a href="tel:+59178795918">+591 78795918</a>
                <span className="contact-detail">24/7 Soporte</span>
              </div>
            </div>
            
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <a href="mailto:soporte@viajeseguro.com">soporte@viajeseguro.com</a>
                <span className="contact-detail">Respuesta  24h</span>
              </div>
            </div>
            
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <span>La Paz, Bolivia</span>
                <span className="contact-detail">Av. Montes, Plaza Pérez Velasco</span>
              </div>
            </div>
            
            <div className="contact-item">
              <FaWhatsapp className="contact-icon whatsapp" />
              <div>
                <a 
                  href="https://wa.me/59178795918" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
                <span className="contact-detail">Chat directo</span>
              </div>
            </div>
          </div>

          <div className="download-section">
            <h5>Descarga la App</h5>
            <div className="download-buttons">
              <a 
                href="https://apps.apple.com/app/viajeseguro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="download-button"
              >
                <FaApple className="download-icon" />
                <div className="download-text">
                  <span className="download-small">Descargar en</span>
                  <span className="download-large">App Store</span>
                </div>
              </a>
              
              <a 
                href="https://play.google.com/store/apps/details?id=com.viajeseguro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="download-button"
              >
                <FaGooglePlay className="download-icon" />
                <div className="download-text">
                  <span className="download-small">Consíguelo en</span>
                  <span className="download-large">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>


      {/* Footer bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="copyright">
            <p>© {currentYear} ViajeSeguro. Todos los derechos reservados.</p>
            <p className="made-with">
              Hecho con <FaHeart className="heart-icon" /> en Bolivia
            </p>
          </div>
          
          <div className="footer-links">
            <a href="/sitemap">Mapa del sitio</a>
            <a href="/careers">Trabajar con nosotros</a>
            <a href="/press">Prensa</a>
            <a href="/investors">Inversionistas</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;