import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import PackagesShop from '../PackagesShop/PackagesShop';
import './Packages.css';

const Packages = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])


    return (
        <div className="packages">
            <div className="packages-tittal">
                <h4>OUR MOST POPULAR ADVENTURES</h4>
                <h6>MODERN & BEAUTIFUL</h6>
            </div>

            <div>
                <Container className="packages-area">
                    {
                        products.map( product => <PackagesShop
                            key = {product.id}
                            product={product}
                        ></PackagesShop>)
                    }
                </Container>
            </div>
        </div>
    );
};

export default Packages;