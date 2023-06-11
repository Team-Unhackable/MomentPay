import '../App.css';
import {useState} from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MomentPay</h1>
        <button>
          <a href="/login">Login</a>
        </button>
      </header>
    </div>
  );
}

export default Home;
