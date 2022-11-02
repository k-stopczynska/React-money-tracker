import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState('');
  // const [enteredDate, setEnteredDate] = useState('');

  const [enteredInput, setEnteredInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (e) => {
    // setEnteredTitle(e.target.value);
    // console.log(enteredTitle);
    setEnteredInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: e.target.value,
      };
    });
  };
  const amountChangeHandler = (e) => {
    // setEnteredAmount(e.target.value);
    // console.log(enteredAmount);
    setEnteredInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: e.target.value,
      };
    });
  };
  const dateChangeHandler = (e) => {
    // setEnteredDate(e.target.value);
    // console.log(enteredDate);
    setEnteredInput((prevState) => {
      return {
        ...prevState,
        enteredDate: e.target.value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredInput.enteredTitle,
      amount: +enteredInput.enteredAmount,
      date: new Date(enteredInput.enteredDate),
    };
   props.onSaveExpenseData(expenseData);
   props.onStopEditing();
    setEnteredInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredInput.enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredInput.enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredInput.enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
        <button type="button" onClick={props.onStopEditing}>Cancel</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
