import React from 'react';
import "./JymCart.css";

const JymCart = () => {
    return (
        <div>
            <h1>Add A Break</h1>
            <div className='cart-btn'>
                <button>10s</button>
                <button>20s</button>
                <button>30s</button>
                <button>40s</button>
                <button>50s</button>
            </div>
            <h1>Exercise Details:</h1>
            <div className='exercise-details'>
                <h2>Exercise Time:</h2>
                <h2>Break Time: <span className='span'>{}Second</span></h2>
            </div>
        </div>
    );
};

export default JymCart;