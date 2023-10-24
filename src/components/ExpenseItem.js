import React from 'react'
import './expenseItem.css'

import ExpenseDate from './ExpenseDate'
import Card from './Card'

const ExpenseItem = ({expense}) => {
  const handleDelete = () => {
    
    console.log('deleted')
  }

  return (
    <>
      
      <div className='expense-item'>
        <ExpenseDate date={expense.date}></ExpenseDate>
      
      <div className='expense-item__description'>
        <h2>{expense.title}</h2>
        <div className='expense-item__price'>${expense.amount}</div>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </div>
      
    </>
    
  )
}

export default ExpenseItem