import React, {useState} from 'react'
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

const Expenses = ({expenses}) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
      
  return (
    <div className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
        {expenses.map((expense, index) => (
        <ExpenseItem key={index} expense={expense} ></ExpenseItem>
      ))}
    </div>
  )
}

export default Expenses