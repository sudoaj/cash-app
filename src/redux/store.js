import ThunkMiddleware from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import rootReducer from './reducers';

const isDev = process.env.NODE_ENV === 'development';

const composeEnhancers = (isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2
}

export const store = createStore(
    persistReducer(persistConfig, rootReducer),
    composeEnhancers(applyMiddleware(ThunkMiddleware))
)

export const persistor = persistStore(store);

