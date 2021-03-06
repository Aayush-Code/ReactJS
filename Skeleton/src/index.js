import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import ApplicationPage from './components/ApplicationPage';
import '../styles/vaqStyles.css';

import configureStore from './store/configureStore';

const store = configureStore();

render(
    <Provider store={store}>
        <ApplicationPage/>
    </Provider>,
    document.getElementById('app')
);