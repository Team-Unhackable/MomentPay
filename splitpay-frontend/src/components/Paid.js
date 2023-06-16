import React from 'react';

const Paid = () => {
	if (localStorage.getItem('login') === 'true' && localStorage.getItem('paymentStatus') === 'true') {
		return (
			<div className='alert alert-primary'>
				<span>Paid: {localStorage.getItem("paymentAmount")} $HKD</span>
			</div>
		);
	} else if (localStorage.getItem('login') === 'true') {
		return (
			<div className='alert alert-primary'>
				<span>Paid: 0 $HKD</span>
			</div>
		);
	} else {
		return (
			<div className='alert alert-primary'>
				<span>Paid: 0 $HKD</span>
			</div>
		);
	}
};

export default Paid;