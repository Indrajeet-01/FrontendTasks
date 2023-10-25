import React, {useState} from 'react'
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import './expenseItem.css'
import ExpensesChart from './ExpensesChart';

const Expenses = ({expenses}) => {
  const [filteredYear, setFilteredYear] = useState('2023');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
      
  return (
    <div className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
      <ExpensesChart expenses={filteredExpenses}/>
      {
      filteredExpenses.length === 0 ? (
        <p style={{color: 'red'}}>No data found</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} ></ExpenseItem>
        ))
      )
      }
        
    </div>
  )
}

export default Expenses