import styles from "./AddUsers.module.css";
import Card from "../UI/Card";
import { useState } from "react";
const AddUsers = () => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");

  const userNameChangeHandler = (e) => {
    setEnteredUserName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredUserAge(e.target.value);
  };

  const userInput = { userName: enteredUserName, userAge: enteredUserAge };

  const addUserHandler = (e) => {
    e.preventDefault();
    if (
      userInput.userName.trim().length === 0 ||
      userInput.userAge.trim().length === 0
    ) {
      setEnteredUserAge("");
      setEnteredUserName("");
      return;
    }
    if (userInput.userAge < 1) {
      setEnteredUserAge("");
      setEnteredUserName("");
      return;
    }
    console.log(userInput);
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
