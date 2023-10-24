import React, {useState} from 'react'
import ExpenseItem from './ExpenseItem';

const Expenses = ({expenses}) => {
      
  return (
    <div className='expenses'>
        {expenses.map((expense, index) => (
        <ExpenseItem key={index} expense={expense} ></ExpenseItem>
      ))}
    </div>
  )
}

export default Expenses