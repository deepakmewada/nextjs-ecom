import React, { useState, useEffect } from 'react';
import ProductCard from './element/ProductCard';

const ProductSection = ({title, sectionType, list }) => {

    const [cards, setCards] = useState([])

    useEffect(() => {
        setCards(list)
    }, [list])
    
    return (
        <section>
                <div className="container">
                    <div className="box-cont">
                    <h3>{title}</h3>
                    <ul className="product-list column-4">
                        {
                            cards.map((product, index) => 
                                <ProductCard key={`${product._id}${index}`} product={product} index={index}/>
                            )
                        }
                    </ul>
                    
                </div>
                </div>
            </section>
    );
}

export default ProductSection;
