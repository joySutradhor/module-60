import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="navbar bg-primary text-primary-content flex gap-5">
            <Link className="btn btn-ghost normal-case text-xl">Auth Project</Link>
            <Link to= "/" >Home</Link>
            <Link to= "/login">Login</Link>
            <Link to="/register">Register </Link>
        </div>
    );
};

export default Header;