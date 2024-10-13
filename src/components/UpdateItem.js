import React, { useState, useEffect } from 'react';
import './UpdateItem.css';

const UpdateItem = ({ items, updateItem }) => {
    const [id, setId] = useState('');
    const [field, setField] = useState('');
    const [newValue, setNewValue] = useState('');
    const [message, setMessage] = useState('');
    const [idNotice, setIdNotice] = useState(''); // State for early notice

    useEffect(() => {
        // Check if the item ID exists while typing
        if (id) {
            const itemToCheck = items.find(item => item.id === id);
            if (itemToCheck) {
                setIdNotice(`Item with ID ${id} exists.`);
            } else {
                setIdNotice(`Item with ID ${id} not found.`);
            }
        } else {
            setIdNotice(''); // Clear notice if the input is empty
        }
    }, [id, items]);

    const handleUpdate = (e) => {
        e.preventDefault();
        const itemToUpdate = items.find(item => item.id === id);

        if (!itemToUpdate) {
            setMessage(`Item with ID ${id} not found!`);
            return;
        }

        if (id && field && newValue) {
            updateItem(id, field, newValue);
            setMessage(`Item with ID ${id} updated successfully!`);
            setId('');
            setField('');
            setNewValue('');
            setIdNotice(''); // Clear the notice after successful update
        } else {
            setMessage('Please fill in all fields.');
        }
    };

    return (
        <div className="update-item-container">
            <h2>Update Item</h2>
            <form onSubmit={handleUpdate}>
                <input 
                    type="text" 
                    placeholder="Item ID" 
                    value={id} 
                    onChange={(e) => setId(e.target.value)} 
                    required 
                />
                {/* Display early notice about the ID */}
                {idNotice && (
                    <p className={`update-message ${idNotice.includes('not found') ? 'error' : ''}`}>
                        {idNotice}
                    </p>
                )}
                
                <select 
                    value={field} 
                    onChange={(e) => setField(e.target.value)} 
                    required
                >
                    <option value="">Select field to update</option>
                    <option value="quantity">Quantity</option>
                    <option value="price">Price</option>
                </select>
                <input 
                    type="number" 
                    placeholder="New Value" 
                    value={newValue} 
                    onChange={(e) => setNewValue(e.target.value)} 
                    required 
                />
                <button type="submit">Update Item</button>
            </form>
            {message && <p className={`update-message ${message.includes('not found') ? 'error' : ''}`}>{message}</p>}
        </div>
    );
};

export default UpdateItem;
