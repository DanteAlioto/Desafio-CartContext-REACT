
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';

const Cart = () => {
    const { cart, deleteOne, deleteAll } = useContext(CartContext);
    return (
        <div>
            <h2>cart</h2>
            {cart.map((producto) => (
                <div key={producto.id}>
                    <h2>{producto.title}</h2>
                    <button onClick={() => deleteOne(producto.id)}>
                        Delete
                    </button>
                </div>
            ))}
            <button onClick={deleteAll}>Delete all</button>
        </div>
    );
};
export default Cart;