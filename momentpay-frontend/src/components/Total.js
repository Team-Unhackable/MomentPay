import React from 'react';

const Total = () => {
    if (localStorage.getItem('login') === 'true') {
        return(
            <div className='alert alert-secondary'>
                <span>Total fees: {localStorage.getItem("totalAmount")} $HKD</span>
            </div>
        );
    } else {
        return(
            <div className='alert alert-secondary'>
                <span>Total fees: 0 $HKD</span>
            </div>
        );
    }
};

export default Total;
