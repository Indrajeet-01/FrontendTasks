import React, {useState} from 'react'
import './expenseItem.css'

import ExpenseDate from './ExpenseDate'
import Card from './Card'

const ExpenseItem = ({expense}) => {
  const [amount, setAmount] = useState(expense.amount)
  const handleUpdate = () => {
    setAmount( 50)

    console.log(amount)
  }

  return (
    <>
      
      <div className='expense-item'>
        <ExpenseDate date={expense.date}></ExpenseDate>
      
      <div className='expense-item__description'>
        <h2>{expense.title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={handleUpdate}>Update</button>
    </div>
      
    </>
    
  )
}

export default ExpenseItem