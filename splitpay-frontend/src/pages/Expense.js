import React from 'react';
import './Expense.css';
import Others from '../components/PayByOthers';
import Paid from '../components/Paid';
import Total from '../components/Total';
import ExpenseList from '../components/ExpenseList';

const Expense = () => {

    function paymentInfo() {
        const userName = localStorage.getItem('username');
        const url = 'https://my-json-server.typicode.com/Team-Unhackable/MomentPay-Demo-Data/' + userName;
    
        fetch(url, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
          localStorage.setItem('paymentPlace', data[0].Payment[0].paymentPlace);
          localStorage.setItem('paymentDate', data[0].Payment[0].paymentDate);
          for (var i = 0; i < data[0].Payment[0].totalProuducts; i++) {
            if (data[0].Payment[0].products[0].payer === userName) {
              localStorage.setItem('product', data[0].Payment[0].products[0].productName);
              localStorage.setItem('productAmount', data[0].Payment[0].products[0].productAmount);
              localStorage.setItem('totalAmount', data[0].Payment[0].totalAmount);
              localStorage.setItem('paymentAmount', data[0].Payment[0].products[0].productPrice * data[0].Payment[0].products[0].productAmount);
            }
          }
        })
      }

    if (localStorage.getItem('login') === 'true') {
        paymentInfo();
        return (
            <div className='container'>
            <center>
            <h1 className='mt-3'>Expense</h1>
            </center>
            <div className='row mt-3'>
                <div className='col-sm'>
                    <Total/>
                </div>

                <div className='col-sm'>
                    <Others />
                </div>

                <div className='col-sm'>
                    <Paid />
                </div>

                </div>
                <h3 className='mt-3'>Expenses</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>

                    </div>
                <h3 className='mt-3'>Add Expense</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        {/* <AddExpenseForm /> */}
                    </div>
                    
                </div>
            </div>
        );
    } else {
        return (
            <center>
                <h1>Expense</h1>
                <h2>Please login !</h2>
            </center>
        )
    }
};

export default Expense