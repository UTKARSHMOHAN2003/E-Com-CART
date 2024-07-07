import React from "react";
import { useSelector } from "react-redux";
import { removeUser } from "../store/slices/UserSlice";
import { useDispatch } from "react-redux";
function Display() {
  const dispatch = useDispatch();
  const delSingleUser = (key) => {
    dispatch(removeUser(key));
  };
  const data = useSelector((state) => {
    return state.user;
  });
  console.log(data);
  return (
    <center>
      <div>
        {data &&
          data.map((user, key) => (
            <li style={{ listStyleType: "none" }} className="subbox" key={key}>
              {user} <button className="btn" onClick={()=>delSingleUser(key)}> delete</button>
            </li>
          ))}
      </div>
    </center>
  );
}

export default Display;
