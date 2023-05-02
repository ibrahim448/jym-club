import React, { useEffect, useState } from 'react';
import logo from "../../image/logo.png";
import "./JymClab.css";
import Product from '../Product/Product';
import JymCart from '../JymCart/JymCart';

const JymClab = () => {

    const [products, setProducts] = useState([]);

    useEffect( ()=>{

        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))


    }, [])



    return (
        <div className='body'>
            <div className="jym-container">
                <div className="jym-clab-container">
                    <nav className='nav'>
                        <img src={logo} alt="" />
                        <h2>JYM CLUB</h2>
                    </nav>
                    <div className="products">
                        {
                            products.map(product => <Product key={product.key} product={product}></Product>)
                        }
                    </div>
                </div>
                <div className="jym-cart-container">
                   <div className='jym-cart'>
                        <JymCart></JymCart>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default JymClab;