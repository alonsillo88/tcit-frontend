import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postsSlice.js';

console.log('🧪 Reducer loaded:', typeof postsReducer);

const store = configureStore({
  reducer: {
    posts: postsReducer
  }
});

export default store;
