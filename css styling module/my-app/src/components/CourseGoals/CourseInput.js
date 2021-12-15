import "./CourseInput.css";
import { useState } from "react";
// Here we need props so that we can pass the data to the app.js where the data is d=being added to the array
const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };
  const goalInputChangeHandler = (e) => {
    setEnteredValue(e.target.value);
    setIsValid(true);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' :''}`}>
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </div>
      <button className="button" type="submit">
        Add Goal
      </button>
    </form>
  );
};

export default CourseInput;
