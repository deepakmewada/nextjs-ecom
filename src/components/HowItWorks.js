import React from 'react';
import {BiSelectMultiple} from 'react-icons/bi'
import {RiSecurePaymentLine, RiTruckLine} from 'react-icons/ri'

const HowItWorks = () => {
    return (
        <section>
                <div className="container">
                    <div className="box-cont text-center">
                        <h3>How it works</h3>
                        <p>Luxury goods straight from the same manufacturers as your favorite brands.</p>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="how-step">
                                    <div className="icon-wrap">
                                        <BiSelectMultiple/>
                                    </div>
                                    <h5>Add Product to Cart</h5>
                                    <p>It is a long established fact that a reader will be distracted.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="how-step">
                                    <div className="icon-wrap">
                                        <RiSecurePaymentLine/>
                                    </div>
                                    <h5>Pay Securely on Gateway</h5>
                                    <p>It is a long established fact that a reader will be distracted.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="how-step">
                                    <div className="icon-wrap">
                                        <RiTruckLine/>
                                    </div>
                                    <h5>We will Delivery you the Product</h5>
                                    <p>It is a long established fact that a reader will be distracted.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
    );
}

export default HowItWorks;
