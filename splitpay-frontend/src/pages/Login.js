// import '../App.css';
// import React from 'react';
// import { useNavigate } from 'react-router-dom';



// function Login() {
//   const navigate = useNavigate();

//   function auth() {
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;
//     // var data = {username: username, password: password};
//     fetch('https://my-json-server.typicode.com/Team-Unhackable/MomentPay-Demo-Data/' + username)
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       if (data.password === password) {
//         localStorage.setItem('login', true);
//         navigate('/');
//       } else {
//         return false;
//       }
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Login</h1>
//         <form action="/login" method="post">
//             <label for="username" className='formLabel'>Username: </label>
//             <input type="text" id="username" name="username" required className='form'></input><br></br><br></br>
//             <label for="password" className='formLabel'>Password: </label>
//             <input type="password" id="password" name="password" required className='form'></input><br></br><br></br>
//             <input type="submit" value="Submit" className='loginButton' onClick={auth}></input>
//         </form>
//       </header>
//     </div>
//   );
// }

// export default Login;

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
                <h2>Account Login</h2>
                <br></br>
                {(error !== "") ? ( <div className="error">{error}</div> ) : ""}
                <div className="form-group">
                    <label htmlFor="name">User Name: </label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value = {details.name} />
                </div>
                <br></br>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value = {details.password} />
                </div>
                <br></br>
                <input type="submit" value="LOGIN" />
                </center>
            </div>
        </form>
    )
}

export default Login;