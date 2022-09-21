import React from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {

    let icon = <img  src={process.env.PUBLIC_URL + "/logo192.png"} width="80" alt= "logo" />

    return(
        <div>
            <Link className="navbar-brand" to={"/"}>{icon}</Link>
            <hr />
        </div>
    )
}

export default CartWidget;
