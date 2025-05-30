import { useState, type ChangeEvent } from "react";
import React from "react";


interface User {
    firstName: string;
    lastName: string;
    address: string;
}




const AddUser = () => {
    const [user, setUser] = useState<User>({
        firstName: '',
        lastName: '',
        address: ''
    });
    const API_URL = "http://localhost:3000/users";

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('User added:', data);
            setUser({ firstName: '', lastName: '', address: '' }); // Reset form
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    }

    return (
        <div>
            <h2>Add User</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="firstName"
                    value={user.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    value={user.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                />
                <input
                    type="text"
                    name="address"
                    value={user.address}
                    onChange={handleChange}
                    placeholder="Address"
                    required
                />
                <button type="submit">Add User</button>
            </form>
        </div>
    );

}

export default AddUser;