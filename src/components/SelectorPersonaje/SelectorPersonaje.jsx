import React, { useState } from "react";
import "./SelectorPersonaje.css";

function SelectorPersonaje({ usuario }) {
  // Estados
  const [servidor, setServidor] = useState("");
  const [personaje, setPersonaje] = useState("");
  const [mostrarResumen, setMostrarResumen] = useState(false);

  // Confirmación
  const confirmarSeleccion = () => {
    if (!usuario) {
        alert("! Debes iniciar sesión antes de seleccionar un personaje.");
      return;
    }

    if (!servidor || !personaje) {
      alert("! Por favor, selecciona un servidor y un personaje.");
      return;
    }

    setMostrarResumen(true);
  };

  // Formulario
  const cambiarSeleccion = () => {
    setMostrarResumen(false);
    setServidor("");
    setPersonaje("");
  };

  return (
    <section className="selector-personaje">
      {mostrarResumen ? (
        <div className="resumen">
          <h3><i class="fa-solid fa-circle-check"></i> Personaje seleccionado</h3>
          <p>{servidor.toUpperCase()} : {personaje}</p>
          <button onClick={cambiarSeleccion}>Cambiar personaje</button>
        </div>
      ) : (
        <form className="form-seleccion" onSubmit={(e) => e.preventDefault()}>
          <h3>Selecciona tu personaje</h3>

          <label>Servidor</label>
          <select
            value={servidor}
            onChange={(e) => setServidor(e.target.value)}
            required
          >
            <option value="">-- Selecciona un servidor --</option>
            <option value="Uruk">Uruk</option>
            <option value="Loren">Loren</option>
            <option value="Cantur">Cantur</option>
          </select>

          <label>Personaje</label>
          <select
            value={personaje}
            onChange={(e) => setPersonaje(e.target.value)}
            required
          >
            <option value="">-- Selecciona un personaje --</option>
            <option value="Blade">Blade</option>
            <option value="BlackOuT">BlackOuT</option>
            <option value="Kitta">Kitta</option>
          </select>

          <button type="button" onClick={confirmarSeleccion}>Confirmar</button>
        </form>
      )}
    </section>
  );
}

export default SelectorPersonaje;