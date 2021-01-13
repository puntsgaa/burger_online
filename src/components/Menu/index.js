import React, {Fragment} from "react";
import MenuItem from "../MenuItem";
import css from "./style.module.css";
import { connect } from "react-redux";
const Menu = (props) => (
    <div>
        <ul className={css.Menu}>
            {props.userid ?
            (
            <Fragment>
            <MenuItem link="/" exact >Шинэ захиалга</MenuItem>
            <MenuItem link="/orders">Миний захиалга</MenuItem>
            <MenuItem link="/logout">Гарах</MenuItem>
            </Fragment>
            )
            :
            (<Fragment>
            <MenuItem link="/login">Нэвтрэх</MenuItem>
            <MenuItem link="/signup">Бүртгүүлэх</MenuItem>
            </Fragment>)
            }
        </ul>
    </div>
);

const mapStateToProps = (state) => {
    return{
        userid: state.SignupReducer.userid
    }
}

export default connect(mapStateToProps)(Menu);