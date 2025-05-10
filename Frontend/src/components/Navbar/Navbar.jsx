import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import './Navbar.css'; // Importa estilos personalizados

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold text-black" to="/">TanHambur🍔</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
              <li className="nav-item mx-3">
                <Link className="nav-link active nav-hover" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link active nav-hover" aria-current="page" to="/productos">Productos</Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link active nav-hover" aria-current="page" to="/nosotros">Nosotros</Link>
              </li>
            </ul>
            <button className="btn btn-outline-secondary btn-hover" type="submit">Iniciar Sesión</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;