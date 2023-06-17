import React from 'react';
import { TiDelete } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
	const navigate = useNavigate();

	const [showOtherPayers, setShowOtherPayers] = useState(false);

	const handleTriangleClick = () => {
		setShowOtherPayers(!showOtherPayers);
	};

	function handlePay() {
		if (localStorage.getItem('paymentStatus') === 'true') {
			alert('You have already paid!');
		} else {
			navigate('/payment');
		}
	}
	
	if (localStorage.getItem('login') === 'true' && localStorage.getItem('paymentStatus') === 'true') {
	return (
		<div>
		<li className='list-group-item d-flex align-items-center'>
			<TiDelete size='1.5em'></TiDelete>
			<h3>{props.name}</h3>
			<div className="ml-auto">
				<span className='badge badge-primary badge-pill mr-3'>
				<h3>{props.total_cost} $HKD</h3>
				</span>
				<span><button onClick={handlePay} className='handlePayButton'> Co-Pay </button></span>
				<span
          			className={`triangle ${showOtherPayers ? 'triangle-up' : ''}`}
          			onClick={handleTriangleClick}
        		></span>
			</div>
		</li>
		{showOtherPayers && (
			<ul className="other-payers">
        	<li class="list-item">{localStorage.getItem("userName")}     <span class="payment-status bill-payer">Bill-Payer</span></li>
			<li class="list-item">{localStorage.getItem("userName")}  <span class="amount">{localStorage.getItem("paymentAmount")} $HKD </span><span class="payment-status paid">Paid</span></li>
			<li class="list-item">{localStorage.getItem("otherPayers")}  <span class="amount">{localStorage.getItem("totalAmount") - localStorage.getItem("paymentAmount")} $HKD </span><span class="payment-status unpaid">Unpaid</span></li>
        	</ul>
      		)}
		</div>
		);
	} else {
		return (
			<div>
			<li className='list-group-item d-flex align-items-center'>
				<TiDelete size='1.5em'></TiDelete>
				<h3>{props.name}</h3>
				<div className="ml-auto">
					<span className='badge badge-primary badge-pill mr-3'>
					<h3>{props.total_cost} $HKD</h3>
					</span>
					<span><button onClick={handlePay} className='handlePayButton'> Co-Pay </button></span>
					<span
						className={`triangle ${showOtherPayers ? 'triangle-up' : ''}`}
						onClick={handleTriangleClick}
					></span>
				</div>
			</li>
			{showOtherPayers && (
				<ul className="other-payers">
				{/* <li class="list-item">{localStorage.getItem("userName")}  <span class="payment-status bill-payer">Bill-Payer</span></li> */}
				<li class="list-item">{localStorage.getItem("username")}  <span class="amount">{localStorage.getItem("paymentAmount")} $HKD </span><span class="payment-status unpaid">Unpaid</span></li>
				<li class="list-item">{localStorage.getItem("otherPayers")}  <span class="amount">{localStorage.getItem("totalAmount") - localStorage.getItem("paymentAmount")} $HKD </span><span class="payment-status unpaid">Unpaid</span></li>
				</ul>
				)}
			</div>
		);
	}
};

export default ExpenseItem;