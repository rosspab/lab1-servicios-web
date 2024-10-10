import React, { useState } from 'react';

export const Tarea3: React.FC = () => {
    const [items, setItems] = useState<string[]>([]);
    const [newItem, setNewItem] = useState<string>("");

    const addItem = () => {
        if (newItem.trim() !== "") {
            setItems([...items, newItem]);
            setNewItem("");
        }
    };

    const removeItem = (index: number) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Agregar nuevo elemento"
            />
            <button onClick={addItem}>Agregar</button>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item} <button onClick={() => removeItem(index)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
