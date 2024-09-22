import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SidebarTwo({ setIsLoggedIn }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn'); // Clear login status from local storage
        setIsLoggedIn(false); // Update state to indicate user is logged out
        navigate('/login'); // Redirect to login page
    };

    return (
        <div className="sidebar sidebar-two">
            <h3>Sidebar Two</h3>
            <ul>
                <li><Link to="/dashboard1">Dashboard One</Link></li>
                <li><Link to="/dashboard2">Dashboard Two</Link></li>
            </ul>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default SidebarTwo;






// import React from 'react';
// import { Link } from 'react-router-dom';

// function SidebarTwo() {
//     return (
//         <div className="sidebar sidebar-two">
//             <h3>Sidebar Two</h3>
//             <ul>
//                 <li><Link to="/dashboard1">Dashboard One</Link></li>
//                 <li><Link to="/dashboard2">Dashboard Two</Link></li>
//             </ul>
//         </div>
//     );
// }

// export default SidebarTwo;
