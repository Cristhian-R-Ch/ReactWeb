import React from 'react';
import './Header.css';

function Header({ onAvatarClick, usuario, onLogout, onCarritoClick}) {
    return (
    <header className='header-principal'>
        <div className='logo-area'>
            <img 
                src='assets/img/logo.png' 
                alt='Logo del juego' 
                className='logo-img' />
            <span className='game-name'> Ætherion</span>
        </div>

        <div className='header-controls'>
            {/* Selector de idionmas */}
            <i className="fa-solid fa-earth-americas"></i>
            <select 
                id='idioma-selector' 
                className='idioma-selector'>

                <option value='es'>Español</option>
                <option value='en'>English</option>
                <option value='pr'>Portugués</option>
            </select>
            
            {/* icono de carrito */}
            <div className='carrito-icono' onClick={onCarritoClick} title="Ver carrito">
                <i className="fa-solid fa-cart-shopping"></i>
            </div>

            {/* Usuario */}
            <div className='user-avatar' onClick={onAvatarClick}>
                <i className="fa-regular fa-user"></i>
                {usuario ? (
                    <>
                    <span id='nombre-usuario' className='nombre-usuario'>{usuario}</span>
                    <button className='btn-logout' onClick={onLogout}>
                        <i className="fas fa-sign-out-alt"></i>
                    </button>
                    </>
                ): null}
            </div>
        </div>
    </header>
    );
}
export default Header;