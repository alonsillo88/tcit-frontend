import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/postsSlice.js';

const PostForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleAdd = () => {
        if (name.trim() === '' || description.trim() === '') return;

        dispatch(addPost({ name, description }));
        setName('');
        setDescription('');
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Nombre de la publicación"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button onClick={handleAdd}>Agregar</button>
        </div>
    );
};

export default PostForm;
