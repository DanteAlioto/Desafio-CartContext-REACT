
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';

const CartWidget = () => {
    const { totalUnidades } = useContext(CartContext);
    const unidades = totalUnidades();

    return (
        <Link to="/cart">
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <span className="material-icons">shopping_cart</span>
                <span>{unidades}</span>
            </div>
        </Link>
    );
};

export default CartWidget;
