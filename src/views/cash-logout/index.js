import React from 'react';
import Route from 'react-router-dom/Route';
import CashLogout from './cash-logout/Loadable';

export default () => (
    <React.Fragment>
        <Route path="/" component={CashLogout}/>
    </React.Fragment>
)
