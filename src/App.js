import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddItem from './components/AddItem';
import UpdateItem from './components/UpdateItem';
import RemoveItem from './components/RemoveItem';
import DisplayAllItems from './components/DisplayAllItems';
import DisplayItemsByCategory from './components/DisplayItemsByCategory';
import DisplayLowStockItems from './components/DisplayLowStockItems';
import SearchItem from './components/SearchItem';
import SortItems from './components/SortItems';
import Navbar from './components/Navbar';

const App = () => {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        setItems([...items, item]);
    };

    const updateItem = (id, field, newValue) => {
        const updatedItems = items.map(item => 
            item.id === id ? { ...item, [field]: newValue } : item
        );
        setItems(updatedItems);
    };

    const removeItem = (id) => {
        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems);
    };

    return (
        <Router>
            <div>
                <Navbar /> {/* Navbar is now at the top and always visible */}
                <Routes>
                    <Route path="/add-item" element={<AddItem addItem={addItem} />} />
                    <Route path="/update-item" element={<UpdateItem updateItem={updateItem} items={items} />} />
                    <Route path="/remove-item" element={<RemoveItem removeItem={removeItem} items={items} />} />
                    <Route path="/display-all-items" element={<DisplayAllItems items={items} />} />
                    <Route path="/display-items-by-category" element={<DisplayItemsByCategory items={items} />} />
                    <Route path="/display-low-stock" element={<DisplayLowStockItems items={items} />} />
                    <Route path="/search-item" element={<SearchItem items={items} />} />
                    <Route path="/sort-items" element={<SortItems items={items} />} />
                    <Route path="/" element={<DisplayAllItems items={items} />} /> {/* Default Route */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
