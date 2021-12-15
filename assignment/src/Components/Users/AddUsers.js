import styles from "./AddUsers.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModel from "../UI/ErrorModel";

const AddUsers = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, setError] = useState();

  const userNameChangeHandler = (e) => {
    setEnteredUserName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredUserAge(e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age(non empty values)",
      });
      return;
    }
    if (enteredUserAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid Age (>0)",
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredUserAge);
    setEnteredUserAge("");
    setEnteredUserName("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            onChange={userNameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredUserAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">ADD USER</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUsers;
