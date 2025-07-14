import React, { useState } from 'react';
import './FormularioCompra.css';

function FormularioCompra({ onVolver, onCompraExitosa }) {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [personaje, setPersonaje] = useState('');
  const [metodoPago, setMetodoPago] = useState('');
  const [errores, setErrores] = useState({});

  const validarFormulario = () => {
    const nuevosErrores = {};

    if (!nombre.trim()) nuevosErrores.nombre = 'El nombre es obligatorio';
    if (!correo.trim()) {
      nuevosErrores.correo = 'El correo es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(correo)) {
      nuevosErrores.correo = 'El correo no es válido';
    }
    if (!personaje.trim()) nuevosErrores.personaje = 'El Personaje es obligatoria';
    if (!metodoPago) nuevosErrores.metodoPago = 'Selecciona un método de pago';

    return nuevosErrores;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const erroresDetectados = validarFormulario();

    if (Object.keys(erroresDetectados).length > 0) {
      setErrores(erroresDetectados);
    } else {
      setErrores({});
      onCompraExitosa(); // Simula éxito
    }
  };

  return (
    <div className="formulario-compra">
      <h2>Finalizar Compra</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre completo"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className={errores.nombre ? 'input-error' : ''}
        />
        {errores.nombre && <p className="error">{errores.nombre}</p>}

        <input
          type="email"
          placeholder="Correo electrónico"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          className={errores.correo ? 'input-error' : ''}
        />
        {errores.correo && <p className="error">{errores.correo}</p>}

        <input
          type="text"
          placeholder="Personaje"
          value={personaje}
          onChange={(e) => setPersonaje(e.target.value)}
          className={errores.personaje ? 'input-error' : ''}
        />
        {errores.personaje && <p className="error">{errores.personaje}</p>}

        <select
          value={metodoPago}
          onChange={(e) => setMetodoPago(e.target.value)}
          className={errores.metodoPago ? 'input-error' : ''}
        >
          <option value="">Método de pago</option>
          <option value="credito">Tarjeta de Crédito</option>
          <option value="debito">Tarjeta de Débito</option>
          <option value="paypal">PayPal</option>
        </select>
        {errores.metodoPago && <p className="error">{errores.metodoPago}</p>}

        <div className="formulario-botones">
          <button type="submit" className="btn-confirmar">
            <i className="fa-solid fa-check"></i> Confirmar Compra
          </button>
          <button type="button" className="btn-volver" onClick={onVolver}>
            <i className="fa-solid fa-arrow-left"></i> Volver
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormularioCompra;