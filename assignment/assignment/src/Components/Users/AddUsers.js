import styles from "./AddUsers.module.css";
import Card from "../UI/Card";
import { useState } from "react";
const AddUsers = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");

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
      setEnteredUserAge("");
      setEnteredUserName("");
      return;
    }
    if (enteredUserAge < 1) {
      setEnteredUserAge("");
      setEnteredUserName("");
      return;
    }
    props.onAddUser(enteredUserName, enteredUserAge);
    setEnteredUserAge("");
    setEnteredUserName("");
  };

  return (
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
        <button type="submit" className={styles.button}>
          ADD USER
        </button>
      </form>
    </Card>
  );
};

export default AddUsers;
