  import React from 'react';
  import './Home.css';

  const Home = () => {
    return (
      <div className="home-about">
        {/* Sección Home */}
        <section id="home" className="section home">
          <div className="content">
            <div className="image-container">
              <img src="https://i.ibb.co/xtN8mjLv/logo.png" alt="Logo de ViajeSeguro" />
            </div>
            <h1>  Tu viaje, más seguro que nunca</h1>
            <p>ViajeSeguro te conecta con conductores confiables para que llegues a tu destino con tranquilidad.</p>
            <a href="https://play.google.com/store/games?hl=es_419">
  <button>Comenzar</button>
</a>

          </div>
        </section>

        {/* Sección Descripción del Servicio */}
        <section id="service" className="section description">
          <div className="content">
            
            <h1>Descripción del Servicio</h1>
            <p>ViajeSeguro es una plataforma de movilidad segura diseñada para brindar confianza y protección en cada viaje. Su enfoque principal es garantizar la seguridad de los pasajeros, especialmente mujeres, niños y adultos mayores, mediante servicios especializados y herramientas de monitoreo en tiempo real.</p>
            <div className="image-container">
              <img src="https://i.ibb.co/0jSwGs35/pixelcut-export-2.jpg" alt="Logo de ViajeSeguro" />
            </div>         
          </div>
        </section>

        {/* Sección Alcance del Servicio */}
        <section id="scope" className="section scope">
          <div className="content">
            <div className="image-container">
              <img src="https://i.ibb.co/6cr9PcVC/inf.png" alt="Inf ViajeSeguro" />
            </div>
            <h1>Alcance del Servicio</h1>
            <p>ViajeSeguro no solo es un servicio de transporte, sino una solución innovadora para quienes buscan viajar con tranquilidad y seguridad, respaldados por tecnología y protocolos diseñados para la protección de cada pasajero.</p>
            <p>El servicio ofrece:</p>
            <ul>
              <li>Conductores certificados y especializados.</li>
              <li>Monitoreo en tiempo real.</li>
              <li>Botón de emergencia.</li>
              <li>Membresías personalizadas.</li>
              <li>Opciones especializadas de transporte.</li>
            </ul>
          </div>
        </section>

        {/* Sección Modelos de Ingreso */}
<section id="revenue" className="section revenue">
  <div className="content">
    <h2>Planes de Membresía</h2>
    <p>Elige el plan que mejor se adapte a tus necesidades de transporte.</p>
    
    <div className="plans-container">
      <div className="plan-card family">
        <h3>Plan Familiar</h3>
        <p>***************************</p>
        <p> Transporte para hasta 5 personas dentro de una misma cuenta.</p>
        <p> 4 viajes diarios personalizados (2 rutas fijas y 2 rutas alternas).</p>
        <p> Acceso en tiempo real a GPS y cámara del vehículo.</p>
        <p> Contacto directo con el conductor asignado.</p>
        <p> Botón de emergencia para notificación inmediata.</p>
        <p className="price">Bs 800 <span>/ mes</span></p>
        
      </div>

      <div className="plan-card executive">
        <h3>Plan Ejecutivo</h3>
        <p>***************************</p>
        <p> Transporte personalizado para máximo 2 personas.</p>
        <p> 3 viajes diarios a oficinas, reuniones, aeropuerto y uno personalizado.</p>
        <p> Vehículos premium con conductores certificados.</p>
        <p> Acceso en tiempo real a GPS y monitoreo.</p>
        <p>  Atención prioritaria en reservas.</p>
        <p className="price">Bs 500 <span>/ mes</span></p>
        
      </div>
    </div>
  </div>
</section>



        {/* Sección About */}
        <section id="about" className="section about">
          <div className="content">
            <div className="image-container">
              <img src="https://i.ibb.co/xtN8mjLv/logo.png" alt="Inf ViajeSeguro" />
            </div>
            <h1>Sobre Nosotros</h1>
            <p><strong>Misión:</strong> Hacer del transporte privado una experiencia segura y confiable.</p>
            <p><strong>Visión:</strong> Ser la plataforma de transporte más segura en América Latina.</p>
            <p><strong>Valores:</strong> Seguridad, Confianza, Innovación.</p>
          </div>
        </section>
      </div>
    );

  };

  export default Home;