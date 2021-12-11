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

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.expenses.map((single_object) => (
        <ExpenseItem
          key={single_object.id}
          title={single_object.title}
          amount={single_object.amount}
          date={single_object.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
// Have a llok on the below link in order to remove the link 
// https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js


// doubt:- generally we use ()=>{} pattern for arrow function but in this case we are using ()=>() What is the reason behind this??