import React from "react";

import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <ul className={classes.ul}>
      {props.users.map((user) => (
        <li key={user.id}>
          <p>{user.email}</p>
          <p>{user.password}</p>
          {localStorage.getItem(props.email, props.password)}
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
