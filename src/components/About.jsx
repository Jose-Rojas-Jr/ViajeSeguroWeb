import React from 'react';
import './About.css';

const About = () => {
  return (
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
  );
};

export default About;
