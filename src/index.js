import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router } from 'react-router-dom';

import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "./main.css"
//Destructuring the Provider
import { Provider } from 'react-redux'
import store  from './global/index'

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //Here we are wrapping the Router with App with the Provider
    //Here the Provider need to take a store and we will keep the store in the global folder
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
);
