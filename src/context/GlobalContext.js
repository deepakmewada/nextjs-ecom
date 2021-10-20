import React, { useState } from 'react';
import { initialCartState, cartReducer } from './CartReducer'
import { initialUserState, userReducer } from './UserReducer'

export const GlobalContext = React.createContext();

export const GlobalProvider = (props) => {

    const [userState, userDispatch] = React.useReducer(userReducer, initialUserState)
    const [cartState, cartDispatch] = React.useReducer(cartReducer, initialCartState)
    const cart = {cartState, cartDispatch}
    const userContext = {userState, userDispatch}

    const handleAddtoCart = (product) => {
      console.log('sdfghjkl',product)
      let filterCartList = cartState.cartList.filter((item) => item._id == product._id)
      if(filterCartList.length > 0){
        cartDispatch({
          type: 'add-product-unit',
          payload: {price: product.price, _id: product._id}
        })
      }else{
        cartDispatch({
          type: 'add-product',
          payload: product
        })
      }
        
    }

    return (
       <GlobalContext.Provider value={{ userContext, cart, handleAddtoCart}}>
           {props.children}
        </GlobalContext.Provider>
    );
}
