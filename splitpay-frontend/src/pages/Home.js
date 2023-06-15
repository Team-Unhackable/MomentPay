import '../App.css';
import React from 'react';
import logo from "../assets/logo.png"

function Home() {
  function logout() {
    localStorage.setItem('login', false);
    localStorage.setItem('username', '');
    localStorage.setItem('email', '');
    localStorage.setItem('id', '');
  }
  
  if (localStorage.getItem('login') === 'true') {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} style={{ width: "15%", height: "15%" }} className="App-logo" alt="logo" />
          <h1>MomentPay</h1>
          <p>Logged in as {localStorage.getItem('username')}</p>
          <button className='loginButton'>
            <a href="/expense">Expense</a>
          </button><br></br>
          <button className='loginButton'>
            <a href="/user">User Information</a>
          </button><br></br>
          <button className='loginButton' onClick={logout}>
            <a href="/login">Logout</a>
          </button>
        </header>
      </div>
    );
  }
  else {
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
}

export default Home;
