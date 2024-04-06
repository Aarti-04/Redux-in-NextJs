"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../reduxtoolkit/slice";

const DisplayUsers = () => {
  const usersData = useSelector((state: any) => state.users);
  const dispatch = useDispatch();
  console.log(usersData);
  const removeHandler = (data: any) => {
    dispatch(removeUser(data));
  };
  return (
    <div>
      {usersData.map((userData: any) => {
        return (
          <div key={userData.id}>
            <h1>Id:{userData.id}</h1>
            <p>Name:{userData.name}</p>
            <button onClick={(e) => removeHandler(userData)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayUsers;
