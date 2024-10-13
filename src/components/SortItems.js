import React, { useState } from 'react';
import './SortItems.css';

const SortItems = ({ items }) => {
    const [sortCriteria, setSortCriteria] = useState('quantity');
    const [sortOrder, setSortOrder] = useState('ascending');
    const [sortedItems, setSortedItems] = useState([]);

    const handleSort = () => {
        let sortedArray = [...items];

        // Sorting based on selected criteria
        sortedArray.sort((a, b) => {
            if (sortCriteria === 'quantity') {
                return sortOrder === 'ascending' ? a.quantity - b.quantity : b.quantity - a.quantity;
            } else {
                return sortOrder === 'ascending' ? a.price - b.price : b.price - a.price;
            }
        });

        setSortedItems(sortedArray);
    };

    return (
        <div className="sort-items-container">
            <h2>Sort Items</h2>
            <div className="sort-options">
                <select value={sortCriteria} onChange={(e) => setSortCriteria(e.target.value)}>
                    <option value="quantity">Sort by Quantity</option>
                    <option value="price">Sort by Price</option>
                </select>
                <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select>
                <button onClick={handleSort}>Sort</button>
            </div>
            {sortedItems.length > 0 && (
                <table className="sorted-items-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedItems.map(item => (
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
        </div>
    );
};

export default SortItems;
