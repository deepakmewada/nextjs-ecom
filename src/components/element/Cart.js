import React, { useContext } from "react";
import { GlobalContext } from '../../context/GlobalContext' 
import { GrClose } from 'react-icons/gr'
import { useRecoilState, useRecoilValue } from "recoil";
import { cartList, cartTotal } from '../../recoil/atoms'
import { FiTrash2 } from "react-icons/fi";

const Cart = () => {
    const [cartListVal, setCartListVal] = useRecoilState(cartList)
    const cartTotalVal = useRecoilValue(cartTotal)

    const removeProduct = (id) => {
        const removedProductArr = [...cartListVal].filter((item) => item.id !== id)
        setCartListVal([...removedProductArr])
    }

  return (
      <div className='cart-section'>
          <div className="container-sm">
            <ul className="cart-list">
                {cartListVal.map((product,index) => 
                    <li key={`cart-${product._id}${index}`}>
                        <div className="cart-card">
                            <img src={product.image} alt=""/>
                            <div className="cart-card-content">
                                <h3>{product.title}</h3>
                                <p>{product.category}</p>
                            </div>
                            <div className="cart-card-cta">
                                <span>₹ {product.price} </span>
                            </div>
                            <span onClick={() => removeProduct(product.id)}><FiTrash2/></span>
                        </div>
                    </li>
                )}
            </ul>
            <div className="cart-section-bottom">
                <label>Total</label> 
                <div>{cartTotalVal}</div>
            </div>
            <button className="btn btn-primary btn-full addtocart-cta">Checkout</button>
          </div>
      </div>
  );
}

export default Cart;