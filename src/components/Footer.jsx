import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { 
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, 
  FaWhatsapp, FaShieldAlt, FaLightbulb,
  FaUsers, FaRoute, FaClock, FaHeart, FaLeaf,
  FaChartBar, FaWifi, FaSun, FaMoon, FaServer,
  FaTools, FaInfoCircle, FaUserShield, FaFileContract,
  FaCode, FaQuestionCircle, FaHeadset
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-container">
          {/* Grid Principal */}
          <div className="footer-grid">
            
            {/* Sección de Marca */}
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="footer-logo-icon">
                  <FaLightbulb />
                </div>
                <div className="footer-logo-text">
                  <h3 className="footer-logo-title heading-footer">SmartLight</h3>
                  
                </div>
              </div>
              
              <p className="footer-description text-footer">
                Sistema inteligente IoT para la gestión automatizada y eficiente del alumbrado público 
                en El Alto, Distrito 2 - Villa Adela. Transformando la infraestructura urbana con 
                tecnología de vanguardia.
              </p>
              
              {/* Estadísticas */}
              <div className="footer-stats">
                <div className="footer-stat">
                  <FaLeaf className="footer-stat-icon" />
                  <div>
                    <div className="footer-stat-number text-footer">75%</div>
                    <div className="footer-stat-label text-footer-xs">Ahorro energético</div>
                  </div>
                </div>
                <div className="footer-stat">
                  <FaWifi className="footer-stat-icon" />
                  <div>
                    <div className="footer-stat-number text-footer">100%</div>
                    <div className="footer-stat-label text-footer-xs">Conectividad IoT</div>
                  </div>
                </div>
              </div>
              
              {/* Redes Sociales */}
              <div className="footer-social">
                <a 
                  href="https://facebook.com/smartlightelalto" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-social-link facebook"
                  aria-label="Síguenos en Facebook"
                >
                  <FaFacebookF />
                </a>
                <a 
                  href="https://twitter.com/smartlightelalto" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-social-link twitter"
                  aria-label="Síguenos en Twitter"
                >
                  <FaTwitter />
                </a>
                <a 
                  href="https://instagram.com/smartlightelalto" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-social-link instagram"
                  aria-label="Síguenos en Instagram"
                >
                  <FaInstagram />
                </a>
                <a 
                  href="https://linkedin.com/company/smartlight-el-alto" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-social-link linkedin"
                  aria-label="Síguenos en LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
                <a 
                  href="https://github.com/smartlight-el-alto" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-social-link github"
                  aria-label="Ve nuestro código en GitHub"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://wa.me/59178795918?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20SmartLight%20El%20Alto" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-social-link whatsapp"
                  aria-label="Contáctanos por WhatsApp"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>

            {/* Navegación Principal */}
            <div className="footer-section">
              <h4 className="footer-section-title heading-section-footer">Navegación</h4>
              <nav>
                <ul className="footer-nav">
                  <li>
                    <Link to="/" className="footer-nav-link text-footer-small">
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link to="/nosotros" className="footer-nav-link text-footer-small">
                      Nosotros
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="footer-nav-link text-footer-small">
                      Servicios
                    </Link>
                  </li>
                
                  <li>
                    <Link to="/contact" className="footer-nav-link text-footer-small">
                      Contacto
                    </Link>
                  </li>
                  <li>
                    <a 
                      href="/dashboard" 
                      className="footer-nav-link text-footer-small"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Administracion
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            

            {/* Información de Contacto */}
            <div className="footer-section">
              <h4 className="footer-section-title heading-section-footer">Contacto</h4>
              <div className="footer-contact">
                <div className="footer-contact-item">
                  <FaPhone className="footer-contact-icon" />
                  <div className="footer-contact-content">
                    <a 
                      href="tel:+59178795918" 
                      className="footer-contact-main text-footer-small"
                    >
                      +591 78795918
                    </a>
                    <div className="footer-contact-sub text-footer-xs">
                      <FaHeadset style={{ marginRight: '4px' }} />
                      Soporte 24/7
                    </div>
                  </div>
                </div>
                
                <div className="footer-contact-item">
                  <FaEnvelope className="footer-contact-icon" />
                  <div className="footer-contact-content">
                    <a 
                      href="mailto:soporte@smartlight.com" 
                      className="footer-contact-main text-footer-small"
                    >
                      soporte@smartlight.com
                    </a>
                    <div className="footer-contact-sub text-footer-xs">
                      <FaClock style={{ marginRight: '4px' }} />
                      Respuesta en 24h
                    </div>
                  </div>
                </div>
                
                <div className="footer-contact-item">
                  <FaMapMarkerAlt className="footer-contact-icon" />
                  <div className="footer-contact-content">
                    <span className="footer-contact-main text-footer-small">
                      El Alto, Bolivia
                    </span>
                    <div className="footer-contact-sub text-footer-xs">
                      Distrito 2, Villa Adela
                    </div>
                  </div>
                </div>
                
                <div className="footer-contact-item">
                  <FaWhatsapp className="footer-contact-icon" />
                  <div className="footer-contact-content">
                    <a 
                      href="https://wa.me/59178795918" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="footer-contact-main text-footer-small"
                    >
                      WhatsApp Business
                    </a>
                    <div className="footer-contact-sub text-footer-xs">
                      <FaUsers style={{ marginRight: '4px' }} />
                      Chat directo
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p className="footer-copyright-main text-footer-small">
                © {currentYear} SmartLight El Alto. Todos los derechos reservados.
              </p>
              <p className="footer-copyright-dev text-footer-xs">
                Desarrollado con <FaHeart className="footer-heart" /> por estudiantes de Ingeniería de Sistemas - EMI
              </p>
            </div>
            
       
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;