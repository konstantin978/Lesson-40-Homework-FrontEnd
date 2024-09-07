import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUsers = createAsyncThunk('users/get', async () => {
    const res = await axios.get('http://localhost:3000/users');
    return res.data;
});

export const addUser = createAsyncThunk('users/add', async (user) => {
    const res = await axios.post('http://localhost:3000/users', user);
    return res.data;
});

export const deleteUser = createAsyncThunk('users/delete', async (id) => {
    const res = await axios.delete('http://localhost:3000/users/' + id);
    return res.data;
});

export const updateUser = createAsyncThunk('users/update', async(id, newUser) => {
    const res = await axios.put('http://localhost:3000/users/' + id, newUser);
    return res.data;
});