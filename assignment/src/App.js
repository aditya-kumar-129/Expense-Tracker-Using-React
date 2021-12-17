import { useState } from "react";
import AddUsers from "./Components/Users/AddUsers";
import UserList from "./Components/Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([{'name': 'Aditya Kumar', 'age': 21, id: Math.random().toString()}]);
  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUserList) => {
      return [
        ...prevUserList,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <>
      <AddUsers onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </>
  );
}

export default App;
