// import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  // const change_title_clickHandler = (e) => {
  //   console.log(title);
  //   setTitle("Change the title");
  //   e.preventDefault();
  // };
  return (
    <Card className="expense-item">
      {/* <div>{expenseDate.toISOString()}</div> */}
      {/* <div>{expenseDate.toString()}</div> */}
      {/* https://flaviocopes.com/how-to-get-month-from-javascript-date/ */}
      {/* https://stackoverflow.com/questions/6002254/get-the-current-year-in-javascript */}
      {/* https://www.w3schools.com/js/js_date_methods.asp */}

      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        {/* <button onClick={change_title_clickHandler}>Change Title</button> */}
      </div>
    </Card>
  );
};

export default ExpenseItem;
