import React from 'react';

const InnerBanner = ({title, imgUrl}) => {
    return (
        <section className="banner-section inner-banner">
            <div className="container">
                <div className="banner-cont">
                    <div className="banner-caption">
                        <h2>{title}</h2>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InnerBanner;
