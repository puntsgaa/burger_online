import React from "react";
import css from "./style.module.css";
import { NavLink } from "react-router-dom";
const MenuItem = (props) => (
    <li className={css.MenuItem}>
        <NavLink activeClassName={css.active} to={props.link} exact={props.exact}>{props.children}</NavLink>
    </li>
);

export default MenuItem;