import axios from "axios";

export const fetchCountryList = async () => {
   const res = await fetch('https://fakestoreapi.com/products');
   const data = res.json();
   return data;
}

