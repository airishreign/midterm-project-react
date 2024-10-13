import React, { useState } from 'react';
import './RemoveItem.css';

const RemoveItem = ({ items, removeItem }) => {
    const [id, setId] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setId(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const itemToRemove = items.find(item => item.id === id);
        
        if (itemToRemove) {
            removeItem(id);
            setMessage(`Item ${itemToRemove.name} has been removed from the inventory.`);
        } else {
            setMessage('Item not found!');
        }

        setId(''); // Clear the input field after submission
    };

    return (
        <div className="remove-item-container">
            <h2>Remove Item</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="id"
                    placeholder="Enter Item ID"
                    value={id}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Remove Item</button>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default RemoveItem;
