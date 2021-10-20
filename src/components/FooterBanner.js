import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";

const FooterBanner = () => {
    return (
        <section className="banner-section footer">
            <div className="container">
                <div className="banner-cont">
                    <img src="/smallbanner.jpg" />
                    <div className="banner-caption">
                        <h2>Fast, Free Shipping, Contactless Delivery.</h2>
                        <p>Try it now, risk free!</p>
                        <a href="#" className="btn btn-white">Shop Now <BsArrowRight/></a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FooterBanner;
