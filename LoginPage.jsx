import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage({ setIsLoggedIn }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const user = localStorage.getItem(username);
        if (!user) {
            alert('User does not exist');
        } else {
            const userData = JSON.parse(user);
            if (userData.password === password) {
                localStorage.setItem('isLoggedIn', 'true');
                setIsLoggedIn(true);
                navigate('/dashboard1');
            } else {
                alert('Incorrect password');
            }
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <br />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default LoginPage;
