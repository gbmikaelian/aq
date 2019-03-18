import { createStore, applyMiddleware } from 'redux';
import RootSaga from '../sagas';
import RootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';

import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = (initialState) => {
    const sagaMiddleware = createSagaMiddleware();
    const middleware = composeWithDevTools(applyMiddleware(sagaMiddleware));

    const store = createStore(
        RootReducer,
        initialState,
        middleware
        
    );

    sagaMiddleware.run(RootSaga);

    return store;
};
export default configureStore;