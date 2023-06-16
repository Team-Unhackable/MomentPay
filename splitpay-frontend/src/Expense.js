import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Owns_You from './components/Owns_You';
import Paid from './components/Paid';
import Total from './components/total';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';



const Expense = () => {
    return (
        <div className='container'>
        <h1 className='mt-3'>Account</h1>
        <div className='row mt-3'>
            <div className='col-sm'>
                <Total/>
            </div>

            <div className='col-sm'>
                <Owns_You />
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
					<AddExpenseForm />
				</div>
                
        </div>
    </div>
);
};

export default Expense