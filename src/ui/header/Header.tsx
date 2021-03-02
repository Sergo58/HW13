import React from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "../routes/Routes";
import s from "./Header.module.css"

function Header() {


    return (
        <div>

            <nav className={s.nav}>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink activeClassName={s.activeLink} to={PATH.LOGIN}>login</NavLink>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink activeClassName={s.activeLink} to={PATH.PASSWORD_RECOVERY}>password recovery</NavLink>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink activeClassName={s.activeLink} to={PATH.PASSWORD_NEW}>password new</NavLink>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink activeClassName={s.activeLink} to={PATH.PROFILE}>profile</NavLink>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink activeClassName={s.activeLink} to={PATH.REGISTER}>register</NavLink>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink activeClassName={s.activeLink} to={PATH.TEST}>test</NavLink>
                </div>
            </nav>

        </div>


    );
}

export default Header;
