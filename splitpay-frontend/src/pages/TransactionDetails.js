import React from 'react';
import './TransactionDetails.css';

const TransactionDetails = () => {
  localStorage.setItem('paymentStatus', 'true');

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
    <div className="transaction-details">
      <h2>Transaction Details</h2>
      <br></br>
      <div className="detail-row">
        <div className="label">Username:</div>
        <div className="value">{localStorage.getItem("username")}</div>
      </div>
      <div className="detail-row">
        <div className="label">Merchant:</div>
        <div className="value">{localStorage.getItem("paymentPlace")}</div>
      </div>
      <div className="detail-row">
        <div className="label">Transaction ID:</div>
        <div className="value">{localStorage.getItem("paymentId")}</div>
      </div>
      <div className="detail-row">
        <div className="label">Payment Method:</div>
        <div className="value">{localStorage.getItem("paymentMethod")}</div>
      </div>
      <div className="detail-row">
        <div className="label">Time:</div>
        <div className="value">{localStorage.getItem("paymentDate")}</div>
      </div>
    </div>
  );
}

export default TransactionDetails;
