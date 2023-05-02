import React, { useEffect, useState } from 'react';
import logo from "../../image/logo.png";
import "./JymClab.css";
import Product from '../Product/Product';
import JymCart from '../JymCart/JymCart';

const JymClab = () => {

    const [products, setProducts] = useState([]);
    ////break time state
    const [breakTime, setBreakTime] = useState("00");

    useEffect( ()=>{

        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))


    }, []);

    ///break time show eventHandler
    const breakTimeEventHandler1 = ()=> setBreakTime(10);
    const breakTimeEventHandler2 = ()=> setBreakTime(20);
    const breakTimeEventHandler3 = ()=> setBreakTime(30);
    const breakTimeEventHandler4 = ()=> setBreakTime(40);
    const breakTimeEventHandler5 = ()=> setBreakTime(50);

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
                        <JymCart breakTime=
                        {breakTime} 
                        breakTimeEventHandler1={breakTimeEventHandler1}                       
                        breakTimeEventHandler2={breakTimeEventHandler2}                       
                        breakTimeEventHandler3={breakTimeEventHandler3}                       
                        breakTimeEventHandler4={breakTimeEventHandler4}                       
                        breakTimeEventHandler5={breakTimeEventHandler5}                       
                        ></JymCart>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default JymClab;