import { useContext } from 'react'
import { valuesContext } from '../App'
import { ReactComponent as Cart } from '../images/icon-cart.svg'
import { Units } from './units'
//import cart from '../images/icon-cart.svg'
export const Product = () =>{
    const {setUnitsCart,units,setUnits} = useContext(valuesContext)
    
    const handleAddToCart = () => {
        setUnitsCart(units);
        setUnits(0);
    }
    return (
        <div className="product">
            <h2>
                SNEAKER COMPANY
            </h2>
            <h1>
                Fall Limited Edition Sneakers
            </h1>
            <p>
                These low-profile sneakers are your perfect casual 
                wear companion. Featuring a durable rubber outer sole, they'll
                withstand everything the weather can offer.
            </p>
            <span className="price">
                <h1>
                    $125.00
                </h1>
                
                <h2 className="discount">
                    50%
                </h2>
                <h2 className="total">
                    $250.00
                </h2>
            </span>
            <Units/>
            <button className="add-cart" onClick={handleAddToCart}>
                <Cart className="svg-cart"/>
                <h2>Add to Cart</h2>
            </button>
        </div>
    )
}