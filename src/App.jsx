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
  // Hooks
  const [modalVisible, setModalVisible] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [modalCarritoVisible, setModalCarritoVisible] = useState(false);

  // Funciones
  const mostrarLogin = () => setModalVisible(true);
  const cerrarLogin = () => setModalVisible(false);
  
  const procesarLogin = (nombreUsuario) => {setUsuario(nombreUsuario); cerrarLogin();}; //nuevo cerrar login
  const cerrarSesion = () => setUsuario("");

  const mostrarCarrito = () => setModalCarritoVisible(true);
  const cerrarCarrito = () => setModalCarritoVisible(false);

  // Return
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