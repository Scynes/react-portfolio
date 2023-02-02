import { NavLink } from "react-router-dom";

import logo from '../../assets/images/logo.svg'

const NavigationBar = () => {
    return(
        <nav id={'navigation-bar'} className={'flex align-center'}>
            <img src={logo} alt="" />
            <button className={'hamburger pointer'}>
                <i class="fa-solid fa-bars"></i>
            </button>
            <div id={'nav-items'} className={'flex'}>
                <NavLink className={'nav-item fc-primary'} to={''}>
                    <h3>Home</h3>
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