import { createContext, useContext, useState } from "react";
// Crear el contexto para manejar estado del carrito de compras
const CarritoContext = createContext();
// Hook para acceder al contexto del carrito en los componentes
export function useCarrito() {
  return useContext(CarritoContext);
}

export function CarritoProvider({ children }) {
  // Estado que contiene la lista actual de productos en el carrito
  const [carrito, setCarrito] = useState([]);
  // Funcion que agrega producto al carrito, añadiendolo a la lista actual
  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => [...prev, producto]);
  };
  // Funcion para eliminar producto especifico del carrito usando el id
  const eliminarDelCarrito = (id) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id));
  };
  // Funcion para vaciar por completo el carrito
  const vaciarCarrito = () => {
    setCarrito([]);
  };
  // Retorno a valores de estado y funciones que se podran acceder por los componentes hijos
  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
}