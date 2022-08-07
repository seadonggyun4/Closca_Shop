import { Link } from "react-router-dom";

export default function Nav(){


    return(
        <nav className="nav">
            <ul className="nav-list">
                <li className="nav-list-item"><Link to={"/"}>Home</Link></li> 
                <li className="nav-list-item"><Link to={"/shop"}>Shop</Link></li> 
                <li className="nav-list-item"><Link to={"/shop"}>Shop</Link></li> 
                <li className="nav-list-item"><Link to={"/shop"}>Shop</Link></li> 
            </ul>
        </nav>
    )
}