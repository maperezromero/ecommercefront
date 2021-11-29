import { createContext, useEffect, useState } from 'react';
import './App.css';
import { Cart } from './components/cart';
import { Header } from './components/header';
import { Images } from './components/images';
import { Menu } from './components/menu';
import { Product } from './components/product';

export const valuesContext = createContext(null);

function App() {
  const [units, setUnits] = useState(0);
  const [unitsCart, setUnitsCart] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [menuStyle, setMenuStyle] = useState('');
  const [showCart,setShowCart] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=>{
    
    function handleResize(){
      // console.log('Resize to: ', window.innerWidth, 'x', window.innerHeight)
      window.innerWidth > 768 ? setIsMobile(false) : setIsMobile(true);
    }
    window.addEventListener('resize', handleResize)
    
  })

  return (
    <valuesContext.Provider value = {{units,setUnits,showMenu,setShowMenu, menuStyle,setMenuStyle, unitsCart,setUnitsCart, showCart,setShowCart, isMobile,setIsMobile}}>
      <div className="App">
        <div className="container">
          {showMenu && <Menu/>}
          {showCart && <Cart/>}
          <Header/>
          <Images/>
          <Product/>
        </div>
      </div>
    </valuesContext.Provider>
  );
}

export default App;
