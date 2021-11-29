import menu from '../images/icon-menu.svg'
import logo from '../images/logo.svg'
import cart from '../images/icon-cart.svg'
import avatar from '../images/image-avatar.png'
import { useContext } from 'react'
import { valuesContext } from '../App'

export const Header = () =>{
    const { setShowMenu, unitsCart, setShowCart, showCart,isMobile} = useContext(valuesContext);

    const handleShowMenu = () => {
        setShowMenu(true);
        setShowCart(false);
    }
    const handleShowCart = () => {
        setShowCart(!showCart);
        setShowMenu(false);

    }
    return(
        <div className="header">
            <img src = {menu} alt="icon-menu" className="icon-menu" onClick={handleShowMenu}/>
            <img src = {logo} alt="logo" className="logo"/>
            {!isMobile && 
                <nav className="nav">
                    <ul className="ul-class">
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>}
            <img src = {cart} alt="cart" className="cart" onClick={handleShowCart}/>
            {unitsCart !==0 && <span className="units-cart" onClick={handleShowCart}>{unitsCart}</span>}
            <img src = {avatar} alt="avatar" className="avatar"/>
        </div>
    )
}