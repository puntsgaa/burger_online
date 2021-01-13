import React, { Component } from 'react'
import { connect } from "react-redux";
import * as actions from "../../redux/actions/SignupActions";
import { Redirect } from "react-router-dom";
class Logout extends Component {

    componentDidMount = () => {
        this.props.logout();
    }

    render() {
        return (
            <Redirect to="/login"/>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        logout:() => dispatch(actions.Logout())
    };
};

export default connect(null, mapDispatchToProps)(Logout);