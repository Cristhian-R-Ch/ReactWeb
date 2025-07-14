import React from "react";
import './LoginModal.css';

function LoginModal({visible, onClose, onLogin}) {
    // Si el modal no es visible, no se renderiza
    if (!visible) return null;
    // Manejo del submit del formulario del login
    const handleSubmit = (e) => {
        e.preventDefault();
        const usuario = e.target.usuario.value.trim();
        const password = e.target.password.value.trim();
        // Validacion sencilla para asegurar que campos esten completos
        if (!usuario || !password) {
            alert("! Debes completar ambos campos")
            return;
        }
        // Se llama la funcion onlogin con el usuario y cierra el modal
        onLogin(usuario);
        onClose();
    }

    return (
        <div className="modal-login">
            <div className="modal-contenido">
                <span className="cerrar" onClick={onClose}>
                    <i className="fa-solid fa-circle-xmark"></i>
                </span>
                <h3>Iniciar sesión</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="usuario" placeholder="Usuario" required />
                    <input type="password" name="password" placeholder="Contraseña" required />
                    <input type="submit" value="Entrar" />
                </form>
            </div>
        </div>
    );
}

export default LoginModal;