import { useContext } from "react";
import { valuesContext } from "../App";
import image from '../images/image-product-1-thumbnail.jpg';
import iconDelete from '../images/icon-delete.svg';

export const Cart = () => {
    const { setShowMenu, menuStyle, setMenuStyle, unitsCart, setUnitsCart } = useContext(valuesContext);

    const handleDelete = () =>{
        setUnitsCart(0);
    }
    return(
        <div className="cart-div">
            <div className="title-div">
                <h2 className="title-cart">Cart</h2>
            </div>
            <div className="details-cart">
                {unitsCart!==0 &&
                    <span className="with-units">
                        <span className="image-cart">
                            <img src={image} alt="product-thumbnail" className="product-thumbnail"/>
                        </span>
                        <span className="detail-products">
                            <span className="description">Fall Limited Edition Sneakers</span>
                            <span id="details-line"><span className="operation">$125.00 x {unitsCart}</span> <span className="total-cart">{' '}${(125*unitsCart).toFixed(2)}</span></span>
                        </span>
                        <img src={iconDelete} alt="icon delete" className="icon-delete" onClick={handleDelete}/>
                        <button className="checkout">
                            <h2>Checkout</h2>
                        </button>
                    </span>
                } 
                {unitsCart===0 && <h2>Your cart is empty.</h2>}
            </div>
        </div>
    )
}