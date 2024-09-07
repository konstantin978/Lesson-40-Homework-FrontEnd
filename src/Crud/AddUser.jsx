import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../api";

export const AddUser = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        city: '',
        profession: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((state) => ({
            ...state,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, age, city, profession } = formData;
        const newUser = { name, email, age: +age, city, profession }

        dispatch(addUser(newUser));

        setFormData({
            name: '',
            email: '',
            age: '',
            city: '',
            profession: ''
        });
    };

    return (
        <div>
            <h2>Add New User</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Age:</label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>City:</label>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Profession:</label>
                    <input
                        type="text"
                        name="profession"
                        value={formData.profession}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};
