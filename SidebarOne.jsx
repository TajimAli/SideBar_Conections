import React from 'react';
import { Link } from 'react-router-dom';

function SidebarOne() {
    return (
        <div className="sidebar sidebar-one">
            <h3>Sidebar One</h3>
            <ul>
                <li><Link to="/page1">Page One</Link></li>
                <li><Link to="/page2">Page Two</Link></li>
                <li><Link to="/page3">Page Three</Link></li>
                <li><Link to="/page4">Page Four</Link></li>
            </ul>
            <button className="login-btn">
                <Link to="/login">Login</Link>
            </button>
            <br />
            <button className="signup-btn">
                <Link to="/signup">Signup</Link>
            </button>
        </div>
    );
}

export default SidebarOne;
