import React from "react";
import './LoginModal.css';

function LoginModal({visible, onClose, onLogin}) {
    if (!visible) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        const usuario = e.target.usuario.value.trim();
        const password = e.target.password.value.trim();

        if (!usuario || !password) {
            alert("! Debes completar ambos campos")
            return;
        }

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