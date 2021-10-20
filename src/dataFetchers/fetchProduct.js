import axios from "axios";

export const fetchAllProduct = async () => {
   const res = await fetch('https://fakestoreapi.com/products');
   const data = res.json();
   return data;
}

export const fetchOneProduct = async (slug) => {
   const res = await fetch(`https://fakestoreapi.com/products/${slug}`);
   const data = res.json();
   return data;
}