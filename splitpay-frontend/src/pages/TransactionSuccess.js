import React from 'react';
import './TransactionSuccess.css';
import { useNavigate } from 'react-router-dom'; 

const TransactionSuccess = () => {
  const navigate = useNavigate();
  localStorage.setItem('paymentStatus', 'true');

  const GoToTransactionDetails =() => {
    navigate('/transactionDetails');
  }

  const GoToExpense =() => {
    // navigate('/TransactionDetails');
    navigate('/expense');
  }

  return (
    <div className="transaction-success">
      <div className="content">
        <h1 className="title">Transaction Successfully Completed!</h1><br></br>
        <button className="detail-button" onClick={GoToTransactionDetails}>View Detailed info</button>
        <br></br>
        <button className="tracking-button" onClick={GoToExpense}>Go To My Expense Tracking</button>
      </div>
    </div>
  );
};

export default TransactionSuccess;