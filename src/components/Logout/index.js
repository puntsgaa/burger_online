import React, { useEffect } from 'react'
import { connect } from "react-redux";
import * as actions from "../../redux/actions/SignupActions";
import { Redirect } from "react-router-dom";
const Logout = (props) => {

    useEffect(() => {
        props.logout();
    }, []);
        return (
            <Redirect to="/login"/>
        );
}

const mapDispatchToProps = (dispatch) => {
    return{
        logout:() => dispatch(actions.Logout())
    };
};

export default connect(null, mapDispatchToProps)(Logout);