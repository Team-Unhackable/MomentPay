import '../App.css';
import React from 'react';

function Subscription() {

    function subscription() {
        localStorage.setItem('subscription', 'true');
    }

    function unsubscription() {
        localStorage.setItem('subscription', 'false');
    }

    if (localStorage.getItem('login') === 'true' && localStorage.getItem('subscription') === 'false') {
        return (
            <div className="App">
                <header className="App-header">
                <h1>Subscription</h1>
                <br></br>
                <h2>10 $HKD / month</h2>
                <br></br>
                <p>+ Payment Recommendation System</p>
                <button className='loginButton' onClick={subscription}>Subscription</button>
                </header>
            </div>
        );
    } else if (localStorage.getItem('login') === 'true' && localStorage.getItem('subscription') === 'true') {
        return (
            <header className="App-header">
            <h1>Subscription</h1>
            <button className='loginButton' onClick={unsubscription}>Unsubscription</button>
            </header>
        );
    } else {
        return (
            <div className="App">
                <header className="App-header">
                <h1>Subscription</h1>
                <br></br>
                <h2>10 $HKD / month</h2>
                <br></br>
                <p>+ Payment Recommendation System</p>
                </header>
            </div>
        );
    }
}

export default Subscription;
