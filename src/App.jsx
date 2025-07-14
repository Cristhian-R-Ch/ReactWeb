import React, {useState} from 'react';
import Header from './components/Header';
import LoginModal from './components/LoginModal';
import Banner from './components/Banner';
import SelectorPersonaje from './components/SelectorPersonaje';
import Ofertas from './components/Ofertas';
import Catalogo from './components/Catalogo';
import ModalCarrito from "./components/ModalCarrito";
import Footer from './components/Footer/Footer';

function App(){
  // Estado para controlar visibilidad del modal de inicio de sesion
  const [modalVisible, setModalVisible] = useState(false);
  // Estado para almacenar nombre de usuario
  const [usuario, setUsuario] = useState("");
  // Estado para controlar visbilidad del modal del carrito de compras
  const [modalCarritoVisible, setModalCarritoVisible] = useState(false);
  // Funciones para mostrar y ocultar modal de inicio de sesion
  const mostrarLogin = () => setModalVisible(true);
  const cerrarLogin = () => setModalVisible(false);
  // Funcion que procesa el login, fijando el usuario y cerrando el modal
  const procesarLogin = (nombreUsuario) => {setUsuario(nombreUsuario); cerrarLogin();}; //nuevo cerrar login
  // Funcion para cierre de sesion y limpieza del usuario
  const cerrarSesion = () => setUsuario("");
  // Funciones para mostrar y ocultar el modal de carrito de compras
  const mostrarCarrito = () => setModalCarritoVisible(true);
  const cerrarCarrito = () => setModalCarritoVisible(false);

  // Renderizado de la estructura principal de los componentes
  return (
    <>
    <Header 
      onAvatarClick={mostrarLogin} 
      usuario={usuario}
      onLogout={cerrarSesion}
      onCarritoClick={mostrarCarrito}
    />
  
    <LoginModal
      visible={modalVisible}
      onClose={cerrarLogin}
      onLogin={procesarLogin}
    />
    <Banner/>

    <SelectorPersonaje usuario={usuario}/> 

    <Ofertas/>

    <Catalogo/>
    
    <Footer />

    {modalCarritoVisible && (
      <ModalCarrito onClose={cerrarCarrito} />
    )}
    </>
  );
}

export default App;