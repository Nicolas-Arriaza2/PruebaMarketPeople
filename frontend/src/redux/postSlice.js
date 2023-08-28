import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        const response = await fetch('http://127.0.0.1:3000/posts');
        console.log("llamada a la api")
        return response.json();
    }
);

export const deletePost = createAsyncThunk(
    'posts/deletePost',
    async (id) => {
        const response = await fetch(`http://127.0.0.1:3000/posts/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Failed to delete post');
        }
        return id;  // Retorna el ID del post eliminado
    }
);

export const addPost = createAsyncThunk(
    'posts/addPost',
    async (post) => {
        const response = await fetch('http://127.0.0.1:3000/posts/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post)
        });
        if (!response.ok) {
            throw new Error('Failed to add post');
        }
        return response.json();
    }
);

const initialState = {
    posts: [],
    filteredPosts: []
};

const postsSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers: {
        filtrarPostsPorNombre: (state, action) => {
            const nombre = action.payload;
            state.filteredPosts = state.posts.filter(post => post.name.includes(nombre));
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.filteredPosts = [];  // Resetea los posts filtrados cada vez que se obtienen nuevos datos
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                // Filtra el estado para excluir el post con el ID proporcionado
                state.posts = state.posts.filter(post => post.id !== action.payload);
                state.filteredPosts = state.filteredPosts.filter(post => post.id !== action.payload);
            })
            .addCase(addPost.fulfilled, (state, action) => {
                state.posts.push(action.payload);
            });
    },
});

export const { filtrarPostsPorNombre } = postsSlice.actions;

export default postsSlice.reducer;
