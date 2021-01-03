import React from "react";
import MenuItem from "../MenuItem";
import css from "./style.module.css";
const Menu = () => (
    <div>
        <ul className={css.Menu}>
            <MenuItem link="/" exact >Шинэ захиалга</MenuItem>
            <MenuItem link="orders">Миний захиалга</MenuItem>
        </ul>
    </div>
);

export default Menu;