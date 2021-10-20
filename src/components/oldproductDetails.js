import React, { useState, useContext } from "react";
import { FaStar, FaStarHalfAlt, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FiHeart, FiFacebook, FiShare2, FiCheck } from "react-icons/fi";
import { GlobalContext } from "../context/GlobalContext";

const productColors = ["#006fbb", "#47c1bf", "#f49342", "#00044c"];

export default function ProductDetails({product}) {
  const {title, description, price} = product;
  const [activeIndex, setActiveIndex] = useState(0);
  const context = useContext(GlobalContext);
  const { handleAddtoCart } = context;

  const handleTabLinks = (index) => {
    setActiveIndex(index);
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="product-gallery">
              <div className="gallery-left">
                <ul className="gallery-thumb-wrap">
                  <li>
                    <img
                      src="https://i.picsum.photos/id/381/400/500.jpg?hmac=YeMuyfg1kD1CRC12w8DjYKNsWOj__LeUvoO2FNhBAOI"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="https://i.picsum.photos/id/381/400/500.jpg?hmac=YeMuyfg1kD1CRC12w8DjYKNsWOj__LeUvoO2FNhBAOI"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="https://i.picsum.photos/id/381/400/500.jpg?hmac=YeMuyfg1kD1CRC12w8DjYKNsWOj__LeUvoO2FNhBAOI"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="https://i.picsum.photos/id/381/400/500.jpg?hmac=YeMuyfg1kD1CRC12w8DjYKNsWOj__LeUvoO2FNhBAOI"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="https://i.picsum.photos/id/381/400/500.jpg?hmac=YeMuyfg1kD1CRC12w8DjYKNsWOj__LeUvoO2FNhBAOI"
                      alt=""
                    />
                  </li>
                </ul>
              </div>
              <div className="gallery-right">
                <div className="gallery-img-wrap">
                  <img
                    src="https://i.picsum.photos/id/381/400/500.jpg?hmac=YeMuyfg1kD1CRC12w8DjYKNsWOj__LeUvoO2FNhBAOI"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <span className="product-details-category">Catergory Name</span>
            <h3 className="product-details-heading">
              {title}
            </h3>
            <div className="product-review-wrap">
              <div className="rating-stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <div className="rating-count">328 reviews</div>
            </div>
            <p className="product-short-description">{description}</p>
            <div className="product-price-wrap">
              <div className="new-price">$ {price}</div>
              <div className="old-price">$ 5000</div>
            </div>
            <div className="product-colors">
              {productColors.map((color, index) => (
                <span
                  key={Math.random()}
                  className={`product-color ${index === 0 ? "active" : null}`}
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>
            <div className="product-quantity">
              <select defaultValue={1}>
                <option>- Select -</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="product-button-wrap">
              <button
                className="btn btn-primary addtocart-cta"
                onClick={() => handleAddtoCart(product)}
              >
                Add to Cart
              </button>
              <button className="btn btn-primary-bordered square-btn">
                <FiHeart />
              </button>
            </div>
            <div className="product-share-buttons">
              <button className="btn">
                <FiShare2 />
              </button>
              <button className="btn">
                <FaWhatsapp />
              </button>
              <button className="btn">
                <FiFacebook />
              </button>
              <button className="btn">
                <FaInstagram />
              </button>
            </div>

            <ul className="product-important-points">
              <li>
                {" "}
                <FiCheck /> Particularly like this product
              </li>
              <li>
                {" "}
                <FiCheck /> Particularly like this product
              </li>
              <li>
                {" "}
                <FiCheck /> Particularly like this product
              </li>
            </ul>
          </div>
        </div>
        <div className="product-tab-container">
          <ul className="product-tab-links">
            <li
              onClick={() => handleTabLinks(0)}
              className={activeIndex === 0 ? "active" : ""}
            >
              Product Details
            </li>
            <li
              onClick={() => handleTabLinks(1)}
              className={activeIndex === 1 ? "active" : ""}
            >
              Reviews
            </li>
            <li
              onClick={() => handleTabLinks(2)}
              className={activeIndex === 2 ? "active" : ""}
            >
              Addition Details
            </li>
          </ul>
          <div className="product-tab-content">
            {activeIndex === 0 ? <div>Product Details Description</div> : null}
            {activeIndex === 1 ? <div>Reviews</div> : null}
            {activeIndex === 2 ? <div>Addition</div> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
