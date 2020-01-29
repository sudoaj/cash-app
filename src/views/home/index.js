import React from 'react';
import Route from 'react-router-dom/Route';

import LandingPage from './landing/Loadable';
import FeedPage from './feed/Loadable';


export default () => (
    <React.Fragment>
        <Route path="/" component={LandingPage}/>
        <Route path="/home" component={FeedPage}/>
    </React.Fragment>
)

