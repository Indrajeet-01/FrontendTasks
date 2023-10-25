import React, {useState} from 'react'
import './style.css'

const AddExpense = ({onAddExpense}) => {
  const [isFormVisible, setFormVisibility] = useState(false);

  const toggleFormVisibility = () => {
    setFormVisibility(!isFormVisible);
  };
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState(0);
    const [enteredDate, setEnteredDate] = useState('');
  
    const titleChangeHandler = (event) => {
      setEnteredTitle(event.target.value);
    };
  
    const amountChangeHandler = (event) => {
      setEnteredAmount(event.target.value);
    };
  
    const dateChangeHandler = (event) => {
      setEnteredDate(event.target.value);
    };

    const submitHandler = (e) => {
      e.preventDefault()
      const expenseData = {
        id : Math.floor(Math.random() * 10),
        title : enteredTitle,
        amount : enteredAmount,
        date : new Date(enteredDate)
      }
      onAddExpense(expenseData);

      
      setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    console.log(expenseData)

    }
  return (
    <div className='new-expense'>
      <button onClick={toggleFormVisibility}>Add Expense</button>
      { isFormVisible && ( 
        
        <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' value={enteredAmount}  onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2023-12-31' value={enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
      </form>
      )}
    </div>
  )
}

export default AddExpense