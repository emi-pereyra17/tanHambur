import React from "react";
import fondo from "../assets/fondo.jpg";

const BodyPrincipal = () => {
  const sectionStyle = {
    backgroundImage: `url(${fondo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "585px", // Ajusta la altura según lo que necesites
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Oscurece el fondo con un overlay
    zIndex: 1,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
  };

  return (
    <div style={sectionStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h1 className="display-4 fw-light">
          🍔 ¡Bienvenido a TanHambur! La mejor hamburguesa artesanal, jugosa y
          al instante.
        </h1>
        <p className="lead">
          Pedí online o vení a visitarnos. ¡Te va a encantar cada mordida!
        </p>
        <br />
        <br />
        <h2>📬 ¡No te pierdas nuestras promos!</h2>
        <p>Suscribite y recibí ofertas exclusivas directo en tu mail.</p>
        <form
          className="d-flex justify-content-center"
          style={{ maxWidth: "500px", margin: "0 auto" }}
        >
          <input
            type="email"
            className="form-control form-control-sm me-2"
            placeholder="Tu correo"
            required
          />
          <button type="submit" className="btn btn-warning btn-sm">
            Recibir ofertas
          </button>
        </form>
      </div>
    </div>
  );
};

export default BodyPrincipal;
