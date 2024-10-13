import React, { useState } from 'react';
import './AddItem.css';

const AddItem = ({ addItem }) => {
    const [item, setItem] = useState({
        id: '',
        name: '',
        quantity: '',
        price: '',
        category: 'Clothing' // Default category
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem({
            ...item,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (item.id && item.name && item.quantity && item.price) {
            addItem(item);
            setItem({
                id: '',
                name: '',
                quantity: '',
                price: '',
                category: 'Clothing' // Reset to default category
            });
            alert('Item added successfully!');
        } else {
            alert('Please fill in all fields.');
        }
    };

    return (
        <div className="add-item-container">
            <h2>Add Item</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="id" placeholder="ID" value={item.id} onChange={handleChange} required />
                <input type="text" name="name" placeholder="Name" value={item.name} onChange={handleChange} required />
                <input type="number" name="quantity" placeholder="Quantity" value={item.quantity} onChange={handleChange} required />
                <input type="number" name="price" placeholder="Price" value={item.price} onChange={handleChange} required />
                <select name="category" value={item.category} onChange={handleChange} required>
                    <option value="Clothing">Clothing</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Entertainment">Entertainment</option>
                </select>
                <button type="submit">Add Item</button>
            </form>
        </div>
    );
};

export default AddItem;
