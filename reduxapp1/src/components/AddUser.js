import React from "react";
import DelUser from "./DelUser";
import { fakeUserData } from "../api";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/UserSlice";
import Display from "./Display";

function AddUser() {
  const dispatch = useDispatch();

  const addNewUser = (payload) => {
    dispatch(addUser(payload));
  };


  return (
    <>
      <div className="Add">
        <div className="list">
          <b>List of User Details</b>
        </div>
        <button className="buttonAdd" onClick={() => addNewUser(fakeUserData())}>Add new user</button>
      </div>
      <div className="display"><Display /></div>
      <div>
        <DelUser />
      </div>
    </>
  );
}

export default AddUser;
