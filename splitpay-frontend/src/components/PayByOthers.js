import React from 'react';

const Others = () => {
	if (localStorage.getItem('login') === 'true') {
        return(
            <div className='alert alert-secondary'>
                <span>Others: {localStorage.getItem("totalAmount") - localStorage.getItem("paymentAmount")} $HKD</span>
            </div>
        );
    } else {
        return(
            <div className='alert alert-secondary'>
                <span>Others: 0 $HKD</span>
            </div>
        );
    }
};

export default Others;