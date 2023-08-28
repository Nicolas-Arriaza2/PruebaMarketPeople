import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/postSlice';

export default function Formulario() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const post = { name, description };
        dispatch(addPost(post));
        setName('');
        setDescription('');
    };

    return (
        <div style={{ marginTop: '20px' }}>
            <form
                onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '10px'
                }}
            >
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    style={{ width: 200 }} // Restaurando el tamaño original
                />

                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    style={{ width: 520 }} // Reduciendo aún más el tamaño
                />

                <button type="submit">Crear</button>
            </form>
        </div>
    );
}
