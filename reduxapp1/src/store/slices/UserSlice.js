import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload,1)
    },
    deleteUsers(state, action) {
      return [];
    },

  //NOTE - extrareducer is used to use the reduccer function or action in different part of the applixation which required only one time initaliaxation and can be used again anad agian
extraReducers(builder){
  builder.addCase(userSlice.action.deleteUsers,()=>{
    return [];
  })
}
  },
});

export const { addUser ,removeUser, deleteUsers} = userSlice.actions;

export default userSlice.reducer;
