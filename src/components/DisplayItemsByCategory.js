import React, { useState } from 'react';
import './DisplayItemsByCategory.css';

const DisplayItemsByCategory = ({ items }) => {
    const [selectedCategory, setSelectedCategory] = useState('');

    // Get unique categories from the items
    const categories = [...new Set(items.map(item => item.category))];

    // Filter items based on the selected category
    const filteredItems = selectedCategory 
        ? items.filter(item => item.category === selectedCategory) 
        : [];

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    return (
        <div className="category-container">
            <h2>Display Items by Category</h2>
            <select value={selectedCategory} onChange={handleCategoryChange}>
                <option value="">Select a category</option>
                {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>
            {filteredItems.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredItems.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>${item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            {filteredItems.length === 0 && selectedCategory && (
                <p>No items found in this category.</p>
            )}
        </div>
    );
};

export default DisplayItemsByCategory;
