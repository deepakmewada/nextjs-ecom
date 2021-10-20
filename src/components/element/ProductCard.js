import React, { useEffect, useContext } from "react";
import Link from 'next/link'
import { useRouter } from 'next/router'
import { GlobalContext } from '../../context/GlobalContext' 
import {FiShoppingBag} from 'react-icons/fi'
import {FaRegHeart} from 'react-icons/fa'
import { useRecoilState, useSetRecoilState } from "recoil";
import { cartList, isDrawerVisible } from '../../recoil/atoms';


const ProductCard = ({product}) => {
    const router = useRouter();
    const [cartListArr, setCartListArr] = useRecoilState(cartList);
    const setIsVisible = useSetRecoilState(isDrawerVisible);
    const handleAddtoCart = (obj) => {
      setCartListArr([...cartListArr, obj])
      setIsVisible(true)
    }


  return (
    <li>
      <div className="product-card">
        <div  onClick={() => router.push(`/product/${product.id}`)}> 
        <figure><img src={product.image} alt={product.title} /></figure>
        <h5>{product.title}</h5>
        <p>₹ {Math.round(product.price)}
        </p>
        </div>
        <button className="add-cta" onClick={() => handleAddtoCart(product)}>
          <FiShoppingBag /> <span>Add to Cart</span>
        </button>
      </div>
    </li>
  );
};

export default ProductCard;
