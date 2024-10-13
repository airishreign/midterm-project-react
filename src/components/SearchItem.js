import React, { useState } from 'react';
import './SearchItem.css';

const SearchItem = ({ items }) => {
    const [id, setId] = useState('');
    const [message, setMessage] = useState('');
    const [foundItem, setFoundItem] = useState(null);

    const handleChange = (e) => {
        setId(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const itemToFind = items.find(item => item.id === id);
        
        if (itemToFind) {
            setFoundItem(itemToFind);
            setMessage('');
        } else {
            setFoundItem(null);
            setMessage('Item not found!');
        }

        setId(''); // Clear the input field after submission
    };

    return (
        <div className="search-item-container">
            <h2>Search Item</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Item ID"
                    value={id}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Search Item</button>
            </form>
            {message && <p className="message">{message}</p>}
            {foundItem && (
                <div className="item-details">
                    <h3>Item Details:</h3>
                    <p><strong>ID:</strong> {foundItem.id}</p>
                    <p><strong>Name:</strong> {foundItem.name}</p>
                    <p><strong>Quantity:</strong> {foundItem.quantity}</p>
                    <p><strong>Price:</strong> ${foundItem.price}</p>
                    <p><strong>Category:</strong> {foundItem.category}</p>
                </div>
            )}
        </div>
    );
};

export default SearchItem;
