import '../App.css';
import React from 'react';

function Login() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Login</h1>
        <form action="/login" method="post">
            <label for="username" className='formLabel'>Username: </label>
            <input type="text" id="username" name="username" required className='form'></input><br></br><br></br>
            <label for="password" className='formLabel'>Password: </label>
            <input type="password" id="password" name="password" required className='form'></input><br></br><br></br>
            <input type="submit" value="Submit" className='loginButton'></input>
        </form>
      </header>
    </div>
  );
}

export default Login;
