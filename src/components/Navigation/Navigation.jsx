import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from "./Navigation.module.css"

const getNavLinkClassName = ({ isActive }) =>
    clsx(css.headerLink, { [css.active]: isActive })

const Navigation = () => {
    return (
        <div className={css.navigation}>
            <NavLink className={getNavLinkClassName} to='/' >Home</NavLink>
            <NavLink className={getNavLinkClassName} to='/movies'>Movies</NavLink>
        </div>
    )
}

export default Navigation