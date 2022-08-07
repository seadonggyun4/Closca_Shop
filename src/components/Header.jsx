import { Link } from 'react-router-dom'

export default function Header(){

    return(
        <header className="header glassmorphism">  
            {/* <!-- header-logo --> */}
            <img className="header-logo" src="https://cdn.shopify.com/s/files/1/0689/1443/files/CLOSCA-LOGO-WEB-BLACK_130x@2x.png?v=1559116993" alt="logo"/>
            {/* <!-- header-menu --> */}
            <ul className="header-menu-list sm-hidden" >
                <li className="header-menu-item"><Link to={"/"}>Home</Link></li>
                <li className="header-menu-item"><Link to={"/shop"}>Shop</Link></li>
                <li className="header-menu-item"><Link to={"/shop"}>Shop</Link></li>
                <li className="header-menu-item"><Link to={"/shop"}>Shop</Link></li> 
            </ul>
            {/* <!-- header-nav-button --> */}
            <div className="header-nav-button sm-only" >
                <div className="line line--1" aria-hidden="true"></div>
                <div className="line line--2" aria-hidden="true"></div>
                <div className="line line--3" aria-hidden="true"></div>
            </div> 
        </header>
    )
}

