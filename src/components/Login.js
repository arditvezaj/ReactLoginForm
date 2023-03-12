import React, { useState } from "react";
import classes from "./Login.module.css";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  const emailHandler = (event) => {
    setEnteredEmail(event.target.value);
    if (event.target.value.trim().length > 0) {
      setEmailIsValid(true);
    }
  };

  const passwordHandler = (event) => {
    setEnteredPassword(event.target.value);
    if (event.target.value.trim().length > 0) {
      setPasswordIsValid(true);
    }
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (
      (enteredEmail.trim().length === 0 || !enteredEmail.includes("@")) &&
      enteredPassword.trim().length < 8
    ) {
      setEmailIsValid(false);
      setPasswordIsValid(false);
      return;
    } else if (
      enteredEmail.trim().length === 0 ||
      !enteredEmail.includes("@")
    ) {
      setEmailIsValid(false);
      return;
    } else if (enteredPassword.trim().length < 8) {
      setPasswordIsValid(false);
      return;
    }
    props.onAddUser(enteredEmail, enteredPassword);
    localStorage.setItem(enteredEmail, enteredPassword);
  };

  return (
    <div className={classes.login}>
      <h1>Login</h1>
      <form onSubmit={submitFormHandler} className={classes.form}>
        <div className={classes.div}>
          <label>Email</label>
          <input type="email" value={enteredEmail} onChange={emailHandler} />
          {!emailIsValid && <p style={{ color: "red" }}>Email is invalid</p>}
        </div>
        <div className={classes.div}>
          <label>Password</label>
          <input
            type="password"
            value={enteredPassword}
            onChange={passwordHandler}
          />
          {!passwordIsValid && (
            <p style={{ color: "red" }}>Password is invalid</p>
          )}
        </div>
        <div onClick={() => {}}>Register Instead</div>
        <button type="submit">
          {!emailIsValid || !passwordIsValid
            ? "Don't dare to click me"
            : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Login;
