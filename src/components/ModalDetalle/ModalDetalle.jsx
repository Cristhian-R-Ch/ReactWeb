import React from "react";
import "./ModalDetalle.css";

function ModalDetalle({ producto, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-detalle"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{producto.nombre}</h2>
        <img src={producto.imagen} alt={producto.nombre} />
        <p>{producto.detalle}</p>
        <p><strong>Precio:</strong> ${producto.precio.toFixed(2)}</p>
        <button onClick={onClose} className="btn-cerrar">Cerrar</button>
      </div>
    </div>
  );
}

export default ModalDetalle;