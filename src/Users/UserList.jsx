import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAllUsers, updateUser } from "../api";

export const UserList = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteUser(id));
    };

    const handleUpdate = (id, newUser) => {
        dispatch(updateUser(id, newUser));
    };

    return <div>
        <h2>Users</h2>
        <ul>
            {
                users.map(user => <div key={user.id}>
                    <li key={user.id}>{user.name}</li>
                    <button onClick={() => handleDelete(user.id)}>Delete</button>
                </div>
            )}
        </ul>
    </div>
};

