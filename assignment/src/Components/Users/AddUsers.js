import styles from "./AddUsers.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useRef, useState } from "react";
import ErrorModel from "../UI/ErrorModel";

const AddUsers = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    const enteredUserAge = ageInputRef.current.value;
    const enteredUserName = nameInputRef.current.value;
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
    // At very extreme case you use Ref to manipulate the dom
    ageInputRef.current.value = "";
    nameInputRef.current.value = "";
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
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">ADD USER</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUsers;
