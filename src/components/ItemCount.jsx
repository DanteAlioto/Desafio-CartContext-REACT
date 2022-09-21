
import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const sumar = () => {
        count < stock && setCount(count + 1);
    };

    const restar = () => {
        count > initial && setCount(count - 1);
    };

    const agregar = () => {
        onAdd(count);
    };

    return (
        <div className="container-counter">
            <div className="container-btn">
                <button className="btn-counter" onClick={sumar}>
                    +
                </button>
                <p style={{ fontSize: '24px' }}>{count} </p>
                <button className="btn-counter" onClick={restar}>
                    -
                </button>
            </div>
            <button className="btn-add" onClick={agregar}>
                Agregar al carrito
            </button>
        </div>
    );
};

export default ItemCount;