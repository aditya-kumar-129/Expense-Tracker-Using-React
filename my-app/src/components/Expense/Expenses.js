import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

// If you ever get stuck for finding the path then type ./
// as soon as you type / Visual studio code will show you the all the js file present in that directry
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // We can store JSX code in a variable like the one below done
  let expenseContent = <p>No Money spent in this month</p>;

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((single_object) => (
      <ExpenseItem
        key={single_object.id}
        title={single_object.title}
        amount={single_object.amount}
        date={single_object.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenseContent}
      {/* below method can also be used as the JS logic evaluated the logic like if the first part of the condition is correct then render the part after the && */}
      {/* {filteredExpenses.length===0 && <p>No Money spent in this month</p>} */}
      {/* {filteredExpenses.length>0 && filteredExpenses.map((single_object) => (
      <ExpenseItem
        key={single_object.id}
        title={single_object.title}
        amount={single_object.amount}
        date={single_object.date}
      />
    ))} */}
    </Card>
  );
};

export default Expenses;
// Have a llok on the below link in order to remove the link
// https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js

// doubt:- generally we use ()=>{} pattern for arrow function but in this case we are using ()=>() What is the reason behind this??
