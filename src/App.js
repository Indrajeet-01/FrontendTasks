import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import AddExpense from "./components/NewExpense/AddExpense";

function App() {
      
  const [expenses, setExpenses] = useState([])
   
  
  const addExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <AddExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
      </header>
    </div>
  );
}

export default App;
