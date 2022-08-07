import { Link } from 'react-router-dom'

export default function Header(){

    const activeNav = () => {
        const nav = document.querySelector('.nav');
        const lineOne = document.querySelector(' .header-nav-button .line--1');
        const lineTwo = document.querySelector(' .header-nav-button .line--2');
        const lineThree = document.querySelector(' .header-nav-button .line--3');
        const link = document.querySelector('.nav .nav-list');

        nav.classList.toggle('nav-open');
        nav.classList.toggle('glassmorphism');
        lineOne.classList.toggle('line-cross');
        lineTwo.classList.toggle('line-fade-out');
        lineThree.classList.toggle('line-cross');
        link.classList.toggle('fade-in');
    }

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
            <div className="header-nav-button sm-only" onClick={activeNav}>
                <div className="line line--1" aria-hidden="true"></div>
                <div className="line line--2" aria-hidden="true"></div>
                <div className="line line--3" aria-hidden="true"></div>
            </div> 
        </header>
    )
}

