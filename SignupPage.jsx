import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = () => {
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        const existingUser = localStorage.getItem(username);
        if (existingUser) {
            alert('User already exists');
        } else {
            localStorage.setItem(username, JSON.stringify({ username, password }));
            alert('Signup successful!');
            navigate('/login');
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <br />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <br />
            <button onClick={handleSignup}>Signup</button>
        </div>
    );
}

export default SignupPage;
