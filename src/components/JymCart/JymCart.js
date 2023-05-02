import React from 'react';
import "./JymCart.css";

const JymCart = (props) => {
    const{breakTime, breakTimeEventHandler1,breakTimeEventHandler2,breakTimeEventHandler3,breakTimeEventHandler4,breakTimeEventHandler5,productTimes} = props;
    
    let time = 0;
    for(const product of productTimes){
        time = time + parseFloat(product.time);
    }
    return (
        <div>
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