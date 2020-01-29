import React from 'react';
import Route from 'react-router-dom/Route';

import CashHome from './cash-home-feed/Loadable';



export default () => (
    <React.Fragment>
        <Route path="/" component={CashHome}/>
    </React.Fragment>
)

