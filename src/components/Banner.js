import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";

const Banner = () => {
    return (
        <section className="banner-section">
            <div className="container">
                <div className="banner-cont">
                    <img src="https://i.ibb.co/vcHwLSq/banner.jpg" />
                    <div className="banner-caption">
                        <h2>We sell Good Quality Product</h2>
                        <p>Start your shopping with VadhuVastra</p>
                        <a href="#" className="btn btn-white">Order Now <BsArrowRight/></a>
                    </div>
                </div>
                <ul className="category-list column-3">
                    <li>
                        <div>
                            <img src="/dummy1.jpg" />
                            <div className="category-caption">
                                <h4>Banarasi</h4>
                                <a href="#" className="link">View Items <FiArrowRight/></a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                        <img src="/dummy2.jpg" />
                        <div className="category-caption">
                            <h4>North</h4>
                            <a href="#" className="link">View Items <FiArrowRight/></a>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div>
                        <img src="/dummy3.jpg" />
                        <div className="category-caption">
                            <h4>South</h4>
                            <a href="#" className="link">View Items <FiArrowRight/></a>
                        </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Banner;
