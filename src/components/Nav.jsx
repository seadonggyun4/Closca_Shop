import { Link } from "react-router-dom";

export default function Nav(){

    const removeNav = () => {
        const nav = document.querySelector('.nav');
        const lineOne = document.querySelector(' .header-nav-button .line--1');
        const lineTwo = document.querySelector(' .header-nav-button .line--2');
        const lineThree = document.querySelector(' .header-nav-button .line--3');
        const link = document.querySelector('.nav .nav-list');

        nav.classList.remove('nav-open');
        nav.classList.remove('glassmorphism');
        lineOne.classList.remove('line-cross');
        lineTwo.classList.remove('line-fade-out');
        lineThree.classList.remove('line-cross');
        link.classList.remove('fade-in'); 
    }

    const reload = () => {
        window.location.reload();//페이지 리로드
    }

    return(
        <nav className="nav">
            <ul className="nav-list">
                <li className="nav-list-item" onClick={removeNav}><Link to={"/"}>Home</Link></li> 
                <li className="nav-list-item" onClick={{removeNav, reload}}><Link to={"/bottle"}>Bottle</Link></li> 
                <li className="nav-list-item" onClick={{removeNav, reload}}><Link to={"/helmet"}>Helmet</Link></li> 
                <li className="nav-list-item" onClick={removeNav}><a href='https://closca.com/' target="_blank" rel="noreferrer">RealSite</a></li> 
            </ul>
        </nav>
    )
}