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

  function paymentOtherInfoAfterSuccess() {
    const userName = localStorage.getItem('username');
    const url = 'https://my-json-server.typicode.com/Team-Unhackable/MomentPay-Demo-Data/' + userName;
  
    fetch(url, {
        method: 'GET'
    })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem('paymentMethod', data[0].Payment[0].paymentMethod);
      localStorage.setItem('paymentId', data[0].Payment[0].paymentId);
    })
  }

  paymentOtherInfoAfterSuccess();

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