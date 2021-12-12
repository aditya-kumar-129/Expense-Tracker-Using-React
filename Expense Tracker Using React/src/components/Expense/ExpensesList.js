import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {

  //This approach is good only when the whole JSX code depends on the condition and SHOULD NOT BE APPLIED IN CASE WHEN ONLY PART OF THE JSX CODE GET AFFECTED DUE TO CONDITIONAL STATEMENT
  if (props.filteredContent.length === 0)
    return <h2 className="expenses-list__fallback">No Expense Found</h2>;
  return (
    <ul className="expenses-list">
      {props.filteredContent.map((single_object) => (
        <ExpenseItem
          key={single_object.id}
          title={single_object.title}
          amount={single_object.amount}
          date={single_object.date}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;