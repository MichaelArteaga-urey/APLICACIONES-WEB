import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useState } from 'react'


export const CarritoContext= createContext();

export const CarritoProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {

        const productoExistente = carrito.find(item => item.titulo === producto.titulo);

        if (productoExistente) {
            const carritoActualizado = carrito.map(item =>
                item.titulo === producto.titulo
                    ? { ...item, cantidad: item.cantidad + 1 }
                    : item
            );
            setCarrito(carritoActualizado);
        } else {
            setCarrito([...carrito, { ...producto, cantidad: 1 }]);
        }};

        const eliminarDelCarrito = (titulo) => {
            const carritoActualizado = carrito.filter(item => item.titulo !== titulo);
            setCarrito(carritoActualizado);
        };

        const total = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);

    return (
        <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, total }}>
            {children}
        </CarritoContext.Provider>
    );
}
