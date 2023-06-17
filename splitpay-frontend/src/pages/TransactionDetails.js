import React from 'react';
import './TransactionDetails.css';

const TransactionDetails = () => {
  localStorage.setItem('paymentStatus', 'true');
  return (
    <div className="transaction-details">
      <div className="background-image"></div>
      <h2>Transaction Details</h2>
      <div className="detail-row">
        <div className="label">User ID:</div>
        <div className="value">123456789</div>
      </div>
      <div className="detail-row">
        <div className="label">Merchant Name:</div>
        <div className="value">Example Merchant</div>
      </div>
      <div className="detail-row">
        <div className="label">Merchant ID:</div>
        <div className="value">M123456789</div>
      </div>
      <div className="detail-row">
        <div className="label">Transaction ID:</div>
        <div className="value">T987654321</div>
      </div>
      <div className="detail-row">
        <div className="label">Payment Method:</div>
        <div className="value">Credit Card</div>
      </div>
      <div className="detail-row">
        <div className="label">Date and Time:</div>
        <div className="value">2023-06-14 15:30:00</div>
      </div>
    </div>
  );
}

export default TransactionDetails;
