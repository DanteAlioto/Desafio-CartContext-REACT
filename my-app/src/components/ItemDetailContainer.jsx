import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {products} from "./products";

const ItemDetailContainer = () => {
    const [item,setItem] = useState({})

    const {id} = useParams();


    useEffect(() => {
        const getProduct = () =>
        
            new Promise ((res,rej) => {
                const product = products.find((prod) => prod.id === parseInt(id));
                setTimeout(() => {
                    res(product);
                },2000);
            });

            getProduct()
            .then((info) =>{
                setItem(info)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [id])

    return(
        <div>
            <ItemDetail item ={item}/>
        </div>
    )
}

export default ItemDetailContainer;