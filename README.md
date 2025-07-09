# TCIT Frontend – Challenge Técnico

Este proyecto corresponde a la segunda etapa del proceso de selección para CTIT.  
Consiste en una aplicación React con Redux Toolkit que consume una API REST para la gestión de publicaciones (posts).

## Tecnologías utilizadas

- React
- Redux Toolkit
- React Redux
- Axios
- CSS

## Estructura del proyecto

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── PostFilter.jsx
│   │   ├── PostForm.jsx
│   │   └── PostList.jsx
│   ├── redux/
│   │   ├── postsSlice.js
│   │   └── store.js
│   ├── App.jsx
│   ├── index.css
│   └── index.js
├── package.json
├── .gitignore
└── README.md
```

## Requisitos

- Node.js >= 18.x
- Navegador moderno

## Variables de entorno (opcional)

Puedes definir el puerto de ejecución en un archivo `.env`:

```
PORT=3000
```

## Pasos para levantar el proyecto

1. Clona el repositorio

```
git clone https://github.com/alonsillo88/tcit-frontend.git
cd tcit-frontend
```

2. Instala las dependencias

```
npm install
```

3. Inicia la aplicación

```
npm start
```

La app quedará disponible en: `http://localhost:3000`

## Funcionalidades

- Crear nuevas publicaciones con nombre y descripción.
- Filtrar publicaciones por nombre en tiempo real.
- Eliminar publicaciones individualmente.
- Interfaz moderna y amigable.

## Consideraciones

Este frontend consume los datos desde el backend disponible en:  
`http://localhost:3001/posts`

Asegúrate de que el backend esté activo antes de iniciar el frontend.


## Autor

Desarrollado por Alonso González  
Julio 2025