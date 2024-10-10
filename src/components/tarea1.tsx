// Crea una lista de tareas. El usuario debe poder agregar nuevas tareas a la lista y marcar las tareas completadas. Cada tarea debe tener un identificador único.
import { useState } from 'react';

export const Tarea1 = () => {
    const [tareas, setTareas] = useState([
        { id: 1, tarea: 'Tarea 1', completada: false },
        { id: 2, tarea: 'Tarea 2', completada: false },
        { id: 3, tarea: 'Tarea 3', completada: false },
        { id: 4, tarea: 'Tarea 4', completada: false },
        { id: 5, tarea: 'Tarea 5', completada: false },
    ]);
    const [nuevaTarea, setNuevaTarea] = useState('');

    const agregarTarea = () => {
        if (nuevaTarea.trim() !== '') {
            setTareas([
                ...tareas,
                { id: tareas.length + 1, tarea: nuevaTarea, completada: false },
            ]);
            setNuevaTarea('');
        }
    };

    const marcarCompletada = (id: number) => {
        setTareas(
            tareas.map((tarea) =>
                tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
            )
        );
    };

    return (
        <>
            <div>
                <h1>Lista de tareas</h1>
                <ul>
                    {tareas.map((tarea) => (
                        <li key={tarea.id}>
                            <input
                                type='checkbox'
                                checked={tarea.completada}
                                onChange={() => marcarCompletada(tarea.id)}
                            />
                            {tarea.tarea}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <input
                    type='text'
                    value={nuevaTarea}
                    onChange={(e) => setNuevaTarea(e.target.value)}
                />
                <button onClick={agregarTarea}>Agregar tarea</button>
            </div>
        </>
    );
};
