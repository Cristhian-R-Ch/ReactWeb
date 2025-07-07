import React from "react";
import './Banner.css'

function Banner() {
    return (
        <section className="banner-principal">
            <img
                src="assets/img/banner.jpg"
                alt="Banner principal del juego"
                className="img-banner"
            />

            <div className="texto-banner">
                <h1>Bienvenido a Ætherion</h1>
                <p>Explora un mundo de fantasía, poder y recompensas únicas.</p>
            </div>
            
        </section>
    );
}

export default Banner;