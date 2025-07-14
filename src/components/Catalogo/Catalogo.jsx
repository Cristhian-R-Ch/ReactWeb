import React, { useState } from "react";
import "./Catalogo.css";
import { useCarrito } from "../../context/CarritoContext";
import ModalDetalle from "../ModalDetalle";
// Catalogo de productos disponibles en la tienda
const productos =[
    // Cada producto tiene id, nombre, descripcion breve, detalle completo,
    // tipo de filtro, precio e imagen
    {
        id: 1,
        nombre: "Pack de 1000 monedas",
        descripcion: "Recarga rápida de monedas para usar en el juego",
        detalle: "Incluye 1000 monedas ingame que puedes usar para comprar items cosméticos, potenciadores y mejoras temporales para tu personaje",
        tipo: "moneda",
        precio: 0.99,
        imagen: "assets/img/monedas1000.png",
    },
    {
        id: 2,
        nombre: "Set de Armadura legendaria",
        descripcion: "Mejora tu defensa con esta armadura exclusiva.",
        detalle: "Conjuto completo de armadura legendaria que proporciona +50 de defensa, resistencia elemental +20% y un aura visual que destaca en batalla",
        tipo: "pack",
        precio: 14.99,
        imagen: "assets/img/armadura_legendaria.png"
    },
    {
        id: 3,
        nombre: "Marco exclusivo",
        descripcion: "Dale estilo a tu avatar con este marco especial", 
        detalle: "Marco de perfil con efectos de particulas que se activa cuando otros jugadores ven tu perfil. Incluye sonido único al mostrarse",
        tipo: "pack",
        precio: 4.99,
        imagen: "assets/img/marco_exclusivo.png"
    },
    {
        id: 4,
        nombre: "Pack de 5000 monedas",
        descripcion: "Mayor cantidad de monedas para gastar en items únicos",
        detalle: "5000 monedas para adquirir items raros en la tienda especial, incluye descuentos excluvios para compradores de este pack",
        tipo: "moneda",
        precio: 4.99,
        imagen: "assets/img/monedas5000.png"
    },
    {
        id: 5,
        nombre: "Título especial",
        descripcion: "Destaca en el juego con un título exclusivo",
        detalle: "Titulo '[Legendario]' que otorga 5+ a todos los atributos y se muestra de forma destacada en chats y tablas de clasificación.",
        tipo: "pack",
        precio: 9.99,
        imagen: "assets/img/titulo_especial.png"
    },
    {
        id: 6,
        nombre: "Pack de 15000 monedas",
        descripcion: "Gran cantidad de monedas para mejorar a tu personaje rapidamente",
        detalle: "Paquete premium con 15.000 monedas + 1.000 monedas adicionales. Ideal para comprar equipamiento de alto nivel y objetos exclusivos de temporada",
        tipo: "moneda",
        precio: 14.99,
        imagen: "assets/img/monedas15000.png"
    },
    {
        id: 7,
        nombre: "Combo Armadura y Arma",
        descripcion: "Equipate con un conjunto poderoso de set y armas legendarias!",
        detalle: "Incluye: Armadura del Dragón (set completo) y Espada del Abismo (+75 de ataque). Bonus de conjunto Aumenta el daño crítico en 15%",
        tipo: "pack",
        precio: 24.99,
        imagen: "assets/img/armadura_armas.png"
    },
    {
        id: 8,
        nombre: "Anillos legendarios",
        descripcion: "Mejora tu defensa con par de anillos de grado legendario",
        detalle: "Par de anillos gemelos antiguos, que otorgan 10% de regeneracion de PS y activa un escudo cuando la vida cae por debajo del 30%",
        tipo: "pack",
        precio: 4.99,
        imagen: "assets/img/anillos.png"
    },
        {
        id: 9,
        nombre: "Pet Ancestral",
        descripcion: "Viaja con tu mascota que te brinda mayor experiencia para subir de nivel",
        detalle: "Mascota Neketon Ancestral, que brinda 30% de EXP, recolecta automaticamente objetos cercanos y brinda un 10% de suerte",
        tipo: "pack",
        precio: 4.99,
        imagen: "assets/img/pet.png"
    },
];

function Catalogo() {
    // Hook para agregar producto al carrito
    const { agregarAlCarrito } = useCarrito();
    // Estados para filtro por tipo de producto y orden por precio
    const [filtroTipo, setFiltroTipo] = useState("todo");
    const [ordenPrecio, setOrdenPrecio] = useState("asc");
    // Filtrar y ordenar productos segun la seleccion
    const productosFiltrados = productos
        .filter((producto) =>
            filtroTipo === "todo" ? true : producto.tipo === filtroTipo
        )
        .sort((a, b) =>
            ordenPrecio === "asc" ? a.precio - b.precio : b.precio - a.precio
        );
    // Estado para seleccionar y mostrar el detalle en modal   
    const [productoDetalle, setProductoDetalle] = useState(null);

    return (
        <section className="catalogo">
            <h2>Catálogo de Productos</h2>

            <div className="filtros">
                <h4>Filtros:</h4>
                <select value={filtroTipo} onChange={(e) => setFiltroTipo(e.target.value)}>
                    <option value="todo">Todos</option>
                    <option value="moneda">Monedas</option>
                    <option value="pack">Packs</option>
                </select>

                <select value={ordenPrecio} onChange={(e) => setOrdenPrecio(e.target.value)}>
                    <option value="asc">Menor Precio</option>
                    <option value="desc">Mayor Precio</option>
                </select>
            </div>

            <ul className="lista-productos">
            {productosFiltrados.map((producto) => (
                <li className="producto-item" key={producto.id}>
                <div className="producto-imagen">
                    <img src={producto.imagen} alt={producto.nombre} />
                </div>

                <div className="producto-contenido">
                    <div className="producto-nombre">{producto.nombre}</div>
                    <div className="producto-descripcion">{producto.descripcion}</div>
                    <div className="producto-precio">${producto.precio.toFixed(2)}</div>
                    <div className="botones-producto">
                    <button className="btn-comprar" onClick={() => agregarAlCarrito(producto)}>Comprar</button>
                    <button className="btn-detalle" onClick={() => setProductoDetalle(producto)}>Ver detalle</button>
                    </div>
                </div>
                </li>
            ))}
            </ul>

            {productoDetalle && (
                <ModalDetalle 
                    producto={productoDetalle} 
                    onClose={() => setProductoDetalle(null)} 
                />
            )}
        </section>
    )
}

export default Catalogo;