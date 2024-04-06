"use client";
import React, { useState } from "react";
// import { addUser } from "../reduxtoolkit/slice";
import { useDispatch } from "react-redux";
import { addUser } from "../reduxPersist/slice";
const AddUsers = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const submitHandler = () => {
    console.log(name);

    dispatch(addUser(name));
  };
  return (
    <>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Username"
      ></input>
      <input onClick={submitHandler} type="submit" />
    </>
  );
};

export default AddUsers;
