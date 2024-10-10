import React, { useState } from 'react';

interface Tarea4Props {
    initialNames: string[];
}

export const Tarea4: React.FC<Tarea4Props> = ({ initialNames }) => {
    const [names, setNames] = useState<string[]>(initialNames);
    const [newName, setNewName] = useState<string>("");

    const addName = () => {
        if (newName.trim() !== "") {
            setNames([...names, newName]);
            setNewName("");
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Agregar nuevo nombre"
            />
            <button onClick={addName}>Agregar nombre</button>

            <ul>
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
};
