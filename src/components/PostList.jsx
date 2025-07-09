import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from '../redux/postsSlice.js';

const PostList = () => {
    const dispatch = useDispatch();
    const { list, filter } = useSelector((state) => state.posts);

    const filteredList = list.filter((post) =>
        post.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <ul>
            {filteredList.map((post) => (
                <li key={post.id}>
                    <span>
                        <strong>{post.name}</strong>: {post.description}
                    </span>
                    <button onClick={() => dispatch(deletePost(post.id))}>Eliminar</button>
                </li>
            ))}
        </ul>
    );
};

export default PostList;
