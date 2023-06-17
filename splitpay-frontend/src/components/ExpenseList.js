import React from 'react'
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    console.log(localStorage.getItem("paymentPlace"))
    console.log(localStorage.getItem("totalAmount"))
    const Expenses = [
        {id: 1,Event_name: localStorage.getItem("paymentPlace"),Total_cost: localStorage.getItem("totalAmount")},
    ]

    return(
        <ul className='list-group'>
            {Expenses.map((Expense) => (
                <ExpenseItem id={Expense.id} name={Expense.Event_name} total_cost={Expense.Total_cost}   />
            ))}
        </ul>
    )
}

export default ExpenseList
