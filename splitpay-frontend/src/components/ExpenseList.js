import React from 'react'
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const Expenses = [
        {id: 1,Event_name: '',Total_cost:100,},
        { id: 13, Event_name: 'holiday', total_cost: 800, },
		{ id: 14, Event_name: 'car service', total_cost: 100, },
        //friendsplit:{frirend_name: Alice, fee:500}
    ]


        return(
            <ul className='list-group'>
                {Expenses.map((Expense) => (
                    <ExpenseItem id={Expense.id} name={Expense.name} total_cost={Expense.total_cost}   />
                 ))}
                </ul>
        )
    }

        export default ExpenseList
