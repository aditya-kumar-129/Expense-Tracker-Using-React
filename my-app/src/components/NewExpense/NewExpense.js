import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
  const newExpenseDataHandler = (newExpenseData) =>{
    const expenseData = {
      ...newExpenseData,
      id:Math.random().toString()
    }
    props.onnewExpense(expenseData)
    // console.log(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onNewExpenseData={newExpenseDataHandler}/>
    </div>
  )
};

export default NewExpense;
