import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filtrarPostsPorNombre } from '../redux/postSlice';

export default function Filtro() {
    const [nombre, setNombre] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(filtrarPostsPorNombre(nombre));
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 10px',
                width: '83%', // Ocupa el ancho total del contenedor padre
            }}
        >
            <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Buscar por nombre..."
                style={{
                    flexGrow: 0,  // Ocupa el espacio máximo disponible
                    marginRight: '0%',  // Añade un margen a la derecha para separar el botón
                }}
            />
            <button type="submit">Buscar</button>
        </form>
    );
}
