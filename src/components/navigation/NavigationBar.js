import { NavLink } from "react-router-dom";

import logo from '../../assets/images/logo.svg'

const NavigationBar = () => {

    const handleHamburgerClick = () => {
        const HAMBURGER = document.getElementById('hamburger');
        const NAV_ITEMS = document.getElementById('nav-items')

        HAMBURGER.classList.toggle('active')
        NAV_ITEMS.classList.toggle('active')
    } 

    return(
        <nav id={'navigation-bar'} className={'grid align-center'}>
            <img src={logo} alt="" />
            <div id={'hamburger-container'} className="flex align-center justify-center">
                <button id={'hamburger'} className={'pointer'} onClick={() => handleHamburgerClick()}>
                    <i className={'fa-solid fa-bars'}></i>
                </button>
            </div>
            <div id={'nav-items'} className={'flex justify-center'}>
                <NavLink className={'nav-item fc-primary'} to={''}>
                    <h3>Home</h3>
                </NavLink>
                <NavLink className={'nav-item fc-primary'} to={'projects'}>
                    <h3>Projects</h3>
                </NavLink>
                <NavLink className={'nav-item fc-primary'} to={'skills'}>
                    <h3>Skills</h3>
                </NavLink>
                <NavLink className={'nav-item fc-primary'} to={'resume'}>
                    <h3>Résumé</h3>
                </NavLink>
                <NavLink className={'nav-item fc-primary'} to={'contact'}>
                    <h3>Contact</h3>
                </NavLink>
            </div>
        </nav>  
    )
}

export default NavigationBar;