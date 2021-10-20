import React from "react";
import InnerBanner from "../../components/InnerBanner";
import FooterBanner from "../../components/FooterBanner";
import dbConnect from "../../utils/dbConnect";
import { fetchOneProduct } from "../../dataFetchers/fetchProduct";

export default function Page(props) {
  const { product } = props;
  return (
    <>
      <InnerBanner title="Product Details" />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="product-gallery">
                <figure>
                  <img src={product.image} alt="" />
                </figure>
              </div>
            </div>
            <div className="col-md-6">
              <span className="product-details-category">
                {product.category}
              </span>
              <h3 className="product-details-heading">{product.title}</h3>
              <p className="product-short-description">{product.description}</p>
              <div className="product-price-wrap">
                <div className="new-price">$ {product.price}</div>
                <div className="old-price">$ 5000</div>
              </div>
              <div className="product-button-wrap">
                <button
                  className="btn btn-primary addtocart-cta"
                  onClick={() => handleAddtoCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterBanner />
    </>
  );
}

export async function getServerSideProps({ params }) {
  await dbConnect();

  const product = await fetchOneProduct(params.slug);

  return { props: { product } };
}
