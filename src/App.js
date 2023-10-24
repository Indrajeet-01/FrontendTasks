
import Expenses from "./components/Expenses/Expenses";
import AddExpense from "./components/NewExpense/AddExpense";

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <AddExpense/>
      <Expenses/>
      </header>
    </div>
  );
}

export default App;
