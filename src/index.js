import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';
import { PersistGate } from 'redux-persist/lib/integration/react';
import normalize from 'normalize.css/normalize.css';

import Loader from './components/Core/Loader';
import {store, persistor} from './redux/store';
import routes from './config/routes';

import globalStyle from './static/globalStyle'

// import registerServiceWorker from './registerServiceWorker';
injectGlobal([globalStyle + normalize])

render(
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={<Loader/>}>
            {routes(store)}
        </PersistGate>
    </Provider>,
    document.getElementById('root')
)

// registerServiceWorker();
