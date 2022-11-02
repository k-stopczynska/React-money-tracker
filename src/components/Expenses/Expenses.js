import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState("All");
  const filterChange = (selectedYear) => {
    setEnteredYear(selectedYear);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    return enteredYear === "All"
      ? true
      : expense.date.getFullYear().toString() === enteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter onFilterChange={filterChange} selected={enteredYear} />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList expenses={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
