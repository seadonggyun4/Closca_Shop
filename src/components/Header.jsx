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

    const reload = () => {
        window.location.reload();
    }

    return(
        <header > 
            <div className="header glassmorphism">
                {/* <!-- header-logo --> */}
                <Link to={"/"}>
                    <img className="header-logo" src="https://cdn.shopify.com/s/files/1/0689/1443/files/CLOSCA-LOGO-WEB-BLACK_130x@2x.png?v=1559116993" alt="logo"/>
                </Link>
                {/* <!-- header-menu --> */}
                <ul className="header-menu-list sm-hidden" >
                    <li className="header-menu-item" ><Link to={"/"}>Home</Link></li>
                    <li className="header-menu-item" onClick={reload}><Link to={"/bottle"}>Bottle</Link></li>
                    <li className="header-menu-item" onClick={reload}><Link to={"/helmet"}>Helmet</Link></li>
                    <li className="header-menu-item" onClick={reload}><a href='https://closca.com/'>RealSite</a></li> 
                </ul>
                {/* <!-- header-nav-button --> */}
                <div className="header-nav-button sm-only" onClick={activeNav}>
                    <div className="line line--1" aria-hidden="true"></div>
                    <div className="line line--2" aria-hidden="true"></div>
                    <div className="line line--3" aria-hidden="true"></div>
                </div> 
            </div> 
        </header>
    )
}

