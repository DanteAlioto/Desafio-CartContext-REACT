
import React from "react";
import Item from "./Item";
import { Link } from "react-router-dom";

const ItemList = ({items}) => {
    return (
        <div className="row">
            {items.map(item => (
                <div key={item.id} className="col-md-4 py-3">
                    <Item nombre={item.nombre} imagen={item.imagen} precio={item.precio} />
                    <Link to= {"/productos/" + item.id } className = "btn btn-primary">Ver info</Link>
                </div>)
            )}
        </div>
    )
}

export default ItemList;