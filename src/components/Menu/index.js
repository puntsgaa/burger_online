import React from "react";
import MenuItem from "../MenuItem";
import css from "./style.module.css";
const Menu = () => (
   <div>
       <ul className={css.Menu}>
        <MenuItem active link={"/"}>Шинэ захиалга</MenuItem>
        <MenuItem link={"checkout"}>Нэвтрэх</MenuItem>
       </ul>
   </div>
);

export default Menu;