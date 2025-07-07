import React, {useState} from 'react';
import Header from './components/Header';
import LoginModal from './components/LoginModal';
import Banner from './components/Banner';
import SelectorPersonaje from './components/SelectorPersonaje';
import Ofertas from './components/Ofertas';
import Catalogo from './components/Catalogo';
import Carrito from './components/Carrito';
import FormularioCompra from './components/FormularioCompra';

function App(){
  // Hooks
  const [modalVisible, setModalVisible] = useState(false);
  const [usuario, setUsuario] = useState("");
  
  // Funciones
  const mostrarLogin = () => setModalVisible(true);
  const cerrarLogin = () => setModalVisible(false);
  const procesarLogin = (nombreusuario) => setUsuario(nombreusuario);
  const cerrarSesion = () => setUsuario("");

  // Return
  return (
    <>
    <Header 
      onAvatarClick={mostrarLogin} 
      usuario={usuario}
      onLogout={cerrarSesion}
    />
  
    <LoginModal
      visible={modalVisible}
      onClose={cerrarLogin}
      onLogin={procesarLogin}
    />

    <Banner/>
    
    <main>
      <h1> Tienda Web React</h1>
      <p>Bienvenido a la tienda</p>
    </main>

    {/* Componentes extras */}
    <SelectorPersonaje/>
    <Ofertas/>
    <Catalogo/>
    <Carrito/>
    <FormularioCompra/>
    </>
  );
}

export default App;