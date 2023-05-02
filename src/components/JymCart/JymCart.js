import React from 'react';
import "./JymCart.css";
import image from "../../image/my-portfolio-1-1-removebg-preview.jpg";

const JymCart = (props) => {
    const{breakTime, breakTimeEventHandler1,breakTimeEventHandler2,breakTimeEventHandler3,breakTimeEventHandler4,breakTimeEventHandler5,productTimes} = props;
    
    let time = 0;
    for(const product of productTimes){
        time = time + parseFloat(product.time);
    }
    return (
        <div>
            <div className='biodata'>
                <img src={image} alt="" />
                <div>
                    <h3>Md. Ibrahim Hossain</h3>
                    <p>Dhaka,Bangladesh</p>
                </div>
            </div>
            <div className='my-self'>
                <div>
                    <h3>75<span>kg</span></h3>
                    <p>Weight</p>
                </div>
                <div>
                    <h3>6.5</h3>
                    <p>Height</p>
                </div>
                <div>
                    <h3>27<span>yrs</span></h3>
                    <p>Age</p>
                </div>
            </div>
            <h1>Add A Break</h1>
            <div className='cart-btn'>
                <button onClick={breakTimeEventHandler1}>10s</button>
                <button onClick={breakTimeEventHandler2}>20s</button>
                <button onClick={breakTimeEventHandler3}>30s</button>
                <button onClick={breakTimeEventHandler4}>40s</button>
                <button onClick={breakTimeEventHandler5}>50s</button>
            </div>
            <h1>Exercise Details:</h1>
            <div className='exercise-details'>
                <h2>Exercise Time: <span className='exercise-span'>{time}s</span></h2>
                <h2>Break Time: <span className='span-break'>{breakTime} <small className='span'>second</small></span></h2>
            </div>
        </div>
    );
};

export default JymCart;