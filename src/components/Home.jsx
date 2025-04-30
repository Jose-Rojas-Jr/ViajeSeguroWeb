
import React from 'react';
import './Home.css';
import Navbar from './Navbar';
import Footer from './Footer';
import {
  FaShieldAlt, FaUserCheck, FaMapMarkedAlt, FaCar, FaClock,
  FaMobileAlt, FaHandshake, FaQuestionCircle, FaBullseye, FaEye, FaBalanceScale
} from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Tu viaje, más seguro que nunca</h1>
          <p>Conecta con conductores verificados y navega con confianza gracias a nuestra plataforma digital.</p>
          <div className="hero-buttons">
            <a href="https://play.google.com" className="btn-primary">descarga la App</a>
          
          </div>
        </div>
        <div className="hero-image">
          <img src="https://i.ibb.co/xtN8mjLv/logo.png" alt="Viaje Seguro" />
        </div>
      </section>

      {/* SOBRE NOSOTROS */}
      <section className="about-us">
        <h2>¿Quiénes Somos?</h2>
        <p>ViajeSeguro es una iniciativa boliviana que busca transformar la movilidad urbana,
        conectando pasajeros con conductores certificados para ofrecer viajes seguros, accesibles y monitoreados en tiempo real.</p>
        <div className="mision-vision">
          <div>
            <FaBullseye className="icon" />
            <h3>Misión</h3>
            <p>Ofrecer una solución tecnológica que promueva la seguridad y confianza en el transporte diario de los ciudadanos.</p>
          </div>
          <div>
            <FaEye className="icon" />
            <h3>Visión</h3>
            <p>Ser la plataforma de movilidad más segura y confiable de Bolivia, presente en todas las ciudades y comunidades.</p>
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
            <p>En el centro de cada viaje está tu tranquilidad.</p>
          </div>
          <div className="feature">
            <FaBalanceScale className="feature-icon" />
            <h3>Transparencia</h3>
            <p>Todos los perfiles y procesos son públicos y verificables.</p>
          </div>
          <div className="feature">
            <FaMobileAlt className="feature-icon" />
            <h3>Accesibilidad</h3>
            <p>Una app ligera y fácil de usar para todos los niveles.</p>
          </div>
        </div>
      </section>

      {/* BENEFICIOS CONDUCTOR / VIAJERO */}
      <section className="benefits">
        <h2>Beneficios</h2>
        <div className="benefit-columns">
          <div className="benefit-card">
            <h3>Para Conductores</h3>
            <ul>
              <li>✔ Registro fácil desde la app</li>
              <li>✔ Bonos por cumplimiento</li>
              <li>✔ Soporte técnico y humano</li>
              <li>✔ Sin comisiones abusivas</li>
            </ul>
          </div>
          <div className="benefit-card">
            <h3>Para Pasajeros</h3>
            <ul>
              <li>✔ Conductores verificados</li>
              <li>✔ Seguimiento en tiempo real</li>
              <li>✔ Botón de emergencia</li>
              <li>✔ Opciones de viaje flexibles</li>
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
            <p>Disponible en la Play Store para todos los dispositivos Android.</p>
          </div>
          <div className="step">
            <FaCar className="step-icon" />
            <h3>Solicita tu Viaje</h3>
            <p>Escoge tu destino, horario y tipo de vehículo fácilmente.</p>
          </div>
          <div className="step">
            <FaClock className="step-icon" />
            <h3>Disfruta el Trayecto</h3>
            <p>Con seguimiento y botón de emergencia siempre disponibles.</p>
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
            <p>Documento de identidad, licencia vigente y un celular con GPS.</p>
          </div>
          <div>
            <FaQuestionCircle className="icon" />
            <h4>¿Qué pasa si tengo una emergencia?</h4>
            <p>Puedes activar el botón de emergencia, y soporte será notificado automáticamente.</p>
          </div>
          <div>
            <FaQuestionCircle className="icon" />
            <h4>¿Cómo garantiza mi seguridad ViajeSeguro?</h4>
            <p>Todos los conductores son validados manualmente, y cada viaje es rastreado.</p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-final">
        <h2>Únete hoy a la movilidad segura</h2>
        <p>Haz parte de la red de usuarios que confían en ViajeSeguro para sus trayectos diarios.</p>
        <div className="hero-buttons">
          <a href="https://play.google.com" className="btn-primary">Descargar App</a>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
