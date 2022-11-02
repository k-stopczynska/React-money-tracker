import { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const expenses = [
  { id: 'p1', title: "dogs' food", amount: 399.99, date: new Date(2022, 10, 2) },
  {  id: 'p2',title: "groceries", amount: 149.99, date: new Date(2022, 9, 31) },
  {  id: 'p3',title: "beauty supply", amount: 59.99, date: new Date(2021, 7, 15) },
  {  id: 'p4',title: "gift", amount: 128.99, date: new Date(2020, 2, 28) },
];

const App = () => {

const [enteredExpenses, setEnteredExpenses] = useState(expenses);

  const addNewExpense = (expense) => {
setEnteredExpenses((prevExpenses) => {
return [expense, ...prevExpenses]
});
  }
  return (
    <div className="App">
      <NewExpense onAddingNewExpense={addNewExpense}/>
      <Expenses expenses={enteredExpenses} />
    </div>
  );
};

export default App;
