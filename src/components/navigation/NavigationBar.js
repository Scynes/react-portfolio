import { NavLink } from "react-router-dom";

import logo from '../../assets/images/logo.svg'

const NavigationBar = () => {
    return(
        <nav id="navigation-bar" className="flex align-center justify-end">
            <img src={logo} alt="" />
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
        </nav>  
    )
}

export default NavigationBar;