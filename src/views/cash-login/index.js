import React from 'react';
import Route from 'react-router-dom/Route';
import CashLogin from './cash-login-number/Loadable';

export default () => (
    <React.Fragment>
        <Route path="/" component={CashLogin}/>
    </React.Fragment>
)
