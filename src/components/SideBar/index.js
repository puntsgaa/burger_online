import React from "react";
import css from "./style.module.css";
import Logo from "../Logo";
import Menu from "../Menu";
import Shadow from "../General/Shadow";
const SideBar = props =>{
    let classes = [css.Sidebar,css.Close];
    if(props.showSiderBar === true){
      classes = [css.Sidebar,css.Open];
    }   
    return(
    <div>
        <Shadow show={props.showSiderBar} clicked={props.toggleSideBar}/>
        <div className={classes.join(" ")} onClick={props.toggleSideBar}>
            <div className={css.Logo}>
              <Logo/>
            </div>
            <Menu/>
         </div>
    </div>
    );
};
export default SideBar;