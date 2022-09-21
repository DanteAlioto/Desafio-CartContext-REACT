import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = (props) => {
    console.log(props);
    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        const producto = { ...item, cantidad };
        if (isInCart(producto.id)) {
            //busco el producto y le sumo la cantidad
            sumarCantidad(producto);
        } else {
            setCart([...cart, producto]);
        }
    };

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    const sumarCantidad = (producto) => {
        const cartUpdated = cart.map((productoEnElCarrito) => {
            if (producto.id === productoEnElCarrito.id) {
                const productUpdated = {
                    ...productoEnElCarrito,
                    cantidad: producto.cantidad,
                };
                return productUpdated;
            } else {
                return productoEnElCarrito;
            }
        });
        setCart(cartUpdated);
    };

    //crear funcion para bborrar todo el carrito
    const deleteAll = () => {
        setCart([]);
    };

    const totalUnidades = () => {
        const copia = [...cart];
        let count = 0;
        copia.forEach((producto) => {
            count = count + producto.cantidad;
        });
        return count;
    };

    console.log(cart);

    //crear funcion para bborrar un solo producto
    const deleteOne = (id) => {
        const productosFiltrados = cart.filter((prod) => prod.id !== id);
        setCart(productosFiltrados);
    };

    const nombre = 'Eric';

    const saludo = () => {
        console.log('Hola!');
    };

    //console.log(props);
    //funciones que manejen mi estado
    return (
        <CartContext.Provider
            value={{
                cart,
                nombre,
                saludo,
                addToCart,
                deleteAll,
                totalUnidades,
                deleteOne,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;