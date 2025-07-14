import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contenido">
        <h4>Tienda Virtual - RPG Ætherion</h4>
        <p>© {new Date().getFullYear()} Æthom Games. Todos los derechos reservados.</p>

        <div className="footer-links">
          <a href="#">Soporte</a>
          <a href="#">Preguntas Frecuentes</a>
          <a href="#">Política de Privacidad</a>
        </div>

        <div className="footer-social">
          <a href="#"><i className="fab fa-discord"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
