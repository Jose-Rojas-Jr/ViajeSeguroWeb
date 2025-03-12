import React from 'react';
import './Conductor.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Conductor = () => {
  return (
    <div className="conductor-container">
      <Navbar />
      
      <section className="intro">
        <h1>Aprovecha la oportunidad estés donde estés</h1>
        <p>Aprovecha al máximo tu tiempo al volante en la plataforma con la red más grande de usuarios activos.</p>
        <img src="https://png.pngtree.com/thumb_back/fh260/background/20230302/pngtree-happy-driver-giving-thumbs-up-while-driving-safely-photo-image_50019264.jpg" alt="Conductor feliz" className="intro-image" />
      </section>
      
      <section className="benefits">
        <h2>¿Por qué manejar con Viaje Seguro?</h2>
        <div className="benefit-item">
          <h3>📞 Soporte 24/7</h3>
          <p>Siempre disponible para responder a tus dudas y ayudarte en el camino.</p>
        </div>
        <div className="benefit-item">
          <h3>💸 Pago rápido y seguro</h3>
          <p>Elige cómo y cuándo recibir tus ganancias sin complicaciones.</p>
        </div>
        <div className="benefit-item">
          <h3>🚗 Flexibilidad total</h3>
          <p>Conduce cuando quieras y genera ingresos a tu propio ritmo.</p>
        </div>
      </section>
      
      <section className="requirements">
        <h2>Requisitos para conducir</h2>
        <div className="requirements-container">
          <div className="requirement-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtTTOCze-ZhOBTzjDHao5OdcuAbOgi7B_brQ&s" alt="Requisitos del auto" className="requirement-image" />
            <h3>🚘 Requisitos del Auto</h3>
            <ul>
              <li>Modelo 2004 en adelante</li>
              <li>Inspección técnica vehicular</li>
              <li>Debe tener 4 puertas</li>
              <li>Excelentes condiciones mecánicas</li>
            </ul>
          </div>
          <div className="requirement-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1FBLh8sRJ7V3q5pN9gWWZ1vO_-cr8ics3Rdh0bDGAQTeX2jtzqJ-lZbjApU7WCqOVywo&usqp=CAU" alt="Documentos requeridos" className="requirement-image" />
            <h3>📄 Documentos requeridos</h3>
            <ul>
              <li>Licencia de conducción</li>
              <li>Certificado de propiedad</li>
              <li>SOAT vigente</li>
              <li>Certificado de antecedentes</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="profile-tips">
        <h2>Consejos para tu foto del perfil</h2>
        <p>Para mejorar la seguridad de los socios de la App y usuarios, te recomendamos seguir los siguientes consejos para que tu foto de perfil cumpla con los requisitos de la app:</p>
        <img src="https://static.onlinecv.es/wp-content/uploads/sites/37/2022/11/18140202/fotografia-cv-1040x600.webp" alt="Consejos foto perfil" className="profile-tips-image" />
        <h3>Características de una buena foto de perfil:</h3>
        <ul>
          <li>Buena iluminación.</li>
          <li>Tomada de frente, no de lado.</li>
          <li>El rostro debe ser visible.</li>
          <li>Idealmente, con fondo claro.</li>
          <li>Procura que la foto refleje tu apariencia actual y que no sea antigua.</li>
        </ul>
        <h3>Evita lo siguiente:</h3>
        <ul>
          <li>Fotos de cuerpo completo.</li>
          <li>Fotos donde aparezcas con compañía.</li>
          <li>Fotos poco iluminadas, con fondo oscuro.</li>
          <li>Fotos borrosas.</li>
          <li>Aparecer con gorro, anteojos de sol u otro accesorio que no permita ver tu rostro claramente.</li>
          <li>Fotos de tu auto o de caricaturas.</li>
        </ul>
      </section>
      
      <section className="steps">
        <h2>Pasos para comenzar</h2>
        <div className="step">
          <h3>📝 1. Regístrate en la App</h3>
          <p>Crea tu perfil en pocos minutos.</p>
        </div>
        <div className="step">
          <h3>📤 2. Sube tus documentos</h3>
          <p>Verificaremos tu información para garantizar seguridad.</p>
        </div>
        <div className="step">
          <h3>🚀 3. Descarga la app y empieza</h3>
          <p>Comienza a generar ingresos de inmediato.</p>
        </div>
      </section>
      
      <section className="call-to-action">
        <h2>¿Listo para conducir?</h2>
        <button className="register-button">Descarga la app y comienza</button>
      </section>
      
      <Footer />
    </div>
  );
};

export default Conductor;
