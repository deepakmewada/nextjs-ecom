import { atom, selector } from "recoil";

export const cartList = atom({
    key:'cartList',
    default: []
})

export const cartTotal = selector({
    key:'cartTotal',
    get: ({get}) => {
        const cart = get(cartList);
        const sum = cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);

        return Math.round(sum).toFixed(2);
    }
})

export const cartCount = selector({
    key:'cartCount',
    get: ({get}) => {
        const cart = get(cartList);

        return cart.length;
    }
})

export const isDrawerVisible = atom({
    key: 'isDrawerVisible',
    default: false
})