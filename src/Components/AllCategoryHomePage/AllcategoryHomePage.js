import React, { useEffect, useState } from "react";
import { items } from "./Items";
import "./AllcategoryHomePage.css";

export default function MultiFilters() {
    const [selectedFilter, setSelectedFilter] = useState(null);
    const [filteredItems, setFilteredItems] = useState(items);

    const filters = ["Literature", "Scripture", "Philosophy", "Scientific"];

    const handleFilterButtonClick = (selectedCategory) => {
        setSelectedFilter(selectedCategory);
    };

    useEffect(() => {
        filterItems();
    }, [selectedFilter]);

    const filterItems = () => {
        if (selectedFilter) {
            const filtered = items.filter((item) => item.category === selectedFilter);
            setFilteredItems(filtered);
        } else {
            setFilteredItems(items);
        }
    };

    return (
        <div>
            <div className="buttons-container">
                {filters.map((category, idx) => (
                    <button
                        onClick={() => handleFilterButtonClick(category)}
                        className={`button ${selectedFilter === category ? "active" : ""}`}
                        key={`filter-${category}-${idx}`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="items-container">
                {filteredItems.map((item, idx) => (
                    <div key={`item-${idx}`} className="item">
                        <p>{item.name}</p>
                        <p className="category">{item.category}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
