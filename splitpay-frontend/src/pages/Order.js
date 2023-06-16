import React, { useState } from 'react';
import './Order.css'; 
import coffee from "../assets/coffee.png";
import CreditCardIcon from "../assets/credit-card.png";
import ApplePayIcon from "../assets/apple-pay.jpeg";
import GooglePayIcon from "../assets/Google-Pay.png";
import WechatPayIcon from "../assets/wechat-pay.png";
import AlipayIcon from "../assets/alipay.png";
import LinePayIcon from "../assets/LinePay.png";
import { useNavigate } from 'react-router-dom';


const Order = () => {
  const navigate=useNavigate();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const handleConfirmPayment = () => {
    // Perform the necessary logic for confirming the payment
    console.log('Payment confirmed');
  };

  const handleCancelPayment = () => {
    // Perform any cleanup or redirection needed when the payment is canceled
    console.log('Payment canceled');
  };

  const handleAddNewPaymentMethod = () => {
    console.log('Add new payment method');
  }

  const GoToTransactionDetails =() => {
    navigate('/TransactionDetails');
  }

  const GoToUser =() => {
    navigate('/User');
  }

  const GoToHome =() => {
    navigate('/');
  }

  if (localStorage.getItem('login') === 'true') {
    return (
      <div className="order-page">
        <h1>Payment</h1>
        {/* <h2>Lib Cafe @ PolyU</h2> */}
        <h2>{localStorage.getItem('paymentPlace')}</h2>
        <h2>Time: <i>{localStorage.getItem('paymentDate')}</i></h2>
        <div className="product-info">
          <img src={coffee} alt="Coffee Icon" className="product-icon" />
          <h3>{localStorage.getItem('product')} x {localStorage.getItem("productAmount")}</h3>
          <p>Total: {localStorage.getItem('paymentAmount')} $HKD</p>
        </div>
        <h3>Select a payment method:</h3>
        <div className="payment-methods">
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="Credit Card"
              checked={selectedPaymentMethod === 'Credit Card'}
              onChange={handlePaymentMethodChange}
            />
            <img src={CreditCardIcon} alt="Credit Card Icon" className="payment-icon 1" id="icon1"/>
            Credit Card
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="Apple Pay"
              checked={selectedPaymentMethod === 'Apple Pay'}
              onChange={handlePaymentMethodChange}
            />
            <img src={ApplePayIcon} alt="Apple Pay Icon" className="payment-icon" />
            Apple Pay
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="Google Pay"
              checked={selectedPaymentMethod === 'Google Pay'}
              onChange={handlePaymentMethodChange}
            />
            <img src={GooglePayIcon} alt="Google Pay Icon" className="payment-icon" id="icon3" />
            Google Pay
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="Wechat Pay"
              checked={selectedPaymentMethod === 'Wechat Pay'}
              onChange={handlePaymentMethodChange}
            />
            <img src={WechatPayIcon} alt="Wechat Pay Icon" className="payment-icon" id="icon4"/>
            Wechat Pay
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="Alipay"
              checked={selectedPaymentMethod === 'Alipay'}
              onChange={handlePaymentMethodChange}
            />
            <img src={AlipayIcon} alt="AlipayIcon" className="payment-icon" id="icon5"/>
            Alipay
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="LinePay"
              checked={selectedPaymentMethod === 'LinePay'}
              onChange={handlePaymentMethodChange}
            />
            <img src={LinePayIcon} alt="Line Pay Icon" className="payment-icon" />
            LinePay
          </label>
          {/* <label>
            <button
              type="button"
              value="Add New"
              className="add-payment-button"
              onClick={GoToUser}
            >
              <span className="add-payment-icon">+</span> Add a new payment method
            </button>
          </label> */}
        </div>
        <div className="buttons">
          <button onClick={GoToTransactionDetails}>Confirm</button>
          <button onClick={GoToHome}>Cancel</button>
        </div>
      </div>
    );
  } else {
    return (
      <center>
          <h1>Payment</h1>
          <h2>Please login !</h2>
      </center>
    )
  }
};

export default Order;
