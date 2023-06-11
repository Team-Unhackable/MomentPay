import '../App.css';
import React from 'react';
import logo from "../assets/logo.png"

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>MomentPay</h1>
        <button className='loginButton'>
          <a href="/login">Login</a>
        </button>
      </header>
    </div>
  );
}

export default Home;
