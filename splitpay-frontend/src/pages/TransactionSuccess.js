import React from 'react';
import './TransactionSuccess.css';

const TransactionSuccess = () => {
  localStorage.setItem('paymentStatus', 'true');
  return (
    <div className="transaction-success">
      <div className="background-image"></div>
      <div className="content">
        <h1 className="title">Transaction Successfully Completed!</h1>
        <button className="detail-button">View Detailed info</button>
        <button className="tracking-button">Go To My Expense Tracking</button>
      </div>
    </div>
  );
};

export default TransactionSuccess;