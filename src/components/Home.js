import React  from "react";

const Home = (props) => {
  return (
    <>
      <h1>HOME</h1>
      <h1>WELCOME BACK!</h1>
      <button
        onClick={() => {
          props.onClick();
        }}
      >
        Logout
      </button>
    </>
  );
};

export default Home;
