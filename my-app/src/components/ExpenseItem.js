import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';

function ExpenseItem (props) {
  
  return(
    <div className="expense-item">
      {/* <div>{expenseDate.toISOString()}</div> */}
      {/* <div>{expenseDate.toString()}</div> */}
      {/* https://flaviocopes.com/how-to-get-month-from-javascript-date/ */}
      {/* https://stackoverflow.com/questions/6002254/get-the-current-year-in-javascript */}
      {/* https://www.w3schools.com/js/js_date_methods.asp */}
      
      <ExpenseDate date = {props.date}/>
      <div></div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div> 
  )
}

export default ExpenseItem;