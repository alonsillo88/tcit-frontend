import React from 'react';
import './index.css';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import PostList from './components/PostList';

const App = () => {
  return (
    <div className="container">
      <h1>Administrador de Publicaciones</h1>

      <section className="section">
        <h2>Crear nueva publicación</h2>
        <PostForm />
      </section>

      <section className="section">
        <h2>Filtrar por nombre</h2>
        <PostFilter />
      </section>

      <section className="section">
        <h2>Lista de publicaciones</h2>
        <PostList />
      </section>
    </div>
  );
};

export default App;
