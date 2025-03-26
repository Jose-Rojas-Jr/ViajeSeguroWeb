import React from 'react';
import './Viajero.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Viajero = () => {
  return (
    <div className="viajero-container">
      <Navbar />
      
      <section className="intro">
        <h1>Tu viaje, más seguro que nunca</h1>
        <p>Viaja con tranquilidad con conductores verificados y un servicio confiable.</p>
        <img src="https://www.shutterstock.com/image-photo/happy-taxi-driver-holding-wheel-600nw-2513253267.jpg" alt="Viajero disfrutando" className="intro-image" />
      </section>


      <section className="benefits">
        <h2>¿Por qué viajar con Viaje Seguro?</h2>
        <div className="benefit-item">
          <img src="https://onfido.com/wp-content/uploads/2023/09/SP_Driver-Registration_Header_1440x1124.png" alt="Conductor verificado" className="benefit-image" />
          <h3>🔍 Conductores Verificados</h3>
          <p>Todos nuestros conductores pasan un riguroso proceso de validación para garantizar tu seguridad.</p>
        </div>
        <div className="benefit-item">
          <img src="https://delucio.com.mx/wp-content/uploads/2024/10/Mesa_de_trabajo_1-2.jpg" alt="Monitoreo en tiempo real" className="benefit-image" />
          <h3>📍 Monitoreo en Tiempo Real</h3>
          <p>Comparte tu ubicación en tiempo real con tus contactos de confianza.</p>
        </div>
        <div className="benefit-item">
          <img src="https://www.shutterstock.com/image-photo/beautiful-young-business-woman-smiling-260nw-2223067235.jpg" alt="Seguridad garantizada" className="benefit-image" />
          <h3>🛡️ Seguridad Garantizada</h3>
          <p>Viaja con tranquilidad gracias a la integracion de una camara de seguridad el cual tu y tus contactos de confianza podran acceder en cualquier momento.</p>
        </div>
      </section>
      
      <section className="how-it-works">
        <h2>¿Cómo funciona?</h2>
        <div className="steps">
          <div className="step">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrrttXJMIJ1JXgxrI8OMRYW0fi1VT3l8oQ_w&s" alt="Descarga la app" className="step-image" />
            <h3>📲 1. Descarga la App</h3>
            <p>Regístrate en minutos y accede a todos los servicios.</p>
          </div>
          <div className="step">
            <img src="https://cdn2.mediotiempo.com/uploads/media/2022/03/11/uber-sigue-siendo-de-las.jpg" alt="Solicita un viaje" className="step-image" />
            <h3>🚗 2. Solicita un Viaje</h3>
            <p>Indica tu destino y elige un conductor disponible.</p>
          </div>
          <div className="step">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI5Hkl69LyJgB22D_AGHOaSs-_yOsoWLB4cA&s" alt="Llega seguro" className="step-image" />
            <h3>✔️ 3. Llega Seguro</h3>
            <p>Disfruta de un viaje cómodo y seguro con nuestra app.</p>
          </div>
        </div>
      </section>
      
      <section className="call-to-action">
        <h2>Empieza a viajar con seguridad</h2>
        <a href="https://play.google.com" className="download-button">
            <button>Descargar la Aplicacion Ahora</button>
          </a>
      </section>
      
      <Footer />
    </div>
  );
};

export default Viajero;
