import React from 'react';

const PaymentFailure = () => {
  const backgroundStyle = {
    backgroundImage: `url("https://scontent-hkg4-2.xx.fbcdn.net/v/t39.30808-6/352077882_277687971497284_2630594872798542825_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=kaHJU1v8NGQAX8NRsqd&_nc_ht=scontent-hkg4-2.xx&oh=00_AfAcnfLMPHvfhUa89TNfTphDrIyxoD0UhT6NSw4lYSkKjw&oe=648F9394")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '60vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const contentStyle = {
    textAlign: 'center',
    color: 'white',
  };

  const titleStyle = {
    fontSize: '36px',
    color: 'red',
    marginBottom: '10px',
  };

  const messageStyle = {
    fontSize: '24px',
    color: 'red',
    marginBottom: '20px',
  };

  const buttonStyle = {
    backgroundColor: 'red',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  return (
    <div style={backgroundStyle}>
      <div style={contentStyle}>
        <h1 style={titleStyle}>Transaction Failed!</h1>
        <p style={messageStyle}>Your account balance is insufficient, please recharge and try again.</p>
        <button style={buttonStyle}>Return</button>
      </div>
    </div>
  );
};

export default PaymentFailure;