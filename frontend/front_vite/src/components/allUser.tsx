import { useState } from 'react';


interface User {
    id: string;
    firstName: string;
    lastName: string;
    address: string;
}

const AllUser = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<string | null>(null);

    const getInfo = async () => {
        try {
            const response = await fetch('http://localhost:3000/users');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data: User[] = await response.json();
            setUsers(data);
            setError(null);
        } catch (error: any) {
            setError(error.message || 'Something went wrong');
            console.error('There has been a problem with your fetch operation:', error);
        }
    };

    return (
        <div>
            <button onClick={getInfo}>VIEW ALL USERS</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.firstName} - {user.lastName} - {user.address}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AllUser;
