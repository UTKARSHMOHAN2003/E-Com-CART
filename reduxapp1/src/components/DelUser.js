import React from 'react'
import { useDispatch } from "react-redux";
import {deleteUsers} from   "../store/slices/UserSlice"

function DelUser() {
const dispatch=useDispatch();
  const ClearAllUser=()=>{
dispatch(deleteUsers());
  };
  return (
    <div className='Del'>
      <button className='buttonDel' onClick={()=>ClearAllUser()}> Clear All Users</button>
    </div>
  )
}

export default DelUser
