import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-2">
      <div className="container">
        <div className="d-flex justify-content-center flex-wrap gap-3">
          <a href="/" className="text-black text-decoration-none">Inicio</a>
          <a href="/acerca" className="text-black text-decoration-none">Acerca</a>
          <a href="/contacto" className="text-black text-decoration-none">Contacto</a>
        </div>
        <hr className="bg-light my-2" />
        <p className="text-center mb-0">&copy; {new Date().getFullYear()} MiSitio. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;