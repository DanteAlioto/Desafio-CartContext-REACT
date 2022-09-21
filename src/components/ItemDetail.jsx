
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cartContext';
import ItemCount from '../Item/ItemCount';

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
                    
                    {
                        goToCart? <Link to= '/cart' > Terminar Compra</Link>
                        : <ItemCount stock = {5} initial = {1} onAdd = {onAdd}/>
                    }

                    
                
            </div>
        
    )
}

export default ItemDetail;