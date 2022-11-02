import {useState} from 'react';

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const startEditingHandler = () => {
    setIsEditing(true);
  }
  const stopEditingHandler = () => {
    setIsEditing(false)
  }
  const saveExpenseData = (saveEnteredData) => {
    const savedData = {
      ...saveEnteredData,
      id: Math.random(),
    };
    props.onAddingNewExpense(savedData);
  };

  return (
    <div className="new-expense">
      {!isEditing ? <button type="button" onClick={startEditingHandler}>Add new expense</button> :
      <ExpenseForm onSaveExpenseData={saveExpenseData} edit={setIsEditing} onStopEditing={stopEditingHandler}/>
  }
    </div>
  );
};

export default NewExpense;
