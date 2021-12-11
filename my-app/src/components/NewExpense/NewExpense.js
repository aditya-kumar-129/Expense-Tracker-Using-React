import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

  const [openNewExpenseBox, closeNewExpenseBox] = useState(false);    //Initial value is false because we want the user to click on 'add more expense' button when the user opens the web

  const newExpenseDataHandler = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString(),
    };
    props.onNewExpense(expenseData);
    closeNewExpenseBox(false); // as soon as submit button is clicked expense box get closed
  };

  const openExpenseForm = () => {
    closeNewExpenseBox(true);
  };

  const closeNewExpense = () => {
    closeNewExpenseBox(false);
  };

  // I have used the concept of storing the value the JSX code in a Variable
  let contentToBeDispalyed;
  if (openNewExpenseBox === true) {   // if the variable is true it means that the user has to enter the input
    contentToBeDispalyed = (
      <ExpenseForm
        onNewExpenseData={newExpenseDataHandler}
        onCancel={closeNewExpense}
      />
    );
  } else {
    contentToBeDispalyed = (
      <button onClick={openExpenseForm}>
        Add new Expense
      </button>
    );
  }

  return <div className="new-expense">{contentToBeDispalyed}</div>;
};

export default NewExpense;
