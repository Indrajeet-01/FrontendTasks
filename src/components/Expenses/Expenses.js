import React, {useState} from 'react'
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

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
        {filteredExpenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} ></ExpenseItem>
      ))}
    </div>
  )
}

export default Expenses