import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, deletePost } from './../redux/postSlice';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    header: {
        backgroundColor: 'blue', // Color de fondo azul para el encabezado
        '& .MuiTableCell-head': { // Especificar que todas las celdas del encabezado deben tener texto blanco
            color: 'white'
        }
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: 'lightblue' // Fondo celeste para las filas impares
        },
        // Las filas pares tendrán fondo blanco por defecto
    },
    container: {
        marginTop: '20px', // o el valor que desees
    }
});


export default function DenseTable() {

    console.log('DenseTable está montándose');

    const classes = useStyles();
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.filteredPosts.length > 0 ? state.posts.filteredPosts : state.posts.posts);


    useEffect(() => {
        console.log("userefect")
        dispatch(fetchPosts());
    }, [dispatch]);
    const handleDelete = (id) => {
        dispatch(deletePost(id));
    };

    return (
        <TableContainer component={Paper} className={classes.container}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow className={classes.header}>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {posts.map((post, index) => (
                        <TableRow key={post.id} className={classes.row}>
                            <TableCell>{post.name}</TableCell>
                            <TableCell>{post.description}</TableCell>
                            <TableCell>
                                <button onClick={() => handleDelete(post.id)}>Eliminar</button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>
        </TableContainer>
    );
}

