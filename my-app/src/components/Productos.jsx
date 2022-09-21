import React from "react";
import ItemDetailContainer from './ItemDetailContainer';
import ItemListContainer from './ItemListContainer';

function Productos() {
return (

<div className='container'>
    <div className='row'>
        <ItemListContainer greeting="Hola" />
        <ItemDetailContainer />
    </div>
</div>
);
}

export default Productos;