import React, {useState} from "react";
import ItemCount from "./ItemCount";
import {Link} from 'react-router-dom';


const ItemDetail = ({item}) => {
    const [goToCart,setGoToCart] = useState(false);

    const onAdd = (quantity) => {
        setGoToCart(true);
    }

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