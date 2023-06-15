import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({Login, error}) {
    const navigate = useNavigate();
    const [details, setDetails] = useState({name: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();
        
        const password = details.password;
        const userName = details.name;
        
        const urlLogin = 'https://my-json-server.typicode.com/Team-Unhackable/MomentPay-Demo-Data/' + userName;

        fetch(urlLogin, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            if (data[0].password === password) {
                console.log("Login successful");
                localStorage.setItem('login', true);
                localStorage.setItem('username', userName);
                navigate('/');
            } else {
                console.log("Login unsuccessful");
                return false;
            }
        })

    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <center>
                <h1>Account Login</h1>
                <br></br>
                {(error !== "") ? ( <div className="error">{error}</div> ) : ""}
                <div className="form-group">
                    <label htmlFor="name" className='formLabel'>User Name: </label>
                    <input type="text" name="name" id="name" className='form' onChange={e => setDetails({...details, name: e.target.value})} value = {details.name} />
                </div>
                <br></br>
                <div className="form-group">
                    <label htmlFor="password" className='formLabel'>Password: </label>
                    <input type="password" name="password" id="password" className='form' onChange={e => setDetails({...details, password: e.target.value})} value = {details.password} />
                </div>
                <br></br>
                <input type="submit" className='loginButton' value="LOGIN" />
                </center>
            </div>
        </form>
    )
}

export default Login;