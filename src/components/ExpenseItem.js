import React from 'react'
import './expenseItem.css'

const ExpenseItem = () => {
  return (
    <>
      
        <div className='expense-item'>
          <div>15th October 2023</div>
          <div className='expense-item__description'>
            <h2>Shopping</h2>
            <div className='expense-item__price'>4700</div>
          </div>
        </div>
        <div className='expense-item'>
          <div>18th October 2023</div>
          <div className='expense-item__description'>
            <h2>Food</h2>
            <div className='expense-item__price'>400</div>
          </div>
        </div>
      
    </>
    
  )
}

export default ExpenseItem