import { createSlice } from "@reduxjs/toolkit";
import { addUser, getAllUsers, deleteUser, updateUser } from "../api";

const UsersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.users = action.payload;
                console.log('Users fetched successfully');
            });
        builder
            .addCase(addUser.fulfilled, (state, action) => {
                state.users.push(action.payload);
            });
        builder
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.users = state.users.filter(user => user.id !== action.payload);
            });
        builder 
            .addCase(updateUser.fulfilled, (state, action) => {
                const updatedUser = action.payload;
                const index = state.users.findIndex(user => user.id === updatedUser.id);
                
                if (index !== -1) {
                    state.users[index] = updatedUser;
                };
            });
    },
});


export const UserReducer = UsersSlice.reducer;