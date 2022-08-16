import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef(); // just being used to show how you can do this instead of state this helps with rerendering onChange everytime usually useState
  const ageInputRef = useRef(); //useRef should be used for when you are only reading a value and plan on never changing it

  //   const [enteredUsername, setEnteredUsername] = useState("");
  //   const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  //   const usernameChangeHandler = (e) => {
  //     setEnteredUsername(e.target.value);
  //   };
  //   const ageChangeHandler = (e) => {
  //     setEnteredAge(e.target.value);
  //   };

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter valid name and age (non-empty values)",
      });
      return;
    }

    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age greater than 0",
      });
      return;
    }

    props.onAddUser(enteredName, enteredUserAge);

    // setEnteredAge("");
    // setEnteredUsername("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form action="" onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name=""
            id="username"
            // onChange={usernameChangeHandler}
            // value={enteredUsername}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            type="number"
            name=""
            id="age"
            // onChange={ageChangeHandler}
            // value={enteredAge}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
