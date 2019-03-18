import React from 'react';
import './index.css';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import RootContainer from './containers/RootContainer';
import { BrowserRouter } from 'react-router-dom';

const initialState = {};

const store = configureStore(initialState);
render(
    <BrowserRouter>
        <Provider store={store}>
            <RootContainer/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}
serviceWorker.unregister();
