import React from 'react';
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {product,productHandler} = props;
    const {img,time,name} = product;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <h3>Time Required: {time}</h3>
            <button onClick={()=>productHandler(props.product)} className='btn'>Add To Cart
            <FontAwesomeIcon icon={faShoppingCart} className='icon'></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;