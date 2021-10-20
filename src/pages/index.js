import React, { useEffect } from 'react';
import Layout from '../components/layout';
import Banner from '../components/Banner';
import FooterBanner from '../components/FooterBanner';
import HowItWorks from '../components/HowItWorks';
import ProductSection from '../components/ProductSection';
import dbConnect from '../utils/dbConnect';
import Product from '../models/Product';
import { fetchAllProduct } from '../dataFetchers/fetchProduct'

const featureList = [
    {
        name:"Dubai Premium",
        _id: 43215,
        code: 43215,
        category: "Dubai",
        tag: ["Hot","Latest"],
        price: 1000,
        oldprice: 2000,
        slug:"dubai-premium",
        imgUrl: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/8/11/35643372-9a6a-45b5-a18a-af056a97b6e51565465392383-1.jpg'
    },
    {
        name:"Banarasi Premium",
        _id: 43216,
        code: 43216,
        category: "Banarasi",
        tag: ["Hot","Latest"],
        price: 1200,
        oldprice: 2000,
        slug:"banarasi-premium",
        imgUrl: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/10852984/2019/12/5/f3816b5c-27db-422c-8d7a-5c73b66a5f831575541323067-GoSriki-White-Linen-Cotton-Solid-Woven-Work-Saree-9001575541-1.jpg'
    },
    {
        name:"South Indian Premium",
        _id: 43217,
        code: 43217,
        category: "South",
        tag: ["Hot","Latest"],
        price: 1500,
        oldprice: 2000,
        slug:"south-indian-premium",
        imgUrl: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/3/23/2ce744c1-c48e-48f5-8049-cbbd672007ca1616500934489-1.jpg'
    },
    {
        name:"Silk Saare",
        _id: 43218,
        code: 43218,
        category: "Gujarati",
        tag: ["Hot","Latest"],
        price: 5000,
        oldprice: 20000,
        slug:'silk-saare',
        imgUrl: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/12631376/2020/10/23/7a8e773c-517f-49c5-910b-85b5caa478d31603433322159-Inddus-Women-Sarees-1441603433317954-1.jpg'
    }
]

const Page = (props) => {
    console.log(props)
    return (
        <>
            <Banner/>
            <ProductSection title="Trending Products" sectionType="hot" list={props.products} />
            <HowItWorks/>
            <FooterBanner/>
        </>
    );
};


export async function getServerSideProps() {
  await dbConnect()

  const products = await fetchAllProduct();

  const configApi = {
      "companyId": "123",
      "features": {
          "wishlist": false,
          "promoCode": false,
      },
      "colors": ["#ff0000","#003366"]
  }
  /* find all the data in our database */
  const result = await Product.find({})
  
//   const products = result.map((doc) => {
//     const product = doc.toObject()
//     product._id = product._id.toString()
//     return product
//   })

  return { props: { config: configApi, products: products } }
}

export default Page;
