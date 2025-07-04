import React from 'react';
import { 
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, 
  FaWhatsapp, FaShieldAlt, FaLightbulb,
  FaUsers, FaRoute, FaClock, FaHeart, FaLeaf,
  FaChartBar, FaWifi, FaSun, FaMoon
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: 'var(--primary-dark)',
      color: 'var(--neutral-light)',
      padding: '4rem 0 2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '3rem'
      }}>
        {/* Columna de información del proyecto */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <h3 style={{
              color: 'var(--primary-light)',
              fontSize: '1.5rem',
              fontWeight: '700',
              marginBottom: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <FaLightbulb /> SmartLight
            </h3>
            <p style={{
              color: 'var(--neutral-light)',
              opacity: '0.9',
              lineHeight: '1.6'
            }}>
              Sistema inteligente para la gestión automatizada del alumbrado público en El Alto, Distrito 2 - Villa Adela.
            </p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '0.75rem',
              backgroundColor: 'var(--secondary-blue)',
              borderRadius: '8px',
              border: '1px solid rgba(251, 191, 36, 0.2)'
            }}>
              <FaLeaf style={{ color: 'var(--secondary-green)', fontSize: '1.2rem' }} />
              <div>
                <span style={{
                  color: 'var(--primary-light)',
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}>35%</span>
                <span style={{
                  color: 'var(--neutral-light)',
                  fontSize: '0.9rem',
                  marginLeft: '0.5rem'
                }}>Ahorro energético</span>
              </div>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '0.75rem',
              backgroundColor: 'var(--secondary-blue)',
              borderRadius: '8px',
              border: '1px solid rgba(251, 191, 36, 0.2)'
            }}>
              <FaWifi style={{ color: 'var(--secondary-green)', fontSize: '1.2rem' }} />
              <div>
                <span style={{
                  color: 'var(--primary-light)',
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}>100%</span>
                <span style={{
                  color: 'var(--neutral-light)',
                  fontSize: '0.9rem',
                  marginLeft: '0.5rem'
                }}>Conectividad IoT</span>
              </div>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a 
              href="https://facebook.com/alumbradointeligente" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: 'var(--neutral-light)',
                backgroundColor: 'var(--secondary-blue)',
                padding: '0.75rem',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'var(--transition-ease)',
                border: '1px solid rgba(251, 191, 36, 0.2)'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = 'var(--primary-light)';
                e.target.style.color = 'var(--primary-dark)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'var(--secondary-blue)';
                e.target.style.color = 'var(--neutral-light)';
              }}
            >
              <FaFacebookF />
            </a>
            <a 
              href="https://twitter.com/alumbradointeligente" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: 'var(--neutral-light)',
                backgroundColor: 'var(--secondary-blue)',
                padding: '0.75rem',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'var(--transition-ease)',
                border: '1px solid rgba(251, 191, 36, 0.2)'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = 'var(--primary-light)';
                e.target.style.color = 'var(--primary-dark)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'var(--secondary-blue)';
                e.target.style.color = 'var(--neutral-light)';
              }}
            >
              <FaTwitter />
            </a>
            <a 
              href="https://github.com/alumbrado-inteligente" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: 'var(--neutral-light)',
                backgroundColor: 'var(--secondary-blue)',
                padding: '0.75rem',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'var(--transition-ease)',
                border: '1px solid rgba(251, 191, 36, 0.2)'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = 'var(--primary-light)';
                e.target.style.color = 'var(--primary-dark)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'var(--secondary-blue)';
                e.target.style.color = 'var(--neutral-light)';
              }}
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com/company/alumbrado-inteligente" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: 'var(--neutral-light)',
                backgroundColor: 'var(--secondary-blue)',
                padding: '0.75rem',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'var(--transition-ease)',
                border: '1px solid rgba(251, 191, 36, 0.2)'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = 'var(--primary-light)';
                e.target.style.color = 'var(--primary-dark)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'var(--secondary-blue)';
                e.target.style.color = 'var(--neutral-light)';
              }}
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Columna de soporte */}
        <div>
          <h4 style={{
            color: 'var(--primary-light)',
            fontSize: '1.1rem',
            fontWeight: '600',
            marginBottom: '1rem'
          }}>Soporte</h4>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            
            <li>
              <a href="/contact" style={{
                color: 'var(--neutral-light)',
                textDecoration: 'none',
                opacity: '0.9',
                transition: 'var(--transition-ease)'
              }}
              onMouseOver={(e) => {
                e.target.style.color = 'var(--primary-light)';
                e.target.style.opacity = '1';
              }}
              onMouseOut={(e) => {
                e.target.style.color = 'var(--neutral-light)';
                e.target.style.opacity = '0.9';
              }}
              >Contacto</a>
            </li>
            
          </ul>
        </div>

        {/* Columna de contactos */}
        <div>
          <h4 style={{
            color: 'var(--primary-light)',
            fontSize: '1.1rem',
            fontWeight: '600',
            marginBottom: '1rem'
          }}>Contacto</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem'
            }}>
              <FaPhone style={{ 
                color: 'var(--secondary-green)', 
                marginTop: '0.2rem',
                fontSize: '1rem'
              }} />
              <div>
                <a href="tel:+59178795918" style={{
                  color: 'var(--neutral-light)',
                  textDecoration: 'none',
                  fontWeight: '500'
                }}>+591 78795918</a>
                <div style={{
                  color: 'var(--neutral-light)',
                  fontSize: '0.85rem',
                  opacity: '0.7'
                }}>Soporte técnico 24/7</div>
              </div>
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem'
            }}>
              <FaEnvelope style={{ 
                color: 'var(--secondary-green)', 
                marginTop: '0.2rem',
                fontSize: '1rem'
              }} />
              <div>
                <a href="mailto:soporte@alumbradointeligente.com" style={{
                  color: 'var(--neutral-light)',
                  textDecoration: 'none',
                  fontWeight: '500'
                }}>soporte@alumbradointeligente.com</a>
                <div style={{
                  color: 'var(--neutral-light)',
                  fontSize: '0.85rem',
                  opacity: '0.7'
                }}>Respuesta en 24h</div>
              </div>
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem'
            }}>
              <FaMapMarkerAlt style={{ 
                color: 'var(--secondary-green)', 
                marginTop: '0.2rem',
                fontSize: '1rem'
              }} />
              <div>
                <span style={{
                  color: 'var(--neutral-light)',
                  fontWeight: '500'
                }}>El Alto, Bolivia</span>
                <div style={{
                  color: 'var(--neutral-light)',
                  fontSize: '0.85rem',
                  opacity: '0.7'
                }}>Distrito 2, Villa Adela</div>
              </div>
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem'
            }}>
              <FaWhatsapp style={{ 
                color: 'var(--secondary-green)', 
                marginTop: '0.2rem',
                fontSize: '1rem'
              }} />
              <div>
                <a 
                  href="https://wa.me/59178795918" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--neutral-light)',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }}
                >
                  WhatsApp
                </a>
                <div style={{
                  color: 'var(--neutral-light)',
                  fontSize: '0.85rem',
                  opacity: '0.7'
                }}>Chat directo</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div style={{
        marginTop: '3rem',
        paddingTop: '2rem',
        borderTop: '1px solid rgba(251, 191, 36, 0.2)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <p style={{
              color: 'var(--neutral-light)',
              margin: 0,
              opacity: '0.8'
            }}>© {currentYear} LuzInteligente. Todos los derechos reservados.</p>
            <p style={{
              color: 'var(--neutral-light)',
              margin: '0.25rem 0 0',
              opacity: '0.7',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              Desarrollado con <FaHeart style={{ color: 'var(--secondary-green)' }} /> por estudiantes de Ingeniería de Sistemas
            </p>
          </div>
          
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            flexWrap: 'wrap'
          }}>
            <a href="/privacy" style={{
              color: 'var(--neutral-light)',
              textDecoration: 'none',
              opacity: '0.8',
              fontSize: '0.9rem',
              transition: 'var(--transition-ease)'
            }}
            onMouseOver={(e) => {
              e.target.style.color = 'var(--primary-light)';
              e.target.style.opacity = '1';
            }}
            onMouseOut={(e) => {
              e.target.style.color = 'var(--neutral-light)';
              e.target.style.opacity = '0.8';
            }}
            >Privacidad</a>
            <a href="/terms" style={{
              color: 'var(--neutral-light)',
              textDecoration: 'none',
              opacity: '0.8',
              fontSize: '0.9rem',
              transition: 'var(--transition-ease)'
            }}
            onMouseOver={(e) => {
              e.target.style.color = 'var(--primary-light)';
              e.target.style.opacity = '1';
            }}
            onMouseOut={(e) => {
              e.target.style.color = 'var(--neutral-light)';
              e.target.style.opacity = '0.8';
            }}
            >Términos</a>
            <a href="/api-docs" style={{
              color: 'var(--neutral-light)',
              textDecoration: 'none',
              opacity: '0.8',
              fontSize: '0.9rem',
              transition: 'var(--transition-ease)'
            }}
            onMouseOver={(e) => {
              e.target.style.color = 'var(--primary-light)';
              e.target.style.opacity = '1';
            }}
            onMouseOut={(e) => {
              e.target.style.color = 'var(--neutral-light)';
              e.target.style.opacity = '0.8';
            }}
            >API</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        :root {
          --primary-dark: #0f172a;
          --primary-light: #fbbf24;
          --secondary-blue: #1e293b;
          --secondary-green: #10b981;
          --neutral-light: #f8fafc;
          --neutral-dark: #64748b;
          --text-main: var(--primary-dark);
          --text-light: var(--neutral-dark);
          --border-color: rgba(15, 23, 42, 0.1);
          --transition-ease: all 0.3s ease-in-out;
          --shadow-soft: 0 4px 15px rgba(15, 23, 42, 0.1);
          --shadow-medium: 0 8px 25px rgba(15, 23, 42, 0.15);
          --shadow-strong: 0 15px 35px rgba(15, 23, 42, 0.2);
        }

        @media (max-width: 768px) {
          footer {
            padding: 2rem 0 1rem !important;
          }
          
          footer > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          footer > div:last-child > div {
            flex-direction: column !important;
            align-items: flex-start !important;
            text-align: left !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;