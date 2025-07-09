import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/postsSlice.js';

const PostFilter = () => {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.posts.filter);

    const handleChange = (e) => {
        dispatch(setFilter(e.target.value));
    };

    return (
        <input
            type="text"
            placeholder="Buscar por nombre..."
            value={filter}
            onChange={handleChange}
        />
    );
};

export default PostFilter;
