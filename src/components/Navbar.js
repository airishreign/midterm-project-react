import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaEdit, FaTrash, FaList, FaSearch, FaSort, FaClipboardList, FaTag } from 'react-icons/fa'; // Import the FaTag icon for the category display
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li>
                    <Link to="/add-item"><FaPlus /> </Link>
                </li>
                <li>
                    <Link to="/update-item"><FaEdit /> </Link>
                </li>
                <li>
                    <Link to="/remove-item"><FaTrash /> </Link>
                </li>
                <li>
                    <Link to="/display-all-items"><FaList /> </Link>
                </li>
                <li>
                    <Link to="/display-items-by-category"><FaTag /> </Link> {/* Added link for Display Items by Category */}
                </li>
                <li>
                    <Link to="/display-low-stock"><FaClipboardList /> </Link>
                </li>
                <li>
                    <Link to="/sort-items"><FaSort /> </Link>
                </li>
                <li>
                    <Link to="/search-item"><FaSearch /> </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
