// import { createSlice } from '@reduxjs/toolkit';

// const users = localStorage.getItem('current_user') !== null
//   ? JSON.parse(localStorage.getItem('current_user'))
//   : {};

// const userSlice = createSlice({
//   name: 'Users',
//   initialState: {
//     status: 'idle',
//     data: users,
//     error: null,
//   },
// reducers: {
//   addUser: (state, action) => {
//     let newState = state;
//     newState = action.payload;
//     localStorage.setItem('current_user', JSON.stringify(newState));
//   },
// },
// });

// export const { addUser } = userSlice.actions;

// const user = userSlice.reducer;
// export default user;
