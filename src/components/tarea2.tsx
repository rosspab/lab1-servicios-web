import React, { useState } from 'react';

export const Tarea2: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <button onClick={toggleVisibility}>
                {isVisible ? 'Ocultar Div' : 'Mostrar Div'}
            </button>

            {isVisible && (
                <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#000', border: '1px solid #ccc' }}>
                    ¡Este es el contenido del div que se muestra y se oculta!
                </div>
            )}
        </div>
    );
};