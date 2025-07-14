import React, { useState } from "react";
import "./Ofertas.css";

const productosEnOferta = [
  {
    id: 1,
    nombre: "Pack de 1000 monedas",
    precio: 0.99,
    imagen: "assets/img/monedas1000.png"
  },
  {
    id: 2,
    nombre: "Set de Armadura legendaria",
    precio: 14.99,
    imagen: "assets/img/armadura_legendaria.png"
  },
  {
    id: 3,
    nombre: "Marco exclusivo",
    precio: 4.99,
    imagen: "assets/img/marco_exclusivo.png"
  },
  {
    id: 4,
    nombre: "Pack de 5000 monedas",
    precio: 4.99,
    imagen: "assets/img/monedas5000.png"
  },
  {
    id: 5,
    nombre: "Título especial",
    precio: 9.99,
    imagen: "assets/img/titulo_especial.png"
  },
  {
    id: 6,
    nombre: "Combo Armadura y Armas",
    precio: 24.99,
    imagen: "assets/img/armadura_armas.png"
  }
];

function Ofertas() {
  const [indiceInicio, setIndiceInicio] = useState(0);
  const elementosVisibles = 3;

  const avanzar = () => {
    if (indiceInicio + elementosVisibles < productosEnOferta.length) {
      setIndiceInicio(indiceInicio + 1);
    }
  };

  const retroceder = () => {
    if (indiceInicio > 0) {
      setIndiceInicio(indiceInicio - 1);
    }
  };

  const ofertasVisibles = productosEnOferta.slice(
    indiceInicio,
    indiceInicio + elementosVisibles
  );

  return (
    <section className="ofertas">
      <h2><i class="fa-solid fa-gift"></i> Ofertas especiales</h2>
      <div className="contenedor-ofertas">
        <button className="boton-nav" onClick={retroceder} disabled={indiceInicio === 0}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>

        <div className="lista-ofertas">
          {ofertasVisibles.map((producto) => (
            <div key={producto.id} className="tarjeta-oferta">
              <img src={producto.imagen} alt={producto.nombre} />
              <h4>{producto.nombre}</h4>
              <p>${producto.precio.toFixed(2)}</p>
            </div>
          ))}
        </div>

        <button
          className="boton-nav"
          onClick={avanzar}
          disabled={indiceInicio + elementosVisibles >= productosEnOferta.length}
        >
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </section>
  );
}

export default Ofertas;