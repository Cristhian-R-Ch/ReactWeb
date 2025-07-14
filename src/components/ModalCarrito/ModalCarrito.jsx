import React, { useState } from "react";
import "./ModalCarrito.css";
import { useCarrito } from "../../context/CarritoContext";
import FormularioCompra from "../FormularioCompra";

function ModalCarrito({ onClose }) {
  const { carrito, eliminarDelCarrito, vaciarCarrito } = useCarrito();
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);

  const manejarCompraExitosa = () => {
    vaciarCarrito();
    setMostrarFormulario(false);
    alert("Compra realizada con exito!");
    onClose();
  };

  return (
    <div className="modal-carrito-backdrop" onClick={onClose}>
      <div className="modal-carrito" onClick={(e) => e.stopPropagation()}>
        {mostrarFormulario ? (
          <FormularioCompra
            onVolver={() => setMostrarFormulario(false)}
            onCompraExitosa={manejarCompraExitosa}
          />
        ) : (
          <>

            <h2>Carrito de Compras</h2>

            {carrito.length === 0 ? (
              <p>Tu carrito está vacío.</p>
            ) : (
              <>
                <ul className="lista-carrito">
                  {carrito.map((producto, index) => (
                    <li key={index} className="item-carrito">
                      <img src={producto.imagen} alt={producto.nombre} />
                      <div className="detalle-item">
                        <h4>{producto.nombre}</h4>
                        <p>${producto.precio.toFixed(2)}</p>
                      </div>
                      <button
                        className="btn-eliminar"
                        onClick={() => eliminarDelCarrito(producto.id)}
                        title="Eliminar producto"
                      >
                        <i class="fa-solid fa-trash-can"></i>
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="total-carrito">
                  <strong>Total: </strong>${total.toFixed(2)}
                </div>

                <div className="acciones-carrito">
                  <button className="btn-vaciar" onClick={vaciarCarrito}>
                    Vaciar Carrito
                  </button>
                  <button 
                    className="btn-finalizar"
                    onClick={() => setMostrarFormulario(true)}
                  >
                    Finalizar Compra
                  </button>
                </div>
              </>
            )}
            <button className="btn-cerrar" onClick={onClose}>
              Cerrar
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ModalCarrito;