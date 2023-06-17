import React from 'react';
import { TiDelete } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';

const ExpenseItem = (props) => {
	const navigate = useNavigate();
	function handlePay() {
		if (localStorage.getItem('paymentStatus') === 'true') {
			alert('You have already paid!');
		} else {
			navigate('/payment');
		}
	}
	
	return (
		<li className='list-group-item d-flex justify-content-between align-items-center'>
			<h3>{props.name}</h3>
			<div>
				<span className='badge badge-primary badge-pill mr-3'>
					<h3>{props.total_cost} $HKD</h3>
				</span>
				<span><button onClick={handlePay} className='handlePayButton'> Pay </button></span>
				<TiDelete size='1.5em'></TiDelete>
			</div>
		</li>
	);
};

export default ExpenseItem;