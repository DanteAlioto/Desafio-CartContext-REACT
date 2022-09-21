import React from "react";
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";


const Navbar = () => {

return(
<nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
        <CartWidget/>
        <span className="navbar-text">ReactEcommerce</span>

        <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item px-4">
                <Link className="nav-link px-4" to={"/"}>Inicio</Link>
                </li>
                <li className="nav-item px-4 ">
                    <Link className="nav-link px-4" to={"/productos"}>Productos</Link>
                </li>
            </ul>
        </div>

        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    </div>
</nav>
)
}

export default Navbar;