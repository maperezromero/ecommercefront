import { useContext } from 'react';
import { valuesContext } from '../App';
import close from '../images/icon-close.svg'

export const Menu = ()=>{
    const { setShowMenu, menuStyle, setMenuStyle } = useContext(valuesContext);
    
    
    //functions
    const handleClose = () => {
        //setShowMenu(false);
        
        setMenuStyle('to-left');
        setTimeout(() => {
            setMenuStyle('');
            setShowMenu(false);
                
        }, 1000);
    }
    return(
        <div className={`menu ${menuStyle}`} id="menu" >
            <img src={close} alt="close-icon" className="icon-close" onClick={handleClose}/>
            <div className="menu-items">
                <span>Collections</span>
                <span>Men</span>
                <span>Women</span>
                <span>About</span>
                <span>Contact</span>
            </div>
        </div>
    )
}