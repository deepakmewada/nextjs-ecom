
export const initialCartState = {
  cartCount:0, 
  cartTotal:0,
  cartList: []
}

export function cartReducer(state, action) {
  switch (action.type) {
    case 'add-product': {
      return {cartCount: state.cartCount + 1, cartList: [...state.cartList, action.payload], cartTotal: state.cartTotal + action.payload.price }
    }
    case 'remove-product': {
      return {count: state.count - 1}
    }
    case 'add-product-unit':{
      const index = state.cartList.findIndex((item) => item._id == action.payload._id)
      const newArray = [...state.cartList]
      if(newArray[index].unit){
        newArray[index].unit =  newArray[index].unit + 1
      }else{
        newArray[index].unit = 1
      }
      return {...state, cartList: newArray, cartTotal: state.cartTotal + action.payload.price }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
