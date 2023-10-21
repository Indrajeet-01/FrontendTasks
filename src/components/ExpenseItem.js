import React from 'react'
import './expenseItem.css'
import './ExpenseDate'
import ExpenseDate from './ExpenseDate'

const ExpenseItem = ({expense}) => {

  return (
    <>
      
      <div className='expense-item'>
        <ExpenseDate date={expense.date}></ExpenseDate>
      
      <div className='expense-item__description'>
        <h2>{expense.title}</h2>
        <div className='expense-item__price'>${expense.amount}</div>
      </div>
    </div>
      
    </>
    
  )
}

export default ExpenseItem