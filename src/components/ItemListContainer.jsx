import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import products from "./products";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { tipo } = useParams();


    
    useEffect(() => {

        let categoria = "";
        if (tipo === "caliente") {
            categoria = "caliente";
        } else if (tipo === "frio") {
            categoria = "frio"
        }else{
            categoria = "nada"
        };


        const getProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });

        getProductos.then((respuesta) => {
            if (categoria !== "nada") {
                const array = respuesta.filter(producto => producto.categoria === categoria);
                setItems(array);
            } else if (categoria === "nada"){
                setItems(respuesta);
            }

        });


    }, [tipo]);




    return(
        <div className="container">
            <hr />
            <Link className="btn btn-primary" to={"/categoria/caliente"}>Cafes Calientes</Link>
            <Link className="btn btn-primary" to={"/categoria/frio"}>Cafes Frios</Link>
            <hr />
            <ItemList items = {items}/>

            <hr />
        </div>
    )
}

export default ItemListContainer;
