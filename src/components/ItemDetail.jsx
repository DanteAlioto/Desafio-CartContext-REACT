
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
    //  const valores = useContext(CartContext) //valores es un obj {} valores.addToCart
    const [cantidad, setCantidad] = useState(0);
    const { addToCart } = useContext(CartContext);

    const onAdd = (cantidad) => {
        setCantidad(cantidad);
        addToCart(item, cantidad);
    };

    return(
        
            <div className="col-xs-12">
                <img src={item.imagen} alt={item?.nombre} />
                
                    <h2>{item?.nombre}</h2>
                    <p>{item?.descripcion}</p>
                    <h3>${item?.precio}</h3>
                    
                    {cantidad === 0 ? (
                    <ItemCount stock={10} initial={1} onAdd={onAdd} />
                ) : (
                    <Link to="/cart">Ir al carrito</Link>
                )}

                    
                
            </div>
        
    )
}

export default ItemDetail;