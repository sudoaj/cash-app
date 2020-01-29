import React, { Component } from 'react'
import withRouter from 'react-router-dom/withRouter'

import LoginComponent from '../../../components/Account/Login'


class LoginView extends Component {

    render() {
        return(
            <LoginComponent/>
        )
    }
}

export default withRouter(LoginView);